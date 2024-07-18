import './index.css'

import { createRoot } from 'react-dom/client'

import App from './App'
import { ToastProvider } from './contexts/ToastProvider'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No root found')
}

createRoot(root).render(
  <ToastProvider>
    <App />
  </ToastProvider>,
)
