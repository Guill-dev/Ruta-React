import { useState } from "react";
import "../styles/FormularioModulo.css";

function FormularioModulo({ alAgregar }) {
  const [nombreModulo, setNombreModulo] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();

    const tituloLimpio = nombreModulo.trim();

    setNombreModulo("");

    if (tituloLimpio === "") {
      return;
    }

    alAgregar(tituloLimpio);
  }

  return (
    <form className="formulario-modulo" onSubmit={enviarFormulario}>
      <input
        className="formulario-modulo-caja"
        value={nombreModulo}
        onChange={(evento) => setNombreModulo(evento.target.value)}
        placeholder="¿Cómo se llama el módulo que deseas agregar?"
      />
      <button className="formulario-modulo-agregar">Agregar módulo</button>
    </form>
  );
}

export default FormularioModulo;