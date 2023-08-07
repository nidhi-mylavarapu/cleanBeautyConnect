import { Alert, Box, Button, CircularProgress, Container, Divider, FormControl, FormHelperText, Grid, Icon, IconButton, Input, InputLabel, Link, Stack, TableCell, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Label, Visibility, VisibilityOff } from '@material-ui/icons';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../util/firebase';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { UserAuth } from '../context/AuthContext'

const registerBoxStyles = {
    borderRadius: "20px",
    backgroundColor: "#F5EBE0",
    height: "450px",
    width: "500px",
    display: "flex",
}

const formStyles = {
    color: 'white',
    fontFamily: "Gill Sans",
    fontSize: "20px",
    marginBottom: "2px",
    borderRadius: "10px",
    paddingTop: "3px",
    paddingX: "6px"
}

const inputStyles = {
    color: 'white',
    fontFamily: "Gill Sans",
    fontSize: "20px",
    backgroundColor: "#DED6CE",
    marginBottom: "2px",
    borderRadius: "10px",
    paddingTop: "3px",
    paddingX: "6px"
}

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [clickedSignup, setClickedSignup] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const inputtedDisplayName: string = e.target[0].value;
        const inputtedEmail: string = e.target[1].value;
        const inputtedPassword: string = e.target[2].value;
        const inputtedProfilePic = e.target[3].files[0];

        setEmail(inputtedEmail)
        setPassword(inputtedPassword)
        setError('')
        try {
            await createUser(email, password)
        }
        catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
            }}
        >
            <Box
                flexDirection={'column'}
                alignItems={"center"}
                sx={{
                    ...registerBoxStyles
                }}>
                <Typography
                    paddingTop="10px"
                    fontFamily={"Gill Sans"}
                    color="#FFFFFF"
                    fontSize={"35px"}
                >
                    Register
                </Typography>
                <form style={{ ...formStyles }} onSubmit={handleSubmit}>
                    <Typography
                        paddingY="5px"
                        fontFamily={"Gill Sans"}
                        color="#DED6CE"
                        fontSize={"15px"}
                        align='center'
                    >
                        Display Name
                    </Typography>
                    <Input disableUnderline={true} sx={{ ...inputStyles }}></Input>
                    <Typography
                        paddingY="5px"
                        fontFamily={"Gill Sans"}
                        color="#DED6CE"
                        fontSize={"15px"}
                        align='center'
                    >
                        Email
                    </Typography>
                    <Input disableUnderline={true} sx={{ ...inputStyles }}></Input>
                    <Stack direction="row" marginLeft="50px">
                        <Icon onClick={() => setShowPassword(!showPassword)} sx={{ marginTop: "5px", color: "#FFFFFF", "&:hover": { color: "#DED6CE" } }}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Icon>
                        <Typography
                            paddingY="5px"
                            fontFamily={"Gill Sans"}
                            color="#DED6CE"
                            fontSize={"15px"}
                            marginLeft="5px"
                            marginRight="5px"
                            align='center'
                        >
                            Password
                        </Typography>
                    </Stack>

                    <Input disableUnderline={true} type={showPassword ? "" : "password"} sx={{ ...inputStyles }}></Input>


                    <input type="file" style={{ display: "none" }} id="file" />
                    <label htmlFor="file">
                        <Stack direction="row" marginLeft="45px"> {/* fix this */}
                            <Icon sx={{ marginTop: "5px", marginRight: "5px", color: "#FFFFFF", "&:hover": { color: "#DED6CE" } }}>
                                <AccountCircleIcon />
                            </Icon>
                            <Typography fontFamily={"Gill Sans"}
                                color="#FFFFFF"
                                fontSize={"15px"}
                                paddingTop="8px">Add an Avatar</Typography> </Stack>
                    </label>


                    <Button variant="outlined" type="submit" onClick={() => setClickedSignup(true)} sx={{
                        borderWidth: "1px",
                        borderColor: "#DED6CE",
                        textTransform: "none",
                        marginTop: "10px",
                        width: "100px",
                        marginLeft: "55px", /* fix this */
                        "&:hover": { color: "#FFFFFF", backgroundColor: "#DED6CE", borderColor: "#DED6CE" },
                    }}>
                        {clickedSignup ?
                            <CircularProgress sx={{ color: "#FFFFFF" }} /> :
                            <Typography
                                fontFamily={"Gill Sans"}
                                color="#DED6CE"
                                align='center'
                                fontSize="20px"
                                sx={{ "&:hover": { color: "#FFFFFF" } }}>
                                Sign Up
                            </Typography>}
                    </Button>

                </form>

                <Stack direction="row">
                    <Typography marginTop="7px" marginRight="4px" fontFamily={"Gill Sans"}
                        color="#FFFFFF"
                        fontSize={"17px"}
                        paddingTop="8px">
                        Have an account?
                    </Typography>
                    <Link marginTop="10px" fontFamily={"Gill Sans"}
                        color="#DED6CE"
                        fontSize={"17px"}
                        paddingTop="8px"
                        href="/login"
                        sx={{
                            "&:hover": { fontWeight: 550 },
                        }}
                    >
                        Login.
                    </Link>
                </Stack>

            </Box>
        </Grid>

    )
}

export default Register