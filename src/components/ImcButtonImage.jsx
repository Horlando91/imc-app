
export const ImcButtonImage = ({setGenderImage, nombre, genero, image, selbtn, marginend }) => {

    const buttoncolor = selbtn? 'btn btn-primary' : 'btn btn-outline-primary';
    
  return (
    <button type="button" className={buttoncolor +" "+ marginend}
            style={{width: "35%"}}
            onClick={() => setGenderImage(genero)}>  <img  className="img-fluid" src={image} alt=""/> </button>
  )
}
