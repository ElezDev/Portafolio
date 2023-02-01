import React from "react";
import { Link } from 'react-router-dom';
import Menu from "@components/menu";
import Mapa from '@images/astro.png';

const NotFound = () => {

  return(

    <main className="container-menu">
     <div className="map"><img src={Mapa} alt="Background Image - @elezDev" /></div>
      <div className="bartitle">
      <h1>¡Ups!</h1>
        <Menu />
      </div>
      <div className="grid-menu mb-4">
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <div className="container-type"><br />
              <span className="hello">Error 404</span>
              <small>Página no encontrada</small>
              <h2>No te preocupes!</h2>
              <p>Tal vez no fue tu intención llegar acá, o tal vez sea el destino 😏, pero aprovechando el bug 😊, puedes seguirme en todas las redes, o ir a la página de inicio.</p>
              <div className="btn_home">
                <Link to="/" className="btn error-404 btn-chendo btn-ev btn-block mb-4">Home</Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 pd-l">
            <div className="col-content">
              <div className="content__img">
                <div className="content-top-icon">
                <div className="cirdown">
                      <a href="https://www.linkedin.com/in/edwin-ledezma-719b63238" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in icono"></i></a>
                  </div>
                </div>
                <div className="content-med-icon">
                
                  <div className="cirdown">
                      <a href="https://github.com/ElezDev" aria-label="github" target="_blank"><i className="fab fa-github-alt icono"></i></a>
                  </div>
                  <div className="cirdown">
                      <a href="https://www.facebook.com/profile.php?id=100008360857852" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f icono"></i></a>
                  </div>
                </div>
                <div className="content-bottom-icon mb-4">
                  <div className="cirdown">
                      <a href="https://www.tiktok.com/@elezdev1.0" aria-label="tiktok" target="_blank"><i className="fab fa-tiktok icono"></i></a>
                  </div>
                
                </div>
                </div>
              </div>
          </div>
      </div>
    </main>

  );
}

export default NotFound;
