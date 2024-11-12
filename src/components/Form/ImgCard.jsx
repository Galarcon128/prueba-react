import React, { useState } from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ImgCard({
    image = "",
    alt = "",
    name = ""
}) {
    const [open, setOpen] = useState(false);
   // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea /*onClick={handleOpen}*/ >
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={alt}
                    />
                </CardActionArea>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <div>
                        <img src={image} alt={alt} />
                        <Button onClick={handleClose} >Cerrar</Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
