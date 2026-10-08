function TarjetaModulo({
  id,
  titulo,
  completado,
  alInvertirCompletado,
  alEliminar,
}) {
  return (
    <li className={completado ? "modulo-completado" : ""}>
      <span onClick={() => alInvertirCompletado(id)}>{titulo}</span>
      <button onClick={() => alEliminar(id)}>Eliminar</button>
    </li>
  );
}

export default TarjetaModulo;