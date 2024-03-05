import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const LeaveRoom = (props) => {
  const { roomCode, socket } = props;
  const navigate = useNavigate();

  async function submission() {
    socket.send(
      JSON.stringify({
        message: {
          room_code: roomCode,
        },
        type: "leave_room",
      })
    );
    navigate(`/`);
  }
  return (
    <React.Fragment>
      <Button
        sx={{
          m: 2,
          px: 3,
          typography: "h6",
          bgcolor: "text.secondary",
        }}
        variant="contained"
        onClick={submission}
        startIcon={<LogoutIcon fontSize="large" />}
      >
        Leave
      </Button>
    </React.Fragment>
  );
};

export default LeaveRoom;
