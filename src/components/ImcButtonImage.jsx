
export const ImcButtonImage = ({setGenderImage, nombre, genero, image, selbtn, marginend }) => {

    const buttoncolor = selbtn? 'btn btn-primary' : 'btn btn-outline-primary';
    //console.log("dato:"+ gc.grasaCorporal)
  return (
    <button type="button" className={buttoncolor +" "+ marginend}
            style={{width:'30%'}}
            onClick={() => setGenderImage(genero)}> {nombre} <img  className="img-fluid" src={image} alt=""/> </button>
  )
}
