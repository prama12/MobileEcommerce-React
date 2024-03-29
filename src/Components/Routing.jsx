import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import MyProfile from "./Pages/MyProfile";
import Shop from "./Pages/Shop";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Item from "./Common/Item";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Routing = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addtocart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/itemDetails" element={<Item />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;
