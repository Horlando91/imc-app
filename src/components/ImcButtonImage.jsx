
export const ImcButtonImage = ({setGenderImage, genero, image, selbtn}) => {

    const buttoncolor = selbtn? 'btn btn-primary' : 'btn btn-outline-primary';
    
  return (
    <div className="col-5">
       <button type="button" className={buttoncolor}
            style={{width: "100%"}}
            onClick={() => setGenderImage(genero)}>  <img  className="img-fluid" src={image} alt=""/> </button>
    </div>
   
  )
}
