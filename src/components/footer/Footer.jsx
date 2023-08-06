// import React from 'react';
// import React from 'react';
// import {  FooterLink, Box, CDBBtn, CDBIcon } from 'react';
import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg py-3">
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
        {/* <Footer className="shadow">
      <Box display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <Box display="flex" justifyContent="between" className="flex-wrap">
          <Box>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ms-3 h5 font-weight-bold">Devwares</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
            <Box display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </Box>
          </Box>
          <Box>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <Box flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <FooterLink href="/">Resources</FooterLink>
              <FooterLink href="/">About Us</FooterLink>
              <FooterLink href="/">Contact</FooterLink>
              <FooterLink href="/">Blog</FooterLink>
            </Box>
          </Box>
          <Box>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <Box flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <FooterLink href="/">Support</FooterLink>
              <FooterLink href="/">Sign Up</FooterLink>
              <FooterLink href="/">Sign In</FooterLink>
            </Box>
          </Box>
          <Box>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <Box flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <FooterLink href="/">Windframe</FooterLink>
              <FooterLink href="/">Loop</FooterLink>
              <FooterLink href="/">Contrast</FooterLink>
            </Box>
          </Box>
        </Box>
        <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
      </Box>
    </Footer> */}
    </>
  );
};
