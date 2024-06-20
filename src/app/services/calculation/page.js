"use client";
import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/calculation.webp";
import { motion } from "framer-motion";

const info = {
  title: "Calculation of unit Economics of service",
  subtitle: "Having a clear vision and path. ",
  overview:
    "Our unit economics calculation service offers precise analysis of your business, per-unit costs and revenues. We help you understand key metrics such as customer acquisition cost, lifetime value, and contribution margin.",
  list: [
    "Identify key metrics",
    "Revenue calculation",
    "Cost calculation",
    "Calculate gross profit per unit",
    "Analyze contribution margin",
    "Calculate breakeven point",
    "Asses profitability",
  ],
  success:
    "we will master the calculation of your unit economics; by combining your business insights with our analytical expertise, we will identify key cost drivers and revenue streams, optimize pricing strategies, and enhance profitability. Let's succeed together.",
};

const variant1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.3 },
  },
  transition: {
    ease: "easeInOut",
    delay: 0,
    duration: 1,
    staggerChildren: 0.3,
  },
};

const variant2 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.3 },
  },
  transition: {
    ease: "easeInOut",
    delay: 0,
    duration: 1,
    staggerChildren: 0.3,
  },
};

const Branding = () => {
  return (
    <main className="flex h-homepage-section w-full flex-col items-center space-y-5 md:space-y-10">
      <motion.section
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex h-auto w-[90%] flex-col space-x-5 space-y-5 md:flex-row md:items-center md:justify-evenly"
      >
        <motion.div>
          <h1 className="text-wrap text-4xl md:text-7xl md:leading-[5rem]">
            {info.title}
          </h1>
          <h3 className="italic md:text-3xl md:leading-[5rem]">
            {info.subtitle}
          </h3>
        </motion.div>
        <motion.div className="w-[90%] rounded-3xl shadow-2xl md:w-[50%]">
          <Image
            alt="servvice_image"
            src={IMAGE}
            layout="responsive"
            objectFit="scale-down" // or 'contain', 'fill', 'none', 'scale-down'
            className="rounded-3xl"
          />
        </motion.div>
      </motion.section>
      <section className="mt-8 flex h-auto w-[90%] flex-col space-y-8 md:flex-row md:space-x-0 md:space-y-0">
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
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
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
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
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
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
    </main>
  );
};

export default Branding;