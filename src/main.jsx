import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './PerformanceHooks-Memo.jsx'
import UseRef from './useRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UseRef />
  </StrictMode>,
)
