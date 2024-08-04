import { Banner } from "@/components/Banner";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Promotions } from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Features/>
        <Promotions />
        <Hero/>
      </div>
    </>
  );
}
