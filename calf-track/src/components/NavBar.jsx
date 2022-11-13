import React from 'react';
import imagen from '../img/calf.png';
export default function NavBar(props) {
  
  const { type='' } = props;
  return (
    <section
      class={"navbar custom-navbar navbar-fixed-top"+' '+type}
      role="navigation"
    >
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          
          <img
                  src={imagen}
                 
                  alt="cows"
                  width={"80px"}
                  height={"auto"}
                />
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="/" class="smoothScroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#feature" class="smoothScroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/about" class="smoothScroll">
                Registro
              </a>
            </li>
            <li>
              <a href="/#contact" class="smoothScroll letra">
              Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
