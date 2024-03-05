import React from "react";
import { Typography, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PetsIcon from "@mui/icons-material/Pets";
import Box from "@mui/material/Box";

const ChoosePawn = (props) => {
  const { roomCode, user, socket, room, loading } = props;
  async function submission(pawn) {
    var pawn_id = pawn.id;
    if (pawn.player?.user === user.id) {
      pawn_id = null;
    }
    socket.send(
      JSON.stringify({
        message: {
          pawn_id: pawn_id,
          room_code: roomCode,
        },
        type: "choose_pawn",
      })
    );
  }
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Grid container rowSpacing={2} columnSpacing={2}>
          {room.pawns.map((pawn) => (
            <Grid item xs={3}>
              <Card
                variant="outlined"
                sx={{
                  minWidth: "60%",
                  backgroundColor: pawn.color,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardActionArea onClick={() => submission(pawn)}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <PetsIcon
                        sx={{
                          fontSize: 40,
                          pr: 2,
                        }}
                      />
                      <Typography
                        variant="h5"
                        align="center"
                        noWrap
                        sx={{ p: 1 }}
                      >
                        {pawn.player?.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default ChoosePawn;
