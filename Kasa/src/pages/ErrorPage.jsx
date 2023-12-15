import React from "react";
import "./ErrorPage.scss";
import Main from "../layout/Main";
import { Link } from "react-router-dom";
export function ErrorPage() {
  return (
  <>
     
     <Main>  
      <div className="error__page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to ="/">Retourner sur la d'accueil</Link>
      </div>
      
     </Main>
  </>
  );
  
}

export default ErrorPage;