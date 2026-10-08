import { useState } from "react";
import TarjetaModulo from "./components/TarjetaModulo.jsx";
import "./App.css";

const modulosIniciales = [
  { id: 1, titulo: "¿Qué es React?", completado: false },
  { id: 2, titulo: "¿Para qué sirve React?", completado: false },
  { id: 3, titulo: "¿Qué es un propt?", completado: false },
];

function App() {
  const [modulos, setModulos] = useState(modulosIniciales);
  const [nombreModulo, setNombreModulo] = useState("");

  const cantidadPendientes = modulos.filter(
    (modulo) => !modulo.completado,
  ).length;

  function agregarModulo(evento) {
    evento.preventDefault();

    if (nombreModulo.trim() === "") {
      setNombreModulo("");
      return;
    }

    const moduloNuevo = {
      id: Date.now(),
      titulo: nombreModulo.trim(),
      completado: false,
    };

    setModulos([...modulos, moduloNuevo]);

    setNombreModulo("");
  }

  function invertirCompletado(idModulo) {
    const modulosActualizados = modulos.map((modulo) =>
      modulo.id === idModulo
        ? { ...modulo, completado: !modulo.completado }
        : modulo,
    );

    setModulos(modulosActualizados);
  }

  function eliminarModulo(idModulo) {
    const modulosRestantes = modulos.filter((modulo) => modulo.id !== idModulo);

    setModulos(modulosRestantes);
  }

  return (
    <main>
      <h1>Bienvenido a la ruta de aprendizaje de React</h1>
      <p>
        Tienes {cantidadPendientes}{" "}
        {cantidadPendientes === 1 ? "módulo pendiente" : "módulos pendientes"}
      </p>
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
          <TarjetaModulo
            key={modulo.id}
            id={modulo.id}
            titulo={modulo.titulo}
            completado={modulo.completado}
            alInvertirCompletado={invertirCompletado}
            alEliminar={eliminarModulo}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
