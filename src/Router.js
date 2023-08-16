import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Logo from './components/Logo';
import JeuxVideo from './components/JeuxVideo';
import Manga from './components/Manga';
import Figurines from './components/Figurines';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function Router() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="*" element={<Home />} />
        <Route path="/Jeuxvideo" element={<JeuxVideo/>}/>
        <Route path="/Manga" element={<Manga/>}/>
        <Route path="/Figurines" element={<Figurines/>}/>
        </Routes>
        </div>
  )
}

export default Router
