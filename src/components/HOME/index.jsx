import React from 'react'
import BikeDelivery from '../../assets/bikedelivery.jpg'
import iceCream from '../../assets/icecream.png'
import { Details } from '../../datas'
function Home () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='flex w-full flex-col gap-4'>
        {/* text sec6tion */}
        <div className='flex w-fit gap-3 items-center justify-start bg-orange-100 rounded-sm'>
          <p className='text-base text-orange-400 font-bold'>Bike Delivery</p>
          <div className='flex w-8 h-8 items-center rounded-full bg-white'>
            <img
              src={BikeDelivery}
              alt='bike delivery'
              className='w-6 h-6 object-cover rounded-md '
            />
          </div>
        </div>
        {/* bike delivery section completed  */}

        <p className='text-headingColor text-[2rem] md:text-[3.8rem] font-bold tracking-wide leading-tight'>
          The Fastest Delivery In{' '}
          <span className='text-[2.5rem] md:text-[4.5rem] text-orange-400'>
            Your City
          </span>
        </p>

        <p className='flex text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          suscipit perspiciatis non similique! Delectus ullam cumque excepturi,
          necessitatibus magnam pariatur quidem alias officia molestias
          voluptatem non doloremque esse id tempora.
        </p>

        <button className='text-white w-full md:w-fit bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg px-4 py-2 flex justify-center md:justify-start shadow-lg'>
          Order Now
        </button>
      </div>

      <div className=' w-full h-full flex-1 flex items-center'>
        {/* image section */}
        <div className='relative w-full md:w-340 h-480 ml-auto bg-gradient-to-bl from-orange-100 to-orange-200'>
          <div className='absolute top-20 w-full lg:-ml-10 py-5 flex flex-wrap gap-6 justify-center '>
            {Details.map(data => {
              return (
                <div
                  key={data.id}
                  className='w-150 p-4 backdrop-blur-md bg-white/30 rounded-xl flex flex-col items-center justify-center'
                >
                  <img src={data.img} alt='' className='w-40 -mt-20' />
                  <p className='text-base font-semibold text-slate-600'>
                    {data.name}
                  </p>
                  <p className='text-sm text-slate-700 font-serif'>
                    {data.desc}
                  </p>
                  <p></p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
