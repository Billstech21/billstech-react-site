import React from 'react'

const ContactUs = () => {
  return (
    <div className="container px-4 py-28 lg:px-8 mx-auto max-w-screen-xl">
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="p-10 bg-black rounded-xl">
			<div data-aos="flip-down" className="text-left max-w-screen-md mx-auto">
				<h1 className="text-white text-3xl font-bold mb-4">Why <span className="text-blue"> BillsTech</span> Stands Apart?</h1>
				<p className="text-white">Our Commitment to Excellence: What sets us apart is our commitment to not just meeting, but exceeding client expectations. Our team is constantly evolving, staying ahead of the latest digital trends and technologies. We believe in transparent communication, collaborative partnerships, and delivering results that make a real difference to your business.</p>
			</div>
            <div data-aos="flip-down" className="text-left max-w-screen-md mx-auto mt-10">
				<h1 className="text-blue text-xl font-bold mb-4">Partner with Us</h1>
				<p className="text-[16px] text-white">At Billstech, we are more than a digital marketing agency; we are your partners in growth and success. Contact us to discover how our tailored solutions can elevate your digital presence and drive your business forward.</p>
			</div>
		</div>
        <div className="p-10">
			<div data-aos="flip-down" className="text-left max-w-screen-md mx-auto">
				<h1 className="text-3xl font-bold mb-4">Partner with Us</h1>
				<p className="text-gray-500">At Billstech, we are more than a digital marketing agency; we are your partners in growth and success. Contact us to discover how our tailored solutions can elevate your digital presence and drive your business forward.</p>
			</div>
		</div>
        </div>
    </div>
  )
}

export default ContactUs