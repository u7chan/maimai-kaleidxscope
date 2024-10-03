import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { chartRepository } from './chartRepository'
import './index.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialCharts={chartRepository.fetch()} />
  </StrictMode>,
)
