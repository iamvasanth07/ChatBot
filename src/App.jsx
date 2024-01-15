import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat"
import Header from "./components/Header"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Login from "./pages/Login"

function App() {
   return (
      <Grid2 container direction={"column"}>
         <Grid2>
            <Header />
         </Grid2>
         <Grid2 width={"100%"} height={"100vh"} container direction={"column"}>
            <Router>
               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/chat" element={<Chat />} />
               </Routes>
            </Router>
         </Grid2>
      </Grid2>
   )
}

export default App
