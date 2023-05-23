import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { EducationType } from "../typings";

type Props = {
    school: EducationType[];
};

function Education({ school }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isAtLeftEnd, setIsAtLeftEnd] = useState(true);
    const [isAtRightEnd, setIsAtRightEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsAtLeftEnd(scrollRef.current.scrollLeft === 0);
        setIsAtRightEnd(
          scrollRef.current.scrollWidth - scrollRef.current.scrollLeft ===
            scrollRef.current.clientWidth
        );
      }
    };

    useEffect(() => {
      handleScroll();
      if (scrollRef.current) {
        scrollRef.current.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

    const scrollLeft = () => {
      if (scrollRef.current !== null && cardRefs.current[activeIndex]) {
        const cardWidth = cardRefs.current[activeIndex].offsetWidth;
        scrollRef.current.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
      }
    };

    const scrollRight = () => {
      if (scrollRef.current !== null && cardRefs.current[activeIndex + 1]) {
        const cardWidth = cardRefs.current[activeIndex + 1].offsetWidth;
        scrollRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
        if (activeIndex < school.length - 1) setActiveIndex(activeIndex + 1);
      }
    };

    const variants = {
      hidden: { opacity: 0, y: "-100%" },
      show: {
        opacity: 1,
        y: "0%",
        transition: {
          duration: 1,
        },
      },
      exit: { y: "-100%", transition: { duration: 1 } },
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
          initial="hidden"
          animate="show"
          variants={variants}
          className="flex relative overflow-hidden flex-col 
              text-center md:flex-row max-w-full px-5 
              font-thin h-screen justify-evenly mx-auto items-center"
        >
          {!isAtLeftEnd && (
            <button
              className="arrow-button absolute left-5 z-10 h-full w-12 flex items-center justify-center text-8xl text-#7bff00"
              onClick={scrollLeft}
            >
              &lsaquo;
            </button>
          )}

          <div
            ref={scrollRef}
            className="w-full flex space-x-5 gap-5 mt-10 overflow-x-scroll snap-x snap-mandatory 
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/40  xl:pl-[40%] lg:pl-[40%] md:pl-[5%] sm:pl-0"
          >
            {school?.map((education, index) => (
              <motion.div
                ref={(el) => (cardRefs.current[index] = el)}
                key={education._id}
                variants={variants}
                initial="hidden"
                animate="show"
                className="flex-none"
                style={{ width: "100%" }}
              >
                <EducationCard education={education} />
              </motion.div>
            ))}
          </div>

          {!isAtRightEnd && (
            <button
              className="arrow-button absolute right-5  z-10 h-full w-12 flex items-center justify-center text-8xl text-#7bff00"
              onClick={scrollRight}
            >
              &rsaquo;
            </button>
          )}
        </motion.div>
      </>
    );
}

export default Education;
