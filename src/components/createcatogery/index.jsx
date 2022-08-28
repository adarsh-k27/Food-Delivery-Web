import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../context/globalcontext'
import { ToastContainer, toast } from 'react-toastify'
import { useContext } from 'react'
import { AddCatogeryTitle } from '../../collections/product'
import { Loader } from '../../components'
function CreateCatogery () {
  const Navigate = useNavigate()
  const { user } = useContext(GlobalContext).state
  const [name, setName] = useState('')
  const [Load, setLoad] = useState(false)
  useEffect(() => {
    if (user && !user.admin) {
      Navigate('/')
    }
  }, [])
  const AddCatogery = () => {
    if (name == '')
      return toast.error('You Must Add A Title', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: 'dark'
      })

    AddCatogeryTitle(name, setLoad)
    setName('')
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5 bg-gray-200 py-4'>
      {Load && <Loader />}
      <div className='flex w-full px-1 md:px-15 flex-col gap-3 '>
        <div className='w-full px-2 md:px-8'>
          <input
            className='w-full h-8 border-0 outline-none font-serif font-bold'
            type='text'
            placeholder='Enter Catogery'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='flex justify-center items-center'>
          <div
            className='w-full md:w-max md:px-5 md:mt-2  flex items-center justify-center  bg-green-500 py-2 rounded-md'
            onClick={AddCatogery}
          >
            <button className='font-serif'>Add</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CreateCatogery
