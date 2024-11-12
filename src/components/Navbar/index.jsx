import React from 'react'
import { styled } from '@mui/material/styles';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import UserInfo from './UserInfo';
import Progress from './Progress';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

export default function Top({
    open,
    handleDrawerOpen
}) {
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                        open && { display: 'none' },
                    ]}
                >
                    <MenuIcon color='primary' />
                </IconButton>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FingerprintIcon color='primary' sx={{ fontSize: 25 }} />
                        <Typography variant="h6" color='primary' noWrap component="div">
                            Biometricos
                        </Typography>
                    </div>
                    <div style={{ minWidth: '30%', margin: '15px' }} >
                        <UserInfo />
                        <Progress />
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    )
}
