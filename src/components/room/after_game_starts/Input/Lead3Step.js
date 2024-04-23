import React from "react";
import { Typography } from "@mui/material";

function Lead3Step(props) {
  const { association } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" align="center" sx={{ m: 2 }}>
        Wait until everyone votes for "{association()}"
      </Typography>
    </React.Fragment>
  );
}

export default Lead3Step;
