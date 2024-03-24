
import tallimetro from '../images/tallimetro_movil.png';
import hombre from '../images/hombre.png';
import mujer from '../images/mujer.png';


export const ImcGenderImage = ({ gender }) => {

  return (
    <div className="row">
         { /*<div className="col-3">
            <img 
            className=''
            alt='tallimetro'
            src={tallimetro}
            width={'120px'}
            
            height={'320px'}
            />
        </div>*/}

       <div className="col 6">
        <img 
            className=''
            alt='person'
            src={ gender === 'masculino' ? hombre : mujer }
            width={'120px'}
            height={'320px'}
            /> 
       </div>
    </div>
    
  )
}
