import React from "react";
import Image from "next/image";

import Avatar from "../Images/avatars/image 7.png";

function Proposal() {
  return (
    <div className="w-screen h-screen flex p-10 lg:flex-row md:flex-col  sm:flex-col max-sm:flex-col ">
      <div className=" h-full w-1/2 flex justify-center items-center md:w-full sm:w-full max-sm:w-full   ">
        <div className="bg-[#FEF1E0]  h-full w-3/4 flex justify-center items-center p-10 ">
          <Image
            src={Avatar}
            alt="avatar"
            className="max-h-full  max-w-full  rounded-sm  "
          />
        </div>
      </div>

      <form
        action=""
        className="h-full  w-1/2 flex flex-col items-center justify-center  md:w-full sm:w-full  max-sm:w-full p-6"
      >
        <div className="w-3/4 h-auto flex justify-end items-end md:justify-end   ">
          <h1 className="text-4xl text-end w-2/5 h-24 font-extrabold lg:w-2/5 lg:h-24 md:w-1/4 lg:text-2xl  md:text-xl md:h-16 max-[768px]:text-xl max-sm:text-base   ">
            We'd love to hear from you
          </h1>
        </div>
        <input
          type="text"
          placeholder="Name*"
          className=" p-4 border rounded-sm border-black w-3/4 m-3 lg:p-3 lg:m-2  focus:outline-none    "
        />
        <input
          type="email"
          placeholder="E-mail*"
          className=" p-4 border rounded-sm border-black w-3/4 m-3 focus:outline-none "
        />
        <input
          type="url"
          placeholder="Website URL*"
          className=" p-4 border rounded-sm border-black w-3/4 m-3 focus:outline-none  "
        />
        <textarea
          name=""
          placeholder="Project Details*"
          className="p-4 border rounded-sm border-black w-3/4 h-24 m-3 focus:outline-none"
        ></textarea>
        <button className="bg-black text-white p-5 w-3/4 m-4 hover:bg-opacity-75">
          Send Proposal
        </button>
      </form>
    </div>
  );
}

export default Proposal;
