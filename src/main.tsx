import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { getChartRepository } from './chartRepository'
import './index.css'

const chartRepository = getChartRepository()

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialCharts={chartRepository.fetch()} />
  </StrictMode>,
)
