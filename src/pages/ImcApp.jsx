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
        <div className="container p-4 border rounded border-primary">
            <div className="row">
            <ImcFormAndImage
                calcularGrasaCorporal={ calcularGrasaCorporal }
                resetGc={ resetGc }
            />
            </div>
        </div>

        {   gc.grasaCorporal!=0 && (
            <div className="container mt-5">
                <div className="row">
               
                <div className="col-6">
                    <ImcPercetageTable />
                </div>
                <div className="col-6">
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
