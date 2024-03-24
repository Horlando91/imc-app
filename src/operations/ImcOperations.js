import { useState } from "react";
import jsonData from '../components/files/dataTable.json';

export const ImcOperations = (genero, edad) => {

    const [ gc, setGc ] = useState(0);

    

    const dataNumber = (edad) => {

      if (edad >= 20 && edad <= 39) {
          return '20-39';
      }

      if (edad >= 40 && edad <= 59) {
          return '40-59';
      }

      if (edad >= 60 && edad <= 79) {
          return '60-79';
      }
  }

  const getValueGrasa = ( data ) => {

    console.log("edad:" + edad);
    
    if (edad >= data.datoMin && edad <= data.datoMax ) {
      console.log(data.grasa);
      return data.grasa;
    }

    return data.grasa;
  }

  const obtenerTipoGrasa = () => {
   
    console.log({genero, edad});

    const tipoDataGenero = genero === 'masculino' ? 'hombres' : 'mujeres';

   return jsonData[tipoDataGenero][dataNumber(edad)].datos.find(getValueGrasa).grasa;
    
  }

  return {
    gc,
    h: obtenerTipoGrasa()
  }
}
