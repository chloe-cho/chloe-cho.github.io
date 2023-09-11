import React from 'react'
import Logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  return (
        <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#000000] text-white'> 
            <div>
                <img src={Logo} alt="" style={{width: '45px'}}/>
            </div>

            {/* menu */}
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Projects</li>
                </ul>
            </div>
             
            {/* hamburger */}
            <div className='hidden'>

            </div>

            {/* mobile menu */}
            <div className='hidden'>

            </div>
        </div>
  );
}

export default Navbar