import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useState } from "react"

const Header = () => {
   const [model, setModel] = useState("text-bison-001")
   const models = ["text-bison-001", "text-davinci-003", "text-davinci-002"]

   const handleChange = (event) => {
      setModel(event.target.value)
   }

   return (
      <Grid2
         container
         sx={{
            height: "5vh",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100,
         }}>
         <Grid2 mx={4} my={2}>
            <Grid2 container direction={"row"} mx={2}>
               <Grid2 xs={12} md={6}>
                  <Typography variant="h5" color="">
                     AI ChatBOT
                  </Typography>
               </Grid2>
               <Grid2 mx={6} xs={12} md={6} sx={{ textAlign: "right" }}>
                  <FormControl fullWidth>
                     <InputLabel id="model-select-label">Model</InputLabel>
                     <Select
                        size="small"
                        labelId="model-select-label"
                        id="model-select"
                        value={model}
                        label="Model"
                        onChange={handleChange}>
                        {models.map((model) => (
                           <MenuItem key={model} value={model}>
                              {model}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </Grid2>
            </Grid2>
         </Grid2>
      </Grid2>
   )
}

export default Header
