import React from 'react'
import {AiOutlineCheckSquare} from 'react-icons/ai'




const Renovation = () => {
  return (
    <>
        <section className='about py-8 mt-4 mb-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-roboto capitalize text-black font-light">inside Renovation</h1>
        </div>
        </section>


        <section className="w-full my-24">
            <div className="w-full px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/*left  */}
                <div className="col-span-2 w-full space-y-6">
                {/*  */}
                <div className="flex gap-4 ">
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                </div>
                <div className="img  hidden lg:block relative w-full h-[350px]">
                    <img src="https://images.pexels.com/photos/3773572/pexels-photo-3773572.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full object-cover h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                </div>
                {/*  */}
                <div className="lg:grid-cols-3 grid grid-cols-2 gap-4">
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.pexels.com/photos/7027989/pexels-photo-7027989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                </div>
                <div className="img relative hidden lg:block w-full h-[350px]">
                    <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="house-image" className='w-full object-cover h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                </div>
                {/*  */}
                <div className="lg:grid-cols-3 grid grid-cols-1 gap-4">
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.pexels.com/photos/14495888/pexels-photo-14495888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="img w-full relative h-[350px]">
                    <img src="https://images.pexels.com/photos/2029685/pexels-photo-2029685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                </div>
                <div className="img relative w-full h-[350px]">
                    <img src="https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full object-cover h-full' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                </div>
                {/*  */}

                

                </div>
                {/* right */}

                <div className="col-span-1 w-full pt-10">
                    <h2 className="text-xl font-castoro uppercase text-black/70">PROJECT DESCRIPTION</h2>
                    <div className="pt-14 space-y-10">
                    <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic velit perspiciatis placeat aliquid, explicabo aut, dicta id quia maxime, amet quidem excepturi molestias recusandae numquam distinctio tenetur facilis magni. Similique veniam quis est officiis voluptatibus id ratione, adipisci libero alias nulla necessitatibus nisi aperiam possimus ipsam at?</p>
                    <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla neque exercitationem possimus similique vitae facere, aut quo est esse cupiditate veniam culpa et cumque eaque recusandae sit? Labore, molestiae harum.</p>
                    <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla neque exercitationem possimus similique vitae facere, aut quo est esse cupiditate veniam culpa et cumque eaque recusandae sit? Labore, molestiae harum.</p>


                    </div>
                    <ul className="flex flex-col gap-6 my-10">
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Clean and modern architecture</p>
                        </li>
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Eco friendly materials</p>
                        </li>
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Idea to final solution</p>
                        </li>
                    </ul>

                    <h2 className="text-xl font-castoro text-black/80">PROJECT BACKERS</h2>

                    <ul className="flex flex-col gap-6 my-10">
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Halworks Ltd, inc.</p>
                        </li>
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Toms and family inc.</p>
                        </li>
                        <li className="flex gap-8 items-center">
                            <AiOutlineCheckSquare size={25}  />
                            <p className="text-sm font-semibold text-black font-roboto">Bricks and woods ltd.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    </>
  )
}

export default Renovation;