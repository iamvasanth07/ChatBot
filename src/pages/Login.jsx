import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()

   return (
      <Grid2
         container
         width={"100%"}
         height={"100vh"}
         alignItems={"center"}
         justifyContent={"center"}>
         <GoogleLogin
            onSuccess={(credentialResponse) => {
               console.log(credentialResponse)
               localStorage.setItem(
                  "user",
                  JSON.stringify(credentialResponse.credential)
               )
               navigate("/chat")
            }}
            onError={() => {
               console.log("Login Failed")
            }}
         />
      </Grid2>
   )
}

export default Login
