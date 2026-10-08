function ContadorPendientes({ cantidad }) {
  return (
    <p>
      Tienes {cantidad}{" "}
      {cantidad === 1 ? "módulo pendiente" : "módulos pendientes"}
    </p>
  );
}

export default ContadorPendientes;
