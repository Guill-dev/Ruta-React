# Ruta de aprendizaje de React

Una pequeña aplicación hecha con **React + Vite** para organizar mi ruta de aprendizaje de React. Cada tema a estudiar es un **módulo** que puedo agregar, marcar como completado o eliminar.

El proyecto también es la práctica en sí misma: se construyó paso a paso, aplicando los conceptos básicos de React a medida que se iban aprendiendo.

## Funcionalidades

- Ver la lista de módulos de aprendizaje (empieza con 3 módulos iniciales).
- Agregar nuevos módulos desde un formulario.
  - No se agregan módulos con texto vacío.
  - Se eliminan los espacios sobrantes del título.
  - La caja de texto se limpia después de agregar.
- Marcar o desmarcar un módulo como completado haciendo clic en su título (se muestra tachado).
- Eliminar módulos.
- Ver cuántos módulos quedan pendientes ("1 módulo pendiente" / "N módulos pendientes").

## Conceptos de React practicados

| Concepto | Dónde se usa |
| --- | --- |
| Componentes y JSX | El componente `App` en `src/App.jsx` |
| Estado con `useState` | Lista de `modulos` y el texto del input (`nombreModulo`) |
| Renderizado de listas y `key` | `modulos.map(...)` para pintar cada `<li>` |
| Inputs controlados | `value` + `onChange` en el campo del formulario |
| Manejo de eventos | `onSubmit`, `onClick`, `evento.preventDefault()` |
| Actualización inmutable del estado | Spread (`...`), `map` y `filter` para crear nuevos arreglos |
| Renderizado condicional | Clase `modulo-completado` y texto singular/plural |
| Valores derivados | `cantidadPendientes` se calcula a partir del estado |

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Oxlint](https://oxc.rs/) para el linting

## Cómo ejecutar el proyecto

Requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Luego abre en el navegador la URL que muestra la terminal (por defecto `http://localhost:5173`).

### Otros scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm run lint` | Revisa el código con Oxlint |

## Estructura del proyecto

```
ruta-react/
├── public/
├── src/
│   ├── App.jsx      # Componente principal con toda la lógica
│   ├── App.css      # Estilos del componente (ej. módulo completado)
│   ├── index.css    # Estilos globales
│   └── main.jsx     # Punto de entrada de React
├── index.html
├── package.json
└── vite.config.js
```

## Próximos pasos

Ideas para seguir aprendiendo con este proyecto:

- Separar la app en componentes más pequeños (`Formulario`, `ListaModulos`, `Modulo`) y pasar datos con **props**.
- Guardar los módulos en `localStorage` con `useEffect` para que no se pierdan al recargar.
- Agregar filtros: todos / pendientes / completados.
- Permitir editar el título de un módulo.
