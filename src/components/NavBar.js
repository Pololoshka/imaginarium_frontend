import * as React from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import Rules from "./Rules";

export default function NavBar(props) {
  const { content } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "#CCC", color: "#000000", zIndex:"tooltip" }}>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, ml: 5 }}>
            <IconButton size="large" color="inherit" href="/">
              <AutoAwesomeIcon fontSize="100" />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              flexGrow: 1,
            }}
          >
            IMAGINARIUM
          </Typography>

          <Box sx={{ mr: 2, ml: 5 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
              sx={{ mr: 5 }}
            >
              <InfoIcon fontSize="100" />
            </IconButton>
            <Backdrop
              sx={{
                color: "#000000d5",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={open}
              onClick={handleClose}
            >
              <Card
                variant="outlined"
                sx={{
                  minWidth: "35%",
                  maxWidth: "35%",
                  boxShadow: 10,
                  padding: 2,
                }}
              >
                {Rules}
              </Card>
            </Backdrop>
          </Box>
        </Toolbar>
      </AppBar>

      <Box>{content}</Box>
    </div>
  );
}
