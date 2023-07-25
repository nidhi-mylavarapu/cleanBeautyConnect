import { Box, Button, Container, Divider, FormControl, FormHelperText, Grid, IconButton, Input, InputLabel, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Label, Visibility } from '@material-ui/icons';

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
    backgroundColor: "#DED6CE",
    marginBottom: "2px",
    borderRadius: "10px",
    paddingTop: "3px",
    paddingX: "6px"
}

const Register = () => {
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
                <Typography
                    paddingY="5px"
                    fontFamily={"Gill Sans"}
                    color="#DED6CE"
                    fontSize={"15px"}
                >
                    Display Name
                </Typography>
                <FormControl sx={{ ...formStyles }}>
                    <Input disableUnderline={true} sx={{ ...formStyles }}></Input>
                </FormControl>
                <Typography
                    paddingY="5px"
                    fontFamily={"Gill Sans"}
                    color="#DED6CE"
                    fontSize={"15px"}
                >
                    Email
                </Typography>
                <FormControl sx={{ ...formStyles }}>
                    <Input disableUnderline={true} sx={{ ...formStyles }}></Input>
                </FormControl>

                <Stack direction="row">
                <Typography
                    paddingY="5px"
                    fontFamily={"Gill Sans"}
                    color="#DED6CE"
                    fontSize={"15px"}
                    marginLeft="5px"
                    marginRight="5px"
                >
                    Password
                </Typography>
                </Stack>
                
                <FormControl sx={{ ...formStyles }}>
                    <Input disableUnderline={true} type="password" sx={{ ...formStyles}}></Input>
                    
                </FormControl>
                <Stack direction="row">
                    <IconButton>
                        <AccountCircleIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <Typography fontFamily={"Gill Sans"}
                        color="#FFFFFF"
                        fontSize={"15px"}
                        paddingTop="8px">Add an Avatar</Typography>
                </Stack>
                <Button variant="outlined" sx={{
                    color: "#DED6CE",
                    borderWidth: "1px",
                    borderColor: "#DED6CE",
                    fontSize: "20px",
                    textTransform: "none",
                    fontFamily: "Gill Sans",
                    "&:hover": { color: "#FFFFFF", backgroundColor: "#DED6CE", borderColor: "#DED6CE" },
                }}>
                    Sign Up
                </Button>
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
                            "&:hover": {fontWeight: 550},
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