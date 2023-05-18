import './App.css';
import './subcard.css';

import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"

import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import Blog from './components/Blog';
import Contact from './components/Contact';
import Representation from './components/Cards/Representation';

import Carousel from './components/Carousel';
import Banner1 from "./image/banner-1.jpg"
import Banner2 from "./image/banner-2.jpg"
import Banner3 from "./image/banner-3.jpg"

import React, { useState } from 'react';

function App() {
  
  return (
    <div className="App">
  <HashRouter>
    <Routes>
    <Route  path="/" element={<NavBar/>}>
    <Route index element={<Home />} />

    <Route path="Testimonials" element={<Testimonials />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="Representation" element={<Representation />} />






    </Route>

    </Routes>
  </HashRouter>
  {/* <Carousel index={index} slides={slides} setIndex={setIndex}/> */}
  <Footer/>
<div className='loginandcredits'>
  <a href='#'>Website Credits</a>
  <a href='#'>Login</a>

</div>
        </div>
  );
}


export default App;
