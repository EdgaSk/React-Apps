import React from "react";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


const App = () => {
    return (
        <>
          <NavBar />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/pages" element={<Pages/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
