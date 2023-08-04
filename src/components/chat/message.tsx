import { Avatar, Box, Stack, Typography } from "@mui/material"

const messageSentStyles = {
  color: "aqua"
}

const messageRecievedStyles = {
  color: "pink"
}

const Message = (props) => {
  const isDelivered: boolean = props.isDelivered;
  const message: string = props.message;

  const backgroundColor: string = isDelivered ? "#FFFFFF" : "#f8ada0";
  const textColor: string = isDelivered ? "#f8ada0" : "#FFFFFF";

  return (
    <div style={{
      paddingTop: "10px",
      paddingRight: isDelivered ? "175px" : "10px",
      paddingLeft: isDelivered ? "10px" : "175px",
    }}>
      <Stack flexDirection={isDelivered ? "row" : "row-reverse"} alignItems="center">
        <div>
          <Avatar src="NidhiHeadshot1.jpg"></Avatar>
          <Typography
            fontFamily={"Gill Sans"}
            color="#D3D3D3"
            fontSize={"10px"}
          >
            just now
          </Typography>
        </div>

        <div>
          <Box sx={{
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "12px",
            backgroundColor: { backgroundColor },
            padding: "6px",
            borderRadius: "10px",
            borderTopLeftRadius: isDelivered ? "0px" : "10px",
            borderTopRightRadius: isDelivered ? "10px" : "0px",
            minHeight: "24px",
            minWidth: "20px"
          }}>
            <Typography
              fontFamily={"Gill Sans"}
              color={textColor}
              fontSize={"15px"}
            >
              {message}
            </Typography>
          </Box>
        </div>
      </Stack>
    </div>

  )
}

export default Message