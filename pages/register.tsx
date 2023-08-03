import { Alert, Box, Button, Container, Divider, FormControl, FormHelperText, Grid, Icon, IconButton, Input, InputLabel, Link, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Label, Visibility, VisibilityOff } from '@material-ui/icons';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../util/firebase';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { redirect, useNavigate } from 'react-router-dom';

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
    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName: string = e.target[0].value;
        const email: string = e.target[1].value;
        const password: string = e.target[2].value;
        const profilePic = e.target[3].files[0];

        try {
            //Authentication
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Storing profile picture
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, profilePic);

            uploadTask.then(
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL
                            })
                            setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL
                            })
                        }
                    ).then(
                        () => {
                            setDoc(doc(db, "userChats", res.user.uid), {});
                        }
                    )
                },
                () => {
                    console.log('ERROR UPLOADING IMAGE');
                }
            )


        }
        catch (err) {
            console.log("error true here")
            setErr(true)
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
                    <Stack direction="row" marginLeft="35px">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
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

                    <Stack direction="row" marginLeft="45px"> {/* fix this */}
                        <input type="file" style={{ display: "none" }} id="file" />
                        <label htmlFor="file">
                            <IconButton sx={{ color: "#FFFFFF" }}>
                                <AccountCircleIcon />
                            </IconButton>
                        </label>
                        <Typography fontFamily={"Gill Sans"}
                            color="#FFFFFF"
                            fontSize={"15px"}
                            paddingTop="8px">Add an Avatar</Typography>
                    </Stack>
                    <Button variant="outlined" type="submit" sx={{
                        color: "#DED6CE",
                        borderWidth: "1px",
                        borderColor: "#DED6CE",
                        fontSize: "20px",
                        textTransform: "none",
                        fontFamily: "Gill Sans",
                        marginLeft: "55px", /* fix this */
                        "&:hover": { color: "#FFFFFF", backgroundColor: "#DED6CE", borderColor: "#DED6CE" },
                    }}>
                        Sign Up
                    </Button>
                    {err ? /* (<Alert severity="error">Please make sure you have entered a valid email address that has not been used previously.</Alert>) */ (<div>ERROR</div>) : <div></div>}

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