import "../styles/TarjetaModulo.css";

function TarjetaModulo({
  id,
  titulo,
  completado,
  alInvertirCompletado,
  alEliminar,
}) {
  return (
    <li
      className={
        completado ? "tarjeta-modulo modulo-completado" : "tarjeta-modulo"
      }
    >
      <span
        className="tarjeta-modulo-titulo"
        onClick={() => alInvertirCompletado(id)}
      >
        {titulo}
      </span>
      <button
        className="tarjeta-modulo-eliminar"
        onClick={() => alEliminar(id)}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TarjetaModulo;