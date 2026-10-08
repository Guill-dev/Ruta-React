import "../styles/ContadorPendientes.css";

function ContadorPendientes({ cantidad }) {
  return (
    <p className="contador-pendientes">
      Tienes {cantidad}{" "}
      {cantidad === 1 ? "módulo pendiente" : "módulos pendientes"}
    </p>
  );
}

export default ContadorPendientes;