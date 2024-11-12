import { useState } from "react";
/*Simulacion de consumo de un servicio para obtener daltos */
const API_SERVICE = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Jerry Mattedi',
        folioDate: '2021/05/19 10:10:00 AM',
        folioSAC: '251-661-5362',
        folioMV: '12345678',
        register: true,
        docs: [
          {
            id: 'doc01',
            label: 'Identificación'
          },
          {
            id: 'doc02',
            label: 'Comprobante'
          },
          {
            id: 'doc03',
            label: 'Propiedad'
          },
          {
            id: 'doc04',
            label: 'Contrato'
          },
          {
            id: 'doc05',
            label: 'Contacto'
          },
          {
            id: 'doc06',
            label: 'Fotografia'
          },
        ]
      });
    }, 1500);
  });
  /*custom hook para la Simulacion de consumo de un servicio para obtener daltos */
  const useGetDataUser = () => {
    const [userData, setUserData] = useState()
    if (!userData) {
      API_SERVICE.then((data) => {
        setUserData(data)
      })
    }
    return userData
  }

  export default useGetDataUser