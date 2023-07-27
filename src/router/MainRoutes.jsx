import { Route, Routes } from "react-router-dom"

import { HomePage } from '../views/pages/HomePage'
 import { Contacto } from '../views/pages/Contacto'
import { Menu } from "../views/pages/Menu";
import { Reservas } from "../views/pages/Reservas";
export const MainRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="*" element={<h1>Error 404 - Ruta no encontrada</h1>} />
        </Routes>
      </>
    );
}