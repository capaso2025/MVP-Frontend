import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./styles/globals.css";

// Punto de entrada principal de la aplicación
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root en el DOM");
}

// Crear la raíz de React con StrictMode para detectar problemas
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
