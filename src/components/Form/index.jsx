import React, { useReducer, useState } from 'react'
import UserTable from './UserTable'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TabIdentification from './TabIdentification';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import FinishDialog from './FinishDialog';
import useGetDataUser from './apiServices';
import ExternalLinks from './ExternalLinks';
import { ACTIONS_TYPE } from './statics';
import useWindowWidth from '../MobileDetect';

function SelectItem({
  options = [],
  label = "",
  select,
  fullWidth = false,
  onSelectOption = ()=>{},
  error = false
}) {
  const [expedient, setExpedient] = useState(select);
  const handleChange = (event) => {
    setExpedient(event.target.value);
    onSelectOption(options[event.target.value])
  };

  return (
    <FormControl sx={{ m: 1, minWidth: "250px" }} size="small" fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={expedient}
        label={label}
        onChange={handleChange}
        error={error}
      >
        {options.map((label, index) => (
          <MenuItem key={"option_" + index + "_" + label} value={index}>{label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const initialArgs = {
  idColor: undefined,
  idMatch: undefined,
  currentInfo: undefined,
  infoMatchId: undefined,
  response: undefined,
  reason: undefined,
  observations: "",
  errors: []
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS_TYPE.setIdColor:
      return {...state, idColor: action.value}
    case ACTIONS_TYPE.setIdMatch:
      return {...state, idMatch: action.value}
    case ACTIONS_TYPE.setCurrentInfo:
      return {...state, currentInfo: action.value}
    case ACTIONS_TYPE.setInfoMatchId:
      return {...state, infoMatchId: action.value}
    case ACTIONS_TYPE.setResponse:
      return {...state, response: action.value}
    case ACTIONS_TYPE.setReason:
      return {...state, reason: action.value}
    case ACTIONS_TYPE.setObservations:
      return {...state, observations: action.value}
    case ACTIONS_TYPE.clean:
       return {...initialArgs}
    case ACTIONS_TYPE.check:
        return{...state, errors: action.value}
    default:
      return state
  }
}

export default function Form() {
  const isMobile = useWindowWidth()
  const [state, dispatch] = useReducer(reducer, initialArgs)
  /*Simulacion de consumo de un servicio para obtener daltos */
  const userData = useGetDataUser()

  console.log(state);
  

  if (!userData) {
    return <div style={{ width: "100%", display: 'flex', justifyContent: 'space-around' }} > <CircularProgress /></div>
  }
  return (
    <div>
      <UserTable userData={userData} />
      <div style={{ display: !isMobile ? 'flex' : 'block' }} >
        <div>
          <SelectItem options={["captación", "crédito"]} label='Expediente' select={0} />
        </div>
       
        <div>
          <TabIdentification docs={userData.docs} state={state} dispatch={dispatch} />
          <ExternalLinks state={state} dispatch={dispatch} />
        </div>
        
      </div>
      <br />
      <div style={{ border: '1px solid black', padding: "20px"}} >
        <p><b>Respuesta de Solicitud</b></p>
        <div style={{ display: 'flex', gap: "20px", flexDirection: isMobile ? "column" : "row" }} >
          <div style={{ width: "450px" }}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td><p><b>Respuesta</b></p></td>
                  <td><SelectItem options={["Aprobada", "Rechazada"]} label='Respuesta' fullWidth
                    error={state.errors.find(e=>e==="response")}
                    onSelectOption={(value)=>{dispatch({type: ACTIONS_TYPE.setResponse, value: value})}}
                  /></td>
                </tr>
                <tr>
                  <td><p><b>Motivo</b></p></td>
                  <td><SelectItem options={["Fotografia del cliente no coincide", "Fotografia borrosa o manipulada", "Fotografia no visible"]} label='Motivo' fullWidth
                    error={state.errors.find(e=>e==="reason")}
                    onSelectOption={(value)=>{dispatch({type: ACTIONS_TYPE.setReason, value: value})}}
                  /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ width: "100%" }} >
            <TextField
              id="observaciones"
              label="Observaciones"
              multiline
              fullWidth
              rows={4}
              maxRows={4}
              value={state.observations}
              onChange={(e)=>{dispatch({type: ACTIONS_TYPE.setObservations, value: e.target.value})}}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }} >
          <FinishDialog state={state} dispatch={dispatch} />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
