import React,{useState} from 'react'
import {BsFillCheckSquareFill} from 'react-icons/bs'



const Tab = () => {
    const [tab,setTab] = useState(0)
  return (
    <section className='w-full my-8'>
        <div className="px-10 lg:px-16 grid grid-cols-1  lg:grid-cols-3 gap-8">
        
            {/* left */}
            <div className="col-span-2 w-full grid grid-cols-3 gap-3">
            <ul className="hidden lg:block col-span-1 flex-col border-r">
                <li onClick={() => setTab(0)} className={`${tab === 0 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Construction</p>
                </li>
                <li onClick={() => setTab(1)} className={`${tab === 1 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Renovations</p>
                </li>
                <li onClick={() => setTab(2)} className={`${tab === 2 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Consulting</p>
                </li>
                <li onClick={() => setTab(3)} className={`${tab === 3 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Constructor</p>
                </li>
                <li onClick={() => setTab(4)} className={`${tab === 4 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Architecture</p>
                </li>
                <li onClick={() => setTab(5)} className={`${tab === 5 ? 'border-l-8 border-l-yellow-500 ' :'border-0' } py-4 cursor-pointer border-b hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-xl capitalize text-right pr-6">Planning</p>
                </li>
            </ul>

            {/* tab 0 */}
            <div className={`${tab === 0 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE OFFER You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 1 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE OFFER You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 2 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE Do For You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 3 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE Do For You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 4 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE Do For You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div className={`${tab === 5 ? 'block' :'hidden' } col-span-2 px-6`}>
            <h1 className="text-black/70 text-2xl tracking-[2px] font-bold uppercase font-roboto">WHAT WE Do For You</h1>

            <ul className="my-8 flex flex-col gap-10">
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Green houses</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Construction building</p>
                </li>
                <li className="flex gap-6 items-center">
                <BsFillCheckSquareFill size={20}  className='' /><p className="text-md capitalize text-black/70">Alternative tech</p>
                </li>
            </ul>

            <div className="mb-4">
                <p className="text-sm text-black/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quasi molestias qui hic error, officiis suscipit laudantium reprehenderit accusamus consectetur quia! Provident neque necessitatibus voluptatibus sequi sapiente perspiciatis voluptatem!
                </p>
            </div>
            <p className="text-sm text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis omnis asperiores aut fugit illum nemo facilis. Et, doloribus culpa.
                </p>

            </div>
            {/* //  */}

            </div>
            {/*  */}
            {/* right */}
            <div className="col-span-1 w-full">
                <div className="img w-full h-[13rem] mb-4">
                    <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="working-man" className="w-full h-full" />
                </div>
                <h1 className="mb-4 text-black/60 uppercase text-2xl">GET YOUR FREE CONSULTING</h1>
                <p className="text-sm text-black/60 leading-[1.7]">Have an idea, a dream? We can make it happen. Join our family, we offer free consultation to achieve your goals with creativity and quality that you deserve.</p>
            </div>

    

        </div>
    </section>
  )
}

export default Tab