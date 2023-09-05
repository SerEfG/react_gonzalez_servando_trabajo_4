import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/home/home';
import Tablas from './componentes/tablas/tablas';
import Registro from './componentes/Registro/Registro';
import Login from './componentes/Login/Login';
import Qsomos from './componentes/qsomos/qsomos';


function App() {
    return (

    <div className="App">
      <h1 className='titulo'>Mi web con React Trabajo Práctico Unidad Nº 4</h1>
      
      <BrowserRouter basename='react_gonzalez_servando_trabajo_4'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/tablas/tablas' element={<Tablas/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/qsomos/qsomos' element={<Qsomos/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    

  );
}

export default App;