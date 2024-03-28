import React, {useState} from 'react'
import { ImcForm } from './ImcForm'
import { ImcGenderImage } from './ImcGenderImage'

export const ImcFormAndImage = ({ calcularGrasaCorporal, resetGc}) => {

  return (
        <div className="row d-flex justify-content-center">
          <div className="col-5 col-sm-3 col-md-3 col-lg-2">
                <ImcForm
                    calcularGrasaCorporal={ calcularGrasaCorporal }
                    resetGc = { resetGc }
                />
          </div>
              <div className="col-4 col-sm-3 col-md-3 col-lg-2 ">
                <ImcGenderImage
                    />
              </div>
        </div>
        
    
    
  )
}
