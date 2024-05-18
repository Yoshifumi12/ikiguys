import React from "react";

const Mission = () => {
  return (
    <div
      style={{
        backgroundImage: " url('mission-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto mt-6 flex max-w-[1230px] flex-col-reverse items-center md:flex-row md:py-[94px] lg:mt-1">
        <div className=" w-full flex-col items-center justify-center md:w-1/2">
          <p className="mb-2 mt-4 px-6 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl xl:px-0">
            Our Mission
          </p>
          <p className="mb-4 px-6 text-sm font-light text-gray-800 sm:text-base md:max-w-[510px] lg:text-lg xl:px-0">
            To offer a delicious solution for a healthier, more sustainable
            future by providing fresh, tasty bread coupled with a dedication to
            promoting proper diet choices that nourish both young minds and the
            planet.
          </p>
        </div>
        <div className="w-full px-6 md:w-1/2 md:max-w-[580px] xl:ml-20 xl:px-0">
          <img
            src="placeholder.png"
            alt="Mission"
            className="h-[345px] w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
