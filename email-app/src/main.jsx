import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'head_wrapper/design-system';
import EmailApp from './EmailApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailApp />
  </StrictMode>,
)
