import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AxiosInstance from "../Axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();
  const defaultValues = {
    number_of_pawns: 4,
  };

  const { handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const submission = async () => {
    const response = await AxiosInstance.post(`api/rooms/`, {
      number_of_pawns: 4,
    });
    console.log(response);

    navigate(`rooms/${response.data.code}`);
  };

  return (
    <React.Fragment>
      <Card
        variant="outlined"
        sx={{
          boxShadow: 10,
          bgcolor: "#f1f9a5",
          mx: "auto",
          my: 20,
          maxWidth: "40%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ m: 2, pb: 3, color: "#ae0000" }}
            align="center"
          >
            Create room
          </Typography>
          <Typography variant="body1" align="center">
            This game is designed for 4 people
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <form onSubmit={handleSubmit(submission)}>
            <Button
              sx={{
                m: 2,
                typography: "body1",
                bgcolor: "#ae0000",
              }}
              variant="contained"
              type="submit"
            >
              Create
            </Button>
          </form>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default CreateRoom;
