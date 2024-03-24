import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UserDataContext } from "../context/UserDataContext";

export const ImcForm = ({ calcularGrasaCorporal, getGender, resetGc }) => {

    const { setDataUser } = useContext(UserDataContext);

    const { estatura, edad, peso, genero, onInputChange, onResetForm } = useForm({
        estatura:'',
        edad:'',
        peso:'',
        genero:'masculino'
    });

    const onFormSubmit = (event) =>{
        event.preventDefault();

        if (  estatura <= 1 || edad <= 1 || peso <= 1) return;

       const data = {
            estatura,
            edad,
            peso,
            genero
       }

      calcularGrasaCorporal(data);
      setDataUser(edad, genero);
    } 

    const  handleGender = ( gender ) => {
      getGender(gender);
      onInputChange(gender);
    }

    const resetValues = () => {
      resetGc();
      onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmit}  >
      <div className="mb-3">
          <label htmlFor="inputestatura" className="form-label">Estatura</label>
          <input  type="number" 
                  className="form-control" 
                  id="estatura" 
                  aria-describedby="estaturaHelp"
                  placeholder="Ejemplo: 170"
                  name="estatura"
                  onChange={onInputChange}
                  value={estatura}
                  max={255}
                  min={0}
                  />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input  type="number" 
                  className="form-control" 
                  id="edad" 
                  aria-describedby="edadHelp"
                  placeholder="Ejemplo: 33"
                  name="edad"
                  onChange={ onInputChange }
                  value={ edad }
                  min={0}
                  />
        </div>
        <div className="mb-3">
          <label htmlFor="peso" className="form-label">Peso (Kg)</label>
          <input  type="number" 
                  className="form-control" 
                  id="peso" 
                  aria-describedby="pesoHelp"
                  placeholder="Ejemplo: 75.23"
                  name="peso"
                  onChange={ onInputChange }
                  value={ peso }
                  step={0.01}
                  min={0}
                  />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">genero</label>
              <select onChange={ handleGender } className="form-select" name="genero" id="genero" aria-label="Default select example" defaultValue={''}>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
        </div>
      <div className="row d-flex justify-content-center">
        <button type="submit" className="btn btn-primary" style={{width:'40%'}}> Calcular </button>
        <button type='reset' className="btn btn-primary ms-3" style={{width:'40%'}} onClick={ resetValues }>Reset</button>
      </div>
     </form>
  )
}
