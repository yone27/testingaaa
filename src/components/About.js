import React from 'react';

import './About.css';

function About() {
  return (
    <section className="about section">
      <article className="about__info">
        <h1>
          <small>¡Hey!</small>
          soy Yoneiker González
        </h1>
        <p>
          Hola, ¿Que tal? soy desarrollador web frontend, me dedico a maquetar y
          construir sitios web desde cero. Actualmente estoy manejando la
          libreria ReactJs, junto con herramientas como CSS3, HTML5 y màs.
        </p>
        <ul className="icons">
          <li className="icon-box">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="info">
              <h4>Celular</h4>
              <p>+58 424 182 7991</p>
            </div>
          </li>
          <li className="icon-box">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="info">
              <h4>Email</h4>
              <p>
                <a href="mailto: yonex27000@gmail.com">yonex27000@gmail.com</a>
              </p>
            </div>
          </li>
          <li className="icon-box">
            <div className="icon">
              <i className="fa fa-map-pin"></i>
            </div>
            <div className="info">
              <h4>Ubicación</h4>
              <p>Caracas - Venezuela</p>
            </div>
          </li>
          <li className="icon-box">
            <div className="icon">
              <i className="fa fa-link"></i>
            </div>
            <div className="info">
              <h4>Github</h4>
              <p>
                <a
                  href="https://github.com/yone27"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </p>
            </div>
          </li>
        </ul>
      </article>
      <aside className="about__imgContainer">
        <figure className="about__img">
          <img src="/logo.svg" alt="Yoneiker Gonzalez" />
        </figure>
      </aside>
    </section>
  );
}

export default About;
