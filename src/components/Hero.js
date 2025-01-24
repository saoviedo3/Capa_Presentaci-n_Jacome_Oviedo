import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x500')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">¡Bienvenido al Sistema de Gestión de Cursos!</h1>
        <p className="lead">
          Administra usuarios, cursos y matrículas de manera fácil y eficiente.
        </p>
        <Button href="#cursos" variant="primary" size="lg">
          Ver Cursos
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
