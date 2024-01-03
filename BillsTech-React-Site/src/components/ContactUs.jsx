import React from 'react'

const ContactUs = () => {
  return (
    <div id="contact" className="bg-gradient px-4 py-28 mt-20 lg:px-8">
        <div className="max-w-screen-xl grid grid-col-1 mx-auto md:grid-cols-2 gap-4 place-items-center ">
        <div className="p-5 md:p-10 rounded-xl">
			<div data-aos="flip-down" className="text-left max-w-screen-md mx-auto">
				<h1 className="text-black text-3xl font-bold mb-4">Why <span className="text-black"> BillsTech</span> Stands Apart?</h1>
				<p className="text-gray-500">Our Commitment to Excellence: What sets us apart is our commitment to not just meeting, but exceeding client expectations. Our team is constantly evolving, staying ahead of the latest digital trends and technologies. We believe in transparent communication, collaborative partnerships, and delivering results that make a real difference to your business.</p>
			</div>
            <div data-aos="flip-down" className="text-left max-w-screen-md mx-auto mt-10">
				<h1 className="text-black text-xl font-bold mb-4">Partner with Us</h1>
				<p className="text-[16px] text-gray-500">At Billstech, we are more than a digital marketing agency; we are your partners in growth and success. Contact us to discover how our tailored solutions can elevate your digital presence and drive your business forward.</p>
			</div>
		</div>
        <div className="p-10 bg-black rounded-xl shadow-xl w-full">
			<div data-aos="flip-down" className="text-left max-w-screen-md mx-auto">
				<form action="https://formspree.io/f/mleqejlv" method='POST' className='flex flex-col gap-4'>
					<input type="text" name="name" placeholder='Your Name' className="p-4 w-full rounded-md bg-[#2F3747] text-white focus:outline-none" autoComplete='off' required/>
					<input type="email" name="email" placeholder='Email Address' className="p-4 w-full rounded-md bg-[#2F3747] text-white focus:outline-none" autoComplete='off' required/>
					<input type="number" name="phone" placeholder='Phone Number' className="p-4 w-full rounded-md bg-[#2F3747] text-white focus:outline-none" autoComplete='off' />
					<textarea name="message" cols="30" rows="4" placeholder='Message/Comment' className="p-4 w-full rounded-md bg-[#2F3747] text-white focus:outline-none" autoComplete='off' required/>
					<button type="submit" className="w-full bg-gradient text-black text-md font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-95">Send Message</button>
				</form>
			</div>
		</div>
        </div>
    </div>
  )
}

export default ContactUs