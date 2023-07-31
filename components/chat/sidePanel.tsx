import { Box, Button, Divider, Drawer } from "@mui/material"
import ContactNavbar from "./contactNavbar"
import SearchBar from "./searchBar"
import ContactCard from "./contactCard"
import ContactList from "./contactList"


const SidePanel = () => {
    return (
        <div style={{
            backgroundColor: "#FAE1DD", 
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            flex: "1",
        }}>
            <ContactNavbar />
            <SearchBar />
            <ContactList />
        </div>
    )
}

export default SidePanel
