import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, image }) => {
  return (
    <div className="group relative flex aspect-square w-full items-center justify-center rounded-xl bg-white p-24">
      <Image
        src={image}
        width={[100]}
        height={[100]}
        alt={title}
        className="filter transition-all group-hover:blur-2xl"
      />
      <h6 className="absolute text-center text-xl font-bold tracking-wider text-transparent transition-all group-hover:text-5xl group-hover:text-secondary">
        {title}
      </h6>
    </div>
  );
};

export default ServiceCard;
