import {useState} from 'react';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase';
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import withReactContent from 'sweetalert2-react-content';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./contacto.css";
export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  //referencia collection firebase
  const contactoCollectionRef = collection(db, 'contactos');
   const MySwal = withReactContent(Swal);
  //evento submit boton
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(`<nombre::${nombre}`)
    console.log(`<email::${email}`)
    const result = await addDoc(contactoCollectionRef,{
        nombre,
        email,
        asunto,
        mensaje
    }    //{name: name, lastName: lastName, email: email, age: age}    
    )
    console.log("id_contacto::" +  result.id);
    if (result.id != "") {
        MySwal.fire("Mensaje Enviado!", "Satisfactoriamente");
        ClearInput();
    } else {
        MySwal.fire("Hemos tenido un problema al enviar tu mensaje","" , "error");
    }

    function ClearInput() {
        console.log("Clearinput()");
        setNombre('');
        setEmail('');
        setAsunto('');
        setMensaje('');
    }
  };
  return (
    <>
      <h1>Contacto</h1>
      <div className="row">
          <div id="card-contacto" className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Información de Contacto</h2>
                <p className="card-text">
                  ¿Quieres cotizar un evento con tu empresa, familia o grupo de amigos?
                  Déjanos tu mensaje y te enviaremos nuestros menús de grupos,
                </p>
                <p className="card-text">
                   para disfrutar en grande los mejores sabores de la cocina chilena. ¡Contáctanos!
                </p>
                <form onSubmit={onSubmit}>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control mb-2"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Mail:</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Asunto:</label>
                  <input
                    type="text"
                    id="asunto"
                    className="form-control mb-2"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    required
                  />
                  <label htmlFor="date">Mensaje:</label>
                  <input
                    type="text"
                    id="mensaje"
                    className="form-control mb-2"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                  />
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="card-mapa" className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Horario de atención</h2>
                  <p>Lunes a Miércoles: 12:30 – 23:00</p>
                  <p>Jueves y Viernes: 12:30 – 00:00</p>
                  <p>Sábado: 13:00 – 00:30</p>
                  <p>Domingo: Cerrado.
                  </p>
                  <p></p>
                  {/* <iframe src="https://goo.gl/maps/VPfpsS3UEB68enMx7"></iframe> */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  /> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4180883553586!2d-70.74900592513163!3d-33.7498605129069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96632168d3708649%3A0x45144356f6c034fa!2sVicar%C3%ADa%20de%20la%20Solidaridad%20583%2C%20Buin%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1691462340528!5m2!1ses!2scl" 

                    id ="frame-maps"
                    style={{ border: 0 }}
                    allowfullscreen="" 
                    loading="lazy">
                  </iframe>
                  {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </MapContainer> */}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
// export default Contacto;
