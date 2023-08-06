import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import './jumbotron.css'
 export const Jumbotron = () => {
  const [ imagenes, setImagenes ] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    // const firestore = firebase.firestore();
    const carruselCollectionRef = collection(db, 'carrusel');
    const getImagenes = async () => {
      const data = await getDocs(carruselCollectionRef);
      console.log(data);
      setImagenes(
          data.docs.map(doc => ({...doc.data(), id: doc.id}))
      );
      
  };
  useEffect(() => {
    getImagenes()
  }, []);
  return (
    <>
    <div id="jumbotron">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      { imagenes.map((slide, i) => {
        return (
        <Carousel.Item key={i} className="carousel-item">
          <img
            className="d-block w-100"
            src={slide.img}
            alt={slide.nombre}
          />
          <Carousel.Caption>
            <h3>{slide.nombre}</h3>
            <p>{slide.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })}
      </Carousel>
    </div>
    </>
  );
}
