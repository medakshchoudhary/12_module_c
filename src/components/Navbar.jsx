import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center w-full h-[12vh] absolute fixed bg-green-950 p-3 z-8'>
        <div className="nav1 flex items-center justify-center gap-2 w-[20%]">
            <div className='bg-green-500 leading-7 text-xl rounded-md p-1'>🌿</div>
            <div className="text flex flex-col gap-0 leading-none">
              <div className='font-[Outfit-variable] font-black'>Green Agra</div>
              <div className='font-sans text-[1.8vh] tracking-wider'>GREEN CITY MISSION 2030</div>
            </div>
        </div>
        <div className="nav2 flex items-center justify-center gap-8 w-[60%] tracking-tight">
          <div className="href">Home</div>
          <div className="href">Initiatives</div>
          <div className="href">Lakes Restoration</div>
          <div className="href">Events</div>
        </div>
        <div className="nav3 w-[20%] flex items-center justify-center">
          <div className="join w-[70%] py-2 rounded-full bg-yellow-300 flex items-center justify-center text-black">Join the movement</div>
        </div>
    </div>
  )
}

export default Navbar