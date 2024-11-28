import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navegacao from './components/Navegacao';
import Rotas from './Rotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navegacao/>
    <Rotas/>
  </BrowserRouter>
);
