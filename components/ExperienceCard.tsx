import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center mt-5 space-y-7 flex-shrink-0 w-[400px] h-[500px]  md:w-[600px] xl:w-[900px] snap-center bg-[#252323] 
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll lg:overflow-hidden" style={{ margin: '0 auto' }}>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        className="w-24 h-24 rounded-lg md:rounded-lg
                  xl:w-[120px] xl:h-[120px]
                  lg:h-[100px] lg:w-[100px] object-center
                  object-cover"
      />

      <div className="lg:px-0 md:px-10 sm:px-1 ">
        <h4 className=" sm:text-xs md:text-2xl text-center font-light uppercase mb-5">{experience.jobTitle}</h4>
        {/* //job description */}
        <p className="lg:px-8 sm:px-1  text-md text-center lg:h-[200px]  ">{experience.company}</p>
        {/* <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div> */}

        <p className="uppercase py-1 mt-1 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

      
      </div>
    </article>
  );
}

export default ExperienceCard;
