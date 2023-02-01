import React from "react"
import { Link } from 'react-router-dom';
import Menu from "@components/menu";
import Mapa from '@images/astro.png';
import init from '@utils/fns-home';


const Home = () => {

  return(
    <main onLoad={init} className="container-menu">
      <div className="map"><img src={Mapa} alt="Background Image - @elezDev" /></div>
      <div className="bartitle">
        <h1>Home</h1>
        <Menu />
      </div>
      <div className="grid-menu mb-4">
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <div className="container-type"><br />
              <span className="hello">Hola,</span>
              <small>mi nombre es Edwin</small>
              <h2>I Am<span className="txt-type" data-wait="3000" data-words='["Developer" , "Backend"]'></span></h2>
              <p>Con poca experiencia, pero siempre dando lo mejor de mi, para llevar los proyectos a otro nivel.</p>
              <div className="btn_home">
                <Link to="/portfolio" className="btn btn-chendo btn-block mb-4">Portafolio</Link>
                <a
                  href="#"
                  aria-label="Enchufe Virtual"
                  target="_blank"
                  className="btn btn-chendo btn-ev btn-block mb-4">
                    Donar
                </a>
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

export default Home;

