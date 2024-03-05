import React, { useState } from "react";
import { CardHeader, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Backdrop from "@mui/material/Backdrop";

const PlayingField = (props) => {
  const { stage } = props;
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <React.Fragment>
      {stage === 1 && (
        <Grid
          item
          xs={9}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Grid>
      )}
      {stage === 2 && (
        <Grid
          item
          xs={9}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Card
            variant="outlined"
            sx={{
              width: 350,
              boxShadow: 10,
              zIndex: "modal",
            }}
          >
            <CardMedia
              component="img"
              image="https://imaginarium-game.ru/local/templates/imaginarium-game/images/imaginarium.jpg"
            />
          </Card>
        </Grid>
      )}
      {stage === 3 && (
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="start"
          justifyContent="center"
        >
          {[
            { id: 1, isVisible: open1, isVisibleFunc: setOpen1 },
            { id: 2, isVisible: open2, isVisibleFunc: setOpen2 },
            { id: 3, isVisible: open3, isVisibleFunc: setOpen3 },
            { id: 4, isVisible: open4, isVisibleFunc: setOpen4 },
          ].map((data) => (
            <Grid item>
              <Card
                variant="outlined"
                sx={{
                  width: 180,
                  boxShadow: 10,
                  zIndex: "modal",
                }}
              >
                <CardActionArea onClick={() => data.isVisibleFunc(true)}>
                  <CardHeader title={data.id} />
                  <CardMedia
                    component="img"
                    image="https://imaginarium-game.ru/local/templates/imaginarium-game/images/imaginarium.jpg"
                  />
                </CardActionArea>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={data.isVisible}
                  onClick={() => data.isVisibleFunc(false)}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      width: 500,
                      boxShadow: 10,
                      zIndex: "modal",
                    }}
                  >
                    <CardHeader title={data.id} />
                    <CardMedia
                      component="img"
                      image="https://imaginarium-game.ru/local/templates/imaginarium-game/images/imaginarium.jpg"
                    />
                  </Card>
                </Backdrop>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PlayingField;
