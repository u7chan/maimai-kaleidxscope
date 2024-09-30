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
        <img src='./dummy.png' alt='' className='size-[80px] rounded-md border border-gray-500' />
        <div className='flex-1 '>
          <div className='line-clamp-2 h-[52px] '>
            プリズム△▽リズムぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんぁあぃいぅうぇえぉおかがきぎくぐけ
          </div>
          <div className='flex h-[32px] items-center text-sm'>maimai でらっくす PRiSM</div>
        </div>
        <div className='flex w-[42px] flex-col justify-center gap-2'>
          <div className='flex h-7 justify-center border-2 border-[#9F51DC] bg-[#9F51DC] text-white'>
            12+
          </div>
          <div className='flex h-7 justify-center border-2 border-[#9F51DC] bg-white text-[#9F51DC]'>
            13+
          </div>
        </div>
        <div className='flex w-[48px] items-center justify-center'>
          <input
            id='default-checkbox'
            type='checkbox'
            value=''
            className='h-4 w-4 scale-125 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
        </div>
      </div>
    </div>
  )
}

export default App
