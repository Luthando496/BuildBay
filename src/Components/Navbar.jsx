import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='w-full p-8 bg-white/40  border-b shadow-md'>
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-10 items-center">
                <Link to="/" className="text-2xl font-bold tracking-[3px] text-amber-700/40">BuildBay</Link>
            </div>
            <ul className="flex gap-6 items-center">
                    <li className="">
                        <Link  to="/about-us" className="text-xl font-semibold text-black/40">About</Link>
                    </li>
                    <li className="">
                        <Link to="/" className="text-xl font-semibold text-black/40">Home</Link>
                    </li>
                    <li className="">
                        <Link  to="/projects" className="text-xl font-semibold text-black/40">Projects</Link>
                    </li>
                    <li className="">
                        <Link to="/about/us" className="text-xl font-semibold text-black/40">What We Do</Link>
                    </li>
            </ul>

        </div>

    </nav>
  )
}

export default Navbar