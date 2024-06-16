import React from "react";

const Hero = () => {
  return (
    <section className="grid h-[88svh] w-full grid-cols-6 grid-rows-1 md:h-homepage-section">
      <div className="col-span-5 col-start-1 row-span-1 row-start-1 flex flex-col justify-center md:items-center">
        <div className="-translate-y-20 translate-x-3 md:-translate-y-12 md:space-y-2">
          <h1 className="tracking-tight">NOVO CONCEPT</h1>
          <h5 className="italic leading-4 md:text-center md:leading-snug">
            we are the missing part of your <br />
            sucsess puzzle
          </h5>
        </div>
      </div>

      <div className="col-span-6 col-start-2 row-span-1 row-start-1 grid h-full grid-cols-1 grid-rows-7 p-4 text-right text-xl tracking-wider md:col-start-1 md:p-8 md:text-3xl">
        <div>Auditing</div>
        <div>Card SEO</div>
        <div>Branding</div>
        <div>Marketing</div>
        <div>Consulting</div>
        <div>Advertising</div>
        <div>Sales Of Services at initial stage</div>
        <div>Calculation of unit economics of service</div>
      </div>
    </section>
  );
};

export default Hero;
