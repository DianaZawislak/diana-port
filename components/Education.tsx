import React, { useRef } from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { EducationType } from "../typings";

type Props = {
    school: EducationType[];
};

function Education({ school }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null); // Update the ref type here
    const scrollAmount = 600; // The amount of pixels to scroll
  
    const scrollLeft = () => {
      if (scrollRef.current !== null) {
        scrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current !== null) {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };
    return (
        <>
            <style>
                {`
          .education-card-image {
            width: 100%;
            height: auto;
          }

          @media (max-width: 1024px) {
            .education-heading {
              top: 16px !important;
              font-size: 2.5rem !important;
            }

            .arrow-button {
              width: 10rem !important;
              font-size: 6rem !important;
            }
          }

          @media (max-width: 768px) {
            .education-heading {
              top: 12px !important;
              font-size: 2rem !important;
            }

            .arrow-button {
              width: 8rem !important;
              font-size: 5rem !important;
            }
          }

          @media (max-width: 480px) {
            .education-heading {
              top: 8px !important;
              font-size: 1.5rem !important;
            }

            .arrow-button {
              width: 6rem !important;
              font-size: 4rem !important;
            }
          }

          @media (max-width: 640px) {
            .right-arrow-button {
              right: .2rem !important;
            }
          }

          @media (max-width: 640px) {
            .left-arrow-button {
              left: .2rem !important;
            }
          }
          
        `}
            </style>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex relative overflow-hidden flex-col 
                    text-center md:flex-row max-w-full px-5 
                    font-thin h-screen justify-evenly mx-auto items-center"
            >
                <h3 className="absolute top-[100px] sm:top-[80px] md:top-[60px] lg:top-[70px] 
                               uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl sm:text-2xl">
                    Education
                </h3>


                <button
                    className="arrow-button absolute left-5 z-10 h-full w-12 flex items-center left-arrow-button custom-arrow-color justify-center text-8xl text-#7bff00"
                    onClick={scrollLeft}
                >
                    &lsaquo;
                </button>

                <div
                    ref={scrollRef}
                    className="w-full flex space-x-5 gap-5 mt-10 overflow-x-scroll   snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/40 xl:pl-[80%] lg:pl-[40%] md:pl-[5%] sm:pl-0"
                >
                    {school?.map((education) => (
                        <EducationCard key={education._id} education={education} />
                    ))}
                </div>

                <button
                    className="arrow-button absolute right-5  z-10 h-full w-12 flex items-center right-arrow-button justify-center text-8xl custom-arrow-color"
                    onClick={scrollRight}
                >
                    &rsaquo;
                </button>
            </motion.div>
        </>

    );

}

export default Education;