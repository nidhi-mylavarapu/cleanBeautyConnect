import { Box, Button, Container, Divider, FormControl, FormHelperText, Grid, Icon, IconButton, Input, InputLabel, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Label, Visibility, VisibilityOff } from '@material-ui/icons';

const registerBoxStyles = {
    borderRadius: "20px",
    backgroundColor: "#F5EBE0",
    height: "380px",
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
    paddingBotton: "6px",
    paddingX: "6px"
}

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
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
                    Login
                </Typography>
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
                <Stack direction="row" marginRight="25px">
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
                <FormControl sx={{ ...formStyles }}>
                    <Input type={showPassword ? "" : "password"} disableUnderline={true} sx={{ ...formStyles }}></Input>
                </FormControl>
                <Button variant="outlined" sx={{
                    color: "#DED6CE",
                    borderWidth: "1px",
                    borderColor: "#DED6CE",
                    marginTop: "5px",
                    fontSize: "20px",
                    textTransform: "none",
                    fontFamily: "Gill Sans",
                    "&:hover": { color: "#FFFFFF", backgroundColor: "#DED6CE", borderColor: "#DED6CE" },
                }}>
                    Sign In
                </Button>
                <Stack direction="row">
                    <Typography marginTop="7px" marginRight="4px" fontFamily={"Gill Sans"}
                        color="#FFFFFF"
                        fontSize={"17px"}
                        paddingTop="8px">
                        Don't have an account?
                    </Typography>
                    <Link marginTop="10px" fontFamily={"Gill Sans"}
                        color="#DED6CE"
                        fontSize={"17px"}
                        paddingTop="8px"
                        href="/register"
                        sx={{
                            "&:hover": { fontWeight: 550 },
                        }}
                    >
                        Register.
                    </Link>
                </Stack>

            </Box>
        </Grid>

    )
}

export default Login