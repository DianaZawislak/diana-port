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
      className="flex flex-col rounded-lg items-center mt-5 space-y-7 flex-shrink-0 xl:w-[900px] xl-h[800px] snap-center bg-[#252323]
      p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll lg:overflow-hidden"
      style={{ margin: "0 auto" }}
    >
      <style>
        {`
        .education-card-image {
          width: 100%;
          height: auto;
          max-height: 40vh;
        }

        @media (max-width: 1024px) {
          .education-card-image {
            width: 80%;
            max-height: 35vh;
          }
        }

        @media (max-width: 768px) {
          .education-card-image {
            width: 60%;
            max-height: 30vh;
          }
        }

        @media (max-width: 480px) {
          .education-card-image {
            width: 100%;
            max-height: 25vh;
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
