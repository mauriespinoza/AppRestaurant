import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Contacto =() => {
  return (
    <>
    <div className="container mt-2">
      <h1>Contacto</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
    
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}
// export default Contacto;