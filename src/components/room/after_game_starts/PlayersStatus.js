import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PetsIcon from "@mui/icons-material/Pets";

const PlayersStatus = (props) => {
  const { room, loading } = props;
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Grid container spacing={1} direction="column" alignItems="center">
          {room.pawns.map((pawn) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 180,
                  backgroundColor: pawn.color,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <PetsIcon sx={{ pr: 2 }} />
                    <Typography
                      variant="body1"
                      align="center"
                      noWrap
                      sx={{ pr: 2 }}
                    >
                      {pawn.player?.name}
                    </Typography>
                    <Typography variant="body1" align="center">
                      {pawn.score}
                    </Typography>
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
