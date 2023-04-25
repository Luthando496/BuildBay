import React from 'react'
import {AiOutlineCheckSquare} from 'react-icons/ai'




const Sea = () => {
  return (
    <>
        <section className='about py-8 mt-4 mb-8 w-full'>
        <div className="w-full py-10 pl-14">
        <h1 className="text-4xl font-castoro capitalize text-black font-light">Sea Side Residence</h1>
        </div>
        </section>


        <section className="w-full my-24">
            <div className="w-full px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/*left  */}
                <div className="col-span-2 w-full">
                <div className="space-y-6">
                <div className="img w-full h-[500px]">
                    <img src="https://images.pexels.com/photos/7903136/pexels-photo-7903136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                </div>
                <div className="img w-full h-[500px]">
                    <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                </div>
                <div className="img w-full h-[500px]">
                    <img src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-image" className='w-full h-full' />
                </div>

                </div>

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

export default Sea