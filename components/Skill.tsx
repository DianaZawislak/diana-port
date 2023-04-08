import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer mt-5">
      <motion.img
        initial={{
          x: directionLeft ? -40 : 50,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className="rounded-full border-gray-800 object-cover lg:h-20 lg:w-20  sm:h-10 sm:w-10 filter 
        grayscale-0 transition duration-300 ease-in-out"
      />
      {/* <div className="absolute opacity-0 group-hover:opacity-50 transition duration-900 ease-in-out group-hover:bg-white lg:h-[20px] lg:w-[20px] md:h-[14px] md:w-[14px] sm:h-[10px] sm:w-[10px] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="lg:text-2xl md:text-lg sm:text-sm font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Skill;
