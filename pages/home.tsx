import { Box, Grid } from '@mui/material'
import React from 'react'
import SidePanel from '../components/chat/sidePanel'
import ChatPanel from '../components/chat/chatPanel'

const Home = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "110vh",
            }}
        >
            <Box sx={{
                backgroundColor: "#F8EDEB",
                width: "1000px",
                height: "550px",
                borderRadius: "30px",
                display: "flex",
                boxShadow: 13
            }}>
               <SidePanel />
               <ChatPanel />
            </Box>
        </Grid>

    )
}

export default Home