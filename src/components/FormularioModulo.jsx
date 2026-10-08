import { useState } from "react";

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
    <form onSubmit={enviarFormulario}>
      <input
        value={nombreModulo}
        onChange={(evento) => setNombreModulo(evento.target.value)}
        placeholder="¿Cómo se llama el módulo que deseas agregar?"
      />
      <button>Agregar módulo</button>
    </form>
  );
}

export default FormularioModulo;
