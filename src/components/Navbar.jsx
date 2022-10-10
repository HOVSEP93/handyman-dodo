import React, { Fragment, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdGrass } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };
  return (
    <Fragment>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
        <div className="w-full   text-primary flex items-center hover:text-PrimaryFocus ">
          {/* <img src={Logo} alt="logo " width="30" height="30" /> */}
          <Link to="/">
            <MdGrass size={35} className="text-Primary cursor-pointer" />
          </Link>

          <p className="ml-4 p-4 text-PrimaryFocus text-H6 font-bold ">
            (045) 022-1440
          </p>
        </div>
        <ul className="hidden md:flex  text-primary ">
          <li className="p-4 text-Primary hover:text-PrimaryFocus cursor-pointer text-H6 font-bold  ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 text-Primary hover:text-PrimaryFocus cursor-pointer text-H6 font-bold">
            <Link to="/about">About</Link>
          </li>

          <li className="p-4 text-Primary hover:text-PrimaryFocus cursor-pointer text-H6 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className=" block md:hidden  cursor-pointer ">
          {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </div>
        <div>
          <ul
            className={
              nav
                ? "fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-NeutralFocus bg-BackgroundColor ease-in-out duration-500 z-10"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="w-full ml-2 mt-2  text-Primary hover:text-PrimaryFocus flex   cursor-pointer">
              {/* <img src={Logo} alt="logo " width="30" height="30" /> */}
              <Link to="/">
                <MdGrass size={35} onClick={handleClose} />
              </Link>
            </div>
            <li
              onClick={handleClose}
              className="p-4 border-b border-b-NeutralFocus  cursor-pointer text-Primary hover:text-PrimaryFocus text-H6 font-bold"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={handleClose}
              className="p-4 border-b border-b-NeutralFocus  cursor-pointer text-Primary hover:text-PrimaryFocus text-H6 font-bold"
            >
              <Link to="/about">About</Link>
            </li>

            <li
              onClick={handleClose}
              className="p-4 border-b border-b-NeutralFocus  cursor-pointer text-Primary hover:text-PrimaryFocus text-H6 font-bold"
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li
              onClick={handleClose}
              className="p-4   cursor-pointer text-Primary"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100034558631089"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
