import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl lg:text-4xl md:text-3xl  sm:text-2xl">
        About
      </h3>
   <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="w-[110px] h-[110px]  rounded-full xl:w-[300px] xl:h-[300px] lg:w-[300px] lg:h-[300px] object-cover mt-24 "
      ></motion.img>
 
      <div className="space-y-5 px-0 md:px-3 flex-shrink-4">
        <h4 className="text-lg l md:text-lg lg:text-2xl px-10 font-semibold  text-gray-300">
          A little bit about me...{" "}

        </h4>
        <div className="lg:px-10 md:px-10 flex flex-col h-[310px] md:h-auto sm:h-[400px] overflow-y-scroll">
    <p className="text-sm md:text-lg sm:text-xs lg:text-md flex-shrink-4 text-gray-300">
      {pageInfo?.backgroundInformation}
    </p>
  </div>
      </div>
    </motion.div>
  );
}

export default About;

