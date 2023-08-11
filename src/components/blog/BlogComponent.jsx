import {useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import './blogComponent.css';
export const BlogComponent = () => {
    const [ articulos, setArticulos ] = useState([]);
    const blogCollectionRef = collection(db, 'blog');

    const getArticulos = async () => {
        const data = await getDocs(blogCollectionRef);
        console.log(data);
        setArticulos(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        );
	
    };

    useEffect(() => {
        getArticulos()
    }, []);
  return (
    <>
         <div className="card-blog">
            <h2>{}</h2>
            <Row xs={1} md={3} className="g-3">
                {articulos.map((blog, index) => (
                    <Col key={index}>
                    <Card className="container-card">
                        {/* <Card.Img className='bg-image' key={index} variant="bottom" src={blog.img} /> */}
                        <Card.Img className='img' variant="bottom" src={blog.img} />
                        <Card.Body>
                        <Card.Text className="card-text">
                            {blog.titulo}
                        </Card.Text>
                        <Card.Text className="card-text">
                            {blog.descripcion}
                        </Card.Text>
                        {/* <Card.Button>
                            {producto.precioProducto}
                        </Card.Button> */}
                        <Button variant="danger">Link</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            {/* </CardGroup> */}
            </Row>
        </div>
    </>
  )
}
