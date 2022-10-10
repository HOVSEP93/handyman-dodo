import React from "react";
import Garden1 from ".././assets/garden1.jpg";
import Garden2 from ".././assets/garden2.jpg";
import Garden3 from ".././assets/garden3.jpg";
import Garden4 from ".././assets/garden4.jpg";
import Garden6 from ".././assets/svg/Farmer-cuate .svg";
import Garden7 from ".././assets/svg/Gardening-cuate.svg";

const MyWork = () => {
  return (
    <div
      className=" max-w-[1240px] text-center 
      mt-40 place-content-center	md:ml-96"
    >
      <h1 className="text-H3  text-PrimaryFocus font-bold mb-20 ">My Work</h1>
      {/* <p className="text-H6 text-Neutral md:mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque eos
        quam facilis perspiciatis ad doloremque facere error quos a ipsam
        asperiores, quis, ratione
      </p> */}
      {/* Imgage 1 */}
      <div className="			md:h-[32rem] bg-Primary mb-40 ">
        <img
          src={Garden1}
          alt="garde"
          height={1500}
          width={800}
          className=" md:ml-40 pt-40 md:pt-20 "
        />
      </div>
      {/* Imgage 2 */}
      <div className=" md:h-[32rem] bg-Third mt-10 my-40">
        <img
          src={Garden2}
          alt="garde"
          height={1500}
          width={800}
          className="md:ml-40 pt-40 md:pt-20 "
        />
      </div>
      {/* Imgage 3*/}
      <div className=" md:h-[32rem] bg-PrimarySecondary mt-10  my-40">
        <img
          src={Garden3}
          alt="garde"
          height={1500}
          width={800}
          className="md:ml-40 pt-40 md:pt-20"
        />
      </div>
      {/* Imgage 4 */}
      <div className=" md:h-[32rem] bg-Primary mt-10 my-40">
        <img
          src={Garden4}
          alt="garde"
          height={1500}
          width={800}
          className="md:ml-40 pt-40 md:pt-20"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-64  w-96">
        <img
          src={Garden6}
          alt="garde"
          height={1500}
          width={800}
          className="  "
        />
        <img
          src={Garden7}
          alt="garde"
          height={1500}
          width={800}
          className=" "
        />
      </div>
    </div>
    // <div
    //   className="  text-center
    //   mx-auto mt-40 "
    // >
    //   <h1 className="text-H3  text-PrimaryFocus font-bold mb-20 ">My Work</h1>
    //   <p className="text-H6 text-Neutral md:mb-10">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque eos
    //     quam facilis perspiciatis ad doloremque facere error quos a ipsam
    //     asperiores, quis, ratione
    //   </p>
    //   {/* Imgage 1 */}
    //   <div className="w-auto	md:h-[32rem] bg-Primary mb-40 ">
    //     <img
    //       src={Garden1}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className=" md:ml-40 pt-40 md:pt-20 "
    //     />
    //   </div>
    //   {/* Imgage 2 */}
    //   <div className="w-auto md:h-[32rem] bg-Third mt-10 my-40">
    //     <img
    //       src={Garden2}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className="md:ml-40 pt-40 md:pt-20 "
    //     />
    //   </div>
    //   {/* Imgage 3*/}
    //   <div className="w-auto md:h-[32rem] bg-PrimarySecondary mt-10  my-40">
    //     <img
    //       src={Garden3}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className="md:ml-40 pt-40 md:pt-20"
    //     />
    //   </div>
    //   {/* Imgage 4 */}
    //   <div className="w-auto md:h-[32rem] bg-Primary mt-10 my-40">
    //     <img
    //       src={Garden4}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className="md:ml-40 pt-40 md:pt-20"
    //     />
    //   </div>
    //   <div className="flex flex-col md:flex-row justify-between gap-64  w-96">
    //     <img
    //       src={Garden6}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className="  "
    //     />
    //     <img
    //       src={Garden7}
    //       alt="garde"
    //       height={1500}
    //       width={800}
    //       className=" "
    //     />
    //   </div>
    // </div>
  );
};

export default MyWork;
