"use client";
import React, { useEffect, useState } from "react";
import NovoNavigation from "./nav_menu";
import Search from "./search_bar";
import MailIconButton from "@/components/icon_buttons/mail_icon_button";
import { LOGOIMG, MINILOGOIMG } from "@/components/logo/LogoImg";

const Navbar = ({ isBlack = false, scrollY = false }) => {
  const [color, setColor] = useState(isBlack);

  useEffect(() => {
    const handleColorScroll = () => {
      if (!scrollY) {
        if (window?.scrollY <= 90) {
          setColor(false);
        } else {
          setColor(true);
        }
      }
    };

    console.log("test");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleColorScroll);
      return () => {
        window.removeEventListener("scroll", handleColorScroll);
      };
    }
  });

  return (
    <div className="sticky top-0 z-30 flex h-20  w-full flex-row items-center px-16 ">
      <MINILOGOIMG className="ml-2 hidden w-20 p-2 active:scale-95 md:block" />
      <Search />
      <div className="flex-1 ">
        <NovoNavigation />
      </div>
      <MailIconButton />
    </div>
  );
};

export default Navbar;
