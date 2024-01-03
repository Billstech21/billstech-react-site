import React from 'react'
import { BillstechLogo } from '../assets/icons'

const Footer = () => {

  return (
    <>
    <footer className=" bg-black">
		<div className="max-w-lg mx-auto">
			<div className="flex py-12 justify-center text-white items-center px-20 sm:px-36">
				<div className="relative">
				  <img src={BillstechLogo} alt="" width={250} height={250}/>
				</div>
			</div>
			<div className="text-center pb-16 pt-5">
				<label className="text-gray-300 font-semibold">Subscribe to get our Newsletter</label>
				<div className="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3">
					<form action="https://formspree.io/f/mnqeqdjn" method="POST">
					<input type="email" name="email" placeholder="Your Email" className="rounded-full py-2 pl-5 bg-transparent border border-gray-400"/>
					<button type="submit" className="text-black w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full bg-gradient">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="flex items-center text-gray-400 text-sm justify-center">
				<button onClick={() => window.location = 'mailto:developer.evolvingdigital@gmail.com'} className="pr-3"> support@billstech.net </button>
				<button onClick={() => window.location = 'tel:+923412194216'} className="border-l border-gray-400 px-3">+923412194216</button>
				<button onClick={() => window.location = 'tel:+923472944349'} className="border-l border-gray-400 pl-3">+923472944349</button>
			</div>
			<div className="text-center text-white">
				<p className="my-3 text-gray-400 text-sm">&copy; 2024 billstech.net. All rights reserved.</p>
				<div className="py-3 tracking-wide">
					<p>BILLSTECH</p>
				</div>
			</div>
		</div>
	</footer>
    </>
  )
}

export default Footer