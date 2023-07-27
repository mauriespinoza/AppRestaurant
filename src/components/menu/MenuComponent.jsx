 import carneParrilla from  '../../../public/carne-parilla.jpg'
 import pescadoSalmon from '../../../public/pescado-salmon.jpg'
 import pizzaTradicional from '../../../public/pizza-tradicional.jpg'
 import platoVegano from '../../../public/platos-vegano.jpg'
 import sandwichHamburguer from '../../../public/sandwich-hamburger.jpg'
 import postrePanqueque from '../../../public/postres-panqueque.jpg';
import './menuComponent.css';
 export const MenuComponent = () => {
    return(
        <>
            <div className="card-group">
                {/* <div className="row"> */}
                    <div className="card">
                        <img className="card-img-top" src={carneParrilla} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={pescadoSalmon} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={pizzaTradicional} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                {/* </div> */}
                
            </div>
            <div className="card-group">
                {/* <div className="row"> */}
                    <div className="card">
                        <img className="card-img-top" src={platoVegano} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={sandwichHamburguer} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={postrePanqueque} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                {/* </div> */}
                
            </div>
        </>
    );
}