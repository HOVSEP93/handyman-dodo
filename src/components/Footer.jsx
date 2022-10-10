import React, { Fragment } from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <div className="w-full mt-24 bg-slate-900 text-NeutralFocus py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8"></div>

        <div className="flex   max-w-[1240px] px-2 py-4 mx-auto justify-between items-center  text-center text-gray-500">
          <p className=" text-H6 md:text-H5 font-bold text-NeutralFocus ">
            Made with 💜
            <a
              href="https://hovsep21.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-Third hover:text-Primary px-2"
            >
              Hovsep Stepanian
            </a>
            | All Rights Reserved © {`${new Date().getFullYear()}`}
          </p>
          <div className="  text-Primary   order-last">
            <a
              href="https://www.facebook.com/profile.php?id=100034558631089"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookSquare size={30} className="cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
