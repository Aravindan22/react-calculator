import * as React from "react";
import Buttons from "./Buttons";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Body() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        mt:6,
        // backgroundColor: "primary.da`rk",
      }}
    >
      <Box>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Buttons></Buttons>
        </Stack>
      </Box>
    </Box>
  );
}
