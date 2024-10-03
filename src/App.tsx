import React, { useState } from 'react'
import type { Chart } from './types'

interface Props {
  initialCharts: Chart[]
  onChange?: (charts: Chart[]) => void
}

function App(props: Props) {
  const [charts, setCharts] = useState<Chart[]>(props.initialCharts)
  const handleCheckChange = (id: string, checked: boolean) => {
    const newCharts = charts.map((x) => (x.id === id ? { ...x, played: checked } : x))
    setCharts(newCharts)
    props.onChange?.(newCharts)
  }
  return (
    <div className='container mx-auto px-4'>
      <div className='mt-2 flex justify-center'>
        <img src='./logo.png' alt='logo' />
      </div>
      <div className='mt-2 flex justify-center'>
        <div>
          <div>KALEIDXSCOPE -青春エリア-</div>
          <div className='text-center text-xs'>青春エリア内の楽曲を29曲</div>
        </div>
      </div>
      {charts.map((chart) => (
        <React.Fragment key={chart.id}>
          <div className='mt-4 flex gap-3'>
            <img
              src='./dummy.png'
              alt=''
              className='size-[80px] select-none rounded-md border border-gray-500'
            />
            <div className='flex-1 '>
              <div className='line-clamp-2 flex h-[52px] items-center'>{chart.title}</div>
              <div className='flex h-[32px] items-center text-sm'>{chart.version}</div>
            </div>
            <div className='flex w-[42px] flex-col justify-center gap-2'>
              {chart.level.map((level) => (
                <React.Fragment key={`${chart.id}.${level.type}.${level.value}`}>
                  {level.type === 'expert' && (
                    <div className='flex h-6 items-center justify-center border-2 border-[#FF818D] bg-[#FF818D] font-bold text-sm text-white'>
                      {level.value}
                    </div>
                  )}
                  {level.type === 'master' && (
                    <div className='flex h-6 items-center justify-center border-2 border-[#9F51DC] bg-[#9F51DC] font-bold text-sm text-white'>
                      {level.value}
                    </div>
                  )}
                  {level.type === 'remaster' && (
                    <div className='flex h-6 items-center justify-center border-2 border-[#9F51DC] bg-white font-bold text-[#9F51DC] text-sm'>
                      {level.value}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className='flex w-[48px] items-center justify-center'>
              <label className='inline-flex h-20 cursor-pointer items-center px-6'>
                <input
                  type='checkbox'
                  className='h-6 w-6 cursor-pointer rounded border-gray-300 bg-gray-100 focus:outline-none focus:ring-opacity-25'
                  checked={chart.played}
                  onChange={(e) => handleCheckChange(chart.id, e.target.checked)}
                />
              </label>
            </div>
          </div>
          <div className='my-2 h-px border-1 bg-gray-200' />
        </React.Fragment>
      ))}
    </div>
  )
}

export default App
