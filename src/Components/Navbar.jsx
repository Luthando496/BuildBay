import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full p-8 bg-white/40  border-b shadow-xl'>
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-10 items-center">
                <a href="#" className="text-2xl font-bold tracking-[3px] text-amber-700/40">BuildBay</a>

                <ul className="flex gap-6 items-center">
                    <li className="">
                        <a href="#" className="text-xl font-semibold text-black/40">Home</a>
                    </li>
                    <li className="">
                        <a href="#" className="text-xl font-semibold text-black/40">Menu</a>
                    </li>
                    <li className="">
                        <a href="#" className="text-xl font-semibold text-black/40">Pages</a>
                    </li>
                    <li className="">
                        <a href="#" className="text-xl font-semibold text-black/40">News</a>
                    </li>
                    <li className="">
                        <a href="#" className="text-xl font-semibold text-black/40">Shop</a>
                    </li>
                </ul>
            </div>

            <div className="flex gap-8">
                <ul className="flex items-center gap-8">
                    <li className="">
                        <a href="#" className="text-xl font-light">Login</a>
                    </li>
                    <li className="">
                        <a href="#" className="text-xl font-light text-sky-600">Getting Started</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar