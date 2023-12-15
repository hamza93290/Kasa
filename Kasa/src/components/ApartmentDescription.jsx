import React, {useState} from "react";
import "./ApartmentDescription.scss";

export function ApartmentDescription(props){
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent =() =>{
    setIsContentVisible(!isContentVisible)
  }
  return (
    
    <section className="apartment__description">
            <div className="apartment__description__box">
              <p className="apartment__description__title">
                <span>{props.title}</span>
                  <i className="fa-solid fa-chevron-down" onClick={showContent}></i>
              </p>
              {isContentVisible && <p className="apartment__description__content"> {props.content}</p>}
            </div>
    </section>
      
    
    
  )
}