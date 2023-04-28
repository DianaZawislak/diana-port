import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import styles from "../styles/WorkExperience.module.css";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null); // Update the ref type
  const scrollAmount = 200; // The amount of pixels to scroll

  const scrollLeft = () => {
    if (scrollRef.current !== null) { // Add this null check
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current !== null) { // Add this null check
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-5 font-thin h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[100px] sm:top-[80px] md:top-[60px] lg:top-[70px] uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl sm:text-2xl">
        Experience
      </h3>

      <button
        className="arrow-button absolute left-5 z-10 h-full w-12 flex items-center left-arrow-button custom-arrow-color justify-center text-8xl text-#7bff00"
        onClick={scrollLeft}
      >
        &lsaquo;
      </button>

      <div
        ref={scrollRef}
        className="w-full flex space-x-5 gap-5 mt-10 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/40 
        xl:pl-[50%] lg:pl-[40%] md:pl-[10%] sm:pl-0"
      >
        {experiences?.reverse().map((experience, index) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
            className={index === 0 ? "xl:ml-auto lg:ml-auto md:ml-auto" : ""}
          />
        ))}
      </div>

      <button
        className="arrow-button absolute right-5 z-10 h-full w-12 flex items-center right-arrow-button justify-center text-8xl custom-arrow-color"
        onClick={scrollRight}
      >
        &rsaquo;
      </button>
    </motion.div>
  );
}

export default WorkExperience;
