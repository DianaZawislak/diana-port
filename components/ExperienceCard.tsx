import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
  className?: string;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center mt-5 space-y-7 flex-shrink-0 h-[450px]  md:h-[700px] lg:h-[400px] xl:w-[900px] xl:h-[700px] snap-center bg-[#252323]
      p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity small-screen-opacity duration-200 overflow-scroll lg:overflow-hidden
      w-full sm:w-full md:w-3/4 experience-card-description"
      style={{ margin: "0 auto" }}
    >
      <style>
        {`
        .experience-card-image {
          width: 20%;
          height: auto;
          max-height: 20vh;
        }

        @media (max-width: 1024px) {
          .experience-card-image {
            width: 20%;
            max-height: 50vh;
            
          }
          .experience-card-description {
            font-size: 1rem; 
           
            }
            }
        }

        @media (max-width: 768px) {
          .experience-card-image {
            width: 100%;
            max-height: 30vh;
          }
          .experience-card-description {
            font-size: 1rem; 
        }

        @media (max-width: 480px) {
          .experience-card-image {
            width: 25%;
            max-height: 10vh;
          }
          .small-screen-opacity {
            opacity: 100;
          }
        }
      `}
      </style>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        className="experience-card-image object-center object-cover"
      />

      <div className="lg:px-0 md:px-10 sm:px-1 ">
        <h4 className=" sm:text-xs md:text-2xl text-center font-light uppercase mb-5">{experience.jobTitle}</h4>
        <p className="lg:px-8 sm:px-1  text-md text-center lg:h-[200px]  ">{experience.company}</p>
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
