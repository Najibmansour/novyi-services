"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import ContactDialogue from "../contact_dialogue/contact";
import { motion, useInView } from "framer-motion";

const faq = [
  {
    title: "What is Answers for Customers' Questions?",
    desc: "You can interact with other customers through Customer Questions & Answers to pose or receive product-related queries. You can utilize your knowledge to assist other customers with their inquiries or pose questions regarding a product.",
  },
  {
    title: "What should I ask? ",
    desc: "Pose requests that are particular to the product. This is an excellent chance to hear opinions from other users who have used the product. Make a question that will help you remember this encounter.",
    list: [],
  },
  {
    title: "Why shouldn't I ask?",
    desc: "Every post needs to be a question or an answer to one. Furthermore, we retain the right to delete any questions or responses that touch on the following subjects: ",
    list: [
      "Delivery or shipping ",
      "Product accessibility",
      "Order-specific details Customer support",
      "Content that doesn't adhere to our community standards",
      "Please get in touch with customer service if you need assistance with a specific order.",
    ],
  },
];

const FAQs = () => {
  const demoVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-500px 0px",
  });

  useEffect(() => {
    // console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <section className="flex w-screen flex-col items-center gap-y-5 text-secondary">
      <h2 className="mb-5 w-full text-center text-4xl font-bold tracking-wider text-white lg:text-6xl">
        FAQS
      </h2>
      <Accordion type="single" collapsible className="w-[90%] lg:w-[75%]">
        <motion.div
          className="space-y-5"
          ref={ref}
          variants={demoVariants}
          animate={isInView ? "animate" : ""}
          initial="hidden"
        >
          {faq.map(({ title, desc, list }, i) => (
            <motion.div variants={demoVariants} key={i}>
              <AccordionItem
                value={`item-${i}`}
                className="rounded-3xl border-2 border-white px-6 text-white shadow-xl"
              >
                <AccordionTrigger className="text-left font-semibold tracking-wide lg:text-2xl">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-lg italic">
                  &quot;{desc}&quot;
                  <ul>
                    {list?.map(({ item }, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </motion.div>
      </Accordion>
      <div className="space-y-1.5 text-center md:w-9/12">
        <h4 className="text-2xl text-white">Stil have any questions?</h4>

        <ContactDialogue>
          <motion.div
            variants={{
              anim: {
                opacity: 1,
                transition: { delay: 0.6, ease: "backInOut", duration: 0.8 },
              },
              init: { opacity: 0 },
            }}
            initial="init"
            animate={isInView && "anim"}
          >
            <Button className="rounded-xl">CONTACT US</Button>
          </motion.div>
        </ContactDialogue>
      </div>
    </section>
  );
};

export default FAQs;
