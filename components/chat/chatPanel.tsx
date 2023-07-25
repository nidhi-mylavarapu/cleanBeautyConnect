import { Input } from "@mui/material"
import ChatNavbar from "./chatNavbar"
import Messages from "./messages"

const ChatPanel = () => {
    return (
        <div style={{
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            flex: "2"
        }}>
            <ChatNavbar/>
            <Messages/>
            <div style={{
            height: "40px",
        }}>
            <Input disableUnderline={true} defaultValue="Type a Message" sx={{
                color: '#f7b9af',
                fontFamily: "Gill Sans",
                width: "100%",
                fontSize: "15px",
                backgroundColor: "#FAE1DD",
                marginBottom: "2px",
                paddingTop: "3px",
                paddingBotton: "6px",
                paddingX: "6px",
            }}></Input>
        </div>
        </div>
    )
}

export default ChatPanel