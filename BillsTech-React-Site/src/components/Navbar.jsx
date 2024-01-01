import { React, useState } from 'react'
import { BillstechLogo } from '../assets/icons'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
	<div className="w-full bg-black">
        <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between py-4">
                <div className="relative md:mt-8">
                    <img className="w-[50%] md:w-[250px]" src={BillstechLogo} alt=""/>
                </div>
                <button
        className="lg:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="h-8 w-8 fill-current" fill="currentColor" viewBox="0 0 20 20">
          {isOpen ? (
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          ) : (
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full flex flex-col bg-black p-4 transition-transform transform">
          {/*mobile menu items go here */}
           <a href="#about" className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white  hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">About Us</a>
           <a href="#services" className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Our Services</a>
           <a href="#expertise" className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Our Expertise</a>
           <a href="#contact" className="px-10 py-3 my-6 font-bold text-sm text-center bg-gradient text-black rounded-full md:mt-8 md:ml-4 cursor-pointer">Contact Us</a>
        </div>
      )}
            </div>
            <nav className="hidden h-0 md:h-auto flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 align-middle ">
                <a href="#about" className="px-4 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white  hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">About Us</a>
                <a href="#services" className="px-4 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Our Services</a>
                <a href="#expertise" className="px-4 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Our Expertise</a>
                <a href="#contact" className="px-10 py-3 font-bold text-sm text-center bg-gradient text-black rounded-full md:mt-8 md:ml-4 cursor-pointer">Contact Us</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar