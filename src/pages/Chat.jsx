// import { Messages } from "../Components/Messages"
import Input from "../Components/Input"
import Conversations from "../Components/Conversations"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

// Chat component

const Chat = () => {
   return (
      <Grid2
         bgcolor={"#F0F4F9"}
         width={"80%"}
         alignSelf={"center"}
         marginTop={"5vh"}
         sx={{ height: "95vh" }}>
         <Conversations />
         <Input />
      </Grid2>
   )
}

export default Chat
