import React from 'react'
import { BillstechLogo } from '../assets/icons'

const Navbar = () => {
  return (
	<div className="w-full bg-black">
        <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between pb-6">
                <div className="relative md:mt-8">
                    <img src={BillstechLogo} alt="" width={250} height={250}/>
                </div>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav md:classname="{ 'transform md:transform-none': !open, 'h-full': open }" className="h-0 md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 align-middle ">
                <a className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Home</a>
                <a className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white  hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">About Us</a>
                <a className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Services</a>
                <a className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg  md:mt-8 md:ml-4 text-white hover:text-[#0fe0d0] focus:outline-none focus:shadow-outline">Reviews</a>
                <a className="px-10 py-3 mt-2 text-sm text-center bg-white text-gray-800 rounded-full md:mt-8 md:ml-4">Free Quote</a>
                <a className="px-10 py-3 mt-2 text-sm text-center bg-gradient text-black rounded-full md:mt-8 md:ml-4">Contact Us</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar