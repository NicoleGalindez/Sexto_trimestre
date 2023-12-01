import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css/animate.min.css';
// import 'aos/aos.css';
// import 'bootstrap-icons/bootstrap-icons.css';
// import 'boxicons/css/boxicons.min.css';
// import 'remixicon/remixicon.css';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'css/style.css';
import './assets/boostrap.css';
import './assets/boostrap.min.css';
import './assets/style.css'
import './assets/style2.css'

export function FrontEnd() {
  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <a href="landing.html">
            <img src="Images/Iconoverde.png" id="img" alt="Logo" />
          </a>
          <h1 className="logo me-auto">
            <a href="landing.html">CONFIAPP</a>
          </h1>

          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="landing.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="landing.html">
                  Inicio
                </a>
              </li>
              <li>
                <a href="nosotros.html">Nosotros</a>
              </li>
              <li>
                <a href="tutores.html">Tutores</a>
              </li>
              <li>
                <a href="foros.html">Foros</a>
              </li>

              {/* Menú desplegable de contactos */}
              <li className="dropdown">
                <a href="#">
                  <span>Contáctanos </span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#lineatel">Línea Telefónica</a>
                  </li>
                  <li>
                    <a href="https://web.whatsapp.com/" target="_blank">
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/SENACauca" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                      Correo Electrónico
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a className="get-started-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" id="ali">
            Iniciar Sesión
          </a>
          <a className="get-started-btn" data-bs-toggle="modal" data-bs-target="#modalRegistro">
            Registrarme
          </a>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}

