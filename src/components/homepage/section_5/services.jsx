import { importAll } from "@/lib/utils";
import React from "react";
import ServiceCard from "./service_card";

const images = importAll(require.context("@/assets/service_images", true));

const services = [
  { title: "Ads", image: images["advertisements.svg"][0] },
  { title: "Auditing", image: images["Auditing.svg"][0] },
  { title: "Calculations", image: images["calculation.svg"][0] },
  { title: "Consulting", image: images["consulting.svg"][0] },
  { title: "Branding", image: images["fingerprint-branding.svg"][0] },
  { title: "Graphic Desgin", image: images["graphic-design.svg"][0] },
  { title: "marketing", image: images["Marketing-new.svg"][0] },
  { title: "Presentation", image: images["presentation.svg"][0] },
  { title: "SEO", image: images["seo.svg"][0] },
];

const Services = () => {
  console.table(images["seo.svg"]);
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h2>Services</h2>
      <div className="gri grid w-[80%] grid-cols-3 gap-2 md:w-[75%] md:grid-cols-3 md:gap-5">
        {services.map(({ title, image }, i) => (
          <ServiceCard key={i} title={title} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Services;
