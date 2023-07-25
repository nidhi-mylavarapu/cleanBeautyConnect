import { Avatar, Box, Button, Stack, Typography } from "@mui/material"

const ContactCard = () => {
    return (
        <Button sx={{
            height: "55px",
            backgroundColor: "#f7b9af",
            width: "100%",
            borderRadius: "0",
            paddingTop: "10px",
            borderBottom: "1px solid #da887a",
            textTransform: "none",
            "&:hover": {backgroundColor: "#f8ada0"},
        }}>
            <Stack direction="row">
                <Avatar src="NidhiHeadshot1.jpg" sx={{marginTop: "3px"}}>N</Avatar>
                <Stack direction = "column">
                <Typography fontFamily={"Gill Sans"}
                    color="#FFFFFF" fontSize="15px" sx={{ marginLeft: "10px", marginTop: "5px" }}>Nidhi</Typography>
                    <Typography fontFamily={"Gill Sans"}
                    color="#FFFFFF" fontSize="13px" sx={{marginLeft: "10px", fontWeight: 'light'}}>
                        Hello!
                </Typography>
                </Stack>
                <Box width="210px"/>
                </Stack>
            </Button>
            
    )
}

export default ContactCard