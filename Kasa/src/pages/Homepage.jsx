import React from 'react'
import "./HomePage.scss"
import Banner from "../layout/Banner.jsx"
import ApartmentGrid from "../components/ApartmentGrid.jsx";


function HomePage() {
  return (
  <div>
      <Banner/>
      <ApartmentGrid/>
  </div>
  );
}

export default HomePage;