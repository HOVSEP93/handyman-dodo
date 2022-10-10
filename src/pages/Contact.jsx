import React, { Fragment, useRef } from "react";

// emailjs
import emailjs from "@emailjs/browser";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qp8a3uj",
        "template_uptwu5m",
        form.current,
        "add-your-key"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("please fill form fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };
  return (
    <Fragment>
      {/* <!-- contact --> */}
      <div className=" flex mt-10">
        <div className="container mx-auto">
          {/* <!-- top --> */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-H4 font-bold text-PrimaryFocus ">CONTACT</h1>
            <h1 className="text-H5 text-NeutralFocus">Have a Question?</h1>
          </div>
          {/* <!-- bottom --> */}
          <div className="flex justify-center flex-col-reverse md:flex-row  items-center">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_ul9qza1y.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-5 p-8 flex flex-col gap-5 items-center w-screen "
            >
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0  outline-none "
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                cols="30"
                rows="10"
                name="message"
                placeholder="Message..."
                required
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="w-1/2 bg-Primary   text-Secondary text-[20px] font-semibold	 px-3 py-2 rounded-md cursor-pointer hover:bg-Third hover:text-NeutralFocus transition"
              >
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
