import React from "react";

const Vision = () => {
  return (
    <div
      style={{
        backgroundImage: " url('mission-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto mt-6 flex max-w-[1230px] flex-col-reverse items-center md:flex-row md:py-[94px] lg:mt-1">
        <div className="w-full px-6 md:w-1/2 md:max-w-[580px] xl:ml-20 xl:pr-10">
          <img
            src="vision.png"
            alt="Mission"
            className="h-[345px] w-full rounded-lg"
          />
        </div>
        <div className=" w-full flex-col items-center justify-center md:w-1/2">
          <p className="mb-2 mt-4 px-6 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl xl:px-0">
            Our Vision
          </p>
          <p className="mb-4 px-6 text-sm font-light text-gray-800 sm:text-base md:max-w-[510px] lg:text-lg xl:px-0">
            To revolutionize baking by blending traditional methods with
            innovative technology and recipes, setting new standards and methods
            of excellence that captivates customers and transforms the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
