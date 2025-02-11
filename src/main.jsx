import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routerr from './route/routerr'
import ValueContextProvider from './assets/context/valueContext'

createRoot(document.getElementById('root')).render(
  <ValueContextProvider>
    <BrowserRouter>
      <Routerr />
    </BrowserRouter>
  </ValueContextProvider>
)
