/*
REACT ->REACT DOM -> FRONT END NA WEB
      ->REACT NATIVE -> FRONT END NO MOBILE
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
  </React.StrictMode>,
)
