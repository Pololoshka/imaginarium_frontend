import React from "react";
import Box from "@mui/material/Box";
import Lead1Step from "./Lead1Step";
import Lead2Step from "./Lead2Step";
import NoLead1Step from "./NoLead1Step";
import NoLead2Step from "./NoLead2Step";
import Lead3Step from "./Lead3Step";
import NoLead3Step from "./NoLead3Step";
import { Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const InputInterface = (props) => {
  const { pawn, socket, room, loading } = props;

  const listImages = () => {
    var new_list = [];
    var count = 0;
    if (pawn.room_cards) {
      for (let i = 0; i < pawn.room_cards.length; i++) {
        if (!pawn.room_cards[i].is_active && !pawn.room_cards[i].association) {
          count += 1;
          new_list.push({ id: count, card: pawn.room_cards[i].id });
        }
      }
    }

    return new_list;
  };

  const association = () => {
    let lead = "";
    let lead_association = "";
    room.pawns.map((pawn) => {
      if (pawn.is_lead) {
        lead = pawn;
      }
    });
    lead.room_cards.map((room_card) => {
      if (room_card.is_active) {
        lead_association = room_card.association;
      }
    });
    return lead_association;
  };

  const isMoved = () => {
    let flag = false;
    if (pawn.room_cards) {
      pawn.room_cards.map((room_card) => {
        if (room_card.is_active) {
          flag = true;
        }
      });
    }
    return flag;
  };

  const isVoted = () => {
    let flag = false;
    if (pawn.vote) {
      flag = true;
    }
    return flag;
  };

  const winner = () => {
    let winnerName = "";
    let count = 0;
    if (room.pawns) {
      room.pawns.map((curPawn) => {
        if (curPawn.score > count) {
          count = curPawn.score;
          winnerName = curPawn.player?.name;
        } else if (curPawn.score === count) {
          winnerName = String(winnerName) + " " + String(curPawn.player.name);
        }
      });
    }
    console.log("Winner", winnerName)
    return winnerName;
  };

  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {room.step === 1 && pawn.is_lead && (
            <Lead1Step
              socket={socket}
              room={room}
              listImages={listImages}
              loading={loading}
            />
          )}

          {room.step === 2 && pawn.is_lead && (
            <Lead2Step association={association} loading={loading} />
          )}
          {room.step === 3 && pawn.is_lead && (
            <Lead3Step association={association} />
          )}

          {room.step === 1 && !pawn.is_lead && <NoLead1Step />}

          {room.step === 2 && !pawn.is_lead && (
            <NoLead2Step
              socket={socket}
              room={room}
              listImages={listImages}
              isVoted={isMoved}
              loading={loading}
              association={association}
            />
          )}

          {room.step === 3 && !pawn.is_lead && (
            <NoLead3Step
              room={room}
              socket={socket}
              isVoted={isVoted}
              association={association}
              pawn={pawn}
            />
          )}

          {room.step === 4 && (
            <Box sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}>
              <Typography variant="h4" align="center">
                Winner {winner()}
              </Typography>
              <EmojiEventsIcon sx={{px:2}} fontSize="large"  />
            </Box>
          )}
        </Box>
      )}
    </React.Fragment>
  );
};

export default InputInterface;
