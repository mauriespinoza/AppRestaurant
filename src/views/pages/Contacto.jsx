import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contacto.css';
export const Contacto =() => {
  return (
    <>
    <h1>Contacto</h1>
    <div id="container-main" className="card-group">
      {/* <div className="card">
        <div id="card-info">
          <p className="text-left">Left aligned text on all viewport sizes.</p>
        </div>
      </div> */}
      <div className="card-prod">
            <h2>{}</h2>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Text className="card-text">
                          ¿Quieres cotizar un evento con tu empresa, familia o grupo de amigos? Déjanos tu mensaje y te enviaremos nuestros menús de grupos para disfrutar en grande los mejores sabores de la cocina chilena. ¡Contáctanos!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            {/* </CardGroup> */}
            </Row>
        </div>
      <div id="card-form" className="card">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="nombre" placeholder="Ingrese su nombre" />
              <Form.Text className="text-muted">
        
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
              <Form.Text className="text-muted">
        
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="asunto" placeholder="Ingrese el asunto" />
              <Form.Text id="text-mensaje" className="text-muted">
        
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control type="mensaje" placeholder="Ingrese su mensaje" />
              <Form.Text className="text-muted">
        
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary">
              Submit
            </Button>
        </Form>
      </div>

      
    </div>
    </>
  );
}
// export default Contacto;