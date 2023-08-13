// import { MenuComponent } from "../../components/menu/MenuComponent";
import {MenuDinamicComponent} from "../../components/menu/MenuDinamicComponent"
import { Header } from "../../components/header/Header";
export const Menu =() =>{
    return(
        <>
            {/* <h1 className="text-center">Nuestra Carta</h1> */}
            <Header title='Nuestra Carta'/>
            {/* <MenuComponent/> */}
            <MenuDinamicComponent/>
        </>
    );
}