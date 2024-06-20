import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CasasGaleria from './components/CasasGaleria.jsx'


ReactDOM.createRoot(document.getElementById('root-galeria')).render(
  <React.StrictMode>
    <CasasGaleria />
    
  </React.StrictMode>,
)