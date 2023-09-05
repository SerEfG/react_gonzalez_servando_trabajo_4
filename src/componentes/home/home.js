import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import icon from './ferreteria.png';


function Home(){
    return(
        <div className="menu"> 
            <h1>Sitio de compras ferretería "Atajá"</h1>
            <img src={icon} className="ferreteria" alt="foto frente de página"/>
            <div>
                <Link to='/tablas/tablas'><button className="salida">Ver compra</button></Link>
                <Link to='/registro'><button className="salida">Registro</button></Link>
                <Link to='/login'><button className="salida">Login</button></Link>
                <Link to='/qsomos/qsomos'><button className="menu-boton">Quienes somos</button></Link>
            </div>
        </div>
    )

}

export default Home;