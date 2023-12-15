import React from "react";
import "./Main.scss";
function Main(props) {
  // Ici les enfants de main
  const {children} = props;
  return <div className="main">{children}</div>
  
}

export default Main;