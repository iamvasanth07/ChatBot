import {
   Close,
   SmartToy,
   ThumbDownOutlined,
   ThumbUpOutlined,
} from "@mui/icons-material"
import {
   Avatar,
   Button,
   Collapse,
   IconButton,
   TextareaAutosize,
   Tooltip,
   Typography,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useState } from "react"

const Conversations = () => {
   const [conversations, setConversations] = useState([
      {
         id: 1,
         prompt: "What is the capital of France?",
         response: "Paris",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 2,
         prompt: "What is the capital of Germany?",
         response: "Berlin",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 3,
         prompt: "What is the capital of Italy?",
         response: "Rome",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 4,
         prompt: "What is the capital of Spain?",
         response: "Madrid",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 5,
         prompt: "What is the capital of Portugal?",
         response: "Lisbon",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 6,
         prompt: "What is the capital of Greece?",
         response: "Athens",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 7,
         prompt: "What is the capital of Turkey?",
         response: "Ankara",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 8,
         prompt: "What is the capital of Russia?",
         response: "Moscow",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 9,
         prompt: "What is the capital of Ukraine?",
         response: "Kyiv",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 10,
         prompt: "What is the capital of Poland?",
         response: "Warsaw",
         rating: 0,
         open: false,
         feedback: "",
      },
      {
         id: 11,
         prompt: "What is the capital of Romania?",
         response:
            "Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf Bucharest asdas a sa sa sa sa as a acaskljasdlkasjdsakldjasdkljasdlksaj aa nasl knasl nsa al as asl sal salk salj salj sal asl sal aslj sah aslj asjl dljs sdlj salj adslj sdalj daslj sadjlb nlksjd ask afskhf  ",
         rating: 0,
         open: false,
         feedback: "",
      },
   ])

   const handleThumbsUp = (conversationId) => {
      const newConversations = conversations.map((conversation) => {
         if (conversation.id === conversationId) {
            if (conversation.rating === 1) {
               return {
                  ...conversation,
                  rating: 0,
                  open: false,
               }
            }
            return {
               ...conversation,
               rating: 1,
               open: true,
            }
         }
         return conversation
      })
      //   toggleClose(conversationId)
      setConversations(newConversations)
   }

   const handleThumbsDown = (conversationId) => {
      const newConversations = conversations.map((conversation) => {
         if (conversation.id === conversationId) {
            if (conversation.rating === -1) {
               return {
                  ...conversation,
                  rating: 0,
                  open: false,
               }
            }
            return {
               ...conversation,
               rating: -1,
               open: true,
            }
         }
         return conversation
      })
      setConversations(newConversations)
   }

   const toggleClose = (conversationId) => {
      const newConversations = conversations.map((conv) => {
         if (conv.id === conversationId) {
            return {
               ...conv,
               open: !conv.open,
            }
         }
         return conv
      })
      setConversations(newConversations)
   }

   const handleFeedbackChange = (feedback, conversationId) => {
      const newConversations = conversations.map((conv) => {
         if (conv.id === conversationId) {
            return {
               ...conv,
               feedback: feedback,
            }
         }
         return conv
      })
      setConversations(newConversations)
   }

   const handleFeedbackSumbit = (conversation) => {
      console.log("Submitting Feedback...")
      console.log(conversation.id, conversation.feedback)
   }

   return (
      <Grid2
         container
         direction={"row"}
         maxHeight={"80%"}
         overflow={"auto"}
         spacing={2}
         margin={4}
         padding={2}
         borderRadius={5}
         bgcolor={"#fff"}>
         {conversations.map((conversation) => (
            <Grid2
               xs={12}
               sm={6}
               md={12}
               lg={12}
               key={conversation.prompt}
               container
               direction={"column"}>
               <Grid2 container direction={"row"}>
                  <Grid2>
                     <Avatar />
                  </Grid2>
                  <Grid2
                     width={"fit-content"}
                     bgcolor={"#F0F4F9"}
                     padding={2}
                     borderRadius={5}>
                     <p>{conversation.prompt}</p>
                  </Grid2>
               </Grid2>
               <Grid2 container direction={"row"} alignItems={"center"}>
                  <Grid2>
                     <SmartToy fontSize={"large"} color="primary" />
                  </Grid2>
                  <Grid2
                     lg={11}
                     maxHeight={"30vh"}
                     overflow={"auto"}
                     width={"fit-content"}
                     padding={2}
                     borderRadius={5}>
                     <p>{conversation.response}</p>
                  </Grid2>
               </Grid2>
               <Grid2 container direction={"row"}>
                  <Grid2>
                     <IconButton
                        onClick={() => handleThumbsUp(conversation.id)}>
                        <Tooltip title="Like" arrow>
                           <ThumbUpOutlined
                              fontSize={"small"}
                              color={conversation.rating === 1 ? "primary" : ""}
                           />
                        </Tooltip>
                     </IconButton>
                  </Grid2>
                  <Grid2>
                     <IconButton
                        onClick={() => handleThumbsDown(conversation.id)}>
                        <Tooltip title="Dislike" arrow>
                           <ThumbDownOutlined
                              fontSize={"small"}
                              color={
                                 conversation.rating === -1 ? "primary" : ""
                              }
                           />
                        </Tooltip>
                     </IconButton>
                  </Grid2>
               </Grid2>
               <Collapse in={conversation.rating !== 0 && conversation.open}>
                  <Grid2
                     container
                     direction={"column"}
                     padding={2}
                     spacing={2}
                     lg={12}>
                     <Grid2 container justifyContent={"space-between"}>
                        <Grid2>
                           <Typography variant="body2">
                              <b>please provide feedback</b>
                           </Typography>
                        </Grid2>
                        <Grid2>
                           <IconButton
                              size="small"
                              onClick={() => toggleClose(conversation.id)}>
                              <Close fontSize="small" />
                           </IconButton>
                        </Grid2>
                     </Grid2>
                     <Grid2>
                        <TextareaAutosize
                           aria-label="minimum height"
                           minRows={3}
                           cols={50}
                           sx={{
                              padding: "10px",
                           }}
                           placeholder="Add a comment"
                           onChange={(e) => {
                              handleFeedbackChange(
                                 e.target.value,
                                 conversation.id
                              )
                           }}
                        />
                     </Grid2>
                     <Grid2>
                        <Button
                           variant="outlined"
                           color="primary"
                           size="small"
                           sx={{
                              borderRadius: "20px",
                              fontSize: ".7rem",
                           }}
                           onClick={() => {
                              handleFeedbackSumbit(conversation)
                              toggleClose(conversation.id)
                           }}>
                           Submit
                        </Button>
                     </Grid2>
                  </Grid2>
               </Collapse>
            </Grid2>
         ))}
      </Grid2>
   )
}

export default Conversations
