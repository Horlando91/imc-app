import { useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { UserDataContext } from "../context/UserDataContext";
import femaleimage from '../images/female.png';
import maleimage from '../images/male.png';
import { ImcButtonImage } from "./ImcButtonImage";

export const ImcForm = ({ calcularGrasaCorporal, resetGc}) => {
  
    const { data, setDataUser } = useContext(UserDataContext);
    const { edadUser, generoUser } = data;
    

    const [first, setfirst] = useState({
      malebtn:false,
      femalebtn:false
    })
   
    const { estatura, edad, peso, onInputChange, onResetForm } = useForm({
        estatura:'',
        edad:'',
        peso:'',
        genero: 'masculino'
    });
    console.log({ data });
    const onFormSubmit = (event) =>{
        event.preventDefault();

        if (  estatura <= 1 || edad <= 1 || peso <= 1) return;

       const data = {
            estatura,
            edad,
            peso,
            genero: generoUser
       }


       
      calcularGrasaCorporal(data);
      setDataUser(edad, genero);
    } 

    const resetValues = () => {
      resetGc();
      onResetForm();
    }

    const setGenderImage = ( gender ) => {
      setDataUser(0, gender);
      //console.log(gender);
      if (gender=='masculino') {
        setfirst({malebtn:true, femalebtn:false});
      }
      else{
        setfirst({malebtn:false, femalebtn:true});
      }
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

      <div className="row d-flex justify-content-center">    
        <ImcButtonImage
            setGenderImage={setGenderImage}
            nombre={"Mujer"}
            genero={'femenino'}
            image={femaleimage}
            selbtn={first.femalebtn}
            marginend={'me-2'}
            edad={edadUser}
            
        />
        <ImcButtonImage
            setGenderImage={setGenderImage}
            nombre={"Hombre"}
            genero={'masculino'}
            selbtn={first.malebtn}
            image={maleimage}
            
        />
      </div>

      <div className="row d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary" style={{width:'40%'}}> Calcular </button>
        <button type='reset' className="btn btn-primary ms-3" style={{width:'40%'}} onClick={ resetValues }>Reset</button>
      </div>
     </form>
  )
}
