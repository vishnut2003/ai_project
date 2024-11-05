import CustomerLogosCarousel from "@/components/HomePage/CustomerLogosCarousel/CustomerLogosCarousel";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import BasicLayout from "@/layouts/BasicLayout";
import QuoteSlider from "@/components/HomePage/QuoteSlider/QuoteSlider";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection/>
      <CustomerLogosCarousel/>
      <QuoteSlider/>
    </BasicLayout>
  );
}
