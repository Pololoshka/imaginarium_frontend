import { useState, useEffect, React } from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import { Controller, set } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";
import CreateRoom from "./CreateRoom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// const cardJoin = (
//   <React.Fragment>
//     <CardContent>
//       <Typography variant="h4" sx={{ m: 2 }} align="center">
//         присоедениться к игре
//       </Typography>
//       <Typography variant="h5" sx={{ m: 2 }}>
//         Введите код комнаты
//       </Typography>
//       <Typography variant="body1">
//         время
//       </Typography>
//     </CardContent>
//     <CardActions>
//     <Button
//                   sx={{
//                     p: 1,
//                     m: 5,
//                     width: 200,
//                     typography: "body1",
//                     bgcolor: "#9415fc",
//                   }}
//                   variant="contained"
//                   size="100%"
//                   onClick={handleOpenCreate}
//                   startIcon={<SportsEsportsIcon fontSize="large" />}
//                 >
//                   Create room
//                 </Button>
//     </CardActions>
//   </React.Fragment>
// );
export const Home = () => {
  // const [value, setValue] = useState();

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const [rooms, setRooms] = useState();
  // const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  // const defaultValues = {
  //   room_code: "",
  // };
  // const schema = yup.object({
  //   room_code: yup.string().required("Name is a required field"),
  // });
  // const { handleSubmit, control } = useForm({
  //   defaultValues: defaultValues,
  //   resolver: yupResolver(schema),
  // });

  const [openCreate, setOpenCreate] = useState(false);
  const [openJoin, setOpenJoin] = useState(true);

  // const submission = (data) => {
  //   AxiosInstance.get(`rooms/${data.room_code}`, {
  //     code_room: data.code_room,
  //   }).then((res) => {
  //     navigate(`/rooms/${res.data}`);
  //   });
  // };

  // const handleCloseCreate = () => {
  //   setOpenCreate(null);
  // };
  // const handleOpenCreate = (event) => {
  //   setOpenCreate(event.currentTarget);
  // };
  // const handleCloseJoin = () => {
  //   setOpenJoin(null);
  // };
  // const handleOpenJoin = (event) => {
  //   setOpenJoin(event.currentTarget);
  // };

  return (
    <div className="Home">
      {/* //   {loading ? (
    //   <p>Loding data ...</p>
    // ) : (
    //   <form onSubmit={handleSubmit(submission)}> */}
      <Card
        variant="outlined"
        sx={{
          maxWidth: "50%",
          backgroundColor: "#00000089",
          boxShadow: 10,
          mx: "auto",
          my: 15,
          zIndex: "modal",
        }}
      >
        <CardContent>
          <Typography
            variant="h2"
            noWrap
            align="center"
            sx={{ color: "#f0dc06", p: 5 }}
          >
            Imaginarium
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#ffffff", m: 5 }}
          >
            Очень простая и очень интересная игра, в которой нужно придумывать
            ассоциации к необычным картинкам
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ m: "0 auto" }}>
            <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    p: 1,
                    m: 5,
                    width: 200,
                    typography: "body1",
                    bgcolor: "#9415fc",
                  }}
                  variant="contained"
                  size="100%"
                  onClick={() => {
                    setOpenCreate(!openCreate);
                  }}
                  startIcon={<SportsEsportsIcon fontSize="large" />}
                >
                  Create room
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="100%"
                  sx={{
                    p: 1,
                    m: 5,
                    width: 200,
                    typography: "body1",
                    bgcolor: "#06b2f0",
                  }}
                  onClick={() => setOpenJoin(!openJoin)}
                  startIcon={<PersonAddIcon fontSize="large" />}
                >
                  Join the game
                </Button>
                {/* <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={openJoin}
                  onClick={() => setOpenJoin(false)}
                > */}
                <Box
                open={openJoin}
                onClick={() => setOpenJoin(false)}>
                  <Card
                    variant="outlined"
                    sx={{
                      m: "0 auto",
                      // minWidth: "90%",
                      // maxWidth: "90%",
                      boxShadow: 10,
                      bgcolor: "#f1f9a5",
                      // padding: 2,
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
                        {/* <Controller
      name="code_room"
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => ( */}
                        <TextField
                          // sx={{ width: { width } }}
                          id="outlined-basic"
                          label="Code room"
                          variant="outlined"
                          // placeholder={placeholder}
                          // onChange={onChange}
                          // value={value}
                          // error={!!error}
                          // helperText={error?.message}
                        />
                        {/* )}
    /> */}
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
                        Submit
                      </Button>
                    </CardActions>
                  </Card>
                  </Box>
                {/* </Backdrop> */}
              </Grid>
            </Grid>
            {/* {openCreate ? (
              <CreateRoom
                openCreate={openCreate}
                handleCloseCreate={handleCloseCreate}
              />
            ) : null} */}
          </Box>
        </CardActions>
      </Card>
      {/* // </form> */}
    </div>
  );
};
