
import { NavBar } from './components/navbar/NavBar';
import './App.css'
import { MainRoutes } from './router/MainRoutes';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <>
      <NavBar/>
      
      <MainRoutes/>
      <Footer/>
      
    </>
  )
}

export default App
