import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css'
import './assets/fonts/fonts.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No root found')
}

createRoot(root).render(<App />)
