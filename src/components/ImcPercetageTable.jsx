
import { useContext } from 'react';
import jsonData from '../components/files/dataTable.json';
import { UserDataContext } from '../context/UserDataContext';
import { ImcOperations } from '../operations/ImcOperations';

export const ImcPercetageTable = () => {

    const { data } = useContext(UserDataContext);
    const { genero, edad } = data;
    const {h} = ImcOperations(genero, edad);

    const tipoDataGenero = genero === 'masculino' ? 'hombres' : 'mujeres';
    

    console.log(edad);

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
        <h3>Rango de edad: {dataNumber(edad)}</h3>
        <table className="table table-dark table-striped" >
           
        <thead>
        <tr>
            <th scope="col">Descripción</th>
            <th scope="col">{tipoDataGenero}</th>
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
    <h1>{"grasa:" + h}</h1>
        </div>
   
  </div>
  )
}
