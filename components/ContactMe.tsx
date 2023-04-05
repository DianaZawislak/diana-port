import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl md:text-3xl  sm:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-10">
        <h4 className="lg:text-2xl md:text-2xl font-semibold text-center mt-20">
        Let&apos;s create something amazing...
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#7bff00] h-7 w-7 animate-pulse" />
            <p className="lg:text-xl md:text-xl sm:text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7bff00] h-7 w-7 animate-pulse" />
            <a className="lg:text-xl md:text-xl sm:text-lg" href={`mailto:${pageInfo.email}`}>
              {pageInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#7bff00] h-7 w-7 animate-pulse" />
            <p className="lg:text-xl md:text-xl sm:text-lg">{pageInfo.address}</p>
          </div>
        </div>

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col space-y-2 w-fit mx-auto"
  style={{ width: "100%" }}
>
  <div className="flex  flex-wrap w-full">
    <input
      className="contactInput flex-grow-1  mb-2 w-full h-7"
      placeholder="Name"
      type="text"
      {...register("name")}
      style={{ maxWidth: "100%" }}
    />
    <input
      className="contactInput flex-grow-1 w-full h-7 "
      placeholder="Email"
      type="text"
      {...register("email")}
      style={{ maxWidth: "100%" }}
    />
  </div>
  <input
    className="contactInput h-7"
    placeholder="Subject"
    type="text"
    {...register("subject")}
    style={{ maxWidth: "100%" }}
  />
  <textarea
    className="contactInput h-36"
    placeholder="Message"
    {...register("message")}
    style={{ maxWidth: "100%" }}
  />

  <button
    type="submit"
    className="
            bg-[#7bff00]  opacity-75  px-10 rounded-md text-black font-bold text-lg h-9 items-center justify-center"
  >
     <span className="text-md">Submit</span>
  </button>
</form>



      </div>
    </motion.div>
  );
}

export default ContactMe;
