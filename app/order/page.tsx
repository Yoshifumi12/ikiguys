"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import OrderSection from "./orderSection";
import { breadData } from "../data/breadData";
import { fillingData } from "../data/fillingData";

const Order = () => {
  const [isBreadModalOpen, setIsBreadModalOpen] = useState(false);
  const [isFillingModalOpen, setIsFillingModalOpen] = useState(false);
  const [chosenBread, setChosenBread] = useState({
    name: "Choose Bread",
    image: "placeholder.png",
  });

  const [chosenFilling, setChosenFilling] = useState({
    name: "Choose Filling",
    image: "placeholder.png",
  });

  const handleBreadButtonClick = () => {
    setIsBreadModalOpen(true);
  };

  const handleCloseBreadModal = () => {
    setIsBreadModalOpen(false);
  };

  const handleFillingButtonClick = () => {
    setIsFillingModalOpen(true);
  };

  const handleCloseFillingModal = () => {
    setIsFillingModalOpen(false);
  };

  const handleBreadSubmit = (
    bread: React.SetStateAction<{ name: string; image: string }>
  ) => {
    setChosenBread(bread);
    setIsBreadModalOpen(false);
  };

  const handleFillingSubmit = (
    filling: React.SetStateAction<{ name: string; image: string }>
  ) => {
    setChosenFilling(filling);
    setIsFillingModalOpen(false);
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
      <div
        style={{
          backgroundImage: "url('mission-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto mt-6 flex max-w-[1230px] flex-col items-center md:flex-row md:py-[94px] lg:mt-1 px-4 md:px-0">
          <div className="w-full flex-col items-center justify-center md:w-1/2">
            <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              Bread Type
            </p>
            <p className="mb-4 text-sm font-light text-gray-800 sm:text-base md:max-w-[510px] lg:text-lg">
              Nutribite offers different types of bread that can fit your
              preferences and health standards.
            </p>
            <button
              className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-blue-900 md:mb-6 md:w-80 md:py-3"
              onClick={handleBreadButtonClick}
            >
              Choose Bread Type
            </button>
          </div>
          <div className="w-full md:w-1/2 md:max-w-[580px] xl:ml-20">
            <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              {chosenBread.name}
            </p>
            <img
              src={chosenBread.image}
              className="h-[345px] w-full rounded-lg object-cover"
              alt={chosenBread.name}
            />
          </div>
        </div>

        {isBreadModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Choose Your Bread
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {breadData.map((bread, index) => (
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
      <div
        style={{
          backgroundImage: "url('filling-bg.png')",
          backgroundSize: "cover",
        }}
      >
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
              Choose Filling Type
            </button>
          </div>
          <div className="w-full md:w-1/2 md:max-w-[580px] xl:mr-20">
            <p className="mb-2 mt-4 text-2xl font-medium text-gray-800 sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              {chosenFilling.name}
            </p>
            <img
              src={chosenFilling.image}
              className="h-[345px] w-full rounded-lg object-cover"
              alt={chosenFilling.name}
            />
          </div>
        </div>

        {isFillingModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Choose Your Filling
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {fillingData.map((filling, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between py-2"
                  >
                    <div className="transform rounded-lg p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105">
                      <button onClick={() => handleFillingSubmit(filling)}>
                        <img
                          className="object-cover h-40 w-40 sm:h-56 sm:w-[280px] lg:w-[300px] rounded-t-lg"
                          src={filling.image}
                          alt={filling.name}
                        />
                      </button>
                      <div className="my-2 ml-2 text-center">
                        <h5 className="text-lg font-medium tracking-tight text-gray-900">
                          {filling.name}
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
      <div className="z-10 flex h-44 flex-col items-center bg-gray-50 bg-cover bg-center shadow md:h-52">
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="mb-2 mt-[65px] text-3xl font-medium text-gray-800 sm:text-4xl md:mt-[100px] lg:text-5xl">
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
      </div>
      <Footer />
    </>
  );
};

export default Order;