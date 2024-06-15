import Hero from "@/components/homepage/section_1/hero";
import FAQs from "@/components/homepage/section_3/faq";
import BgGradiant from "@/components/layout/bg/bg-gradiant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative -mt-20 h-screen w-svw">
      <BgGradiant />
      <div className="gap-y-20">
        <div className="h-16" />
        <Hero />
        <FAQs></FAQs>
      </div>
    </main>
  );
}
