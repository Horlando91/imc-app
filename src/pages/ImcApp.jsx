import { HeaderAnimate } from '../components/HeaderAnimate'
import { ImcFormAndImage } from '../components/ImcFormAndImage';
import { ImcGcData } from '../components/ImcGcData';
import { ImcPercetageTable } from '../components/ImcPercetageTable';
import { UserDataProvider } from '../context/UserDataProvider';
import { useGc } from '../hooks/useGc'

export const ImcApp = () => {

    const {gc, calcularGrasaCorporal, resetGc} = useGc({
        grasaCorporal:0,
        tipoGrasa: ''
    });

  return (
    <UserDataProvider>

        <div className="col-12">
                    <HeaderAnimate />
        </div>
        <div className="container">
            <div className="row">
            <ImcFormAndImage
                calcularGrasaCorporal={ calcularGrasaCorporal }
                resetGc={ resetGc }
            />
            </div>
        </div>

        {   gc.grasaCorporal!=0 && (
            <div className="row">
            
            <div className="col-12">
                <h4>Resultados</h4>

                <ImcPercetageTable />

            </div>

            <div className="col-6">
                <ImcGcData
                    gc={ gc }
                />
            </div>
        </div>
        )}

    </UserDataProvider>
  )
}
