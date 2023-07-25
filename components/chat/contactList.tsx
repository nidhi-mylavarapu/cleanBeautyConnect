import { Box } from "@mui/material"
import ContactCard from "./contactCard"

const ContactList = () => {
    return (
        <Box sx={{
            PaperProps: {
                sx: {
                  maxHeight: "280px",
                  width: "288px",
                  "&::-webkit-scrollbar": {
                    width: 16,
                  },
                  "&::-webkit-scrollbar-track": {
                    borderRadius: 2,
                    marginTop: "10px",
                    marginBottom: "10px",
                    border: "4px solid white",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: 2,
                    backgroundColor: "#E8E8E8",
                    borderRight: "4px solid white",
                    borderLeft: "4px solid white",
                  },
                },
              },
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
        </Box>
    )


}

export default ContactList