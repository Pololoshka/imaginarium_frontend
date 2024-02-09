import { React } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Home.css";
import AxiosInstance from "./Axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const JoinTheGame = () => {
  // const MyParam = useParams();
  // const MyCode = MyParam.code;
  const navigate = useNavigate();
  const defaultValues = {
    code: "",
  };

  const schema = yup.object({
    code: yup.string().required("Code is a required field").length(6).matches(/\d+/),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const submission = async (data) => {
    try{
      const response = await AxiosInstance.get(`api/rooms/${data.code}/`);
      console.log(response);

      navigate(`rooms/${response.data.code}`);
    } catch (error){
      console.log(error.response)
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit(submission)}>
        <Card
          variant="outlined"
          sx={{
            mx: "auto",
            my: 20,
            maxWidth: "40%",
            boxShadow: 10,
            bgcolor: "#f1f9a5",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ m: 2, pb: 3, color: "#ae0000" }}
              align="center"
            >
              Присоедениться
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="body1" sx={{ m: 2 }}>
                Введите код комнаты:
              </Typography>
              <Controller
                name="code"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                  formState,
                }) => (
                  <TextField
                    id="outlined-basic"
                    label="Code room"

                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button
              sx={{
                m: 2,
                typography: "body1",
                bgcolor: "#ae0000",
              }}
              variant="contained"
              type="submit"
              // href="create"
              // size=""
              // onClick={handleOpenJoin}
              // startIcon={<SportsEsportsIcon fontSize="large" />}
            >
              Присоедениться
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default JoinTheGame;
