import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ACTIONS_TYPE } from './statics'
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FinishDialog({
    state,
    dispatch = () => { }
}) {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        const errors = validateForm(state)
        if (errors.length === 0) {
            setOpen(true);
        }else{
            window.scrollTo(0,0)
            dispatch({type: ACTIONS_TYPE.check, value: errors})
            alert("faltan campos por completar en el formulario")
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd = ()=>{
        dispatch({type: ACTIONS_TYPE.clean})
        setOpen(false);
    }
    return (
        <>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>
                Finalizar
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="finishDialog"
            >
                <DialogTitle>{"Los datos por registrar: "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="finish-dialog-description">
                        <p><b>¿La digitalizacion de la ID para este folio esta a color?</b></p>
                        <p>{state.idColor ? "SI" : state.idColor===null ? "No aplica" : "NO"}</p>
                        <p><b>¿Las fotos en ambas ID, expediente y digitalizada coinciden?</b></p>
                        <p>{state.idMatch ? "SI" : state.idMatch===null ? "No aplica" : "NO"}</p>
                        <p><b>¿La información devuelta por tus consultas es vigente?</b></p>
                        <p>{state.currentInfo ? "SI" : state.currentInfo===null ? "No aplica" : "NO"}</p>
                        <p><b>¿La informacion por las consultas coincide con la identificacion del Cliente?</b></p>
                        <p>{state.infoMatchId ? "SI" : state.infoMatchId===null ? "No aplica" : "NO"}</p>
                        <p><b>Respuesta:</b></p>
                        <p>{state.response}</p>
                        <p><b>Motivo:</b></p>
                        <p>{state.reason}</p>
                        <p><b>Observaciones:</b></p>
                        <p>{state.observations}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Editar</Button>
                    <Button onClick={handleAdd}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

function validateForm(state){
    let errors = []
    if (state.idColor === undefined) {
        errors.push('idColor')
    }
    if (state.idMatch === undefined) {
        errors.push('idMatch')
    }
    if (state.currentInfo === undefined) {
        errors.push('currentInfo')
    }
    if (state.infoMatchId === undefined) {
        errors.push('infoMatchId')
    }
    if (state.response === undefined) {
        errors.push('response')
    }
    if (state.reason === undefined) {
        errors.push('reason')
    }
    return errors
}