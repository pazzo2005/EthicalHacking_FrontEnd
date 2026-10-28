import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { installBrowserErrorLogging } from './clientLogger.js'
import ErrorBoundary from './ErrorBoundary.jsx'

installBrowserErrorLogging()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
