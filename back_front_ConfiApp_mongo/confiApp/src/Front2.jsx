// // Importar los estilos de Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Tu componente React
// import React from 'react';

// export const MiComponente = () => {
//   return (
//     <div className="container">
//       {/* Contenido de tu componente */}
//       <h1 className="logo me-auto">
//             <a href="landing.html">CONFIAPP</a>
//           </h1>


//     </div>
//   );
// };



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';

const MiComponenteConBootstrap = () => {
  return (
    
    
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-4">
        <h1>Bienvenido a mi aplicación</h1>
        <Button variant="primary">Botón de ejemplo</Button>
      </div>
    </div>
  );
};

export default MiComponenteConBootstrap;
