import { Box } from "@mui/material"
import ContactCard from "./contactCard"

const ContactList = () => {
    return (
        <Box 
        sx={{
          height: "430px", //change so that it just fills container instead of exact px
          borderBottomLeftRadius: "30px",
          overflow: "hidden",
          overflowY: "auto",
          '&::-webkit-scrollbar': {
            width: "17px"
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: "#f7b9af"
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#da887a',
            borderRadius: "20px",
            border: "4px solid #f7b9af"
          }

        }}>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>   
        </Box>
    )


}

export default ContactList