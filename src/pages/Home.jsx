import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";

const Home = () => {
  return (
    <div className="w-full h-screen  flex flex-col justify-between  relative">
      <Hero />
      <MyWork />
      <Footer />
    </div>
  );
};

export default Home;
