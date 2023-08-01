// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <>
      <footer className="bg-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <h5>Columna 1</h5>
            <p>Contenido de la columna 1</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Navega</h5>
            <p>Home</p>
            <p>Menu</p>
            <p>Contacto</p>
            <p>Reservas</p>
            <p>Blog</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Columna 3</h5>
            <p>Contenido de la columna 3</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};
