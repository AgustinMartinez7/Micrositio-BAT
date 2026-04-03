import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import './style.css'
import TPI from './views/tpi'
import Desafios from './views/desafios'
import Desktop from './views/desktop'
import NotFound from './views/not-found'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tpi" element={<TPI />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
