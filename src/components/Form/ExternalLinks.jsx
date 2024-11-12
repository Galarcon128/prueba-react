import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import Style from './style.module.css'
import { ACTIONS_TYPE } from './statics';




export default function Data({ state, dispatch }) {

  const handleOpenLink = (link = "www.google.com") => {
    window.open(link, "_blank"); // URL que deseas abrir
  };
  return (
    <div style={{ position: "relative", marginTop: "15px" }} >
      <div style={{ position: "absolute", left: "-145px" }} >
        <p>Links Externos</p>
      </div>
      <div>
        <br />
        <div>
          <Stack spacing={3} direction="row">
            <Button variant="outlined" onClick={() => { handleOpenLink("https://listanominal.ine.mx/scpln/") }}>INE</Button>
            <Button variant="outlined" onClick={() => { handleOpenLink("https://www.gob.mx/curp/") }} >CURP</Button>
            <Button variant="outlined" onClick={() => { handleOpenLink("https://www.correosdemexico.gob.mx/sslservicios/consultacp/descarga.aspx") }} >SEPOMEX</Button>
            <Button variant="outlined" onClick={() => { }} >OTRO</Button>
          </Stack>
        </div>
        <br />

      </div>
      <table className={Style.table} style={{ width: '90%' }} >
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }} >Seleciona tu respuesta de acuerdo al resultado de la busqueda</th>
            <th>SI</th>
            <th>NO</th>
            <th>NO APLICA</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{border: state.errors.find(e=>e==="currentInfo") && "2px solid red"}} >
            <td><FormLabel>¿La información devuelta por tus consultas es vigente?</FormLabel></td>
            {[true, false, null].map((value, index) => {
              return (
                <td key={"section_1_question_" + index}>
                  <Checkbox
                    checked={state.currentInfo===value}
                    onChange={() => { dispatch({type: ACTIONS_TYPE.setCurrentInfo, value: value}) }}
                  />
                </td>
              )
            })}
          </tr>
          <tr style={{border: state.errors.find(e=>e==="infoMatchId") && "2px solid red"}} >
            <td><FormLabel>¿La informacion por las consultas coincide con la identificacion del Cliente?</FormLabel></td>
            {[true, false, null].map((value, index) => {
              return (
                <td key={"section_1_question_" + index}>
                  <Checkbox
                    checked={state.infoMatchId===value}
                    onChange={() => { dispatch({type: ACTIONS_TYPE.setInfoMatchId, value: value}) }}
                  />
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
