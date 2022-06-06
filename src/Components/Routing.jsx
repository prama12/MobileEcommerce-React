import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import AboutUs from './Pages/AboutUs'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import MyProfile from './Pages/MyProfile'
import Shop from './Pages/Shop'
import Wishlist from './Pages/Wishlist'

const Routing = () => {
     return (
          <>
               <Router>
                    <Navbar />
                    <Routes>
                         <Route path='/' element={<Home />} />
                         <Route path='/shop' element={<Shop />} />
                         <Route path='/anoutUs' element={<AboutUs />} />
                         <Route path='/contact' element={<Contact />} />
                         <Route path='/addtocart' element={<Checkout />} />
                         <Route path='/wishlist' element={<Wishlist />} />
                         <Route path='/myProfile' element={<MyProfile />} />
                    </Routes>
                    <Footer />
               </Router>
          </>
     )
}

export default Routing
