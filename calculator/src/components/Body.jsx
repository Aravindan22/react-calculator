import * as React from "react";
import Buttons from "./Buttons";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";

export default function Body() {
  return (
    <Box  sx={{
      m: 'auto',
      width:'30%',
      backgroundColor: 'primary.dark',

     
  
    }}>
      <Box sx ={{m:'auto',width:'50%'}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Buttons></Buttons>
      </Box>
    </Box>
  );
}
