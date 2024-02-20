import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";
import { Grow, Typography, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import PetsIcon from "@mui/icons-material/Pets";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ImageCard from "./Card";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Room.css";

const baseHost = "127.0.0.1:8000";

export const Room = (props) => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const roomParam = useParams();
  const roomCode = roomParam.code;
  const [user, setUser] = useState();
  let socket

  const GetRoom = async () => {
    try {
      const response = await AxiosInstance.get(`api/rooms/${roomCode}/`);
      console.log(response);
    } catch (error) {
      console.log(error.response);
      navigate(`/`);
    }
  };

  const GetUser = async () => {
    try {
      const response = await AxiosInstance.get(`api/users/me/`);
      console.log(response.data);
      setUser(response.data);
      setPlayerName(response.data.player.name)
    } catch (error) {
      console.log(error);
      navigate(`/`);
    }
  };

  useEffect(() => {
    GetRoom();
    GetUser();
    socket = new WebSocket(`ws://${baseHost}/ws/rooms/${roomCode}`)
  }, []);

  const submission = async () => {

    socket.send(JSON.stringify({
      "message": playerName,
      "type": "update",
  }))
  socket.onmessage = async (event) => {
    playerName(event.data);
  };
  };

  function onChange(event) {
    const name = event.target.value
    setPlayerName(name)
  }

  return (
    <div className="Room">
      <Box>
        <Box sx={{ mb: 10, px: 4, mt: 20, }}>
          <Typography
            variant="h2"
            noWrap
            align="center"
            // sx={{ color: "#210dd4"}}
          >
            Room {roomCode}
          </Typography>
        </Box>
        <Box sx={{ mb: 20, px: 40}}>
        <Card
          variant="outlined"
          sx={{
            minWidth: "60%",
            backgroundColor: "#ffffff2f",
            boxShadow: 10,
            // mx: "auto",
            //   my: 15,
            // zIndex: "modal",
            p: 2,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" sx={{ m: 2 }} >
                Enter your nickname:
              </Typography>
              <TextField
                id="input-with-sx"
                label="Nickname"
                variant="standard"
                color="secondary"
                sx={{mx:3}}
                onChange={onChange}
                value={playerName}
              />

              <Button
                sx={{
                  m: 2,
                  px:3,
                  typography: "h6",
                }}
                variant="contained"
                color="secondary"
                onClick={submission}

              >
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ mb: 2}}>
        <Typography
          variant="h3"
          noWrap
          align="center"
          //   sx={{ color: "#f0dc06"}}
        >
          Choose a pawn color for your player
        </Typography>
      </Box>
      <Box><Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
          <Card
            variant="outlined"
            sx={{
              minWidth: "60%",
              backgroundColor: "#ffffff2f",
              boxShadow: 10,
              mx: "auto",

              //   my: 15,
              zIndex: "modal",
            }}
          >
            <CardActionArea>
              <CardContent>
                <PetsIcon sx={{ color: pink[500], fontSize: 60, align:"center" }} />
              </CardContent>

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card
            variant="outlined"
            sx={{
              minWidth: "60%",
              backgroundColor: "#ffffff2f",
              boxShadow: 10,
              mx: "auto",
              //   my: 15,
              zIndex: "modal",
            }}
          >
            <CardActionArea>
              <CardContent>
                <PetsIcon sx={{ color: pink[500], fontSize: 60, align:"center" }} />
              </CardContent>

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card
            variant="outlined"
            sx={{
              minWidth: "60%",
              backgroundColor: "#ffffff2f",
              boxShadow: 10,
              mx: "auto",
              //   my: 15,
              zIndex: "modal",
            }}
          >
            <CardActionArea>
              <CardContent>
                <PetsIcon sx={{ color: pink[500], fontSize: 60, align:"center" }} />
              </CardContent>

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card
            variant="outlined"
            sx={{
              minWidth: "60%",
              backgroundColor: "#ffffff2f",
              boxShadow: 10,
              mx: "auto",
              //   my: 15,
              zIndex: "modal",
            }}
          >
            <CardActionArea>
              <CardContent>
                <PetsIcon sx={{ color: pink[500], fontSize: 60, align:"center" }} />
              </CardContent>

            </CardActionArea>
          </Card>
        </Grid>
      </Grid></Box>
      <Box sx={{ justifyContent: "end" }}>
Hello
      </Box>
      </Box>
    </div>
  );
};
