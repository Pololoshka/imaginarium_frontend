import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Home.css";
import AxiosInstance from "../Axios";
import { useNavigate } from "react-router-dom";

const JoinTheGame = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("The room code must be 6 digits");

  const submission = async () => {
    try {
      const response = await AxiosInstance.get(`api/rooms/${roomCode}/`);
      console.log(response);
      navigate(`rooms/${roomCode}`);
    } catch (error) {
      console.log(error.response);
      setIsValid(false);
      setErrorMsg("Room not found");
      setRoomCode("");
    }
  };

  function onChange(event) {
    const code = event.target.value;
    setRoomCode(code);
    setIsValid(!!code.match(/^\d{6}$/));
    if (!isValid) {
      setErrorMsg("Room code is 6 digit");
    }
  }

  return (
    <React.Fragment>
      <form>
        <Card
          variant="outlined"
          sx={{
            mx: "auto",
            my: 20,
            maxWidth: "40%",
            boxShadow: 10,
            bgcolor: "#f1f9a5",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ m: 2, pb: 3, color: "#ae0000" }}
              align="center"
            >
              Join the game
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="body1" sx={{ m: 2 }}>
                Enter room code:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Code room"
                variant="outlined"
                onChange={onChange}
                value={roomCode}
                error={!isValid}
                helperText={errorMsg}
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button
              sx={{
                m: 2,
                typography: "body1",
                bgcolor: "#ae0000",
              }}
              variant="contained"
              disabled={!isValid}
              onClick={submission}
            >
              Join
            </Button>
          </CardActions>
        </Card>
      </form>
    </React.Fragment>
  );
};

export default JoinTheGame;
