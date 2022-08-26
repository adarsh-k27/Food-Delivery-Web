import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { MdFoodBank } from 'react-icons/md'
import { BsFillCloudArrowUpFill } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'
import { MdHealthAndSafety } from 'react-icons/md'
import { Catogeries } from '../../datas'
import { Loader } from '../../components'
import { useRef } from 'react'
import food from '../../assets/chicken.png'
import { UserSignIn } from '../../collections/user'
import { useContext } from 'react'
import GlobalContext from '../../context/globalcontext'
function CreateContainer () {
  const [Title, setTitle] = useState('')
  const Navigate=useNavigate()
  const [Catogery, setCatogery] = useState('')
  const [Calory, setCalory] = useState('')
  const [Price, setPrice] = useState('')
  const [imageAsset, setimageAsset] = useState(true)
  const [msg, setMsg] = useState('success')
  const [found, setFound] = useState('sm')
  const [field, setField] = useState(false)
  const [Load, setLoad] = useState(false)
  const {user}=useContext(GlobalContext).state
  const imageUpload = useRef()
  const UploadImage = () => {
    //cloudify Upload

  }

  useEffect(()=>{
    if(!user.admin){
      Navigate('/')
    }
  },[user])

  return (
    <div className='flex justify-center items-center px-3 md:px-20 bg-gray-200'>
      <div className='w-full  p-2 px-4 mad:px-12 flex flex-col gap-3 items-center justify-center'>
        {field && (
          <div
            className={`w-full flex items-center justify-center rounded-md ${
              found == 'error'
                ? 'bg-red-500 text-white text-bold font-serif  text-base'
                : 'bg-green-500 text-white text-bold font-serif text-base'
            }`}
          >
            <p>{msg}</p>
          </div>
        )}
        <div className='flex gap-3 w-full px-3 md:px-5 items-center '>
          <MdFoodBank className='text-lg ' />
          <input
            type='text'
            placeholder='Enter Title Here..'
            className='w-full py-3 outline-none border-none text-bold font-serif '
            onChange={(e)=>setTitle(e.target.value)}
            value={Title}
          />
        </div>
        <div className='flex w-full px-10 md:px-12 items-center '>
          <select
            name=''
            id=''
            className='w-full outline-none border-none py-3 '
            onChange={e => setCatogery(e.target.value)}
          >
            <option className='font-serif font-bold'>select Catogery</option>
            {Catogeries &&
              Catogeries.map(item => {
                return (
                  <option
                    value={item.id}
                    className='font-serif font-bold capitalize outline-none'
                  >
                    {item.name}
                  </option>
                )
              })}
          </select>
        </div>

        <div className='group flex flex-col gap-3 border-2 border-dotted border-gray-300 items-center justify-center w-full md:w-225 h-225'>
          {Load ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label
                    htmlFor=''
                    onClick={() => imageUpload.current.click()}
                    className='w-full h-full flex flex-col justify-center items-center cursor-pointer'
                  >
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                      <BsFillCloudArrowUpFill className='text-[2rem] text-bold text-gray-400 hover:text-gray-600' />
                      <p className='font-semibold font-serif'>
                        Click Here ToUpload{' '}
                      </p>
                    </div>
                    <input
                      type={'file'}
                      accept='image/*'
                      onChange={UploadImage}
                      className='w-0 h-0'
                      ref={imageUpload}
                    ></input>
                  </label>
                </>
              ) : (
                <img src={food} className='w-full h-full object-cover '></img>
              )}
            </>
          )}
        </div>
        <div className='flex flex-col md:flex-row gap-3 w-full px-3 items-center justify-center'>
          <div className='flex gap-3 justify-center items-center w-full'>
            <MdHealthAndSafety className='text-lg font-bold' />
            <input
              type={'text'}
              placeholder='Calories'
              className='w-full py-3 outline-none border-none text-bold font-serif'
              onChange={(e)=>setCalory(e.target.value)}
              value={Calory}
            ></input>
          </div>
          <div className='flex gap-3 justify-center items-center w-full'>
            <AiFillDollarCircle className='text-lg font-bold' />

            <input
              type={'text'}
              placeholder='Price'
              className='w-full py-3 outline-none border-none text-bold font-serif'
              onChange={(e)=>setPrice(e.target.value)}
              value={Price}
            ></input>
          </div>
        </div>
        <div className='w-full md:w-max md:px-5 md:mt-2  flex items-center justify-center  bg-green-500 py-2 rounded-md'>
          <button className='font-serif'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer
