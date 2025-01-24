import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Usamos NavLink para manejar rutas activas
import { FaHome, FaBook, FaUser } from "react-icons/fa"; // Importamos íconos específicos
import logo from "../assets/logo.png"; // Asegúrate de que el logo esté en esta ruta

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logotipo con texto */}
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Gestión de Cursos"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span>Gestión de Cursos</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Enlaces con íconos y rutas */}
            <Nav.Link as={NavLink} to="/" exact="true">
              <FaHome style={{ marginRight: "5px" }} />
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cursos">
              <FaBook style={{ marginRight: "5px" }} />
              Cursos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/usuarios">
              <FaUser style={{ marginRight: "5px" }} />
              Usuarios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
