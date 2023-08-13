
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
    </>
  );
};
