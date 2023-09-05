import React, {Component} from "react";
import { Link } from "react-router-dom";
import './login.css';
//import { useForm } from "react-hook-form";
//import { Alert } from "bootstrap";
//import Swal from 'sweetalert2';

class Login extends Component {
    //state = {Usuario: '', Contraseña: ''};
    
    valueToState = ({name, value}) => {
        this.setState(() => {
            return { [name]: value}; 
        });
    };
    
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <h1>Login</h1>
                <form>
                    <div className="general">
                        <label htmlFor="usuario">@mail: </label>
                        <input className="campo" name="usuario" type="email" placeholder="Ingresa tu correo electrónico" onChange={event =>this.valueToState(event.target)} required/>
                    </div>
                    <div className="general">
                        <label htmlFor="contraseña">Contraseña: </label>
                        <input className="campo" name="contraseña" type="password" placeholder="Ingresa tu contraseña" onChange={event =>this.valueToState(event.target)} required/>
                    </div>
                    <button type="submit" value="Enviar" className="button" >Login</button>
                </form>
                <Link to='/'><button className="salida">Regreso</button></Link>
            </div>
        );
    }
}



export default Login;