import Hero from "@/components/homepage/section_1/hero";
import Occured from "@/components/homepage/section_2/occured";
import FAQs from "@/components/homepage/section_3/faq";
import FeedBack from "@/components/homepage/section_4/feedback";
import Services from "@/components/homepage/section_5/services";

export default function Home() {
  return (
    <main className="-mt-20 w-full overflow-x-hidden">
      <div className="h-16" />
      <Hero />
      <div className="mt-10 space-y-20">
        <Services />
        <Occured />
        <FAQs />
        <FeedBack />
      </div>
      {/* <div className="h-48" /> */}
    </main>
  );
}
