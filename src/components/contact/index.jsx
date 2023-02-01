import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { getBrowser } from '@utils/check';
import Menu from "@components/menu";

import TelegramImage from '@images/telegram.svg';

const Contact = () => {
  const { input, success, onSubmit, handleChange, state, handleSubmit } = useContext(GlobalContext);

  const message = "Tu mensaje ha sido enviado correctamente";

  return(
    <div onLoad={getBrowser} className="container-menu">
     <div className="bartitle">
        <h1>Contacto</h1>
        <Menu />
      </div>
     <div className="grid-menu">
         <div className="col-md-12 pd-l">
            <div className="container-contact">
              <span>Quieres contactarme, para ser parte de tus proyetos?<br />
              Puedes escribirme directamente:<br /></span><br />
              <span className="correo"><i className="fas fa-envelope icono"></i>edwinledezma2013@gmail.com<br /></span>
              <div className="cont-text">
                <div className="cont-svg">
                  <img src={TelegramImage} className="img-svg" alt="svg-telegram" />
                </div>
                <a href="https://web.telegram.org/" target="_blank">Edwin Ledezma</a>
              </div><br />
              <p>Pregunta lo que desees con respecto al desarrollo.<br />
              <span>(Intentare contestar rapido!)</span></p>
            </div>
         </div>
         <div className="col-md-12 pd-l">
            <div className="cont-form">
               <form onSubmit={handleSubmit} method="POST" id="form">
                  <div className="form-control" >
                    <input type="text" spellCheck="false" id="name" name="name" value={input.name} onChange={handleChange} placeholder="Nombre" autoComplete="off" />
                  </div>
                  <div className="form-control" >
                    <input type="email" spellCheck="false" id="email" name="email" value={input.email} onChange={handleChange} placeholder="Email" autoComplete="off" />
                  </div>
                  <textarea name="message" spellCheck="false" id="message" value={input.message} onChange={handleChange} placeholder="Mensaje"></textarea>
                  <div className="messageAndSubmit">
                    <small
                    className={success ? "succes" : ""}
                    >
                      {success ? message : ""}
                    </small>
                    <button onClick={e => onSubmit(e)} type="submit" disabled={state.submitting} className="btn btn-chendo btn-block mb-4">Enviar</button>
                  </div>
               </form>
            </div>
         </div>
     </div>
    </div>
  );
}

export default Contact;
