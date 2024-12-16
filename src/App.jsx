import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './router/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Bilimlar from './router/Bilimlar/Bilimlar'
import Bizhaqimizda from './router/Bizhaqimizda/Bizhaqimizda'

function App() {
  return (
    <div className='container_wrapper'>
      <Navbar />
      <Routes>
        {/* Define the route for Home */}
        <Route path="/" element={<Home />} />
        {/* Define the route for Bilimlar */}
        <Route path="/bilimlar" element={<Bilimlar />} />
        <Route path="/Bizhaqimizda" element={<Bizhaqimizda />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
