import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Lead2Step(props) {
  const { loading, association } = props;
  return (
    <React.Fragment>
      {loading ? (
        <p>Loding data ...</p>
      ) : (
        <Box>
          <Typography variant="h4" align="center">
            "{association()}"
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
}

export default Lead2Step;
