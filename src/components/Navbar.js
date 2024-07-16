import React from 'react'
import { Link }from "react-router-dom"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import Logo from "../assets/Dribbble New 2023.svg"
import { CiSearch } from "react-icons/ci"
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="h-24 min-w-[90%] mx-0">
        <div className="flex justify-between items-center mx-0">
            <div className="hidden gap-4 font-medium sm:flex">
                <Link to="/designers" className="flex justify-center items-center">Find desiners<MdOutlineKeyboardArrowDown className="mb-0"/></Link>
                <Link to="/designers"></Link>
                <Link to="/inspiration">Inspiration</Link>
                <Link to="/pro">Go pro</Link>
            </div>

            <div className="flex sm:hidden"><CgDetailsMore /></div>

            <div className="w-20">
                <img className="w-full" src={Logo} alt="Logo" />
            </div>

            <div className="flex flex-row gap-3 justify-center items-center">
                <div className="flex flex-row">
                    <button className="bg-white p-3 rounded-full"><CiSearch /></button>
                    <input type="text" className="px-5 py-2 hidden sm:flex rounded-full bg-gray-100 focus:bg-white focus:outline-slate-300" placeholder="Search..." />
                </div>
                <div className="flex flex-row">
                    <button className="bg-transparent px-5 py-2 rounded-full hidden sm:flex">Login</button>
                    <button className="text-white bg-slate-950 px-5 py-2 rounded-full">Sign up</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
