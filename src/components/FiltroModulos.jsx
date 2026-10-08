import "../styles/FiltroModulos.css";

const opcionesFiltro = [
  { valor: "todos", texto: "Todos" },
  { valor: "pendientes", texto: "Pendientes" },
  { valor: "completados", texto: "Completados" },
];

function FiltroModulos({ filtro, alCambiarFiltro }) {
  return (
    <div className="filtro-modulos">
      {opcionesFiltro.map((opcion) => (
        <button
          key={opcion.valor}
          className={
            filtro === opcion.valor
              ? "filtro-modulos-boton filtro-modulos-activo"
              : "filtro-modulos-boton"
          }
          onClick={() => alCambiarFiltro(opcion.valor)}
        >
          {opcion.texto}
        </button>
      ))}
    </div>
  );
}

export default FiltroModulos;