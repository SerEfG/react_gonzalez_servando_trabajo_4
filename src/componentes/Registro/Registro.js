import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useEffect } from "react";
//import Swal from 'sweetalert2';

//const { value: nombre } = await Swal.fire({
//    title: 'Ingrese Nombre',
//    input: 'nombre',
//    inputLabel: 'Your email address',
//    inputPlaceholder: 'Enter your email address'
//  })
  
//  if (nombre) {
//    Swal.fire(`Ingrese Nombre: ${nombre}`)
//  }

function Registro(){
    

    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        
        console.log('Esta es una alerta sencilla', data);
        window.alert('Nombre');
    }
    
    

    //const mostrarAlerta=(data)=>{
        
    //    Swal.fire('Registro guardado correctamente');
    //setTimeout(() => {
        //window.location.reload()
    //}, 10000)
    //}
    

    return(
        <> 
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="general">
                <label >Nombre:</label>
                <input className="campo" type="text" {...register("nombre", {required: true, maxLenght:15})} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div>
            <div className="general">
                <label>Apellido:</label>
                <input className="campo" type="text" {...register("apellido", {required: true})} />
                {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
            </div>
            <div className="general">
                <label>Email:</label>
                <input className="campo" type="text" {...register("email", {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            </div>
            <div className="general">
                <label>Contraseña:</label>
                <input className="campo" type="password" {...register("contrasenia", {required: true})} />
                {errors.contrasenia?.type === 'required' && <p>El campo contraseña es requerido</p>}
            </div>
            <input type="submit" value="Enviar" className="button" ></input>
        </form>
        <Link to='/'><button className="salida">Regreso</button></Link>

        </>
    )

}

export default Registro;