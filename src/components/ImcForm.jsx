import { useContext, useState } from "react";

import { useForm } from "../hooks/useForm";

import { UserDataContext } from "../context/UserDataContext";

import { symbologyfemale, symbologymale } from "../images";

import { ImcButtonImage } from "./ImcButtonImage";

export const ImcForm = ({ calcularGrasaCorporal, resetGc}) => {
  
    const { data, setDataUser } = useContext(UserDataContext);
    const { genero } = data;
    

    const [selbutton, setSelButton] = useState({
      malebtn:true,
      femalebtn:false
    })
   
    const { estatura, edad, peso, onInputChange, onResetForm } = useForm({
        estatura:'',
        edad:'',
        peso:'',
        genero: 'masculino'
    });
    
    const onFormSubmit = (event) =>{
        event.preventDefault();

        if (  estatura <= 1 || edad <= 1 || peso <= 1) return;

       const data = {
            estatura,
            edad,
            peso,
            genero: genero
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
     
      if (gender=='masculino') {
        setSelButton({malebtn:true, femalebtn:false});
      }
      else{
        setSelButton({malebtn:false, femalebtn:true});
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

      <div className="row d-flex justify-content-center gx-1"> 
          <ImcButtonImage
              setGenderImage={setGenderImage}
              nombre={"Mujer"}
              genero={'femenino'}
              image={symbologyfemale}
              selbtn={selbutton.femalebtn}
             
          />
          <ImcButtonImage
              setGenderImage={setGenderImage}
              nombre={"Hombre"}
              genero={'masculino'}
              selbtn={selbutton.malebtn}
              image={symbologymale} 
             
          />
      </div>

      <div className="row g-1 mt-4">
        <div className="col-12">
          <button type="submit" className="btn btn-success form-button"> Calcular </button>
        </div>
        
        <div className="col-12">
        <button type='reset' className="btn btn-danger form-button"  onClick={ resetValues }> Reset </button>
        </div>
      </div>
     </form>
  )
}
