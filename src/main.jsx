import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordGate from './components/PasswordGate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* TODO: Remove when Stripe + auth are live. */}
    <PasswordGate>
      <App />
    </PasswordGate>
  </StrictMode>,
)
