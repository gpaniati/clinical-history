import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="barraNavegacion">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ marginRight: 100 }}>
          <img src="./images/logo.png" alt="logoNavBar"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/tusEstudios">
              Tus Estudios
            </Nav.Link>
            <Nav.Link>Cargar Nuevos</Nav.Link>
            <Nav.Link>Tus Datos</Nav.Link>
            <Nav.Link>Buscar estudio</Nav.Link>
            <input type="text"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
