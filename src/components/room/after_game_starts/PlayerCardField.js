import React, { useState } from "react";
import { CardHeader, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Backdrop from "@mui/material/Backdrop";

const PlayerCardField = (props) => {
  const { pawn, loading } = props;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [card, setCard] = useState();

  const listImages = () => {
    var new_list = [];
    var count = 0;
    console.log(pawn);
    if (pawn.room_cards) {
      for (let i = 0; i < pawn.room_cards.length; i++) {
        if (!pawn.room_cards[i].is_active && !pawn.room_cards[i].association) {
          count += 1;
          new_list.push({ id: count, card: pawn.room_cards[i].card });
        }
      }
    }
    return new_list;
  };

  function submission(data) {
    setId(data.id);
    setCard(data.card);
    setOpen(true);
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {listImages().map((data) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 150,
                  boxShadow: 10,
                  zIndex: "modal",
                  mt: 5,
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

export default PlayerCardField;
