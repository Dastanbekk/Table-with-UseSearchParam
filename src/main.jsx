import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routerr from './route/routerr'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routerr />
    </BrowserRouter>
  </StrictMode>,
)
