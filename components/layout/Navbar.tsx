import React from "react"
import { AppBar, Grid, Link, Stack, Typography } from "@mui/material"

type NavLink = {
  name: string
  path: string
}

const navData: NavLink[] = [

]

const Navbar = () => (
  <div>
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: "70px",
        backgroundColor: "#F5EBE0",
        paddingLeft: "20px"
      }}
    >
      <Stack direction="row">
      <Typography
        paddingTop="10px"
        paddingRight="10px"
        fontFamily={"Gill Sans"}
        color="#FFFFFF"
        fontSize={"35px"}
      >
        Clean Beauty Connect
      </Typography>
      <img src="cleanBunnyWhite.png" style={{
        height: "40px",
        width: "43px",
        paddingTop: "15px"
      }}></img>
      </Stack>
    </AppBar>
  </div>
)

export default Navbar
