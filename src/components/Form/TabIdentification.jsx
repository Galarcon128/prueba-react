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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useWindowWidth from '../MobileDetect';


export default function TabIdentification({
  docs = [],
  state,
  dispatch = () => { }
}) {
  const isMobile = useWindowWidth()
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
      <Box>
        {!isMobile ? (
          <TabContext value={docId}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList scrollButtons={'auto'} onChange={handleChange} >
                {docs.map((doc) => (<Tab key={"tab_" + doc.id} label={doc.label} value={doc.id} />))}
              </TabList>
            </Box>
          </TabContext>
        ) : (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="photoLabel">Documentos</InputLabel>
              <Select
                labelId="photoLabel"
                id="demo-simple-select"
                value={docId}
                label="Documentos"
                onChange={(e) => { setDocId(e.target.value); setImages(undefined) }}
              >
                {docs.map((doc) => (<MenuItem key={"select_" + doc.id} value={doc.id}>{doc.label}</MenuItem>))}
              </Select>
            </FormControl>
          </Box>
        )}
        <Box>
          <div style={{ width: "100%", display: 'flex', justifyContent: 'space-evenly' }} >
            {Array.isArray(images) ? (
              <>{images.map((img, index) => <ImgCard key={"d_" + docId + "_img_" + index} {...img} />)}</>
            ) : (<>
              {[1, 2, 3].map((item, index) => (<CircularProgress key={"d_" + docId + "_ske_" + index} />))}
            </>)}

          </div>
        </Box>
      </Box>
      <div style={{ position: "relative", marginTop: "15px" }} >
        <div style={{ position: "absolute", left: "-145px" }} >
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
            <tr style={{ border: state.errors.find(e => e === "idColor") && "2px solid red" }} >
              <td><FormLabel>¿La digitalizacion de la ID para este folio esta a color?</FormLabel></td>
              {[true, false, null].map((value, index) => {
                return (
                  <td key={"section_1_question_" + index}>
                    <Checkbox
                      checked={state.idColor === value}
                      onChange={() => { dispatch({ type: ACTIONS_TYPE.setIdColor, value: value }) }}
                    />
                  </td>
                )
              })}
            </tr>
            <tr style={{ border: state.errors.find(e => e === "idMatch") && "2px solid red" }} >
              <td><FormLabel>¿Las fotos en ambas ID, expediente y digitalizada coinciden?</FormLabel></td>
              {[true, false, null].map((value, index) => {
                return (
                  <td key={"section_1_question_" + index}>
                    <Checkbox
                      checked={state.idMatch === value}
                      onChange={() => { dispatch({ type: ACTIONS_TYPE.setIdMatch, value: value }) }}
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


