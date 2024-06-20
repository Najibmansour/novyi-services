"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";

function isLeft(element) {
  if (element === 0 || element === 3 || element === 6) {
    return true;
  } else {
    return false;
  }
}
function isCenter(element) {
  if (element === 1 || element === 4 || element === 7) {
    return true;
  } else {
    return false;
  }
}
function isRight(element) {
  if (element === 2 || element === 5 || element === 8) {
    return true;
  } else {
    return false;
  }
}

const ServiceCard = ({ title, image, href, index }) => {
  const variants = {
    hidden: isLeft(index)
      ? { opacity: 0, x: -100 }
      : isRight(index)
        ? { opacity: 0, x: 100 }
        : { opacity: 0, y: 100 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: isLeft(index) ? 0.5 : isRight(index) ? 1 : 0,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 300px 0px 0px ",
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView, index);
  }, [isInView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate={isInView && "visible"}
      >
        <Link
          href={href}
          className="group relative flex aspect-square w-full items-center justify-center rounded-xl bg-white p-5 md:p-24"
        >
          <Image
            src={image}
            width={[100, 50]}
            height={[100, 50]}
            alt={title}
            className="filter transition-all group-hover:blur-2xl"
          />
          <h6 className="absolute text-center font-bold text-transparent transition-all group-hover:text-lg group-hover:text-secondary md:text-xl md:tracking-wider md:group-hover:text-5xl">
            {title}
          </h6>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceCard;
