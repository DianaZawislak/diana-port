import React from "react";
import { motion } from "framer-motion";
import { EducationType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  education: EducationType;
};

function EducationCard({ education }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center  mt-5 space-y-7 flex-shrink-0  h-[500px] md:h-[800px] lg:h-[400px] xl:w-[900px] xl:h-[700px] snap-center bg-[#252323]
      p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity small-screen-opacity duration-200 overflow-scroll lg:overflow-hidden
      w-full sm:w-full md:w-3/4"
      style={{ margin: "0 auto" }}
    >
      <style>
        {`
        .education-card-image {
          width: 80%;
          height: auto;
          max-height: 100vh;
        }

        @media (max-width: 1024px) {
          .education-card-image {
            width: 100%;
            max-height: 60vh;
            padding-top: 80px;
          }
          .small-screen-opacity {
            opacity: 100;
          }
        }

        @media (max-width: 768px) {
          .education-card-image {
            width: 100%;
            max-height: 60vh;
            padding-top: 50px;
          }
          .small-screen-opacity {
            opacity: 100;
          }
        }

        @media (max-width: 480px) {
          .education-card-image {
            width: 100%;
            max-height: 40vh;
            padding-top: 50px;
           
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
        src={urlFor(education.diplomaImage).url()}
        className="education-card-image
          xl:w-[700px]
          object-center
          object-cover"
      />

      <p className="uppercase py-1 mt-1 text-gray-300">
        {education.yearStarted ? education.yearStarted : "N/A"} -{" "}
        {education.dateEnded ? education.dateEnded : "N/A"}{" "}
      </p>
    </article>
  );
}

export default EducationCard;
