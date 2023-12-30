import React from 'react'
import { teacherexplaining, technologies } from '../assets/images'

const AboutUs = () => {
  return (
    <>
	<div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
		<div className="mt-28">
			<div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
				<h1 className="text-3xl font-bold mb-4">What is<span className="text-blue"> BillsTech?</span></h1>
				<p className="text-gray-500">At Billstech we don't just offer services; we deliver digital transformations. As a leading digital marketing agency, our ethos is rooted in combining creativity with technical expertise. We understand the digital landscape's nuances and leverage this insight to offer unparalleled services in Web Design & Development, SEO, Social Media Marketing, App Development, Animations, and Graphics.</p>
			</div>
		</div>
        {/* First Section */}
		<div className="sm:flex items-center sm:space-x-8 mt-36">
			<div data-aos="fade-right" className="sm:w-1/2 relative">
				<div className="bg-blue rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 className="font-semibold text-2xl relative z-50 text-black lg:pr-10">Innovative Web Design & Development: <span className="text-blue">The Foundation of Your Digital Identity</span></h1>
				<p className="py-5 lg:pr-20"><strong>Our Approach:</strong> Your website is the cornerstone of your digital identity. Our team of expert designers and developers collaborates closely with you to create a website that not only reflects your brand's ethos but is also optimized for maximum engagement and conversion. We prioritize responsive design, user experience, and the latest web technologies to ensure your website stands out in a crowded digital space.
</p>
				<a href="" className="underline hover:text-[#1f1f1f]">Get In Touch With Us!</a>
			</div>
			<div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
				<div className="bg-blue floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img className="rounded-xl z-40 relative" src={teacherexplaining} alt=""/>
				<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
					</svg>
				</button>
				<div className="bg-black w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
		</div>
        {/* Second Section */}
		<div className="sm:flex  items-center sm:space-x-8 mt-36">
		   <div data-aos="fade-right" className="sm:w-1/2 relative mt-10 sm:mt-0 md:mr-10">
				<div className="bg-black floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img className="rounded-xl z-40 relative" src={teacherexplaining} alt=""/>
				<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
					</svg>
				</button>
				<div className="bg-green w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
			<div data-aos="fade-right" className="sm:w-1/2 relative">
				<div className="bg-blue rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 className="font-semibold text-2xl relative z-50 text-black lg:pr-10">Advanced SEO & Social Media Marketing: <span className="text-blue">Amplifying Your Online Presence</span></h1>
				<p className="py-5 lg:pr-20"><strong>Why Choose Us:</strong> In the realm of SEO and social media marketing, we excel at crafting strategies that resonate with your target audience. Our SEO experts employ cutting-edge techniques to boost your search engine rankings, while our social media gurus craft campaigns that effectively engage and expand your audience. We understand the importance of data-driven decisions and utilize advanced analytics to continually refine our strategies.</p>
				<a href="" className="underline hover:text-[#1f1f1f]">Get In Touch With Us!</a>
			</div>
		</div>
		{/* Third Section */}
		<div className="sm:flex items-center sm:space-x-8 mt-36">
			<div data-aos="fade-right" className="sm:w-1/2 relative">
				<div className="bg-blue rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 className="font-semibold text-2xl relative z-50 text-black lg:pr-10">Custom App Development & Creative Animations/Graphics: <span className="text-blue">Bringing Your Vision to Life</span></h1>
				<p className="py-5 lg:pr-20"><strong>Our Expertise:</strong> With a focus on innovation and creativity, our app development team delivers bespoke solutions that drive user engagement and business growth. Whether it's for iOS, Android, or cross-platform, our apps are designed with a focus on functionality, user experience, and scalability. Simultaneously, our talented animators and graphic designers create compelling visual content that tells your brand's story in an unforgettable way.</p>
				<a href="" className="underline hover:text-[#1f1f1f]">Get In Touch With Us!</a>
			</div>
			<div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
				<div className="bg-blue floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img className="rounded-xl z-40 relative" src={teacherexplaining} alt=""/>
				<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
					</svg>
				</button>
				<div className="bg-black w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
		</div>
		{/* Fourth Section */}
		<div className="sm:flex items-center sm:space-x-8 mt-36">
		   <div data-aos="fade-right" className="sm:w-1/2 relative mt-10 sm:mt-0 md:mr-10">
				<div className="bg-black floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img className="rounded-xl z-40 relative" src={teacherexplaining} alt=""/>
				<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
					</svg>
				</button>
				<div className="bg-green w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
			<div data-aos="fade-right" className="sm:w-1/2 relative">
				<div className="bg-blue rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 className="font-semibold text-2xl relative z-50 text-black lg:pr-10">Comprehensive Digital Marketing Services: <span className="text-blue">Your One-Stop Solution</span></h1>
				<p className="py-5 lg:pr-20"><strong>Expanding Our Services:</strong> Beyond our core offerings, we provide a suite of additional services including PPC Advertising, Email Marketing, and Content Marketing. Each service is tailored to meet the unique needs of your business, ensuring a holistic approach to digital marketing. Our integrated strategies are designed to not only attract but also retain customers, fostering long-term growth and brand loyalty.</p>
				<a href="" className="underline hover:text-[#1f1f1f]">Get In Touch With Us!</a>
			</div>
		</div>
		<div className="sm:flex sm:space-x-8 mt-36">
			<div data-aos="flip-down" className="flex flex-col text-center items-center max-w-screen-xl mx-auto">
				<h1 className="text-black text-3xl font-bold mb-4">Our Technical  <span className="text-blue"> Expertise</span></h1>
				<p className="text-gray-500 md:px-20">Our proficiency extends across a wide array of technologies. From modern frameworks to established platforms, we are capable of catering to all our specific needs. (in Design) React Native, Swift, WordPress, Adobe XD, Figma, Photoshop, IOS, PHP, Angular, Magento, Illustrator, Android, Flutter, Mongo DB , LARAVEL, UNITY, MYSQL .NET, AWS, FLUTTER, NODE.JS, RUBY, REACT</p>
              <img src={technologies} alt="loading...."  />
			</div>
		</div>
	</div>	
    </>
  )
}

export default AboutUs