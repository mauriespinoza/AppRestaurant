import { useState, useEffect } from "react"
import { doc,query ,collection, getDocs,where } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
// import CurrencyFormat from 'react-currency-format';
// import 'firebase/firestore';
//import firebase from 'firebase/app';

import './menuDinamicComponent.css';

 export const MenuDinamicComponent = () => {
    const [ familiasprod, setFamiliasprod ] = useState([]);
     const [ productos, setProductos ] = useState([]);
    // const firestore = firebase.firestore();
    const familiaCollectionRef = collection(db, 'familiaProductos');
    const productosCollectionRef = collection(db, 'productos');
    
    
    //const categoryDocRef = doc(db, "categories", "5gF5FqRPvdroRF8isOwd");
    
    const getFamiliaProd = async () => {
        const data = await getDocs(familiaCollectionRef);
        console.log(data);
        setFamiliasprod(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        );
	
    };
    const getProductosNew = async (idFamilia) => {
        const categoryDocRef = doc(db, "familiaProductos", idFamilia);
        const q = query(
            collection(db, "productos"),
            where("id", "==", categoryDocRef)
        );


        const files = await getDocs(q); 
        console.log("files::" + files.docs.map(doc => ({...doc.data(), id: doc.id})));
        console.log(files.docs.length);
        const newProducts = files.docs.map((prod) => {
            console.log("prod::" + prod.id)
            console.log("prod::" + prod.descripcionProducto)
            return {id:prod.id,...prod.data()};
            // setProductos(files.docs.map((doc) => doc.data()));
        });
        // setProductos(files.docs.map((doc) => doc.data()));
        setProductos(newProducts);
        // productos.map((producto) => {
        //     console.log("producto::" + producto.descripcionProducto)
        // })
        }
    const getProductos = async (idFamilia) =>{
        // const dataProd = await db.collection("productos").doc( id ).get(); 
        // dataProd.docs.map(doc => ({...doc.data(), id: doc.id}))
        // console.log("getProductos::" + dataProd);
        // setProductos(
        //     dataProd.docs.map(doc => ({...doc.data(), id: doc.id}))
        // );()
        const productosQuery = await productosCollectionRef.where('idFamilia', '==', idFamilia);
        //const productosQuery = db.collection('productos').where('idFamilia', '==', idFamilia);
        //const productosData = await productosQuery.get();
        //setProductos(productosData.docs.map((doc) => doc.data()));
        setProductos(productosQuery.docs.map((doc) => doc.data()));
    };

    const onClick = (e) =>{
        console.log('El id del elemento es: ', e);
        //const result = getProductos(e);
        const result = getProductosNew(e);
        console.log("result::" + result);
        // setProductos(
        //     dataProd.docs.map(doc => ({...doc.data(), id: doc.id}))
        // );
    };

    useEffect(() => {
        getFamiliaProd()
    }, []);

    function FormatCLP(price){
        return new Intl.NumberFormat().format(price)
    }
    
    return (
      <>
        <div className="card-group">
          {familiasprod.map((familia, index) => (
            <div className="card" key={index}>
              <img
                className="card-img"
                src={familia.img}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{familia.nombreFamilia}</h5>
                <div className="text-center">
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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
        {/* <div className="card-group">
        { productos.map( (producto, index) => (
               
               <div className="card" key={index}>
                   <img className="card-img" src={producto.img}  alt="Card image cap"/>
                   <div className="card-body">
                   <h5 className="card-title">{producto.nombreProducto}</h5>
                   <div className="text-center">
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        
                        
                   </div>
                   </div>
               </div>
                
        ))}
        </div>  */}
        {/* <CardGroup> */}
        <div className="card-prod">
            <h2>{}</h2>
            <Row xs={1} md={4} className="g-4">
                {productos.map((producto, index) => (
                    <Col key={index}>
                    <Card className="container-img">
                        <div className="container-img">
                            {/* <Card.Img variant="bottom" src={producto.img} /> */}
                            {/* <Card.Img  src={producto.img} /> */}
                        </div>
                        <Card.Img  src={producto.img} />
                        <Card.Body>
                        <Card.Text className="card-text">
                            <strong>{producto.nombreProducto}</strong>
                        </Card.Text>
                        {/* <Card.Button>
                            {producto.precioProducto}
                        </Card.Button> */}
                        <Button variant="danger">{"$" + FormatCLP(producto.precioProducto)}</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            {/* </CardGroup> */}
            </Row>
        </div>
      </>
    );
}