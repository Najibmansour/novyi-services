"use client";

import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/sales.webp";
import { motion } from "framer-motion";

const info = {
  title: "Sales at the initial stage",
  subtitle: "Makes your business memorable",
  overview:
    "Our sales service helps you launch your product with a strong marketplace entry, because we employ targeted strategies to attract early adopters, and also we focus on building brand awareness, driving initial sales, and creating momentum for sustained business growth.",
  list: [
    "Understanding the marketplace",
    "Account setup guide",
    "Optimization tips",
  ],
  success:
    "We will achieve sales success together, by merging your product knowledge with our sales expertise. We develop tailored strategies that target your ideal customers, optimize your sales process, and drive revenue growth. we will surpass your sales goals, Through collaboration, innovation, and a commitment to excellence.Let's succeed together.",
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
    <main className="flex h-homepage-section w-full flex-col items-center space-y-5 md:space-y-10">
      <motion.section
        variants={demoVariants}
        initial="hidden"
        animate="animate"
        className="flex h-auto w-[90%] flex-col space-x-5 space-y-5 md:flex-row md:items-center md:justify-evenly"
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
          className="w-[90%] rounded-3xl shadow-2xl md:w-[50%]"
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
