import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import UpdateNickname from "./UpdateNickname";
import ChoosePawn from "./ChoosePawn";
import LeaveRoom from "../LeaveRoom";

const BeforeGameStarts = (props) => {
  const { playerName, setPlayerName, socket, roomCode, user, room, loading } =
    props;
  return (
    <React.Fragment>
      <Box sx={{ mx: 20 }}>
        <Box sx={{ mb: 10, px: 2 }}>
          <UpdateNickname
            playerName={playerName}
            setPlayerName={setPlayerName}
            socket={socket}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" noWrap align="center">
            Choose a pawn color for your player
          </Typography>
        </Box>
        <Box>
          <ChoosePawn
            roomCode={roomCode}
            user={user}
            socket={socket}
            room={room}
            loading={loading}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <LeaveRoom roomCode={roomCode} socket={socket} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BeforeGameStarts;
