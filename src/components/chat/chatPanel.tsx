import { Box, Input, InputAdornment } from "@mui/material"
import ChatNavbar from "./chatNavbar"
import Messages from "./messages"
import { AccountCircle } from "@mui/icons-material"
import TextingBar from "./textingBar"
import SearchBar from "./searchBar"

const ChatPanel = () => {
    return (
        <div style={{
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            flex: "2",
            position: "relative",
        }}>
            <ChatNavbar/>
            <Messages/>
            <TextingBar/>
        </div>
    )
}

export default ChatPanel