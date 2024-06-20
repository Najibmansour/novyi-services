import React from "react";
import Image from "next/image";
import IMAGE from "@/assets/service_images/branding.webp";

const info = {
  title: "Card SEO",
  subtitle: "Makes your business memorable",
  overview:
    "Our Card SEO Optimization service focuses on increasing the visibility and ranking of your product listings. We craft compelling review texts and relevant questions that engage customers interaction, build trust, and drive more traffic and sales.",
  list: [
    "Help optimize product data for beginners",
    "Identify problem areas for existing sellers",
    "Competitor analysis",
    "Write key queries",
    "Formation of the text of answers to customers",
    "Unique description to increase conversion",
  ],
  success:
    "We will mix our SEO techniques with compelling review and question formation to boost your online visibility and engage your audience effectively. Together, we'll elevate your website's performance and achieve success in the competitive digital landscape.Let's succeed together.",
};

const Branding = () => {
  return (
    <main className="flex h-homepage-section w-full flex-col items-center space-y-5 md:space-y-10">
      <section className="flex h-auto w-[90%] flex-col space-x-5 space-y-5 md:flex-row md:items-center md:justify-evenly">
        <div className="">
          <h1 className="text-wrap text-4xl md:text-7xl md:leading-[5rem]">
            {info.title}
          </h1>
          <h3 className="italic md:text-3xl md:leading-[5rem]">
            {info.subtitle}
          </h3>
        </div>
        <div className="w-[90%] rounded-3xl shadow-2xl md:w-[50%]">
          <Image
            alt="servvice_image"
            src={IMAGE}
            layout="responsive"
            objectFit="scale-down" // or 'contain', 'fill', 'none', 'scale-down'
            className="rounded-3xl"
          />
        </div>
      </section>
      <section className="mt-8 flex h-auto w-[90%] flex-col space-y-8 md:flex-row md:space-x-0 md:space-y-0">
        <div className="md:flex md:w-[33%] md:flex-col md:items-center">
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              Quick Overview
            </h4>
            <p className="italic md:text-xl md:leading-snug">{info.overview}</p>
          </div>
        </div>
        <div className="md:flex md:w-[33%] md:flex-col md:items-center">
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              We Offer:
            </h4>
            <ol className="list-inside list-decimal md:text-xl">
              {info.list.map((serv, i) => (
                <li key={i}>{serv}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="md:flex md:w-[33%] md:flex-col md:items-center">
          <div>
            <h4 className="text-2xl tracking-wide md:mb-3 md:text-4xl">
              Our Road of Success
            </h4>
            <p className="md:text-xl md:leading-snug">{info.success}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
