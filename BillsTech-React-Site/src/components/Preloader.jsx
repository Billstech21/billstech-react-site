import React from 'react'
import { MotionBlur2 } from '../assets/icons'

const Preloader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-black">
        <img className="w-full h-[20%] md:h-[50%]" src={MotionBlur2}/>
    </div>
  )
}

export default Preloader