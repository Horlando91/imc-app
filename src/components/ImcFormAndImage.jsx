import React, {useState} from 'react'
import { ImcForm } from './ImcForm'
import { ImcGenderImage } from './ImcGenderImage'

export const ImcFormAndImage = ({ calcularGrasaCorporal, resetGc}) => {

  return (
    <div className='container d-flex justify-content-center'>
        <div className="col-3">
                <ImcForm
                    calcularGrasaCorporal={ calcularGrasaCorporal }
                    resetGc = { resetGc }
                />
        </div>
        <div className="col-3 d-flex justify-content-center">
                <ImcGenderImage
                />
        </div>
    </div>
    
  )
}
