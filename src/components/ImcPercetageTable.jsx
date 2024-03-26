
import { useContext } from 'react';
import jsonData from '../components/files/dataTable.json';
import { UserDataContext } from '../context/UserDataContext';

export const ImcPercetageTable = () => {

    const { data } = useContext(UserDataContext);
    const { genero, edad } = data;

    const tipoDataGenero = genero === 'masculino' ? 'hombres' : 'mujeres';
    
    const dataNumber = (edad) => {

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
        <table className="table table-dark table-striped" >
        <thead>
        <tr>
            <th scope="col" className='bg bg-primary'>Descripción</th>
            <th scope="col" className='bg bg-primary'>{tipoDataGenero}</th>
        </tr>
        </thead>
        <tbody>
        {
            jsonData[tipoDataGenero][dataNumber(edad)].datos.map((data, index) =>  (
                <tr key={ index }>
                <th scope="row">{ data.grasa }</th>
                <td>{ data.datoMin } {data.datoMax?"-":">"} {data.datoMax} %</td>
            </tr>
            ))
        }
        </tbody>
    </table>
        </div>
   
  </div>
  )
}
