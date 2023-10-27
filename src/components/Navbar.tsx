import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import resume from '../assets/ChloeCho_Resume.pdf'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaFileAlt} from 'react-icons/fa'


const Navbar: React.FC = () => {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
        <div className='fixed w-full h-[50px] flex justify-between items-center px-4 md:px-40 bg-[#000000] text-white'> 
            <div>
                <img src={Logo} alt="" style={{width: '45px'}}/>
            </div>

            {/* menu */}
            <div>
                <ul className='hidden md:flex'>
                    <li className='hover:text-[#38b6ff]'>Home</li>
                    <li className='hover:text-[#38b6ff]'>About</li>
                    <li className='hover:text-[#38b6ff]'>Projects</li>
                    <li className='hover:text-[#38b6ff]'>Contact</li>
                </ul>
            </div>
             
            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
                
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                    <li className='hover:text-[#38b6ff] py-5 text-2xl'>Home</li>
                    <li className='hover:text-[#38b6ff] py-5 text-2xl'>About</li>
                    <li className='hover:text-[#38b6ff] py-5 text-2xl'>Projects</li>
                    <li className='hover:text-[#38b6ff] py-5 text-2xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden md:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='w-[50px] h-[40px] flex justify-between bg-[#0077B5] hover:bg-white hover:text-[#0077B5] group'>
                        <a className='flex justify-between items-center w-full' href="https://www.linkedin.com/in/chloe-h-cho/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30}/>
                            <span className="absolute w-auto p-2 m-2 min-w-max left-12 rounded-md shadow-md text-white bg-[#282a33] text-xs font-bold transition-all duration-300 scale-0 origin-left group-hover:scale-100">
                                LinkedIn
                            </span>
                        </a>
                    </li>
                    <li className='w-[50px] h-[40px] flex justify-between bg-[#484f58] hover:bg-white hover:text-[#484f58] group'>
                        <a className='flex justify-between items-center w-full' href="https://github.com/chloe-cho" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                            <span className="absolute w-auto p-2 m-2 min-w-max left-12 rounded-md shadow-md text-white bg-[#282a33] text-xs font-bold transition-all duration-300 scale-0 origin-left group-hover:scale-100">
                                Github
                            </span>
                        </a>
                    </li>
                    <li className='w-[50px] h-[40px] flex justify-between bg-[#2b7683] hover:bg-white hover:text-[#2b7683] group'>
                        <a className='flex justify-between items-center w-full' href="mailto:chloehcho@gmail.com" target="_blank" rel="noopener noreferrer" >
                            <FaEnvelope size={30}/>
                            <span className="absolute w-auto p-2 m-2 min-w-max left-12 rounded-md shadow-md text-white bg-[#282a33] text-xs font-bold transition-all duration-300 scale-0 origin-left group-hover:scale-100">
                                Email
                            </span>
                        </a>
                    </li>
                    <li className='w-[50px] h-[40px] flex justify-between bg-[#132030] hover:bg-white hover:text-[#132030] group'>
                        <a className='flex justify-between items-center w-full' href={resume} target="_blank" rel="noopener noreferrer ">
                            <FaFileAlt size={30}/>
                            <span className="absolute w-auto p-2 m-2 min-w-max left-12 rounded-md shadow-md text-white bg-[#282a33] text-xs font-bold transition-all duration-300 scale-0 origin-left group-hover:scale-100">
                                Resumé
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        
        </div>
  );
}

export default Navbar