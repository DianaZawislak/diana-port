import React, { useRef } from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { EducationType } from "../typings";

type Props = {
  school: EducationType[];
};

function Education({ school }: Props) {
  const scrollRef = useRef(null);
  const scrollAmount = 200; // The amount of pixels to scroll

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-5 font-thin h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl sm:text-2xl">
        Education
      </h3>

      <button
        className="absolute left-5 z-10 h-full w-12 flex items-center custom-arrow-color justify-center text-8xl text-#7bff00"
        onClick={scrollLeft}
      >
        &lsaquo;
      </button>

      <div
        ref={scrollRef}
        className="w-full flex space-x-5 gap-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/40"
      >
        {school?.reverse().map((education) => (
          <EducationCard key={education._id} education={education} />
        ))}
      </div>

      <button
        className="absolute right-5 z-10 h-full w-12 flex items-center justify-center text-8xl custom-arrow-color"
        onClick={scrollRight}
      >
        &rsaquo;
      </button>
    </motion.div>
  );
}

export default Education;
