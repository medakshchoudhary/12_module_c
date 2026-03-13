import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full relative'>
      <div className='absolute w-full h-full bg-black opacity-60 z-1'></div>
      <div className='absolute z-1 w-full h-full flex'>
        <div className='w-[50vw] h-full flex flex-col items-center justify-center'>
          <div className='h-[25%] w-full'></div>
          <div className='h-[25%] w-full flex flex-col items-start justify-center ml-32'>
            <h1 className='text-8xl'>Building a</h1>
            <h1 className='text-8xl'>Greener</h1>
            <h1 className='text-8xl'>Agra</h1>
          </div>
          <div className='h-[25%] w-full'></div>
          <div className='h-[25%] w-full'></div>
        </div>
        <div className='w-[50vw] h-full flex items-center justify-center'>
          <div className='bg-green-500 w-[70%] h-[30%] rounded-4xl'>
            <div className='w-full h-[50%] flex items-center justify-evenly'>
              <div>
                <div className='flex items-end'>
                  <h1>50K</h1>
                  <span>+</span>
                </div>
                <p>Trees Planted</p>
              </div>
              <div>
                <div className='flex items-end'>
                  <h1>12</h1>
                  <span>+</span>
                </div>
                <p>Lakes Restored</p>
              </div>
            </div>
            <div className='w-full h-[50%] flex items-center justify-evenly'>
              <div>
                <div className='flex items-end'>
                  <h1>30</h1>
                  <span>%</span>
                </div>
                <p>Waste recycled</p>
              </div>
              <div>
                <div className='flex items-end'>
                  <h1>200</h1>
                  <span>+</span>
                </div>
                <p>Green Zones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img width='100%' src="/Urban-Forestry.jpeg" alt="Urban Forestery Image show casing lush greenery" />
    </div>
  )
}

export default LandingPage