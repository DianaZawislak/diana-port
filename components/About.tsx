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
        className="-mb-40 md:mb-0 2 w-[160px] h-[160px]  rounded-full md:rounded-lg  xl:w-[500px] xl:h-[600px] object-cover"
      ></motion.img>
 
      <div className="space-y-10 px-0 md:px-5 flex-shrink-4">
        <h4 className="text-lg l md:text-xl lg:text-4xl font-semibold mt-10">
          Here is a little bit about me...{" "}

        </h4>
        <p className="text-sm md:text-lg lg:text-xl flex-shrink-4">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;

