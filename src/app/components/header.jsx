import React from "react";
import shape1 from "../Images/shapes/shape_1.png";
import shape2 from "../Images/shapes/shape_2.png";

import hand1 from "../Images/hands/image 1.png";
import hand2 from "../Images/hands/image 2.png";
import hand3 from "../Images/hands/image 3.png";
import hand4 from "../Images/hands/image 4.png";
import hand5 from "../Images/hands/image 5.png";
import hand6 from "../Images/hands/image 6.png";

import Image from "next/image";

function header() {
  return (
    <main className="">
      <div className="bg-specialorange w-screen h-screen relative text-center font-bold flex items-center justify-center  ">
        <Image
          alt="shape1"
          src={shape1}
          className="absolute left-20 top-10 z-0 h-3/4  w-auto  max-sm:h-32 max-[300]:hidden "
        />
        <Image
          src={shape2}
          alt="shape2"
          className="absolute right-5 top-0 z-0 h-full max-sm:h-32  max-[300]:hiddens  "
        />
        <div className="h-1/2 w-1/2 text-center flex items-center justify-center ">
          <h1 className="text-black text-7xl  z-10 w-3/4 leading-relaxed font-extrabold xl:w-3/4 md:text-5xl md:w-full sm:text-4xl max-sm:text-2xl  ">
            Let's create something greate together
          </h1>
        </div>

        <div className="absolute left-0 bottom-0 w-screen h-2/4 flex justify-center">
          <div className="relative w-full h-full flex flex-nowrap ">
            <Image
              src={hand1}
              alt="hand1"
              className=" w-1/6   hover:animate-ping "
            />
            <Image
              src={hand2}
              alt="hand2"
              className=" w-1/6 hover:animate-ping "
            />
            <Image
              src={hand3}
              alt="hand3"
              className=" w-1/6  hover:animate-ping"
            />
            <Image
              src={hand4}
              alt="hand4"
              className=" w-1/6  hover:animate-ping "
            />
            <Image
              src={hand5}
              alt="hand5"
              className=" w-1/6  hover:animate-ping "
            />
            <Image
              src={hand6}
              alt="hand6"
              className=" w-1/6  hover:animate-ping   "
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default header;
