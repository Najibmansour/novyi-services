import { importAll } from "@/lib/utils";
import React from "react";
import ServiceCard from "./service_card";

const images = importAll(require.context("@/assets/service_images", true));

const services = [
  { title: "Ads", image: images["advertisements.svg"] },
  { title: "Auditing", image: images["Auditing.svg"] },
  { title: "Calculations", image: images["calculation.svg"] },
  { title: "Consulting", image: images["consulting.svg"] },
  { title: "Branding", image: images["fingerprint-branding.svg"] },
  { title: "Graphic Desgin", image: images["graphic-design.svg"] },
  { title: "marketing", image: images["Marketing-new.svg"] },
  { title: "Presentation", image: images["presentation.svg"] },
  { title: "SEO", image: images["seo.svg"] },
];

const Services = () => {
  console.table(images);
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h2>Services</h2>
      <div className="gri grid grid-cols-1 md:grid-cols-3 md:grid-rows-3">
        {services.map(({ title, image }, i) => (
          <ServiceCard key={i} title={title} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Services;
