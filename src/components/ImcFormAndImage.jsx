
import { ImcForm, ImcGenderImage } from "./";

export const ImcFormAndImage = ({ calcularGrasaCorporal, resetGc}) => {

  return (
        <div className="row d-flex justify-content-center my-form">
            <div className="col col-sm-3 col-md-3 col-lg-3">
                <ImcForm
                    calcularGrasaCorporal={ calcularGrasaCorporal }
                    resetGc = { resetGc }
                />
            </div>
            <div className="col col-sm-3 col-md-3 col-lg-3">
                  <ImcGenderImage
                  />
            </div>
        </div>
  )
}
