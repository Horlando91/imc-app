import { useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext';

import { hombre, mujer } from '../images';

export const ImcGenderImage = () => {

  const { data } = useContext(UserDataContext);
  const { genero } = data;

  return (
      <img 
            className="img-fluid my-image"
            alt='person'
            src={ genero === 'masculino' ? hombre : mujer}
            />     
  )
}
