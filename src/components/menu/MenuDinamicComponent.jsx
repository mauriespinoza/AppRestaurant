import { useState, useEffect } from "react";
import { doc, query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import "./menuDinamicComponent.css";

export const MenuDinamicComponent = () => {
  const [familiasprod, setFamiliasprod] = useState([]);
  const [productos, setProductos] = useState([]);
  const familiaCollectionRef = collection(db, "familiaProductos");

  //obtenemos las familias de Productos desde Firebase
  const getFamiliaProd = async () => {
    try {
      const data = await getDocs(familiaCollectionRef);
      console.log(data);
      setFamiliasprod(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(`getFamiliaProd().exception:${error}`);
    }
  };
  //obtenemos Productos por el ID desde Firebase segun la seleccion de Familia
  const getProductos = async (idFamilia) => {
    try {
      const categoryDocRef = doc(db, "familiaProductos", idFamilia);
      const q = query(
        collection(db, "productos"),
        where("id", "==", categoryDocRef)
      );
      const files = await getDocs(q);
      const newProducts = files.docs.map((prod) => {
        return { id: prod.id, ...prod.data() };
      });
      setProductos(newProducts);
    } catch (error) {
      console.log(`getProductos().exception:${error}`);
    }
  };

  //evento click de boton familias
  const onClick = (e) => {
    const result = getProductos(e);
    console.log("result::" + result);
  };

  //hooks useEffects
  useEffect(() => {
    getFamiliaProd();
  }, []);

  //funcion para mostrar en formato de moneda
  function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }

  return (
    <>
    <div><h3 className="text-center"> Seleccione una de las Categorias de Productos</h3></div>
      <div className="card-group">
        {familiasprod.map((familia, index) => (
          <div className="card" key={index}>
            <img className="card-img" src={familia.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{familia.nombreFamilia}</h5>
              <div className="text-center">
                <button
                  onClick={() => onClick(familia.id)}
                  className="btn btn-warning"
                >
                  Seleccionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-prod">
        <h2>{}</h2>
        <Row xs={1} md={4} className="g-4">
          {productos.map((producto, index) => (
            <Col key={index}>
              <Card className="container-img">
                <div className="container-img"></div>
                <Card.Img src={producto.img} />
                <Card.Body>
                  <Card.Text className="card-text">
                    <strong>{producto.nombreProducto}</strong>
                  </Card.Text>
                  <Button variant="danger">
                    {"$" + FormatCLP(producto.precioProducto)}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
