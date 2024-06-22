import { importAll } from "@/lib/utils";
import React from "react";
import ServiceCard from "./service_card";

const images = importAll(require.context("@/assets/service_icons", true));

const services = [
  {
    title: "Ads",
    href: "/services/marketing",
    image: images["advertisements.svg"][0],
  },
  {
    title: "Auditing",
    href: "/services/audit",
    image: images["Auditing.svg"][0],
  },
  {
    title: "Calculations",
    href: "/services/calculation",
    image: images["calculation.svg"][0],
  },
  {
    title: "Consulting",
    href: "/services/consulting",
    image: images["consulting.svg"][0],
  },
  {
    title: "Branding",
    href: "/services/branding",
    image: images["fingerprint-branding.svg"][0],
  },
  {
    title: "Graphic Desgin",
    href: "/services/branding",
    image: images["graphic-design.svg"][0],
  },
  {
    title: "marketing",
    href: "/services/marketing",
    image: images["Marketing-new.svg"][0],
  },
  {
    title: "Sales",
    href: "/services/sales",
    image: images["presentation.svg"][0],
  },
  { title: "SEO", href: "/services/seo", image: images["seo.svg"][0] },
];

const Services = () => {
  console.table(images["seo.svg"]);
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <h2>Services</h2>
      <div className="gri grid w-[80%] grid-cols-3 gap-2 md:w-[75%] md:grid-cols-3 md:gap-10">
        {services.map(({ title, image, href }, i) => (
          <ServiceCard
            href={href}
            key={i}
            title={title}
            image={image}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
