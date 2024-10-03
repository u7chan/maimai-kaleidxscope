import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Chart } from './types'
import App from './App.tsx'
import './index.css'

const initialCharts: Chart[] = [
  {
    id: '1',
    title: 'プリズム△▽リズム1',
    version: 'maimai でらっくす PRiSM',
    jacket: './dummy.png',
    level: [
      { type: 'expert', value: '12' },
      { type: 'master', value: '13' },
    ],
    played: true,
  },
  {
    id: '2',
    title: 'プリズム△▽リズム2',
    version: 'maimai でらっくす PRiSM Plus',
    jacket: './dummy.png',
    level: [
      { type: 'master', value: '13' },
      { type: 'remaster', value: '13+' },
    ],
    played: false,
  },
]

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialCharts={initialCharts} />
  </StrictMode>,
)
