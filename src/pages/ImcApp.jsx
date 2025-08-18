
import { HeaderAnimate, ImcFormAndImage, ImcGcData, ImcPercetageTable } from '../components'

import { UserDataProvider } from '../context/UserDataProvider';

import { useGc } from '../hooks/useGc'

import '../styles/effects.css';
import '../styles/form.css';

export const ImcApp = () => {

    const {gc, calcularGrasaCorporal, resetGc} = useGc({
        grasaCorporal:0,
        tipoGrasa: ''
    });

  return (
    <UserDataProvider>
        <div className="container text-center mb-5 mt-5">
                    <HeaderAnimate />
        </div>
        <div className="container p-1 border-primary box">
            <ImcFormAndImage
                calcularGrasaCorporal={ calcularGrasaCorporal }
                resetGc={ resetGc }
            />
        </div>

        {   gc.grasaCorporal!=0 && (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
               
                <div className="col-sm-12 col-md-6">
                    <ImcPercetageTable />
                </div>
                <div className="col-sm-12 col-md-6 resultados">
                <h3>Resultados obtenidos</h3>
                    <ImcGcData
                        gc={ gc }
                    />
                </div>
            </div>
            </div>
        )}
    </UserDataProvider>
  )
}
