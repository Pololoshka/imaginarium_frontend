import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NoLead3Step(props) {
  const { room, socket, isVoted, association, pawn } = props;
  const [errorMsgCard, setErrorMsgCard] = useState("Field cannot be empty");
  const [card, setCard] = useState("");
  const [isValidCard, setIsValidCard] = useState(false);
  const lead_association = association();

  const listImages = () => {
    var new_list = [];
    var count = 0;
    console.log(room);
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
    console.log(new_list);
    return new_list;
  };
  const listCards = listImages();

  function onChangeCard(event) {
    console.log(event);
    const text = event.target.value;
    setCard(text);
    setIsValidCard(!!text);
    if (!isValidCard) {
      setErrorMsgCard("Field cannot be empty");
    } else {
      setErrorMsgCard("You can't vote for your card");
    }
  }

  const submission = async () => {
    let isValid = true;
    if (pawn.room_cards) {
      console.log(pawn.room_cards, card);
      pawn.room_cards.map((room_card) => {
        if (room_card.id === card) {
          console.log("hello");
          setIsValidCard(false);
          setErrorMsgCard("You can't vote for your card");
          isValid = false;
        }
      });
    }

    if (isValid) {
      socket.send(
        JSON.stringify({
          message: {
            card_id: card,
            association: lead_association,
            room_code: room.code,
          },
          type: "vote_for_selected_card",
        })
      );
    }
  };

  return (
    <React.Fragment>
      {!isVoted() && (
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
              <Typography variant="h6" sx={{ m: 2 }}>
                What do you think the leader meant by "{lead_association}"?
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
                  error={!isValidCard}
                >
                  {listCards.map((image) => (
                    <MenuItem value={image.card_id}>{image.id}</MenuItem>
                  ))}
                </Select>
                <FormHelperText> {errorMsgCard} </FormHelperText>
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
        </Box>
      )}
      {isVoted() && (
        <Typography variant="h4" align="center" sx={{ m: 2 }}>
          "{lead_association}"
        </Typography>
      )}
    </React.Fragment>
  );
}
