import BgImage from "@/assets/bg_image/bg-image";
import React from "react";

const BgGradiant = () => {
  return (
    <div className="fixed -z-50 h-screen w-svw">
      <div className="relative flex h-full w-full items-center justify-center">
        <BgImage className="absolute z-10 w-[60%] opacity-50" />
        <div className="absolute h-full w-full bg-radial-gradient bg-fixed" />
      </div>
    </div>
  );
};

export default BgGradiant;
