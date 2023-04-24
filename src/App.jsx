import { useState } from 'react'
// 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>

    <Footer />

    </>
  )
}

export default App
