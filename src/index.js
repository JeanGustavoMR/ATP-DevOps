import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./Rotas.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Routes />
    </div>
  </React.StrictMode>
);