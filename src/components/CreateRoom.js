import {useState, React} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";



const CreateRoom = (props) => {
    const { openCreate, handleCloseCreate } = props
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "35%",
        maxWidth: "35%",
        boxShadow: 10,
        padding: 2,
      }}
      openCreate={openCreate}
      open={Boolean(openCreate)}
      onClose={handleCloseCreate}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{ m: 2, pb: 3, color: "#ae0000" }}
          align="center"
        >
          Создать комнату
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
            Выберите количество игроков:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="6"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="7"
              />
            </RadioGroup>
          </FormControl>
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
                        Create
                      </Button>
                    </CardActions>
    </Card>
  );
};

export default CreateRoom;
