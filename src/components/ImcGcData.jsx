import React, {useContext} from 'react';
import { ImcOperations } from '../operations/ImcOperations';
import { UserDataContext } from '../context/UserDataContext';

export const ImcGcData = ({ gc }) => {

    const {grasaCorporal, tipoGrasa} = gc;
  
  return (
    <>
        <div className="shadow p-3 mb-5 bg-body rounded"><p className='fs-3 fw-normal'>Grasa Corporal: { grasaCorporal + " %" }</p></div>
        <div className="shadow p-3 mb-5 bg-body rounded"><p className='fs-3 fw-normal'>Tipo de Grasa: <small style={{color: grasaCorporal? "red": "red"}}>{ tipoGrasa }</small></p></div>
    </>
  )
}
