import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";

const InputInterface = (props) => {
  const { pawn, stage, socket, setStage } = props;
  const [association, setAssociation] = useState("");
  const [card, setCard] = useState("");
  const [isValidAssociation, setIsValidAssociation] = useState(false);
  const [errorMsgAssociation, setErrorMsgAssociation] = useState(
    "Field cannot be empty"
  );
  const [isValidCard, setIsValidCard] = useState(false);
  const [errorMsgCard, setErrorMsgCard] = useState("Field cannot be empty");

  const listImages = () => {
    var new_list = [];
    var count = 0;
    console.log(pawn);
    if (pawn.room_card) {
      for (let i = 0; i < pawn.room_card.length; i++) {
        if (!pawn.room_card[i].is_active) {
          count += 1;
          new_list.push({ id: count, card: pawn.room_card[i].id });
        }
      }
    }
    console.log(new_list);
    return new_list;
  };

  function onChangeAssociation(event) {
    console.log(event);
    const text = event.target.value;
    setAssociation(text);

    setIsValidAssociation(text.length > 0);
    if (!isValidAssociation) {
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
    if (!isValidAssociation) {
      setErrorMsgCard("Field cannot be empty");
    } else {
      setErrorMsgCard("");
    }
  }

  const submission = async () => {
    console.log("hello");
    socket.send(
      JSON.stringify({
        message: {
          association: association,
          card: card,
        },
        type: "come_up_with_an_association",
      })
    );
    console.log("hello");
    setStage(stage + 1);
  };

  const guessOption = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
  ];
  return (
    <React.Fragment>
      {stage === 1 && pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            Select a picture and attach an association to it
          </Typography>
          <TextField
            id="association"
            label="Association"
            variant="outlined"
            onChange={onChangeAssociation}
            value={association}
            error={!isValidAssociation}
            helperText={errorMsgAssociation}
          />
          <FormControl sx={{ minWidth: 200, m: 2 }}>
            <InputLabel id="card">Picture number</InputLabel>

            <Select
              labelId="card"
              id="card"
              label="Picture number"
              onChange={onChangeCard}
              value={card}
              error={!isValidCard}
            >
              {listImages().map((option) => (
                <MenuItem value={option.card}>{option.id}</MenuItem>
              ))}
            </Select>
            <FormHelperText> {errorMsgCard} </FormHelperText>
          </FormControl>

          <Button
            sx={{
              m: 2,
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
        </Box>
      )}

      {stage === 2 && pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            Здесь будет загаданное слово лидера
          </Typography>
        </Box>
      )}

      {stage === 1 && !pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            Wait for the leader to come up with an association
          </Typography>
        </Box>
      )}

      {stage === 2 && !pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            Слово лидера
          </Typography>
          <FormControl sx={{ minWidth: 200, m: 2 }}>
            <InputLabel id="demo-simple-select-label">
              Picture number
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Picture number"
            >
              {listImages.map((option) => (
                <MenuItem value={option.card}>{option.id}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{
              m: 2,
              px: 3,
              typography: "h6",
            }}
            variant="contained"
            color="secondary"
          >
            Send
          </Button>
        </Box>
      )}
      {stage === 3 && pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            Wait until everyone votes
          </Typography>
        </Box>
      )}
      {stage === 3 && !pawn.is_lead && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ m: 2 }}>
            What do you think the leader wished for?
          </Typography>
          <FormControl sx={{ minWidth: 200, m: 2 }}>
            <InputLabel id="demo-simple-select-label">
              Picture number
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Picture number"
            >
              {guessOption.map((option) => (
                <MenuItem value={option.id}>{option.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{
              m: 2,
              px: 3,
              typography: "h6",
            }}
            variant="contained"
            color="secondary"
          >
            Send
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
};

export default InputInterface;
