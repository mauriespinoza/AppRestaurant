import  { useState } from 'react';
// import { Card } from 'react-bootstrap';
export const Reservas = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fono, setFono] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div>
        <h1>Reservas</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Reserva con nosotros</h2>
                <p className="card-text">A partir de tu contacto, nos comunicaremos contigo a la brevedad para revisar fechas y disponibilidad de horarios.</p>
                <p className="card-text">Ven a conocernos los mejores platos de la Gastronomia Chilena</p>
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
              <button type="submit" className="btn btn-primary">Enviar Reserva</button>
            </form>
              </div>
            </div>
          </div>
</div>
        
        {/* <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Reserva de mesas</Card.Title>
          <Card.Text>
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
              <button type="submit" className="btn btn-primary">Enviar reserva</button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card> */}
      </div>
    </>
  );
}