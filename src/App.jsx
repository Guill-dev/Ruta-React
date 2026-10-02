import "./App.css";

const modulos = [
  { id: 1, titulo: "¿Que es React?" },
  { id: 2, titulo: "¿Para que sirve React?" },
  { id: 3, titulo: "Ventajas y Desventajas de React" },
];

function App() {
  return (
    <main>
      <h1>Bienvenido a la ruta de aprendizaje de React</h1>
      <ul>
        {modulos.map((modulo) => {
          console.log(modulo);
          return <li key={modulo.id}>{modulo.titulo}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
