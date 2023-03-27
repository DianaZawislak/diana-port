import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 4 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div className="rounded-3xl border border-[#7bff00] h-[300px] w-[300px] absolute mt-52 animate-ping animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#7bff00] px-5opacity-5 h-[700px] w-[700px] absolute mt-52 animate-pulse1" />
      <div className="rounded-full border border-[#1b1c1c] h-[800px] w-[800px] absolute mt-52 animate-pulse1" />
    </motion.div>
  );
}

export default BackgroundCircles;
