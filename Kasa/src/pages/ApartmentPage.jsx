import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { ApartmentDescription } from "../components/ApartmentDescription";
import {Link, useParams, useSearchParams} from "react-router-dom"
//import { useLocation } from "react-router-dom";
import {ApartmentBanner} from "../components/ApartmentBanner";
import {ApartmentInfo } from "../components/ApartmentInfo";
import ErrorPage from "./ErrorPage";
import data from "../datas/db.json";

// function ApartmentPage(){
  
//   const { id } = useParams();
//   const [flat, setFlat] = useState(null);
//   useEffect(fetchApartmentData, []);
  
  
//   function fetchApartmentData(){
//     fetch(data)
//     .then((res) => res.json())
//     .then((flats) => {
//       console.log(flats);
//       const flat = flats.find((flat) => flat.id === id);
//       setFlat(flat)
//     })
//     .catch(console.error);
//   }
  

//   return (
    
//     <main className="apartment-page">
//       <div>
//         <ApartmentBanner pictures={flat.pictures}/>
//         <ApartmentInfo flat={flat}/>
//       </div>
//           <div className="ApartmentDescriptionTwoBox">
//             <ApartmentDescription title ="Description" content={flat.description}/>    
//             <ApartmentDescription title ="Equipements" content={flat.equipments.map((eq, i) =>(
//               <li key={i}>{eq}</li>
//             ))}
//             />   
//           </div>
           
//     </main>
//   )

// }

// export default ApartmentPage;



// ApartmentPage.jsx
// import React, { useEffect, useState } from "react";
// import "./ApartmentPage.scss";
// import { ApartmentDescription } from "../components/ApartmentDescription";
// import { useParams } from "react-router-dom";  // Utilisez useParams au lieu de useLocation
// import { ApartmentBanner } from "../components/ApartmentBanner";
// import { ApartmentInfo } from "../components/ApartmentInfo";

// function ApartmentPage() {
//   const { id } = useParams(); // Utilisez useParams pour obtenir les paramètres de l'URL
//   const [flat, setFlat] = useState(null);

//   useEffect(() => {
//     // Utilisez l'ID obtenu à partir des paramètres de l'URL
//     fetch("./data/db.json")
//       .then((res) => res.json())
//       .then((flats) => {
//         const flat = flats.find((flat) => flat.id === id);
//         console.log('Flat:', flat);
//         setFlat(flat);
//       })
//       .catch(console.error);
//   }, [id]);

//   if (flat == null) return <div>... Loading</div>;

//   return (
//     <main className="apartment-page">
//       <div>
//         <ApartmentBanner pictures={flat.pictures} />
//         <ApartmentInfo flat={flat} />
//       </div>
//       <div className="ApartmentDescriptionTwoBox">
//         <ApartmentDescription title="Description" content={flat.description} />
//         <ApartmentDescription
//           title="Equipements"
//           content={flat.equipments.map((eq, i) => (
//             <li key={i}>{eq}</li>
//           ))}
//         />
//       </div>
//     </main>
//   );
// }

// export default ApartmentPage;



function ApartmentPage() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    // cherche l'id dans le fichier logements.json
    const record = data.find(element => element.id === idLogement)
    
    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return(<ErrorPage />)

    // récupère la liste des équipements
    const equipements = record.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
    

    return (
    
    <main className="apartment-page">
      <div>
        <ApartmentBanner pictures={record.pictures}/>
        <ApartmentInfo flat={record}/>
      </div>
          <div className="ApartmentDescriptionTwoBox">
            <ApartmentDescription title ="Description" content={record.description}/>    
            <ApartmentDescription title ="Equipements" content={equipements.map((eq, i) =>(
              <li key={i}>{eq}</li>
            ))}
            />   
          </div>
           
    </main>
  )
//     return (
//         <div className='logement'>
//             <Shaping>
//                 <Navbar />

//                 {/* carousel d'images */}
//                 <Carousel pictures={record.pictures}/>

//                 {/* 1 - affiche le titre, l'emplacement et les tags */}
//                 <div className='ficheLogement'>
//                     <div className='div-description'>
//                         <h1>{record.title}</h1>
//                         <h4>{record.location}</h4>
//                         <div className='div-tags'>
//                             { record.tags.map((element, index) => {
//                                 return(<p className='tags' key={"tags-"+index}>{element}</p>)
//                             })}
//                         </div>
//                     </div>

//                     {/* 2 - Affiche le nom du propriétaireet sa photo */}
//                     <div className='bloc-stars'>
//                         <div className='div-etoiles'>
//                             <p>{record.host.name}</p>
//                             <img src={record.host.picture} alt={record.title} />
//                         </div>
                        
//                         {/* 3 - Met et colorie les étoiles */}
//                         <div className='stars'>
//                             {
//                                 arrayStars.map(element => {
//                                     const nbreEtoiles = parseInt(record.rating)
//                                     return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>


//                 {/* affiche la description et les équipements */}
//                 <div className='collapseLogement'>
//                     <Collapse title="Description" content={record.description} />
//                     <Collapse title="Equipements" content={equipements} />
//                 </div>

//             </Shaping>
//             <Footer />
//         </div>
//     )
 }

export default ApartmentPage;
