import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl  sm:text-2xl">
        Projects
      </h3>

      <div className="relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff00]/80">
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            className="w-screen flex flex-col items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
          >
            <Link key={project._id} href={project.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                className=" sm:w-200 sm:h-300 md:w-260 md:h-400 lg:w-[800px] lg:h-[480px] xl:w-[1000px] xl:h-[600px] object-contain cursor-pointer"
              />
            </Link>

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="lg:text-3xl sm:text-xs md:text-sm font-semibold text-center">
                <span>
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div style={{maxWidth: "700px"}}>
              <p className="lg:text-md md:text-sm sm:text-xs text-center ">
                {project.summary}
              </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* This is skweded strip in project section */}

      <div className="w-full absolute top-[30%] bg-[#7bff00]/5 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
