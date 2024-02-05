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
import AxiosInstance from "./Axios";
import CreateRoom from "./CreateRoom";
import JoinTheGame from "./JoinTheGame";

import Modal from "@mui/material/Modal";

export const Home = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log("1");

  async function GetData() {
    if (localStorage.getItem("imaginariumUserToken") === null) {
      const res = await AxiosInstance.post(`api/users/`);
      localStorage.setItem("imaginariumUserToken", res.data.token);
      console.log(res.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="Home">
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
            sx={{ color: "#f0dc06", p: 2 }}
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
                    mr: 5,
                    width: 210,
                    typography: "body1",
                    bgcolor: "#9415fc",
                  }}
                  variant="contained"
                  size="100%"
                  onClick={() => {
                    setOpenCreate(true);
                  }}
                  startIcon={<SportsEsportsIcon fontSize="large" />}
                >
                  Создать комнату
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="100%"
                  sx={{
                    p: 1,
                    ml: 5,
                    width: 210,
                    typography: "body1",
                    bgcolor: "#06b2f0",
                  }}
                  onClick={() => setOpenJoin(true)}
                  startIcon={<PersonAddIcon fontSize="large" />}
                >
                  Присоедениться к игре
                </Button>
              </Grid>
              <Modal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <CreateRoom />
              </Modal>
              <Modal
                open={openJoin}
                onClose={() => setOpenJoin(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <JoinTheGame />
              </Modal>
            </Grid>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};
