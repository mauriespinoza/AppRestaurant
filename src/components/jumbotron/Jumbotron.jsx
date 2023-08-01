import { Carousel } from "react-bootstrap";
import './jumbotron.css'
 export const Jumbotron = () => {
  return (
    <>
      {/* <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron !</h1>
        <p>
           This is a modified fluid jumbotron which
           stretches the whole horizontal space.    
        </p>
        <Button variant="primary">
         Primary Button
        </Button>
      </Container>
    </Jumbotron> */}
    {/* <div id="jumbotron" style={{ display: 'block', width: "auto", padding: 0 }}> */}
    <div id="jumbotron" style={{ display: 'block', width: "auto", height:"300px", padding: 0 }}>
      {/* <h4>React-Bootstrap Carousel Component</h4> */}
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}
