import React from 'react'
import "./ApartmentInfo.scss"

 export function ApartmentInfo(props) {

  const flat = props.flat;
  const name = flat.host.name;
  const [firstName, lastName] = name.split(" ");
  return (
    <section className="apartment__box">
          <section className="apartment__title">
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
              <div className="apartment__spans">
                {flat.tags.map((tag) =>(
                  <span key={tag}>{tag}</span>
                ))}
              </div>
          </section>
          
          <section className="apartment__owner">
            <div className="apartment__owner__info">
              <div className="apartment__owner__name">
                <div>{firstName}</div>
                <div>{lastName}</div>
              </div>
              <div className="apartment__owner__circle">
                <img src={flat.host.picture} alt="photo user"></img>
              </div>
            </div>
            <div className="apartment__owner__stars">
              {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}className={props.flat.rating >= num ? "on" : ""}>★</span>
              ))}
            </div>
          </section>
          
      </section> 
  )
}

export default ApartmentInfo