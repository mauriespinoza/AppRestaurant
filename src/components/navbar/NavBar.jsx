import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo-master-raul.jpg';
import iconlogin from '../../../public/acceso.png';
import './navbar.css'
export const NavBar = ()=>{
   return (
    <>
     <nav id="navbar" className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {/* Restaurant */}
            <img id="logo" src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Carta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservas">
                  Reservas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> 
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>*/}
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <button className="btn btn-outline-success" type="submit">
                Buscar
              </button> */}
              <NavLink className="navbar-brand" to="/login">
                {/* Restaurant */}
                <img id="img-login" src={iconlogin} alt="login" />
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
);}