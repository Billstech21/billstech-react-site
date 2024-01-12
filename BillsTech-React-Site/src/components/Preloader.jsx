import React from 'react'
import { MotionBlur2, BillstechFavicon } from '../assets/icons'

const Preloader = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#000000]">
        <img className="w-[80px] md:w-[100px] animate-pulse" src={BillstechFavicon}/>
        <img className="w-[80px]" src={MotionBlur2}/>
    </div>
  )
}

export default Preloader