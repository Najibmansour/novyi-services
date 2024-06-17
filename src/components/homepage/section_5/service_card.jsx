import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, image }) => {
  return (
    <div className="group relative flex aspect-square w-full items-center justify-center rounded-xl bg-white p-5 md:p-24">
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
    </div>
  );
};

export default ServiceCard;
