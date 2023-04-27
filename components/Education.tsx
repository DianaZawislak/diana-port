import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { EducationType } from "../typings";

type Props = {
  school: EducationType[];
};

function Education({ school }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col  text-center md:flex-row max-w-full px-5 font-thin h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl  sm:text-2xl">
        Education
      </h3>

      <div className="w-full flex space-x-5   gap-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/40">
        {school?.reverse().map((education) => (
          <EducationCard key={education._id} education={education} />
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
