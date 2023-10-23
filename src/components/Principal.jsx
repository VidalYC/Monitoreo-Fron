import React from "react";
import '../App.css'
import {NavLink} from 'react-router-dom'
const Principal = () => {
  return (
    <div>
      <header>
        <div className="container">
          <p class="logo">
            F<span className="color-acento">M</span>
          </p>
          <nav>
            <a href="#somos">Quienes Somos?</a>
            <NavLink to='/login'>Iniciar Sesion</NavLink>
            <NavLink to='/register'>Registrate</NavLink>
          </nav>
        </div>
      </header>

      <section id="hero">
        <h1>
          <span>Monitorea e Invierte</span>
        </h1>
        <NavLink className="btn-neon" to = '/f'>
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          EMPEZAR
        </NavLink>
      </section>

      <section id="somos">
        <div className="container">
          <div className="Txt">
            <h2>
              Somos <span className="color-acento">Financial Monitoring</span>!
            </h2>
            <p>
              Somos una empresa especializada en el gestionamiento, monitoreo y
              seguimiento financiero de las organizaciones, de acuerdo a las
              necesidades y naturaleza de cada empresa, y teniendo en cuenta los
              aspectos claves que según cada tipo de empresa se requieran
              analizar con mayor detalle y profundidad.
            </p>
          </div>
        </div>
      </section>

      <section id="que-es">
        <div className="container">
          <div className="msg"></div>
          <div className="texto">
            <h2>
              Que es <span className="color-acento">Financial Monitoring</span>?
            </h2>
            <p>
              En su naturaleza, el monitoreo financiero es un conjunto de
              medidas para controlar las transacciones financieras que están
              sujetas a monitoreo e incluyen: Identificación. Verificación de
              clientes. Mantenimiento de registros de dichas transacciones.
            </p>
          </div>
        </div>
      </section>

      <section id="contactanos">
        <div className="container">
          <a
            href="https://api.whatsapp.com/send?phone=573136412944"
            className="whatsapp"
            target="_blank"
          >
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/groups/180200043068365"
            className="facebook"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="mailto:yncarvajalino@unicesar.edu.co"
            className="gmail"
            target="_blank"
          >
            <i className="fa-solid fa-square-envelope"></i>
          </a>
          <a
            href="https://github.com/VidalYC/MonitorFinaciero.git"
            className="git"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Principal;
