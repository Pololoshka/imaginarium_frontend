import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function NoLead2Step(props) {
  const { socket, room, listImages, isVoted, loading, association } = props;
  const [card, setCard] = useState("");
  const [isValidCard, setIsValidCard] = useState(false);
  const lead_association = association();

  function onChangeCard(event) {
    const text = event.target.value;
    setCard(text);
    setIsValidCard(!!text);
  }

  const submission = async () => {
    socket.send(
      JSON.stringify({
        message: {
          association: lead_association,
          card: card,
          room_code: room.code,
        },
        type: "come_up_with_an_association",
      })
    );
  };
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box>
          {!isVoted() && (
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
                <Typography variant="h4">"{lead_association}"</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >

                  <FormControl sx={{ minWidth: 200, m: 2 }}>
                    <InputLabel id="demo-simple-select-label">
                      Picture number
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
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
                    m: 2,
                    px: 3,
                    typography: "h6",
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={submission}
                  disabled={!isValidCard}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          )}
          {isVoted() && (
            <Typography variant="h4" align="center">
              Wait until everyone votes for "{lead_association}"
            </Typography>
          )}
        </Box>
      )}
    </React.Fragment>
  );
}

export default NoLead2Step;
