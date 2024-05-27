"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import OrderSection from "./orderSection";
import { fillingNumberData } from "../data/FillingNumberData";
import { fillingData } from "../data/fillingData";

type FillingNumber = {
  name: string;
  image: string;
  value: number;
};

type Filling = {
  name: string;
  image: string;
};

const Order: React.FC = () => {
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isFillingModalOpen, setIsFillingModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [chosenNumber, setChosenNumber] = useState<FillingNumber>({
    name: "Amount of Fillings",
    image: "placeholder.png",
    value: 0,
  });

  const [chosenFilling, setChosenFilling] = useState<Filling[]>([]);
  const [order, setOrder] = useState("");

  const handleBreadButtonClick = () => {
    setIsNumberModalOpen(true);
  };

  const handleCloseBreadModal = () => {
    setIsNumberModalOpen(false);
  };

  const handleFillingButtonClick = () => {
    setIsFillingModalOpen(true);
  };

  const handleCloseFillingModal = () => {
    setIsFillingModalOpen(false);
  };

  const handleBreadSubmit = (bread: FillingNumber) => {
    setChosenNumber(bread);
    setOrder(bread.name);
    setIsNumberModalOpen(false);
  };

  const handleFillingSubmit = (filling: Filling) => {
    const updatedChosenFillings = [...chosenFilling, filling];

    // Check if the number of chosen fillings exceeds the chosen number value
    if (updatedChosenFillings.length <= chosenNumber.value) {
      setChosenFilling(updatedChosenFillings);

      // If the limit is not exceeded, update the order
      const fillingNames = updatedChosenFillings.map((filling) => filling.name);
      const orderText = fillingNames.join(", ");
      setOrder(`${chosenNumber.name}    ${orderText}`);

      // If the chosen fillings reach the limit, close the filling modal
      if (updatedChosenFillings.length === chosenNumber.value) {
        setIsFillingModalOpen(false);
      }
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Order | Ikiguys</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/" />
      </Head>

      <Navbar />
      <OrderSection />

      {/* Bread Section */}
      <div>
        <div className="mx-auto mt-6 flex max-w-[1230px] flex-col items-center md:flex-row md:py-[94px] lg:mt-1 px-4 md:px-0">
          <div className="w-full flex-col items-center justify-center md:w-1/2">
            <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              Amount of Fillings
            </p>
            <p className="mb-4 text-sm font-light text-gray-800 sm:text-base md:max-w-[510px] lg:text-lg">
              Nutribite offers customizable fillings, giving you the choice of
              having 2 or more different fillings.
            </p>
            <button
              className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-blue-900 md:mb-6 md:w-80 md:py-3"
              onClick={handleBreadButtonClick}
            >
              Choose Amount of Fillings
            </button>
          </div>
          <div className="w-full md:w-1/2 md:max-w-[580px] xl:ml-20">
            <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              {chosenNumber.name}
            </p>
            <img
              src={chosenNumber.image}
              className="h-[345px] w-full rounded-lg object-cover"
              alt={chosenNumber.name}
            />
          </div>
        </div>

        {isNumberModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Choose Amount of Fillings
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {fillingNumberData.map((bread, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between py-2"
                  >
                    <div className="transform rounded-lg p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105">
                      <button onClick={() => handleBreadSubmit(bread)}>
                        <img
                          className="object-cover h-40 w-40 sm:h-56 sm:w-[280px] lg:w-[300px] rounded-t-lg"
                          src={bread.image}
                          alt={bread.name}
                        />
                      </button>
                      <div className="my-2 ml-2 text-center">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900">
                          {bread.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleCloseBreadModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filling Section */}
      {chosenNumber.value != 0 && (
        <div>
          <div className="mx-auto mt-6 flex max-w-[1230px] flex-col items-center md:flex-row-reverse md:py-[94px] lg:mt-1 px-4 md:px-0">
            <div className="w-full flex-col items-center justify-center md:w-1/2">
              <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
                Filling Type
              </p>
              <p className="mb-4 text-sm font-light text-gray-800 sm:text-base md:max-w-[510px] lg:text-lg">
                Nutribite offers a variety of fillings to suit your taste.
              </p>
              <button
                className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-blue-900 md:mb-6 md:w-80 md:py-3"
                onClick={handleFillingButtonClick}
              >
                Choose Flavor
              </button>
            </div>
            <div className="w-full md:w-1/2 md:max-w-[580px] md:mr-20">
              <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
                Choose Flavor
              </p>
              {chosenFilling.length === 0 && (
                <img
                  src="placeholder.png"
                  className="h-[345px] w-full rounded-lg object-cover"
                  alt=""
                />
              )}
              {chosenFilling.length > 0 && (
                <img
                  src={chosenFilling[0].image}
                  className="h-[345px] w-full rounded-lg object-cover"
                  alt=""
                />
              )}
            </div>
          </div>

          {isFillingModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Choose Your Filling
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {fillingData.map((fillingOption, fillingIndex) => (
                    <div
                      key={fillingIndex}
                      className="flex flex-col items-center justify-between py-2"
                    >
                      <div className="transform rounded-lg p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <button
                          onClick={() => handleFillingSubmit(fillingOption)}
                        >
                          <img
                            className="object-cover h-40 w-40 sm:h-56 sm:w-[280px] lg:w-[300px] rounded-t-lg"
                            src={fillingOption.image}
                            alt={fillingOption.name}
                          />
                        </button>
                        <div className="my-2 ml-2 text-center">
                          <h5 className="text-lg font-medium tracking-tight text-gray-900">
                            {fillingOption.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={handleCloseFillingModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="z-10 flex h-64  flex-col items-center bg-gray-50 bg-cover bg-center shadow md:h-64">
        <div className="mb-12 flex flex-col items-center justify-center">
          {/* Quantity Selector */}
          <p>{order}</p>

          <div className="mb-4 mt-[65px] flex items-center text-3xl font-medium text-gray-800 sm:text-sm md:mt-[100px] lg:text-xl">
            <button
              className="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-2 bg-white border-t border-b border-gray-300">
              {quantity}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              window.location.reload();
              window.scrollTo(0, 0);
            }}
            className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-yellow-900 md:mb-6 md:w-80 md:py-3"
          >
            Place Order
          </button>
        </div>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </>
  );
};

export default Order;
