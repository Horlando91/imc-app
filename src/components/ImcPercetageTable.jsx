
import { useContext } from 'react';
import jsonData from '../components/files/dataTable.json';
import { UserDataContext } from '../context/UserDataContext';

export const ImcPercetageTable = () => {

    const { data } = useContext(UserDataContext);
    const { edad, genero } = data;

    const tipoDataGenero = genero === 'masculino' ? 'hombres' : 'mujeres';
    
    const dataNumber = ( edad ) => {

        if (edad >= 20 && edad <= 39) {
            return '20-39';
        }

        if (edad >= 40 && edad <= 59) {
            return '40-59';
        }

        if (edad >= 60 && edad <= 79) {
            return '60-79';
        }
    }

  return (
    <div className='container'>
        <div className="row">
        <h5 className='text-center'>Rango de edad {"["+dataNumber(edad)+"]"}</h5>
        <table className="table table-light border border border-primary-subtle border-opacity-50" >
        <thead>
        <tr >
            <th scope="col" >Descripción</th>
            <th scope="col" >{tipoDataGenero}</th>
        </tr>
        </thead>
        <tbody>
        {
            jsonData[tipoDataGenero][dataNumber(edad)].datos.map((data, index) =>  (
                <tr key={ index }>
                <th scope="row">{ data.grasa }</th>
                <td>{ data.datoMin || data.datoTop } {data.datoTop?">":"-"} {data.datoMax} %</td>
            </tr>
            ))
        }
        </tbody>
    </table>
        </div>
   
  </div>
  )
}
