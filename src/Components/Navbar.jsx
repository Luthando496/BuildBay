import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {CiMenuBurger} from 'react-icons/ci'
import {FaTimes} from 'react-icons/fa'



const Navbar = () => {
    const [show,setShow] = useState(false)

  return (
    <nav className='w-full p-8 bg-white relative  border-b shadow-md'>
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-10 items-center">
                <Link to="/" className="text-2xl font-bold tracking-[3px] text-amber-700/40">BuildBay</Link>
            </div>
            <ul className="hidden lg:flex gap-6 items-center">
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

            <button className="lg:hidden" onClick={()=> setShow(!show)}  >
                <CiMenuBurger size={40} className='text-pink-400'  />
            </button>

        </div>
        {show && <div className="fixed top-0 left-0 w-full h-full bg-black/70"></div>}

        <div className={` ${show ? 'right-[0] fixed top-0 duration-1000 z-30  h-full w-[100%]' :'fixed top-0 duration-300 z-30 -right-[100%] h-full w-[40px]]'} bg-white`}>
        <div className="flex w-full justify-end my-4">
        <button className="self-end px-4" onClick={()=> setShow(!show)}  >
                <FaTimes size={60} className='text-pink-400 text-right'  />
            </button>
        </div>
        <ul className="flex mt-8 flex-col gap-6 items-center w-full">
                    <li  className="hover:border-b-pink-500 hover:border-b-4 group rounded-lg duration-300 py-4 text-center w-full">
                        <Link onClick={()=> setShow(!show)} to="/about-us" className="text-xl font-semibold w-full tracking-[9px] group-hover:text-emerald-600 duration-300 text-black/90 uppercase">About</Link>
                    </li>
                    <li  className="hover:border-b-pink-500 hover:border-b-4 group rounded-lg duration-300 py-4 text-center w-full">
                        <Link onClick={()=> setShow(!show)} to="/" className="text-xl font-semibold w-full tracking-[9px] group-hover:text-emerald-600 duration-300 text-black/90 uppercase">Home</Link>
                    </li>
                    <li  className="hover:border-b-pink-500 hover:border-b-4 group rounded-lg duration-300 py-4 text-center w-full">
                        <Link onClick={()=> setShow(!show)} to="/projects" className="text-xl font-semibold w-full tracking-[9px] group-hover:text-emerald-600 duration-300 text-black/90 uppercase">Projects</Link>
                    </li>
                    <li  className="hover:border-b-pink-500 hover:border-b-4 group rounded-lg duration-300 py-4 text-center w-full">
                        <Link onClick={()=> setShow(!show)} to="/about/us" className="text-xl font-semibold w-full tracking-[9px] group-hover:text-emerald-600 duration-300 text-black/90 uppercase">What We Do</Link>
                    </li>
            </ul>


        </div>


    </nav>
  )
}

export default Navbar