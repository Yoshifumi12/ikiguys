"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      className="flex max-h-[800px] flex-col items-center bg-gray-50 bg-contain md:h-screen md:flex-row-reverse"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-w-[200px] max-w-[1260px] flex-col items-center justify-between md:flex-row-reverse">
        <motion.img
          src="nutribite-4.png"
          className="mt-28 h-64 max-h-[400px] rounded-lg px-8 md:mt-20 md:h-[510px] md:w-1/2 xl:px-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          alt=""
        />

        <div className="w-full md:w-1/2 md:px-1">
          <motion.div
            className="text-4xl font-medium md:mb-2 md:mt-40 md:text-5xl md:font-normal lg:text-6xl xl:mb-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="lg-px-12 px-8 text-center text-gray-800 md:text-left xl:px-0">
              <div className="hidden md:block">
                Welcome to
                <br />
                Nutribite
              </div>

              <div className="mb-2 mt-3 block text-2xl md:hidden">
                Welcome to Nutribite
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto max-w-[500px] px-5 text-center text-sm font-light text-gray-700 md:px-8 md:text-left md:text-base lg:max-w-[680px] xl:max-w-[800px] xl:px-0 xl:pr-[100px]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Nutribite is a testament to hard work, secret recipe, and
            unparalleled flavor. Lovingly injected with our irresistible
            homemade filling. We perfect every Nutribite with a delectable touch
            of butter on top.
          </motion.div>

          <Link href="/order">
            <motion.div
              className="mb-8 flex items-center justify-center px-8 md:mb-12 md:items-start md:justify-start xl:px-0"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <button className="mt-6 block w-72 rounded-2xl bg-yellow-800 py-2 text-lg font-semibold text-white hover:bg-blue-900 md:mb-6 md:w-80 md:py-3">
                Order Now!
              </button>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
