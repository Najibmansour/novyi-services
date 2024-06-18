"use client";

import React from "react";

import { motion } from "framer-motion";

export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      transition
    </motion.div>
  );
}
