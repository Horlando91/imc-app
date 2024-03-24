import React, {useState} from 'react'
import { ImcForm } from './ImcForm'
import { ImcGenderImage } from './ImcGenderImage'

export const ImcFormAndImage = ({ calcularGrasaCorporal, resetGc }) => {

  const [gender, setGender] = useState('masculino');

  const getGender = (gender) =>{
    setGender(gender.target.value);
  }

  return (
    <div className='container d-flex justify-content-center'>
        <div className="col-3">
                <ImcForm
                    calcularGrasaCorporal={ calcularGrasaCorporal }
                    getGender={ getGender }
                    resetGc = { resetGc }
                />
        </div>
        <div className="col-9 d-flex justify-content-center">
                <ImcGenderImage
                    gender = { gender }
                />
        </div>
    </div>
    
  )
}
