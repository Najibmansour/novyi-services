import Hero from "@/components/homepage/section_1/hero";
import FAQs from "@/components/homepage/section_3/faq";
import FeedBack from "@/components/homepage/section_4/feedback";
import Services from "@/components/homepage/section_5/services";
import BgGradiant from "@/components/layout/bg/bg-gradiant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative -mt-20 h-screen w-full">
      <BgGradiant />
      <div className="h-16" />
      <Hero />
      <div className="mt-10 space-y-20">
        <FAQs />
        <FeedBack />
        <Services />
      </div>
    </main>
  );
}
