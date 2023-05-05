import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { EducationType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  education: EducationType;
};

function useInView(): [React.RefObject<HTMLImageElement>, boolean] {
  const ref = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this value
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, inView];
}

function EducationCard({ education }: Props) {
  const [ref, inView] = useInView();
  return (
    <article
      className="flex flex-col rounded-lg items-center  mt-5 space-y-7 flex-shrink-0  h-[600px]  md:h-[700px] md:w-[620px] lg:h-[650px] lg:w-[700px] xl:w-[700px] xl:h-[600px] snap-center bg-[#252323]
      p-3 hover:opacity-100 opacity-70 cursor-pointer transition-opacity small-screen-opacity duration-200 overflow-hidden
      w-full sm:w-full "
      style={{ margin: "0 auto" }}
    >
      <style>
        {`
        .education-card-image {
          width: 100%;
          height: 80%;
          max-height: 100vh;
        }

        @media (max-width: 1024px) {
          .education-card-image {
            width: 100%;
            max-height: 0vh;
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
        ref={ref}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{ duration: 1.2 }}
        src={urlFor(education.diplomaImage).url()}
        className="education-card-image
          xl:w-[700px]
          object-center
          object-cover"
      />

      <p className="uppercase   text-gray-300">
        {education.certificateName ? education.certificateName : "N/A"} {" "}<br />
        {education.yearStarted ? education.yearStarted : "N/A"} -{" "}
        {education.dateEnded ? education.dateEnded : "N/A"}{" "}
      </p>
    </article>
  );
}

export default EducationCard;
