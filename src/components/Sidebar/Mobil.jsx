import * as React from 'react';
import Navbar from '../Navbar';
import Drawer from '@mui/material/Drawer';
import UserInfo from '../Navbar/UserInfo';
import Progress from '../Navbar/Progress';

export default function Movil({ open, handleDrawerOpen,handleDrawerClose }) {
    return (
        <div>
            {!open &&(
                <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />
            )}
            
            <Drawer open={open} onClose={handleDrawerClose}>
                <div style={{width: "250px",display: 'flex', flexDirection: 'column'}}>
                <div style={{margin: '15px' }} >
                    <UserInfo />
                <Progress />
                </div>
                
                <p><b>OPTIONS</b></p>
                </div>
            </Drawer>
        </div>
    );
}
