import React, { useState } from 'react';
import './App.css';

function App() {
 
  const [textoUsuario, setTextoUsuario] = useState('');
  

  const [resultado, setResultado] = useState('');

 
  const manejarCambioTexto = (evento) => {
    setTextoUsuario(evento.target.value);
  };


  const analizarTexto = () => {
    
    const textoLimpio = textoUsuario.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    
    const textoRevertido = textoLimpio.split('').reverse().join('');
    
    
    if (textoLimpio === textoRevertido) {
      setResultado('¡El texto es un palíndromo!');
    } else {
      setResultado('El texto no es un palíndromo.');
    }
  };

  return (
    <div className="App">
      <h1>Detector de Palíndromos</h1>
      <input 
        type="text" 
        value={textoUsuario} 
        onChange={manejarCambioTexto} 
        placeholder="Escribe algo aquí..." 
      />
      <button onClick={analizarTexto}>Analizar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
