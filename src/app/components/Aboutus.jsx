import Image from "next/image";
import React from "react";

import avatar1 from "../Images/avatars/Avatar-1.png";
import avatar2 from "../Images/avatars/Avatar-2.png";
import avatar3 from "../Images/avatars/Avatar-3.png";

import earthbar from "../Images/shapes/earthbar.png";

function Aboutus() {
  return (
    <div className="w-screen h-auto p-28 flex flex-col bg-slate-50 relative sm:p-20 max-sm:p-10 ">
      <div>
        <h2 className="font-bold text-3xl my-4 ">Who we are</h2>
        <p className="text-2xl mt-4 mb-20 lg:text-xl md:text-lg sm:text-base max-sm:text-sm ">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
        <Image src={earthbar} alt="earthbar" className="w-full" />
      </div>
      <div className="w-full h-full  p-6 mt-40 lg:mt-20  md:mt-12 sm:mt-8 max-sm:mt-4">
        <div className="flex w-full h-auto  items-center justify-center flex-col">
          <div>
            <h1 className="text-4xl font-bold text-center mb-20 md:mb-10 sm:mb-5 max-sm:text-3xl">
              Meet the heroes behind the magic
            </h1>
          </div>
          <div className="flex flex-row w-full justify-center items-center lg:flex-row md:flex-col sm:flex-col max-sm:flex-col  ">
            <div className=" w-1/3  bg-white p-4 m-7  cursor-pointer  md:w-3/4 sm:w-3/4 max-sm:w-3/4 duration-700  hover:scale-125 ">
              <Image src={avatar1} alt="avatar1" className="w-full " />
              <h1 className="font-bold text-3xl lg:text-2xl sm:text-2xl max-sm:text-xl">
                Esther Howard
              </h1>
              <p className=" opacity-50">Founder</p>
            </div>
            <div className=" w-1/3  bg-white p-4 m-7  cursor-pointer md:w-3/4 sm:w-3/4 max-sm:w-3/4  duration-700  hover:scale-125 ">
              <Image src={avatar2} alt="avatar2" className="w-full  " />
              <h1 className="font-bold text-3xl lg:text-2xl sm:text-2xl max-sm:text-xl">
                Cody Fisher
              </h1>
              <p className=" opacity-50">Developer</p>
            </div>
            <div className=" w-1/3  bg-white p-4 m-7  cursor-pointer md:w-3/4 sm:w-3/4 max-sm:w-3/4 duration-700  hover:scale-125 ">
              <Image src={avatar3} alt="avatar3" className="w-full " />
              <h1 className="font-bold text-3xl lg:text-2xl sm:text-2xl max-sm:text-xl">
                Brooklyn Simmons
              </h1>
              <p className=" opacity-50">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
