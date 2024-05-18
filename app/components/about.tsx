"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="bg-yellow-700 bg-contain py-8 sm:py-10"
      style={{
        backgroundImage: " url('fundimpact-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto flex max-w-[1241px] flex-col items-center justify-between sm:flex-row">
        <div className="w-full sm:pl-6 md:w-1/2 lg:pr-16 xl:pl-0">
          <img
            src="nutribite-2.png"
            alt="About Nutribite"
            className="h-[320px] w-full px-4 sm:px-0 md:h-[390px] xl:h-[400px]"
          />
        </div>

        <motion.div
          className="w-full flex-col items-center justify-center px-4 md:w-1/2 xl:px-0 xl:pl-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          ref={ref}
        >
          <p className="mt-3 text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
            About Nutribite
          </p>

          <p className="lg: max-w-[590px] text-sm font-light text-gray-50 sm:text-sm xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            rhoncus justo. Donec nulla mi, condimentum dignissim sapien
            imperdiet, ultrices interdum risus. Morbi finibus ultricies neque.
            Vestibulum mollis ante sit amet felis iaculis, at venenatis justo
            pharetra. Pellentesque ut tincidunt lorem, vitae scelerisque mauris.
            Suspendisse elementum laoreet placerat. Etiam hendrerit elit lorem,
            vitae feugiat metus vehicula id. In venenatis faucibus congue. Ut
            metus massa, fermentum sed mauris non, congue pretium libero.
            Suspendisse potenti. Mauris fermentum vitae lacus non sodales. Etiam
            euismod orci mi, eu elementum dolor molestie a. Cras facilisis
            iaculis maximus.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
