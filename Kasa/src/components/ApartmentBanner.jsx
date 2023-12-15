import React, {useState} from "react";
import "./ApartmentBanner.scss";


export function ApartmentBanner(props) {
  const pictures = props.pictures;
  
  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture -1;
    if (newCurrentPicture < 0){
      setCurrentPicture(pictures.length -1)
      return;
    }
      setCurrentPicture(currentPicture - 1);
  };
    
  return (
    <div className="box__carousel">
      <div className="image__container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ))}
      </div>
      
      <div>
        <button className ="btn btn-next"onClick = {moveToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <span className="carousel-counter">
        {currentPicture + 1} / {pictures.length}
      </span>
      
      <div>
        <button className ="btn btn-previous"onClick = {moveToPrevious}>
        <i className="fas fa-chevron-left"></i>
        </button>
      </div>
    </div>
  );
}

export default ApartmentBanner