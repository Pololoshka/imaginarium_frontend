import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PetsIcon from "@mui/icons-material/Pets";

const PlayersStatus = (props) => {
  const { room, loading, pawn } = props;
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Grid container spacing={1} direction="column" alignItems="center">
          {room.pawns.map((curPawn) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 180,
                  backgroundColor: curPawn.color,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {curPawn.is_lead && (
                      <PetsIcon sx={{ pr: 2, color: "#44ff00" }} />
                    )}
                    {!curPawn.is_lead && <PetsIcon sx={{ pr: 2 }} />}
                    {curPawn === pawn && (
                      <Typography variant="h6" noWrap sx={{ pr: 1 }}>
                        {curPawn.player?.name}
                      </Typography>
                    )}
                    {curPawn !== pawn && (
                      <Typography variant="body1" noWrap sx={{ pr: 1 }}>
                        {curPawn.player?.name}
                      </Typography>
                    )}

                    <Typography variant="h6">{curPawn.score}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PlayersStatus;
