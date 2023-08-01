import { useState, useEffect } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'

// import carneParrilla from  '../../../public/carne-parilla.jpg'
//  import pescadoSalmon from '../../../public/pescado-salmon.jpg'
//  import pizzaTradicional from '../../../public/pizza-tradicional.jpg'
//  import platoVegano from '../../../public/platos-vegano.jpg'
//  import sandwichHamburguer from '../../../public/sandwich-hamburger.jpg'
//  import postrePanqueque from '../../../public/postres-panqueque.jpg';
import './menuDinamicComponent.css';
 export const MenuDinamicComponent = () => {
    const [ familiasprod, setFamiliasprod ] = useState([]);
    
    const familiaCollectionRef = collection(db, 'familiaProductos')
    
    const getFamiliaProd = async () => {
        const data = await getDocs(familiaCollectionRef);
        console.log(data);
        setFamiliasprod(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        );
    };

    useEffect(() => {
        getFamiliaProd()
    }, []);
    return(
        <>
        console.log("menu dinamico");
        {/* { familiasprod.map( familia => (
               
               <div className="card-group">
               <div className="card">
                   <img className="card-img-top" src={familia.img} alt="Card image cap"/>
                   <div className="card-body">
                   <h5 className="card-title">{familia.nombreFamilia}</h5>
                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                   <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
               </div>
            </div>     
        ))}  */}
        <div className="card-group">
        { familiasprod.map( (familia, index) => (
               
               <div className="card" key={index}>
                   <img className="card-img" src={familia.img}  alt="Card image cap"/>
                   <div className="card-body">
                   <h5 className="card-title">{familia.nombreFamilia}</h5>
                   <div className="text-center">
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                   </div>
               </div>
                
        ))}
        </div> 
        </>
    );
}