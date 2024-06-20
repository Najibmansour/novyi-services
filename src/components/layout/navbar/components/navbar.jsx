"use client";
import React, { useEffect, useState } from "react";
import NovoNavigation from "./nav_menu";
import Search from "./search_bar";
import MailIconButton from "@/components/icon_buttons/mail_icon_button";
import { LOGOIMG, MINILOGOIMG } from "@/components/logo/LogoImg";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = ({
  isBlack = false,
  scrollY = false,
  delay,
  duration,
  initOp = 0,
}) => {
  // const [color, setColor] = useState(isBlack);

  // useEffect(() => {
  //   const handleColorScroll = () => {
  //     if (!scrollY) {
  //       if (window?.scrollY <= 90) {
  //         setColor(false);
  //       } else {
  //         setColor(true);
  //       }
  //     }
  //   };

  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", handleColorScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleColorScroll);
  //     };
  //   }
  // });

  return (
    <motion.div
      initial={{ opacity: initOp }}
      animate={{ opacity: 1, transition: { delay: delay, duration: duration } }}
      className="sticky top-0 z-30 flex h-20 w-full flex-row items-center justify-center px-8 md:px-16"
    >
      <Link href="/">
        <MINILOGOIMG className="hidden w-20 active:scale-95 md:ml-2 md:block md:p-2" />
      </Link>
      <div className="flex-1">
        <NovoNavigation />
      </div>

      <MailIconButton />
    </motion.div>
  );
};

export default Navbar;
