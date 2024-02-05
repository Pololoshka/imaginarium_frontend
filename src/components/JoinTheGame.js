import { useState, useEffect, React } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, set } from "react-hook-form";
import "./Home.css";

const JoinTheGame = () => {
  return (
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
          {/* )} */}
          {/* /> */}
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
  );
};

export default JoinTheGame;
