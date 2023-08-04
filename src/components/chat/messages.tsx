import { Box } from "@mui/material"
import Message from "./message"

const Messages = () => 
{
    return (
        <Box sx={{
            height: "430px",
            overflow: "hidden",
          overflowY: "auto",
          '&::-webkit-scrollbar': {
            width: "17px"
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: "#F8EDEB"
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f7b9af',
            borderRadius: "20px",
            border: "4px solid #F8EDEB"
          }
            }}
            position="relative"
            >
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! You?"/>
                <Message isDelivered={false} message="Amazing."/>
                <Message isDelivered={true} message="Hello!"/>
                <Message isDelivered={false} message="Hi! How are you?"/>
                <Message isDelivered={true} message="Good! Yasdifua nfaiosdf ;as df asd;ofiu w;ai dsfoaiuf  a;esirjfa;ow ef a;osidf ;oaiesurf ou?"/>
                <Message isDelivered={false} message="Amazing, asdjf;aksdjaksdjfakjsdff asdjfklaj aasdf asdfjas f asdf asdf a f adsf  ;skjfjieun asdjfin oawerh oiejrh ."/>
        </Box>
    )
}

export default Messages