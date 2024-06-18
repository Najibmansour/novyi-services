import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/branding.webp";

const Branding = () => {
  return (
    <main className="flex h-homepage-section w-full flex-col items-center space-y-5">
      <section className="h-auto w-[90%] space-y-5">
        <div>
          <h1 className="text-wrap text-4xl">Audit of current product</h1>
          <h3>Detecting and preventing errors or frauds</h3>
        </div>
        <div className="w-[90%] rounded-3xl"></div>
        <Image
          alt="servvice_image"
          src={IMAGE}
          layout="responsive"
          objectFit="scale-down" // or 'contain', 'fill', 'none', 'scale-down'
          className="rounded-3xl"
        />
      </section>
      <section className="h-auto w-[90%]">
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

export default Branding;
