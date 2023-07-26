import { Circle, Logout } from "@mui/icons-material"
import { Avatar, Stack, Typography } from "@mui/material"


const ContactNavbar = () => {
    return (
        <div style={{
            backgroundColor: "#f8ada0",
            borderTopLeftRadius: "30px",
            borderRight: "1px solid #da887a",
            height: "80px"
        }}>
            <Stack direction="row">
                <Stack direction="column">
                    <Typography fontFamily={"Gill Sans"}
                        color="#FFFFFF" fontSize="15px" sx={{ borderTopLeftRadius: "30px", paddingLeft: "25px", paddingTop: "7px" }}>
                        Clean
                    </Typography>
                    <Typography fontFamily={"Gill Sans"}
                        color="#FFFFFF" fontSize="15px" sx={{ borderTopLeftRadius: "30px", paddingLeft: "25px" }}>
                        Beauty
                    </Typography>
                    <Typography fontFamily={"Gill Sans"}
                        color="#FFFFFF" fontSize="15px" sx={{ borderTopLeftRadius: "30px", paddingLeft: "25px" }}>
                        Connect
                    </Typography>
                </Stack>
                <Avatar src="NidhiHeadshot1.jpg" sx={{ marginTop: "13px", marginLeft: "18px", height: "55px", width: "55px"}}>N</Avatar>
                <Typography fontFamily={"Gill Sans"}
                    color="#FFFFFF" fontSize="15px" sx={{ marginTop: "25px", marginLeft: "10px" }}>Nidhi Mylavarapu</Typography>
                    <Logout sx={{ color:"#FFFFFF",marginTop: "28px", marginLeft: "10px", height: "20px", width: "20px" }}></Logout>
            </Stack>



        </div>
    )
}

export default ContactNavbar