import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

function Lead1Step(props) {
  const { socket, room, listImages, loading } = props;
  const [errorMsgAssociation, setErrorMsgAssociation] = useState(
    "Field cannot be empty"
  );
  const [association, setAssociation] = useState("");
  const [card, setCard] = useState("");
  const [isValidAssociation, setIsValidAssociation] = useState(false);
  const [isValidCard, setIsValidCard] = useState(false);

  function onChangeAssociation(event) {
    const text = event.target.value;
    setAssociation(text);

    setIsValidAssociation(text.length > 0);
    if (!(text.length > 0)) {
      setErrorMsgAssociation("Field cannot be empty");
    } else {
      setErrorMsgAssociation("");
    }
  }

  function onChangeCard(event) {
    console.log(event);
    const text = event.target.value;
    setCard(text);
    setIsValidCard(!!text);
  }

  const submission = async () => {
    socket.send(
      JSON.stringify({
        message: {
          association: association,
          card: card,
          room_code: room.code,
        },
        type: "come_up_with_an_association_by_lead",
      })
    );
  };
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Grid
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            spacing={2}
          >
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" align="center" sx={{ m: 2 }}>
                Select a picture and attach an association to it
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="association"
                label="Association"
                variant="outlined"
                onChange={onChangeAssociation}
                value={association}
                error={!isValidAssociation}
                helperText={errorMsgAssociation}
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="card">Picture number</InputLabel>

                <Select
                  labelId="card"
                  id="card"
                  label="Picture number"
                  onChange={onChangeCard}
                  value={card}
                >
                  {listImages().map((option) => (
                    <MenuItem value={option.card}>{option.id}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  px: 3,
                  typography: "h6",
                }}
                variant="contained"
                color="secondary"
                onClick={submission}
                disabled={!(isValidAssociation && isValidCard)}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </React.Fragment>
  );
}

export default Lead1Step;
