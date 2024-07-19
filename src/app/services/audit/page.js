"use client";

import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/audit.webp";
import { motion } from "framer-motion";

const info = {
  title: "Audit for current product",
  subtitle: "Detecting and preventing errors or fraud",
  overview:
    "Our Branding and Design service crafts a distinctive and unified brand identity that captures the essence of your business, that resonates with your target audience.",
  list: [
    "Product description",
    "Quality assessment",
    "Market positioning",
    "Customer feedback",
    "Sales performance",
    "Competitive analysis",
    "Regulatory compliance",
    "Supply chain analysis",
    "Packaging and presentation",
    "Recommendations",
  ],
  success:
    "Success in auditing is a collaborative effort. We mix your deep understanding of your business with our auditing experts, we will enhance efficiency, and identify opportunities for improvement.  Our thorough and transparent approach, will drive your organization towards greater accuracy and success.  Let's succeed together.   ",
};
const demoVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.25,
    },
  },
};

const Branding = () => {
  return (
    <motion.main
      variants={demoVariants}
      initial="hidden"
      animate="animate"
      className="flex w-full flex-col items-center space-y-5 md:space-y-10"
    >
      <section className="flex h-auto w-[90%] flex-col space-x-0 space-y-0 md:flex-row md:items-center md:justify-evenly">
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
      </section>
      <section
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
          variants={demoVariants}
          className="md:flex md:w-[33%] md:flex-col md:items-center"
        >
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              Our Road of Success
            </h4>
            <p className="md:text-xl md:leading-snug">{info.success}</p>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Branding;
