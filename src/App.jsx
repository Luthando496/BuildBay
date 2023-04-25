import { useState,lazy,Suspense } from 'react'
// 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Routes,Route} from 'react-router-dom'
const Home = lazy(() => import('./Pages/Home'));
const Footer = lazy(() => import('./Components/Footer'));
const Navbar = lazy(() => import('./Components/Navbar'));
const About = lazy(() => import('./Pages/About'));
const Projects = lazy(() => import('./Pages/Projects'));
const Modern = lazy(() => import('./Pages/Modern'));
const Interior = lazy(() => import('./Pages/Interior'));
const Corporate = lazy(() => import('./Pages/Corporate'));
const Tower = lazy(() => import('./Pages/Tower'));
const Sea = lazy(() => import('./Pages/Sea'));
const Eco = lazy(() => import('./Pages/Eco'));
const Clean = lazy(() => import('./Pages/Clean'));
const Renovation = lazy(() => import('./Pages/Renovation'));
import {Vortex} from 'react-loader-spinner'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Navbar />
    <Suspense fallback={<div className='w-full h-[60vh] flex justify-center items-center'><Vortex visible={true}
        height="400"
        width="400"

        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'pink', 'blue', 'yellow', 'orange', 'purple']}
        /></div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/modern-building" element={<Modern />} />
      <Route path="/projects/interior-design" element={<Interior />} />
      <Route path="/projects/corporate-concept" element={<Corporate />} />
      <Route path="/projects/corporate-tower" element={<Tower />} />
      <Route path="/projects/sea-side" element={<Sea />} />
      <Route path="/projects/eco-friendly" element={<Eco />} />
      <Route path="/projects/inside-renovation" element={<Renovation />} />
      <Route path="/projects/clean-lines" element={<Clean />} />
    </Routes>

    </Suspense>

    <Footer />

    </>
  )
}

export default App
