"use client"
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface CarouselProps {
  slides: string[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

  const previousSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? slides.length - 1 : prevCurrent - 1,
    );
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1,
    );
  };

  const slideVariants = {
    initial: { x: 0 },
    animate: { x: `-${current * 100}%` },
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <div className="relative mx-auto my-4 max-h-[700px] min-w-[200px] max-w-[1395px] overflow-hidden md:my-12">
      <motion.div
        className={`duration-400 flex transition-transform ease-out`}
        style={{
          display: "flex",
        }}
        initial="initial"
        animate="animate"
        variants={{
          initial: { x: 0 },
          animate: { x: `-${current * 100}%` },
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {slides &&
          slides.map((s, index) => {
            return <img src={s} alt="Carousel" key={index} className="object-obtain" />;
          })}
      </motion.div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-2xl text-white">
        <button onClick={previousSlide}>
          <AiOutlineLeft size={32} />
        </button>
        <button onClick={nextSlide}>
          <AiOutlineRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides &&
          slides.map((_, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                  controls.start(slideVariants.animate);
                }}
                key={"circle" + i}
                className={`h-3 w-3 cursor-pointer rounded-full  ${
                  i === current ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
