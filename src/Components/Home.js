import React from 'react'
import homeImg from '../img/home-img.png'


export default function Home() {
  return (
    <>
        <div id="home" name='home' className="home h-screen bg-purple-300 z-50 container1 relative mt-2 py-24  grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-[12rem] md:gap-[14rem] lg:gap-10 items-center justify-center px-11 flex-wrap">
        <div className="home-text flex flex-col justify-center">
            <h1 className="sm:text-3xl text-center "><span className="text-3xl  font-semibold text-red-600">Make Your Comfort Is Our Success</span></h1>
            <p className="mt-4 mr-0 mb-[1.8rem] text-center hidden sm:block ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores adipisci error amet qui sapiente natus voluptate neque.</p>
            <p className="mt-4 mr-0 mb-[1.8rem] text-center sm:hidden ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam tempora.</p>
            <div className="flex justify-center">

                <button className="w-40 my-4 px-3 py-2 rounded-md bg-blue-700 text-white font-bold hover:bg-blue-900 focus-within:ring-4 focus:ring-blue-400 text-xl"><a
                    href="/">Get Started</a></button>
                </div>
        </div>
        <div className="home-img border after:content-[''] h-[215px] w-[300px] sm:w-[490px] bg-yellow-400 relative lg:top-20 right-4 rounded-[50%] -z-[1] mx-auto ">
            <img src={homeImg} className="relative bottom-[171px] sm:bottom-[323px] " alt="" />
        </div>
    </div>
    </>
  )
}
