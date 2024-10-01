function App() {
  return (
    <div className='container mx-auto px-4'>
      <div className='mt-2 flex justify-center'>
        <img src='./logo.png' alt='logo' />
      </div>
      <div className='mt-2 flex justify-center'>
        <div>KALEIDXSCOPE -青春エリア-</div>
      </div>
      <div className='mt-4 flex gap-3'>
        <img
          src='./dummy.png'
          alt=''
          className='size-[80px] select-none rounded-md border border-gray-500'
        />
        <div className='flex-1 '>
          <div className='line-clamp-2 h-[52px] '>
            プリズム△▽リズムぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんぁあぃいぅうぇえぉおかがきぎくぐけ
          </div>
          <div className='flex h-[32px] items-center text-sm'>maimai でらっくす PRiSM</div>
        </div>
        <div className='flex w-[42px] flex-col justify-center gap-2'>
          <div className='flex h-6 items-center justify-center border-2 border-[#9F51DC] bg-[#9F51DC] font-bold text-sm text-white'>
            12+
          </div>
          <div className='flex h-6 items-center justify-center border-2 border-[#9F51DC] bg-white font-bold text-[#9F51DC] text-sm'>
            13+
          </div>
        </div>
        <div className='flex w-[48px] items-center justify-center'>
          <label className='inline-flex h-20 cursor-pointer items-center px-6'>
            <input
              type='checkbox'
              className='h-6 w-6 cursor-pointer rounded border-gray-300 bg-gray-100 focus:outline-none focus:ring-opacity-25'
            />
          </label>
        </div>
      </div>
      <div className='my-2 h-px border-1 bg-gray-200' />
    </div>
  )
}

export default App
