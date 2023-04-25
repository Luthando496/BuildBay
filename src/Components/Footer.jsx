import React from 'react'
import {Link} from 'react-router-dom'



const Footer = () => {
  return (
    <footer className='w-full'>
    <div className="w-full py-8 space-y-7 lg:space-y-0 md:px-6 lg:px-32 bg-black/80 grid grid-cols-2 lg:grid-cols-4 gap-8">

    {/* About Us */}
    <div className="space-y-6">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">About Us</h1>
        <div className="img w-[80%] h-[5rem]">
            <img src="/assets/app.png" alt="working" className='w-full h-full object-cover' />
        </div>
        <p className="text-white text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis quam, sodales in ante sagittis, varius efficitur mauris</p>
    </div>
    {/*  */}
    {/* Navigation */}
    <div className="space-y-6">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">Navigation</h1>
        <ul className="flex flex-col gap-4">
            <li className="">
                <Link to="/" className="text-white hover:text-sky-400 duration-300 capitalize">Home</Link>
            </li>
            <li className="">
                <Link to="/projects" className="text-white hover:text-sky-400 duration-300 capitalize">Projects</Link>
            </li>
            <li className="">
                <Link to="/about/us" className="text-white hover:text-sky-400 duration-300 capitalize">What we do</Link>
            </li>
            <li className="">
                <Link to="/about-us" className="text-white hover:text-sky-400 duration-300 capitalize">About Us</Link>
            </li>
        </ul>
    </div>
    {/*  */}
    {/* Tags */}
    <div className="space-y-6 overflow-hidden">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">Tags</h1>
        <div className="grid grid-cols-5 gap-[1px]">

        <div className="col-span-1">
            <button className="text-white bg-black/10 px-3 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">big</button>
        </div>
        <div className="col-span-2">
            <button className="text-white bg-black/10 px-4 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">buildings</button>
        </div>
        <div className="col-span-2">
            <button className="text-white bg-black/10 px-4 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">home</button>
        </div>

        </div>
        <div className="grid grid-cols-2 gap-1">

            <button className="col-span-1 text-white bg-black/10 rounded-lg shadow-lg px-3 py-2 hover:bg-yellow-400 duration-300">big</button>
            <button className="text-white col-span-1 bg-black/10 rounded-lg shadow-lg px-4 py-2 hover:bg-yellow-400 duration-300">buildings</button>

        </div>
    </div>
    {/*  */}
    {/* Our recent projects */}
    <div className="space-y-6">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">Our recent projects</h1>

        <ul className="flex flex-col gap-4">
            <li className="">
                <a href="#" className="text-white hover:text-sky-400 duration-300 capitalize">Modern Building</a>
            </li>
            <li className="">
                <a href="#" className="text-white hover:text-sky-400 duration-300 capitalize">Interior Concept</a>
            </li>
            <li className="">
                <a href="#" className="text-white hover:text-sky-400 duration-300 capitalize">Corporate Concept</a>
            </li>
            <li className="">
                <a href="#" className="text-white hover:text-sky-400 duration-300 capitalize">Corporate Tower</a>
            </li>
            <li className="">
                <a href="#" className="text-white hover:text-sky-400 duration-300 capitalize">Sea side residence</a>
            </li>
        </ul>

        
    </div>
    {/*  */}


    </div>

    <div className="bg-black w-full py-8">
        <p className="text-md text-white text-center">BuildWise  theme | © 2014 BuildWise, All rights reserved</p>
    </div>

    </footer>
  )
}

export default Footer