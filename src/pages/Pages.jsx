import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Pages;
