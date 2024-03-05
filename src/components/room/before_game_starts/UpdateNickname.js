import React, { useState } from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UpdateNickname = (props) => {
  const { playerName, setPlayerName, socket } = props;
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState(
    "Nickname must be no more than 18 characters"
  );
  const submission = async () => {
    socket.send(
      JSON.stringify({
        message: { player_name: playerName },
        type: "update_player_name",
      })
    );
  };

  function onChange(event) {
    console.log(event);
    const name = event.target.value;
    setPlayerName(name);
    setIsValid(name.length < 18);
    if (!isValid) {
      setErrorMsg("Nickname is too long");
    } else {
      setErrorMsg("Nickname must be no more than 18 characters");
    }
  }

  return (
    <React.Fragment>
      <Card
        variant="outlined"
        sx={{
          minWidth: "60%",
          backgroundColor: "#ffffff2f",
          boxShadow: 5,
          mx: 10,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" sx={{ m: 2 }}>
              Enter your nickname:
            </Typography>
            <TextField
              id="input-with-sx"
              label="Nickname"
              variant="filled"
              color="secondary"
              sx={{ mx: 3 }}
              onChange={onChange}
              value={playerName}
              error={!isValid}
              helperText={errorMsg}
            />

            <Button
              sx={{
                m: 2,
                px: 3,
                typography: "h6",
              }}
              variant="contained"
              color="secondary"
              onClick={submission}
              disabled={!isValid}
            >
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default UpdateNickname;
