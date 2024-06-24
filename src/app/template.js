"use client";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import BgGradiant from "@/components/layout/bg/bg-gradiant";
import Navbar from "@/components/layout/navbar/components/navbar";
import { Footer } from "@/components/layout/footer/footer";

const Template = ({ children }) => {
  return (
    <AnimatePresence>
      <BgGradiant />

      <Navbar delay={0} duration={1.5} />
      {children}
    </AnimatePresence>
  );
};

export default Template;
