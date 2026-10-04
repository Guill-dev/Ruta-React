import { useState } from "react";
import "./App.css";

const modulosIniciales = [
  { id: 1, titulo: "¿Qué es React?" },
  { id: 2, titulo: "¿Para qué sirve React?" },
  { id: 3, titulo: "Ventajas y desventajas de React" },
];

function App() {
  const [modulos, setModulos] = useState(modulosIniciales);
  const [nombreModulo, setNombreModulo] = useState("");

  function agregarModulo(evento) {
    evento.preventDefault();

    const moduloNuevo = {
      id: Date.now(),
      titulo: nombreModulo,
    };

    setModulos([...modulos, moduloNuevo]);
  }

  return (
    <main>
      <h1>Bienvenido a la ruta de aprendizaje de React.</h1>
      <form onSubmit={agregarModulo}>
        <input
          value={nombreModulo}
          onChange={(evento) => setNombreModulo(evento.target.value)}
          placeholder="¿Cómo se llama el módulo que deseas agregar?"
        />
        <button>Agregar módulo</button>
      </form>
      <ul>
        {modulos.map((modulo) => (
          <li key={modulo.id}>{modulo.titulo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
