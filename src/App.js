import './App.css';
// import FreeCodeCamp_logo from "./imagenes/FreeCodeCamp_logo.png";
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  //Acá vá la Lógica

  const [input, setInput] = useState(""); 

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Please enter values to perform calculations")
    }
  }

  //Acá va lo que se muestra en pantalla
  return (
    <div className="App">
      {/* <div className="freeCodeCamp-logo-contenedor">
        <img src={FreeCodeCamp_logo} alt="Logo de FreeCodeCamp" className="freeCodeCamp-logo" />
      </div> */}

      <div className="contenedor-calculadora">
        <Pantalla input={input}  />
        <div className="fila">
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=> setInput("")} >Clear</BotonClear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
