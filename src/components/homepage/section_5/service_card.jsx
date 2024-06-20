"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";

const ServiceCard = ({ title, image, href }) => {
  const elementRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      console.log(rect.width); // Should now be non-zero
    }
  }, []);

  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    animate(scope.current, { scale: 10 }, { duration: 0.5, ease: "easeInOut" });
  };

  return (
    <Link
      // onClick={() => {
      //   handleAnimate();
      // }}
      ref={scope}
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
  );
};

export default ServiceCard;
