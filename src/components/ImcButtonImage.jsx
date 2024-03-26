
export const ImcButtonImage = ({setGenderImage, nombre, genero, image, selbtn, marginend, edad }) => {

    const buttoncolor = selbtn? 'btn btn-primary' : 'btn btn-outline-primary';
    
  return (
    <button type="button" className={buttoncolor +" "+ marginend}
            style={{width:'30%'}}
            onClick={() => setGenderImage(genero)} /*disabled={edad!=0? false : true}*/ > {nombre} <img  className="img-fluid" src={image} alt=""/> </button>
  )
}
