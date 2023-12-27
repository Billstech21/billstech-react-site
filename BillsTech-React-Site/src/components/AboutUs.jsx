import React from 'react'
import { teacherexplaining } from '../assets/images'

const AboutUs = () => {
  return (
    <>
	<div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
		<div className="mt-28">
			<div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
				<h1 className="text-3xl font-bold mb-4">What is<span className="text-yellow-500"> BillsTech?</span></h1>
				<p className="text-gray-500">BillsTech is a platform that allows educators to create online classNamees whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
			</div>
		</div>

		<div className="sm:flex items-center sm:space-x-8 mt-36">
			<div data-aos="fade-right" className="sm:w-1/2 relative">
				<div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
				<h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">Everything you can do in a physical classroom, <span className="text-yellow-500">you can do with Skilline</span></h1>
				<p className="py-5 lg:pr-32">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
				<a href="" className="underline">Learn More</a>
			</div>
			<div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
				<div className="bg-[#23BDEE] floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
				<img className="rounded-xl z-40 relative" src={teacherexplaining} alt=""/>
				<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
					<svg className="w-5 h-5 ml-1" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
					</svg>
				</button>
				<div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
			</div>
		</div>
	</div>	
    </>
  )
}

export default AboutUs