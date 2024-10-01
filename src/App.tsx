import React, { useState } from 'react'

function App() {
  const [data, setData] = useState<
    {
      id: string
      title: string
      version: string
      jacket: string
      level: { type: 'expert' | 'master' | 'remaster'; value: string }[]
      played: boolean
    }[]
  >([
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
  ])
  const handleCheckChange = (id: string, checked: boolean) => {
    setData(data.map((x) => (x.id === id ? { ...x, played: checked } : x)))
  }
  return (
    <div className='container mx-auto px-4'>
      <div className='mt-2 flex justify-center'>
        <img src='./logo.png' alt='logo' />
      </div>
      <div className='mt-2 flex justify-center'>
        <div>KALEIDXSCOPE -青春エリア-</div>
      </div>
      {data.map((data) => (
        <React.Fragment key={data.id}>
          <div className='mt-4 flex gap-3'>
            <img
              src='./dummy.png'
              alt=''
              className='size-[80px] select-none rounded-md border border-gray-500'
            />
            <div className='flex-1 '>
              <div className='line-clamp-2 flex h-[52px] items-center'>{data.title}</div>
              <div className='flex h-[32px] items-center text-sm'>{data.version}</div>
            </div>
            <div className='flex w-[42px] flex-col justify-center gap-2'>
              {data.level.map((level) => (
                <React.Fragment key={`${data.id}.${level.type}.${level.value}`}>
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
                  checked={data.played}
                  onChange={(e) => handleCheckChange(data.id, e.target.checked)}
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
