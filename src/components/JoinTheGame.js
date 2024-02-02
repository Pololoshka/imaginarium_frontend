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
    <Controller
      name="code_room"
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          // sx={{ width: { width } }}
          id="outlined-basic"
          label="Code room"
          variant="outlined"
          // placeholder={placeholder}
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
    Submit
  </Button>
</CardActions>
</Card>
