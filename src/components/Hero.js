import React from 'react'
import profile from "../assets/profile.jpg"
import { IoIosHeartEmpty } from "react-icons/io";
import { FiBookmark, FiMessageCircle, FiShare } from "react-icons/fi";
import product from "../assets/hero-img.png"
import { MdErrorOutline } from "react-icons/md";

const Hero = () => {
  return (
    <section className="sm:max-w-[64%] m-auto max-w-full flex flex-col gap-4 mx-2">
        <h1 className="text-base font-semibold">Beverage: Bacardi Breezer</h1>
        <div className="flex justify-between items-end">

            <div className="flex gap-2">
                <img src={profile} className="w-8 rounded-full inline" alt="profile" />

                <div className="flex flex-col">
                    <p className="font-medium">Rishabh Singh</p>

                    <div className="flex justify-center items-center gap-1">
                        <div className="animate-ping w-1 h-1 rounded-full bg-green-700"></div>
                        <p className="text-[10px] text-green-500">Available for work</p>
                        <p className="text-[10px]">Follow</p>
                    </div>

                </div>
            </div>

            <div className="flex gap-2 font-medium">
                <button className="border border-gray-300 rounded-full p-3"><IoIosHeartEmpty /></button>
                <button className="border border-gray-300 rounded-full p-3"><FiBookmark /></button>
                <button className="bg-gray-950 px-4 py-2 rounded-full text-white">Get in touch</button>
            </div>
        </div>
        <div className="w-full my-2">
            <img className="m-full rounded-lg" src={product} alt="drinks" />
        </div>
        {/* <div className="flex flex-col gap-2 right-0">
            <p><FiMessageCircle /></p>
            <p><FiShare /></p>
            <p><MdErrorOutline /></p>
        </div> */}
    </section>
  )
}

export default Hero