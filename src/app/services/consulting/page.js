"use client";
import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/consulting.webp";
import { motion } from "framer-motion";

const info = {
  title: "Consulting",
  subtitle: "Offering creative solutions to complex challenges",
  overview:
    "Transform your business with our comprehensive consulting solutions, we are committed to help you achieve excellence, so discover with us the power of our two-part consulting approach designed to provide comprehensive support for your success.",
  list: ["Generale Consultation", "Detailed Consultation"],
  success:
    "Together, we will achieve success, We tailor our strategies to address your unique challenges, providing innovative solutions and actionable insights.  ",
};
const demoVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};
const demoVariants2 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

const Branding = () => {
  return (
    <main className="flex w-full flex-col items-center space-y-5 md:space-y-10">
      <motion.section
        variants={demoVariants}
        initial="hidden"
        animate="animate"
        className="flex h-auto w-[90%] flex-col space-x-0 space-y-0 md:flex-row md:items-center md:justify-evenly"
      >
        <motion.div variants={demoVariants}>
          <h1 className="text-wrap text-4xl md:text-7xl md:leading-[5rem]">
            {info.title}
          </h1>
          <h3 className="italic md:text-3xl md:leading-[5rem]">
            {info.subtitle}
          </h3>
        </motion.div>
        <motion.div
          variants={demoVariants}
          className="w-[90%] rounded-3xl md:w-[50%]"
        >
          <Image
            alt="servvice_image"
            src={IMAGE}
            layout="responsive"
            objectFit="scale-down" // or 'contain', 'fill', 'none', 'scale-down'
            className="rounded-3xl"
          />
        </motion.div>
      </motion.section>
      <motion.section
        variants={demoVariants}
        initial="hidden"
        animate="animate"
        className="mt-8 flex h-auto w-[90%] flex-col space-y-8 md:flex-row md:space-x-0 md:space-y-0"
      >
        <motion.div
          variants={demoVariants}
          className="md:flex md:w-[33%] md:flex-col md:items-center"
        >
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              Quick Overview
            </h4>
            <p className="italic md:text-xl md:leading-snug">{info.overview}</p>
          </div>
        </motion.div>
        <motion.div
          variants={demoVariants}
          className="md:flex md:w-[33%] md:flex-col md:items-center"
        >
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              We Offer:
            </h4>
            <ol className="list-inside list-decimal md:text-xl">
              {info.list.map((serv, i) => (
                <li key={i}>{serv}</li>
              ))}
            </ol>
          </div>
        </motion.div>
        <motion.div
          variants={demoVariants2}
          className="md:flex md:w-[33%] md:flex-col md:items-center"
        >
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              Our Road of Success
            </h4>
            <p className="md:text-xl md:leading-snug">{info.success}</p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Branding;
