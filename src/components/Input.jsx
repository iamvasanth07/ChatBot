// Chat Input component

import { SendOutlined } from "@mui/icons-material"
import {
   FormControl,
   IconButton,
   InputLabel,
   OutlinedInput,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Input = () => {
   return (
      <Grid2
         container
         alignItems={"center"}
         margin={4}
         gap={2}
         justifyContent={"space-between"}>
         <Grid2 lg={11} md={11} sm={11} xs={11}>
            <FormControl fullWidth sx={{ m: 1 }}>
               <InputLabel htmlFor="outlined-adornment-amount">
                  Enter a prompt here
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Enter a prompt here"
                  sx={{
                     borderRadius: 20,
                     height: 50,
                     padding: 2,
                  }}
               />
            </FormControl>
         </Grid2>
         <Grid2>
            <IconButton size="large" color="primary">
               <SendOutlined />
            </IconButton>
         </Grid2>
      </Grid2>
   )
}

export default Input
