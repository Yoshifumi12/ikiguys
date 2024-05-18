import React from "react";

const PlaceOrder = () => {
  return (
    <div className="z-10 flex h-44 flex-col items-center bg-gray-50 bg-cover bg-center shadow md:h-52">
      <div className="mb-12 flex flex-col items-center justify-center">
        <div className="mb-2 mt-[65px] text-3xl  font-medium text-gray-800 sm:text-4xl md:mt-[100px] lg:text-5xl">
        <button className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-blue-900 md:mb-6 md:w-80 md:py-3">
                Place Order
              </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
