import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LeaveRoom from "../LeaveRoom";
import Grid from "@mui/material/Grid";
import InputInterface from "./InputInterface";
import PlayersStatus from "./PlayersStatus";
import PlayingField from "./PlayingField";
import PlayerCardField from "./PlayerCardField";

const AfterGameStarts = (props) => {
  const { room, roomCode, socket, loading, pawn, listImages } = props;
  const [stage, setStage] = useState(1); // 1, 2, 3 or 4

  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box sx={{ mx: 5 }}>
          <InputInterface
            pawn={pawn}
            stage={stage}
            socket={socket}
            setStage={setStage}
          />
          <Grid
            container
            direction="row"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid container item xs={3} spacing={3}>
              <PlayersStatus room={room} loading={loading} />
            </Grid>

            <Grid container item xs={9} spacing={3}>
              <PlayingField stage={stage} />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <PlayerCardField
              room={room}
              pawn={pawn}
              loading={loading}
              listImages={listImages}
            />
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
