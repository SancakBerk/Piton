import React from "react";

function Info() {
  return (
    <div className="bg-black w-full h-60 flex justify-center  items-center lg:h-40 md:h-24 sm:h-20 max-sm:h-16 ">
      <div className="flex flex-col mr-auto w-1/4 justify-center text-center">
        <div className="flex text-orange-400 text-6xl font-bold  justify-center text-center lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-sm ">
          <h1>350</h1>
          <h1>+</h1>
        </div>
        <p className="text-lg text-white sm:text-base max-sm:text-sm">
          Client Worldwide
        </p>
      </div>
      <div className="flex flex-col mr-auto w-1/4 justify-center text-center">
        <div className="flex text-orange-400 text-6xl font-bold  justify-center text-center lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-sm  ">
          <h1>20</h1>
          <h1>+</h1>
        </div>
        <p className="text-lg text-white sm:text-base max-sm:text-sm">
          Team Member
        </p>
      </div>
      <div className="flex flex-col mr-auto w-1/4 justify-center text-center">
        <div className="flex text-orange-400 text-6xl font-bold  justify-center text-center lg:text-5xl md:text-3xl  sm:text-2xl max-sm:text-sm ">
          <h1>100</h1>
          <h1>+</h1>
        </div>
        <p className="text-lg text-white sm:text-base max-sm:text-sm">
          Projects Completed
        </p>
      </div>
      <div className="flex flex-col mr-auto w-1/4 justify-center text-center ">
        <div className="flex text-orange-400 text-6xl font-bold  justify-center text-center lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-sm  ">
          <h1>85M</h1>
          <h1>+</h1>
        </div>
        <p className="text-lg text-white sm:text-base max-sm:text-sm">
          Revenue Generated
        </p>
      </div>
    </div>
  );
}

export default Info;
