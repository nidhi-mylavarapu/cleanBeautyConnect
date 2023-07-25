import { Circle, Logout } from "@mui/icons-material"
import { Avatar, FormControl, Input, Stack, TextField, Typography } from "@mui/material"
import { cursorTo } from "readline"


const SearchBar = () => {
    return (
        <div style={{
            height: "40px",
        }}>
            <Input disableUnderline={true} defaultValue="Search for a User..." sx={{
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
    )
}

export default SearchBar