import {useState} from 'react';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import Alert from 'react-bootstrap/Alert';
import './reservascomponente.css';
export const ReservasComponente = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [fono, setFono] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  //referencia collection firebase
  const userCollectionRef = collection(db, 'reservas');
  const MySwal = withReactContent(Swal);
   //hooks para mostrar alert
  //  const [isValid, setIsValid] = useState(false);
  //  const [mensajeAlert, setMensajeAlert] = useState('');
  //  const [variant, setVariant] = useState('');
  //evento submit boton
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await addDoc(userCollectionRef,{
        name,
        email,
        fono,
        date,
        guests
    }    //{name: name, lastName: lastName, email: email, age: age}    
    )
    console.log("id_reserva::" +  result.id);
    if (result.id != "") {
         MySwal.fire("Reserva Agendada!", "Satisfactoriamente");
        // setMensajeAlert("Reserva Agendada Satisfactoriamente!");
        // setIsValid(true);
        // setVariant('success');
        ClearInput();
    } else {
         MySwal.fire("Hemos tenido un problema al Agendar tu reserva","" , "error");
        // setIsValid(false);
        // setVariant('danger');
        // setMensajeAlert("Hemos tenido un problema al Agendar tu reserva");
    }

    function ClearInput() {
        console.log("Clearinput()");
        setName('');
        setEmail('');
        setFono('');
        setDate('');
        setTime('');
        setGuests('');
    }
  };

  return (
    <>
    {/* {
      isValid ? <Alert variant="success">Reserva agendada satisfactoriamente</Alert>
      : <Alert variant="danger">!Hemos tenido un problema para reservar, intentelo más tarde!</Alert>
    } */}
      <div id="container">
        <h1 className="text-center">Reservas</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Reserva con nosotros</h2>
                <p className="card-text">
                  A partir de tu contacto, nos comunicaremos contigo a la
                  brevedad para revisar fechas y disponibilidad de horarios.
                </p>
                <p className="card-text">
                  Ven a conocernos los mejores platos de la Gastronomia Chilena
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reserva de Mesas</h5>
                <form onSubmit={onSubmit}>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  <label htmlFor="name">Telefono:</label>
                  <input
                    type="text"
                    id="fono"
                    className="form-control mb-2"
                    value={fono}
                    onChange={(e) => setFono(e.target.value)}
                    required
                  />
                  <label htmlFor="date">Fecha:</label>
                  <input
                    type="date"
                    id="date"
                    className="form-control mb-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />

                  <label htmlFor="time">Hora:</label>
                  <input
                    type="time"
                    id="time"
                    className="form-control mb-2"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />

                  <label htmlFor="guests">Cantidad de invitados:</label>
                  <input
                    type="number"
                    id="guests"
                    className="form-control mb-2"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                  />
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Enviar Reserva
                    </button>
                  </div>
                  {/* <Alert key={variant} variant={variant}>
                    {mensajeAlert}
                   </Alert> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
