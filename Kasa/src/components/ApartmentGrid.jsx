import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import "./ApartmentCard.scss";
import data from "../datas/db.json"
import { Link } from "react-router-dom";

// La grille d'appartement
// function ApartmentGrid() {
//     const [apartments, setApartments] = useState([]);

//     useEffect(fetchApartments, []);

//     // useEffect avec une array vide == exécute cette fonction au chargement du composant
//     function fetchApartments() {
//         fetch(data)
//             .then((res) => res.json())
//             .then((res) => { setApartments(res)})
//             .catch(console.error);
//     }

    
//     return (
//         <div className="grid">
//             {apartments.map((apartment) => (
//                 <ApartmentCard key = {apartment.id} id = {apartment.id} title ={apartment.title} imageUrl= {apartment.cover}/>
//             ))}
//         </div>
//     );
// }

// export default ApartmentGrid;

const Cards = () => {
    return (
        <div className="grid">

            {/* liste la base de données */}
            {data.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    
                        <ApartmentCard key = {id} id = {id} title ={title} imageUrl= {cover}/>
                        
                    
                )
            })}
        </div>
    )
}

export default Cards
