import { Circle, Logout } from "@mui/icons-material"
import { Avatar, Stack, Typography } from "@mui/material"


const ChatNavbar = () => {
    return (
        <div style={{
            backgroundColor: "#f8ada0",
            height: "80px",
            borderTopRightRadius: "30px"
        }}>
            <Stack direction="row">
                <Avatar src="NidhiHeadshot1.jpg" sx={{ marginTop: "10px", marginLeft: "10px", height: "60px", width: "60px"}}>N</Avatar>
                <Typography fontFamily={"Gill Sans"}
                    color="#FFFFFF" fontSize="25px" sx={{ marginTop: "20px", marginLeft: "10px" }}>Nidhi Mylavarapu</Typography>
            </Stack>



        </div>
    )
}

export default ChatNavbar