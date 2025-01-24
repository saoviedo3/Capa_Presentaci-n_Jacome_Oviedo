import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { faUser, faBook, faChartBar } from "@fortawesome/free-solid-svg-icons";
import '../styles.css';


const Home = () => {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <FeatureCard
              title="Gestión de Usuarios"
              text="Agrega, actualiza y elimina usuarios fácilmente desde un solo lugar."
              icon={faUser}
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Gestión de Cursos"
              text="Organiza todos los cursos disponibles y administra sus detalles."
              icon={faBook}
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Reportes"
              text="Obtén reportes claros sobre usuarios y matrículas en tiempo real."
              icon={faChartBar}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;



