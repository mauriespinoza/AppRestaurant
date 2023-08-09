// import React from 'react';
// import React from 'react';
// import {  FooterLink, Box, CDBBtn, CDBIcon } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../public/logo-master-raul.jpg';
import icoFacebook from '../../../public/facebook.png';
import icoInstagram from '../../../public/instagram.png';
import icoTwitter from '../../../public/twitter.png';
import icoWhatsapp from '../../../public/icon-whatsapp.png';
import icoUbicacion from '../../../public/icon-ubicacion.png';
import icoMail from '../../../public/icon-email.png';
import './footer.css';
export const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg py-3">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <div id="titulo-footer">
              <h2>Master Raúl</h2>
            </div>
            
            <div id="container-icon-ubicacion">
              <img id="icon-ubicacion" src={icoUbicacion} alt={icoUbicacion} />
              <p>Vicaria de la Solidaridad 583, Buin</p>
            </div>
            <div id="container-icon-whatsapp">
              <img id="icon-whatsapp" src={icoWhatsapp} alt="whatsapp" />
              <p className="custom-span">+56 9 36538822</p>
              
            </div>
            <div id="container-icon-mail">
              <img id="icon-mail" src={icoMail} alt={icoMail} />
              <p>masterraul@gmail.com</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            {/* <h5>Navega</h5>
            <p>Home</p>
            <p>Menu</p>
            <p>Contacto</p>
            <p>Reservas</p>
            <p>Blog</p> */}
            <img id="logo-footer" src={logo} alt="logo" />
          </Col>
          <Col md={4} id="footer-3" className="text-center">
            <h2>Siguenos en Redes Sociales</h2>
            <a href="#"><img src={icoFacebook}/></a>
            <a href="#"><img src={icoInstagram}/></a>
            <a href="#"><img src={icoTwitter}/></a>
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
