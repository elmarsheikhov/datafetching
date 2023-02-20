import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useSelector } from "react-redux";
function App() {
  const { set } = useSelector((state) => state);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: set }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
