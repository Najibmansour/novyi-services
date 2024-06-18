"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";
import ContactDialogue from "../contact_dialogue/contact";

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
  return (
    <section className="flex w-screen flex-col items-center gap-y-5 text-secondary">
      <h2 className="mb-5 w-full text-center text-4xl font-bold tracking-wider text-white lg:text-6xl">
        FAQS
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-[90%] space-y-5 lg:w-[75%]"
      >
        {faq.map(({ title, desc, list }, i) => (
          <AccordionItem
            value={`item-${i}`}
            className="rounded-3xl border-2 border-white px-6 text-white shadow-xl"
            key={i}
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
        ))}
      </Accordion>
      <div className="space-y-1.5 text-center md:w-9/12">
        <h4 className="text-2xl text-white">Stil have any questions?</h4>

        <ContactDialogue>
          <Button className="rounded-xl">CONTACT US</Button>
        </ContactDialogue>
      </div>
    </section>
  );
};

export default FAQs;
