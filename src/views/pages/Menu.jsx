// import { MenuComponent } from "../../components/menu/MenuComponent";
import {MenuDinamicComponent} from "../../components/menu/MenuDinamicComponent"
export const Menu =() =>{
    return(
        <>
            <h1 className="text-center">Carta</h1>
            {/* <MenuComponent/> */}
            <MenuDinamicComponent/>
        </>
    );
}