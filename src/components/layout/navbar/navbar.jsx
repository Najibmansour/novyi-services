"use client";
import React, { useEffect, useState } from "react";
import NovoNavigation from "./components/navmenu";
import Search from "./components/search";
import CartButton from "./components/cartbutton";
import { LOGOIMG, MINILOGOIMG } from "../logoImg";

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
    <main
      className={`sticky top-0 z-30 flex h-16  w-full flex-row items-center px-3 py-4 transition-all ${color && "bg-neutral-950"}`}
    >
      <LOGOIMG className="ml-2 hidden w-28 p-2 active:scale-95 md:block" />
      <MINILOGOIMG className="absolute left-[50%]  w-20 -translate-x-[50%] transform p-2 md:hidden" />
      <div className="flex-1 ">
        <NovoNavigation />
      </div>
      <Search />
      <CartButton />
    </main>
  );
};

export default Navbar;
