import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col py-5 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl  sm:text-2xl">
        Skills
      </h3>
      <h3 className="absolute bottom-40 mt-10 uppercase tracking-[3px] pulsing-text">
        <a
          href="\ResumeDianaZawislak2023.pdf"
          download="DianaZawislakResume"
          className=" lg:text-2xl sm:text-xl mb-10 "
        >
          DOWNLOAD MY RESUME HERE
        </a>
      </h3>
      {/* Add download link */}
    

      <div className="grid grid-cols-6 gap-3 grid-rows-6 absolute bottom-50 mx-6">
        {/* Map through all the skills */}
        {skills?.map((skill) => (
        <Skill key={skill._id} skill={skill} />
            ))}
      </div>

      
    </motion.div>
  );
}

export default Skills;
