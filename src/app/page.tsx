import CustomerLogosCarousel from "@/components/HomePage/CustomerLogosCarousel/CustomerLogosCarousel";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import BasicLayout from "@/layouts/BasicLayout";
import PromptCarousel from "../components/HomePage/PromptCarousel/PromptCarousel";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection/>
      <CustomerLogosCarousel/>
      {/* <QuoteSlider/> */}
      <PromptCarousel/>
    </BasicLayout>
  );
}
