import React from "react";
import Farmer from "../assets/svg/Gardening-bro.svg";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto mt-24	">
      <div className="flex flex-col justify-center  md:items-start pl-8 ">
        <p className="text-H5 md:text-H3 text-Third pl-2">
          Hey there, I’m Leon
        </p>
        <h1 className=" text-H3 md:text-H1 text-Primary font-bold mt-2 pl-2">
          GARDENER
        </h1>
        <h1 className=" text-H3 md:text-H1 text-Third font-bold md:ml-44 my-4	pl-2">
          &
        </h1>
        <h1 className=" text-H3 md:text-H1 text-Primary font-bold md:ml-36 mb-4 pl-2">
          HANDYMAN
        </h1>
        {/* <p className="text-H6 text-Neutral font-bold pl-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          similique ullam, dolor cum molestiae quia tempora inventore, omnis
          vero amet sapiente iure debitis culpa ea velit autem illum,
          praesentium perspiciatis.
        </p> */}
        {/* <button className="py-2 mt-4 px-4 text-h6   bg-Third text-accent  rounded-lg shadow-md hover:bg-PrimarySecondary  hover:text-Neutral    mx-auto">
          See my work
        </button> */}
      </div>
      <div>
        <img className="w-full" src={Farmer} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
