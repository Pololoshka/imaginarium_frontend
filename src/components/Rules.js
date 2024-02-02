import * as React from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Grid from "@mui/material/Grid";
import InfoIcon from "@mui/icons-material/Info";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
const Rules =  (
    <React.Fragment>
      <Typography variant="h4" sx={{ m: 2 }} align="center">
        Правила игры
      </Typography>
      <Typography variant="h5" sx={{ m: 2 }}>
        Начало
      </Typography>
      <Typography variant="body1">
        Каждый игрок выбирает себе слона и набор карточек для голосования того
        же цвета, что и слон. Карточек для голосования семь. Вам пригодится
        столько карточек, сколько человек играет. Если играет 6 человек,
        карточка с номером 7 вам не нужна.
      </Typography>
    </React.Fragment>
    )

    export default Rules
