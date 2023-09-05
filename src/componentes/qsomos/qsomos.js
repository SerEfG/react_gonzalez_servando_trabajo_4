import './qsomos.css';
import { Link } from "react-router-dom";


function Qsomos() {
    return (

    <div className="quienes_somos">
      
      <h1>¿Quienes somos?</h1>
      <div>
        <p className='texto1'>Nuestro comercio está para satisfacer las necesidades de la comunidad en la comercialización de materiales para la construcción, la industria y el hogar, con la mejor calidad, garantía y al menor precio, a través de la excelencia en el servicio al cliente.</p>
        <p className='texto1'>Por todo ello, nuestra filosofía de empresa puede resumirse en estos tres pilares: COMPROMISO, SERVICIO y TRATO PERSONALIZADO. Compromiso que garantiza la buena marcha de la relación comercial. Buen servicio como resultado de la misma…y trato personalizado, puesto que entendemos a la persona y sus necesidades, sus dudas, inquietudes y experiencias… y su satisfacción es lo que nos interesa. 
        Como empresa joven y dinámica que somos, nuestro proyecto es llegar a todos los profesionales y particulares que quieren desarrollar una actividad para lo que necesitan a la ferretería como complemento, como ayuda, como proveedor fundamental, sin el cual no les sería posible llevar a cabo su profesión, ocupación o trabajo. Somos fundamentales para todos vosotros y eso nos hace mantener vivo el espíritu de trabajo y superación, ampliando día a día nuestra oferta en relación a vuestra demanda y siendo conscientes de que mantenernos en continua evolución nos ayuda a ir a la cabeza del sector.</p>
        <p className='texto1'>Contamos con un amplio servicio de E-commerce (con todas las formas de pago), seguimiento de envíos, pronta entrega y dependiendo del monto comprado el envío es sin costo alguno, a los que se agrega al final del recorrido una llamada desde nuestra empresa para evaluar cada entrega.</p>
      </div>
      <Link to='/'><button className="salida">Regreso</button></Link>  
    </div>
    

  );
}

export default Qsomos;