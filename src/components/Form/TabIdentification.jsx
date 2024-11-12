import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import CircularProgress from '@mui/material/CircularProgress';
import ImgCard from './ImgCard'
import Style from './style.module.css'
import API_IMAGES from './loadImg';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import { ACTIONS_TYPE } from './statics';


export default function TabIdentification({
  docs = [],
  state,
  dispatch = () => { }
}) {
  const [docId, setDocId] = useState('doc01');
  const [images, setImages] = useState()

  useEffect(() => {
    //Simulacion de consumo de API para obtener imagenes
    if (!images) {
      API_IMAGES(docId).then((img) => {
        setImages(img)
      })
    }
  }, [images, docId])


  const handleChange = (event, newValue) => {
    setDocId(newValue);
    setImages(undefined)
  };

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={docId}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {docs.map((doc) => (<Tab key={"tab_" + doc.id} label={doc.label} value={doc.id} />))}
          </TabList>
        </Box>
        <Box>
          <div style={{ width: "100%", display: 'flex', justifyContent: 'space-evenly' }} >
            {Array.isArray(images) ? (
              <>{images.map((img, index) => <ImgCard key={"d_" + docId + "_img_" + index} {...img} />)}</>
            ) : (<>
              {[1, 2, 3].map((item, index) => (<CircularProgress key={"d_" + docId + "_ske_" + index} />))}
            </>)}

          </div>
        </Box>
      </TabContext>
    </Box>
      <div style={{position: "relative", marginTop: "15px"}} >
        <div style={{position: "absolute", left: "-145px"}} >
          <p>Tab Identificacion</p>
        </div>
      <table className={Style.table} style={{ width: '90%' }} >
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }} >Seleciona tu respuesta de acuerdo a lo que visualizas en las fotografias</th>
            <th>SI</th>
            <th>NO</th>
            <th>NO APLICA</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{border: state.errors.find(e=>e==="idColor") && "2px solid red"}} >
            <td><FormLabel>¿La digitalizacion de la ID para este folio esta a color?</FormLabel></td>
            {[true, false, null].map((value, index) => {
              return (
                <td key={"section_1_question_" + index}>
                  <Checkbox
                    checked={state.idColor === value}
                    onChange={() => { dispatch({type: ACTIONS_TYPE.setIdColor, value: value}) }}
                  />
                </td>
              )
            })}
          </tr>
          <tr style={{border: state.errors.find(e=>e==="idMatch") && "2px solid red"}} >
            <td><FormLabel>¿Las fotos en ambas ID, expediente y digitalizada coinciden?</FormLabel></td>
            {[true, false, null].map((value, index) => {
              return (
                <td key={"section_1_question_" + index}>
                  <Checkbox
                    checked={state.idMatch===value}
                    onChange={() => { dispatch({type: ACTIONS_TYPE.setIdMatch, value: value}) }}
                  />
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
