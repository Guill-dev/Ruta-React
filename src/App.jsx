import { useState } from "react";
import "./App.css";

const modulosIniciales = [
  { id: 1, titulo: "¿Qué es React?" },
  { id: 2, titulo: "¿Para qué sirve React?" },
  { id: 3, titulo: "Ventajas y Desventajas de React" },
];

function App() {
  const [modulos, setModulos] = useState(modulosIniciales);

  return (
    <main>
      <h1>Bienvenido a la ruta de aprendizaje de React</h1>
      <ul>
        {modulos.map((modulo) => (
          <li key={modulo.id}>{modulo.titulo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
