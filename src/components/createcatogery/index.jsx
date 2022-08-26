import React from 'react'

function CreateCatogery () {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5 bg-gray-200 py-4'>
      <div className='flex w-full px-1 md:px-15 flex-col gap-3 '>
        <div className='w-full px-2 md:px-8'>
          <input
            className='w-full h-8 border-0 outline-none font-serif font-bold'
            type='text'
            placeholder='Enter Catogery'
          />
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-full md:w-max md:px-5 md:mt-2  flex items-center justify-center  bg-green-500 py-2 rounded-md'>
            <button className='font-serif'>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCatogery
