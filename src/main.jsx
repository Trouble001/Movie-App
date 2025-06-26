import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './context/movieContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MovieProvider>
  </StrictMode>,
)
