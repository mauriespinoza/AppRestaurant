import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./blogComponent.css";

export const BlogComponent = () => {
  const [articulos, setArticulos] = useState([]);
  //referencia collecion firebase
  const blogCollectionRef = collection(db, "blog");

  //obtiene blog de articulos desde Firebase
  const getArticulos = async () => {
    try {
      const data = await getDocs(blogCollectionRef);
      console.log(data);
      setArticulos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(`getArticulos().exception:${error}`);
    }
  };

  useEffect(() => {
    getArticulos();
  }, []);
  return (
    <>
      <div className="card-blog">
        <h2>{}</h2>
        <Row xs={1} md={3} className="g-3">
          {articulos.map((blog, index) => (
            <Col key={index}>
              <Card className="container-card">
                <div className="container-img">
                  <Card.Img src={blog.img} />
                </div>
                <Card.Body>
                  <Card.Text className="card-title">
                    <strong>{blog.titulo}</strong>
                  </Card.Text>
                  <Card.Text className="card-text">
                    {blog.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
