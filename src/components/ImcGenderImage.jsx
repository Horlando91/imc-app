
import tallimetro from '../images/tallimetro_movil.png';
import hombre from '../images/hombre.png';
import mujer from '../images/mujer.png';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext';


export const ImcGenderImage = () => {

  const { data } = useContext(UserDataContext);
  const { genero } = data;

  return (
      <img 
            className="img-fluid"
            alt='person'
            src={ genero === 'masculino' ? hombre : mujer }
            />     
  )
}
