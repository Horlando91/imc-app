import React, {useContext} from 'react';
import { ImcOperations } from '../operations/ImcOperations';
import { UserDataContext } from '../context/UserDataContext';

export const ImcGcData = ({ grasaCorporal, tipoGrasa }) => {

    
  


  return (
    <div>
        <p>GC: { grasaCorporal }</p>
        <p>Grasa corporal es: <small style={{color: grasaCorporal? "red": "red"}}>{ "" }</small></p>
    </div>
  )
}
