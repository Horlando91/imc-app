import { useState } from 'react';


export const useGc = ( initialState = {} ) => {

   
    const [gc, setGc] = useState( initialState );

  /*
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
    
  }*/

    const calcularGrasaCorporal = ({ peso, estatura, edad, genero }) => {
       
    const estaturaconcoma = estatura/100;
    const varDepSexo = 10.8; 
    const sexNumber = genero  === 'masculino' ? 1 : 0;
    const IMC = ( peso / (estaturaconcoma * estaturaconcoma)).toFixed(2);
       
    // Grasa corporal
    const GC = (1.2 * (IMC)) + (0.23 * edad) - ( varDepSexo * (sexNumber)) - 5.4
    //setTipoGc(tipoGrasaCorporal(GC))
    //setTipoGc(tipoGrasaCorporal(GC))
    console.log(GC.toFixed(2));
    //setGc({grasaCorporal: GC.toFixed(2), tipoGrasa: obtenerTipoGrasa()});
    setGc({grasaCorporal: GC.toFixed(2)});
        return GC;
    }

    const calcularTipoGrasa = () => {
      
    }

    const resetGc = () => {
      setGc(initialState);
    }

  return {
    gc,
    calcularGrasaCorporal,
    resetGc
  }
}
