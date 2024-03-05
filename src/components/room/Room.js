import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./Room.css";
import BeforeGameStarts from "./before_game_starts/BeforeGameStarts";
import AfterGameStarts from "./after_game_starts/AfterGameStarts";

const baseHost = "127.0.0.1:8000";

export const Room = () => {
  const navigate = useNavigate();
  const roomCode = useParams().code;
  const [playerName, setPlayerName] = useState("");
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});
  const [socket, setSocket] = useState(null);
  const [query, setQuery] = useState("redux");
  const [loading, setLoading] = useState(true);
  const [startGame, setStartGame] = useState(true);
  const [pawn, setPawn] = useState({});

  function connect() {
    console.log(socket);
    if (socket) {
      console.log("WS already connected");
    }

    console.log("WS Connecting");
    var socket = new WebSocket(
      `ws://${baseHost}/ws/rooms/${roomCode}/?authorization=${localStorage.getItem(
        "imaginariumUserToken"
      )}`
    );
    console.log("WS Connected");

    socket.onmessage = async function (event) {
      console.log("WS Recieved message:", JSON.parse(event.data));
      const data = JSON.parse(event.data);
      if (data.type === "GameError") {
        return;
      }
      setRoom(JSON.parse(event.data).room);
    };

    socket.onclose = async function (event) {
      console.log(
        "Socket is closed. Reconnected will be atempted in 1 second",
        event.reason
      );
      setSocket(null);
      socket.send(
        JSON.stringify({
          message: {
            room_code: roomCode,
          },
          type: "leave_room",
        })
      );
      setStartGame(false);
      navigate(`/`);
    };

    socket.onerror = async function (error) {
      console.error(
        "Socket encounterred error:",
        error.message,
        ". Closing socket"
      );
      setSocket(null);
      navigate(`/`);
    };
    return socket;
  }

  async function GetRoom() {
    try {
      const response = await AxiosInstance.get(`api/rooms/${roomCode}/`);
      setRoom(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      navigate(`/`);
    }
  }

  async function GetUser() {
    try {
      const response = await AxiosInstance.get(`api/users/me/`);
      console.log(response.data);
      setUser(response.data);
      setPlayerName(response.data.player.name);
      const room = response.data.player?.pawn?.room;
      if (room && room !== roomCode) {
        navigate(`/rooms/${room}`);
        setQuery("");
      }
    } catch (error) {
      console.log(error);
      navigate(`/`);
    }
  }

  useEffect(() => {
    GetUser();
    GetRoom();
    console.log("INITIAL USEEFFECT");
    setSocket(connect());
  }, [query]);

  useEffect(() => {
    if (!loading) {
      var count = 0;
      room.pawns.map((pawn) => {
        if (pawn.player != null) {
          ++count;
        }
      });

      if (count !== room.pawns.length) {
        setStartGame(false);
      } else {
        room.pawns.map((pawn) => {
          if (pawn.player.user === user.id) {
            setPawn(pawn);
          }
        });
        setStartGame(true);
      }
    }
  }, [room]);

  return (
    <div className="Room">
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box>
          <Box sx={{ mb: 5, px: 4, mt: 10 }}>
            <Typography variant="h2" noWrap align="center">
              Room {roomCode}
            </Typography>
          </Box>
          {!startGame && (
            <BeforeGameStarts
              playerName={playerName}
              setPlayerName={setPlayerName}
              socket={socket}
              roomCode={roomCode}
              user={user}
              room={room}
              loading={loading}
            />
          )}
          {startGame && (
            <AfterGameStarts
              room={room}
              roomCode={roomCode}
              socket={socket}
              loading={loading}
              user={user}
              pawn={pawn}
            />
          )}
        </Box>
      )}
    </div>
  );
};
