// import { Footer } from "../../components/footer/Footer"

import { Jumbotron } from "../../components/jumbotron/Jumbotron";
import { About } from "../../components/about/About";
// import sandwichHamburguer from '../../../public/sandwich-hamburger.jpg'
export const HomePage = () => {
  return (
    <>
      <Jumbotron id="jumbo1"/>
      <About/>
      {/* <Jumbotron id="jumbo2"/>
      <Jumbotron id="jumbo3"/>
      <Jumbotron id="jumbo4"/> */}
    </>
  );
};
