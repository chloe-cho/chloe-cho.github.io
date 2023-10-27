import React from 'react'
import {BiSolidPhone} from 'react-icons/bi'
const Home: React.FC = () => {
  return (
        <div className='w-full h-screen bg-[#000000] text-white'> 
          <div className='max-w-[1000px] mx-auto px-8 md:px-40 flex flex-col justify-center h-full'>
            <p className='text-[#38b6ff]'>Hi, my name is</p>
            <h1 className='text-5xl font-bold text-[#b8b8b8]'>Chloe Cho</h1>
            <h2 className='text-5xl font-bold text-[#8892b0]'>I'm a Software Engineer.</h2>
            <div>
              <button className='text-white border-2 px-4 py-2 my-4 flex items-center hover:bg-[#38b6ff]'>Contact
              <BiSolidPhone className='ml-3'/></button>
            </div>
          </div>
        </div>
  );
}

export default Home


