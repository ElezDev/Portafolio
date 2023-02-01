import React from "react"

import Menu from "@components/menu";

const About = () => {

  return(
  <main className="container-menu">
    <div className="bartitle">
        <h1>Sobre mi</h1>
        <Menu />
    </div>
    <div className="grid-menu mb-4">
      <div className="col-md-6 pd-l">
          <div className="col-content">
            <span>Hola!</span>
            <p>Soy ElezDev, Técnico en sistemas, Desarrollador Web.</p>
           <p>Durantes mucho tiempo me gustó el hacking ético esto me llevó a querer ser desarrolador de Software y dar soluciones a problemas de la vida diaria.</p>
            <p>En el año 2022 desarrollé mi primer citio web, el cual se llama Popayán Turims el cual me trajo mucho conocimiento</p><p>&nbsp;</p>
            <p><i>"Cuando algo realmente te apasiona. encuentras la manera de llevarlo acabo, sin importar cuanto tiempo te tarde."</i></p>
          </div>
      </div>
      <div className="col-md-6 pd-l">
        <div className="col-content">
          <span>Quien soy...</span>
          <p>Mi nombre real es Edwin Yovanny Ledezma, pero mi nombre como programdor es ElezDev… Tengo 20 años. Nací el 24 de agosto del 2002 en en el Tambo Cauca.</p>
          <p>Mis colores favoritos  son: blanco y negro. Número de la suerte, 12. Signo Leo.</p>
          <p>Sin duda alguna, hay algo que disfruto mucho y es jugar fúbol con mis amigos eso me relaja y asi puedo dar mejores soluciones...</p>
          <p>La música, es una de mis pasiones favoritas. Pero jugar fúbol y tomar un cafe, realmente me relajan demaciado y me ayudan a buscar mejores soluciones a la hora de esribir codigo.</p>
        </div>
      </div>
      <span className="line"></span>
      <div className="col-md-6 pd-l">
        <div className="development pt-4">
          <span>Habilidades y Técnicas</span>
          <span><i className="fa fa-wrench icono"></i> Desarrollo</span>
          <span>Habilidades:</span>
          <div className="skill__separate">
            <ul className="mb-4">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Git/Github</li>
                <li>JavaScript</li>
                <li>Laravel 8+</li>
            </ul>
            <ul className="skills mb-4">
                <li>React</li>
                <li>NodeJs</li>
                <li>Angular</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>SQL</li>
            </ul>
          </div>
          <span>Patrones y Técnicas</span>
          <ul className="patterns-techniques mb-4">
            <li>Programación Orientada a Objetos</li>
            <li>MVC</li>
            <li>Técnicas de Rendimiento</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 pd-l mb-4">
          <div className="design pt-4">
            <span><i className="fa fa-palette icono"></i> Diseño</span>
            <span>Herramientas:</span>
          </div>
      </div>
    </div>
  </main>
  );
}

export default About;

