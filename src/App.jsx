import { useState } from "react";
import TarjetaModulo from "./components/TarjetaModulo.jsx";
import FormularioModulo from "./components/FormularioModulo.jsx";
import ContadorPendientes from "./components/ContadorPendientes.jsx";
import "./styles/App.css";

const modulosIniciales = [
  { id: 1, titulo: "¿Qué es React?", completado: false },
  { id: 2, titulo: "¿Para qué sirve React?", completado: false },
  { id: 3, titulo: "Ventajas y desventajas de React", completado: false },
];

function App() {
  const [modulos, setModulos] = useState(modulosIniciales);

  const cantidadPendientes = modulos.filter(
    (modulo) => !modulo.completado,
  ).length;

  function agregarModulo(tituloModulo) {
    const moduloNuevo = {
      id: Date.now(),
      titulo: tituloModulo,
      completado: false,
    };

    setModulos([...modulos, moduloNuevo]);
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
    <main className="app">
      <h1 className="app-titulo">
        Bienvenido a la ruta de aprendizaje de{" "}
        <span className="app-titulo-destacado">React</span>
      </h1>
      <ContadorPendientes cantidad={cantidadPendientes} />
      <FormularioModulo alAgregar={agregarModulo} />
      <ul className="app-lista">
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
