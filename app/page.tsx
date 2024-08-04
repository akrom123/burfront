import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Promotions } from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Promotions />
        <Hero/>
      </div>
    </>
  );
}
