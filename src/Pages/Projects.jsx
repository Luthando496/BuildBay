import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'
import {Link} from 'react-router-dom'



const Projects = () => {
  return (
    <>
        <section className='about py-8 mt-4 mb-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-roboto capitalize text-black font-light">Projects</h1>
        </div>
        </section>


        <section className="my-24 w-full">
            <div className="px-4 lg:px-10 w-full grid  grid-cols-2 md:grid-cols-4  gap-8 ">

            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/modern-building' className="">
                    <img src="https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">modern building</h1>
            </div>


            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/interior-design' className="">
                    <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Interior Design</h1>
            </div>


            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/corporate-concept' className="">
                    <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Corporate concept</h1>
            </div>


            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/corporate-tower' className="">
                    <img src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Corporate Tower</h1>
            </div>


            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/sea-side' className="">
                    <img src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Sea Side Residence</h1>
            </div>


            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/eco-friendly' className="">
                    <img src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Eco Friendly Residence</h1>
            </div>


            </div>
            {/*  */}
             {/* card */}
             <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/clean-lines' className="w-full h-full">
                    <img src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"  alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Clean Lines House</h1>
            </div>


            </div>
            {/*  */}
             {/* card */}
             <div className="w-full">
            <div className="img group relative overflow-hidden h-[15rem] w-full cursor-pointer">
                <Link to='/projects/inside-renovation' className="">
                    <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="house" className='w-full h-full group-hover:scale-150 duration-700'  />
                    <div className="group-hover:absolute top-0 left-0 w-full h-full bg-emerald-400/25 flex justify-center items-center">
                        <AiOutlineLink size={40} className='hidden group-hover:block duration-1000' />
                    </div>
                </Link>
            </div>
            <div className="text-center my-5">
                <h1 className=" text-md md:text-2xl text-black/70 font-roboto font-light uppercase">Inside Renovation</h1>
            </div>


            </div>
            {/*  */}

            </div>
        </section>
    </>
  )
}

export default Projects