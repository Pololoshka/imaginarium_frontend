import * as React from "react";
import { Typography } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
const Rules = (
  <React.Fragment>
    <Typography variant="h4" sx={{ m: 2 }} align="center">
      Правила игры
    </Typography>
    <Typography variant="h5" sx={{ m: 2 }}>
      Начало
    </Typography>
    <Typography variant="body1">
      Каждый игрок выбирает себе слона и набор карточек для голосования того же
      цвета, что и слон. Карточек для голосования семь. Вам пригодится столько
      карточек, сколько человек играет. Если играет 6 человек, карточка с
      номером 7 вам не нужна.
    </Typography>
  </React.Fragment>
);

export default Rules;
