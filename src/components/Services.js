import React from 'react'
import profile from '../assets/profile.jpg'
import { IoIosHeartEmpty } from "react-icons/io";
import { FiBookmark} from "react-icons/fi";
import Invoces from "../assets/invoice.jpg";
import Fitness from "../assets/fitness.jpg";
import Music from "../assets/music.jpg";
import Pricing from "../assets/pricing.jpg";

const Services = () => {
  return (
    <section className="py-8 max-w-[80%] flex flex-col justify-center items-center">
        <div className="w-16 h-16 mx-auto">
            <img src={profile} alt="Profile" className="w-full rounded-full" />
        </div>
        <hr className="border border-gray-200 -mt-8 w-full mb-14" />

        <div className="flex flex-col gap-5 font-bold">
            <h2 className="text-center">Rishabh Singh</h2>
            <button className="bg-slate-950 text-white font-bold px-6 py-3 rounded-full">Get in touch</button>
        </div>

        <div>
            <div className="flex justify-between pt-8 py-3">
                <h2 className="font-bold">More by Rishabh Singh</h2>
                <p>View profile</p>
            </div>

            <div className="flex gap-6 flex-wrap pb-12 justify-center">
                <div className="min-w-40 pb-3 lg:max-w-48">
                    <img src={Invoces} alt="Web invoices" className="w-full" />
                    <div className="-mt-12 flex hover:bg-slate-400 justify-between cursor-pointer px-3">
                        <p className="font-bold">Website invoces</p>
                        <p className="flex gap-3 text-lg font-bold">
                            <FiBookmark className="bg-white rounded-full" />
                            <IoIosHeartEmpty className="bg-white rounded-full" />
                        </p>
                    </div>
                </div>

                <div className="min-w-40 pb-3 lg:max-w-48">
                    <img src={Fitness} alt="Web invoices" className="w-full" />
                    <div className="-mt-12 flex hover:bg-slate-400 justify-between cursor-pointer px-3">
                        <p className="font-bold text-white">Website invoces</p>
                        <p className="flex gap-3 text-lg font-bold">
                            <FiBookmark className="bg-white rounded-full" />
                            <IoIosHeartEmpty className="bg-white rounded-full" />
                        </p>
                    </div>
                </div>

                <div className="min-w-40 lg:max-w-48">
                    <img src={Music} alt="Web invoices" className="w-full" />
                    <div className="-mt-12 flex hover:bg-slate-400 justify-between cursor-pointer px-3">
                        <p className="font-bold  text-white">Website invoces</p>
                        <p className="flex gap-3 text-lg font-bold">
                            <FiBookmark className="bg-white rounded-full" />
                            <IoIosHeartEmpty className="bg-white rounded-full" />
                        </p>
                    </div>
                </div>

                <div className="min-w-40 lg:max-w-48">
                    <img src={Pricing} alt="Web invoices" className="w-full" />
                    <div className="-mt-12 flex hover:bg-slate-400 justify-between cursor-pointer px-3">
                        <p className="font-bold ">Website invoces</p>
                        <p className="flex gap-3 text-lg font-bold">
                            <FiBookmark className="bg-white rounded-full" />
                            <IoIosHeartEmpty className="bg-white rounded-full" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Services