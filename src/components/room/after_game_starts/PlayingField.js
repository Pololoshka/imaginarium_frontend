import React, { useState } from "react";
import { CardHeader, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Backdrop from "@mui/material/Backdrop";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PlayingField = (props) => {
  const { room } = props;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [card, setCard] = useState();

  const cardsPlayers = () => {
    console.log(room);
    var new_list = [];
    var count = 0;
    if (room.pawns) {
      room.pawns.map((pawn) => {
        pawn.room_cards.map((room_card) => {
          if (room_card.is_active) {
            new_list.push({ card: room_card.card, card_id: room_card.id });
          }
        });
      });

      new_list
        .sort((a, b) => a.card - b.card)
        .map((data) => {
          count += 1;
          data["id"] = count;
        });
    }
    return new_list;
  };

  const resultPrevStep = () => {
    var prevStep = [];
    var count = 0;
    console.log(room);
    if (room.pawns) {
      room.pawns.map((pawn) => {
        pawn.room_cards.map((room_card) => {
          if (room_card.association) {
            prevStep.push({
              card: room_card.card,
              pawn: pawn.player?.name,
              card_id: room_card.id,
              votes: [],
            });
          }
        });
      });
      prevStep.sort((a, b) => a.card - b.card);
      prevStep.map((data) => {
        count += 1;
        data["id"] = count;
      });
      prevStep.map((data) => {
        room.pawns.map((pawn) => {
          if (pawn.vote === data.card_id) {
            data["votes"].push(pawn.player.name);
          }
        });
      });
    }
    return prevStep;
  };

  function submission(data) {
    setId(data.id);
    setCard(data.card);
    setOpen(true);
  }
  return (
    <React.Fragment>
      {room.step === 1 && (
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="start"
          justifyContent="center"
        >
          {resultPrevStep().map((data) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 180,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardActionArea onClick={() => submission(data)}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      align="center"
                    >
                      {data.pawn}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={require(`../../../img/cards/${data.card}.jpg`)}
                  />
                </CardActionArea>
                <CardContent>
                  {data.votes.map((vote) => (
                    <Typography variant="body2" color="text.secondary">
                      {vote}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {room.step === 2 && (
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="start"
          justifyContent="center"
        >
          {cardsPlayers().map((data) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 150,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardActionArea onClick={() => submission(data)}>
                  <CardMedia
                    component="img"
                    image={require(`../../../img/imaginarium1.jpg`)}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {room.step === 3 && (
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="start"
          justifyContent="center"
        >
          {cardsPlayers().map((data) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 150,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardActionArea onClick={() => submission(data)}>
                  <CardHeader title={data.id} />
                  <CardMedia
                    component="img"
                    image={require(`../../../img/cards/${data.card}.jpg`)}
                  />
                </CardActionArea>
                {open && (
                  <Backdrop
                    sx={{
                      bgcolor: "#00000021",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    onClick={() => setOpen(false)}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        width: 250,
                        height: 400,
                      }}
                    >
                      <CardHeader title={id} />
                      <CardMedia
                        component="img"
                        image={require(`../../../img/cards/${card}.jpg`)}
                      />
                    </Card>
                  </Backdrop>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PlayingField;
