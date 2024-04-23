import React from "react";
import Box from "@mui/material/Box";
import LeaveRoom from "../LeaveRoom";
import Grid from "@mui/material/Grid";
import InputInterface from "./Input/InputInterface";
import PlayersStatus from "./PlayersStatus";
import PlayingField from "./PlayingField";
import PlayerCardField from "./PlayerCardField";
import Paper from "@mui/material/Paper";

const AfterGameStarts = (props) => {
  const { room, roomCode, socket, loading, pawn } = props;

  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box sx={{ mx: 5 }}>
          <Paper elevation={24} sx={{ py: 2, bgcolor: "#e7975e37" }}>
            <Box sx={{ mb: 4 }}>
              <InputInterface
                pawn={pawn}
                socket={socket}
                room={room}
                loading={loading}
              />
            </Box>

            <Grid
              container
              direction="row"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              spacing={3}
            >
              <Grid container item xs={3} spacing={3}>
                <PlayersStatus room={room} loading={loading} pawn={pawn} />
              </Grid>

              <Grid container item xs={9} spacing={3}>
                <PlayingField room={room} />
              </Grid>
            </Grid>
          </Paper>
          <Grid
            container
            direction="row"
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <PlayerCardField room={room} pawn={pawn} loading={loading} />
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <LeaveRoom roomCode={roomCode} socket={socket} />
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default AfterGameStarts;
