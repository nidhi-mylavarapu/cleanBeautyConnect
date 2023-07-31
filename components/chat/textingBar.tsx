import { AttachFile } from "@mui/icons-material"
import { FormControl, Icon, Input, Stack } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';

const TextingBar = () => {
    return (
        <div style={{
            height: "40px",
            position: "absolute",
            bottom: 0,
            width: "100%",

        }}>
            <FormControl sx={{ width: "100%", }}>
                <Stack direction="row">
                    <Input disableUnderline={true} defaultValue="Send a message..." sx={{
                        color: '#da887a',
                        width: "100%",
                        fontFamily: "Gill Sans",
                        fontSize: "15px",
                        backgroundColor: "#FAE1DD",
                        paddingLeft: "5px"
                    }} />
                    <div style={{ backgroundColor: "#FAE1DD", height: "40px", borderBottomRightRadius: "30px", width: "100px", }}>
                        <input type="file" style={{ display: "none" }} id="attachFile" />
                        <label htmlFor="attachFile">
                            <Icon sx={{ color: "#f7b9af", marginTop: "5px", "&:hover": { color: "#da887a" }, }}>
                                <AttachFile />
                            </Icon>
                        </label>
                        <input type="file" style={{ display: "none" }} id="image" />
                        <label htmlFor="image">
                            <Icon sx={{ color: "#f7b9af", marginTop: "5px", "&:hover": { color: "#da887a" }, }}>
                                <ImageIcon />
                            </Icon>
                        </label>
                        <Icon sx={{ color: "#f7b9af", marginTop: "5px", marginLeft: "5px", "&:hover": { color: "#da887a" }, }}>
                            <SendIcon />
                        </Icon>

                    </div>
                </Stack>

            </FormControl>


        </div>
    )
}

export default TextingBar