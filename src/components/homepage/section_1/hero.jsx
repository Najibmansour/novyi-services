"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="md: grid h-[88svh] w-full grid-cols-6 grid-rows-1">
      <div className="col-span-5 col-start-1 row-span-1 row-start-1 flex flex-col justify-center md:items-center">
        <div className="-translate-y-20 translate-x-3 md:-translate-y-12 md:space-y-2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1.5 } }}
            className="tracking-tight"
          >
            NOVO CONCEPTS
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 1.5 } }}
            className="italic leading-4 md:text-center md:leading-snug"
          >
            we are the missing part of your <br />
            success puzzle
          </motion.h5>
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { x: 200, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        animate="visible"
        className="col-span-6 col-start-2 row-span-1 row-start-1 grid h-full grid-cols-1 grid-rows-7 p-4 text-right text-xl tracking-wider md:col-start-1 md:p-8 md:text-3xl"
      >
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Auditing
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Card SEO
        </motion.div>

        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Marketing
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Consulting
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Advertising
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Sales Of Services at initial stage
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          Calculation of unit economics of service
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
