import React from 'react';
import ReactDOM from 'react-dom/client';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ImcApp } from './pages/ImcApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImcApp/>
  </React.StrictMode>,
)
