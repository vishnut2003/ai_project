import CustomerLogosCarousel from "@/components/HomePage/CustomerLogosCarousel/CustomerLogosCarousel";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import BasicLayout from "@/layouts/BasicLayout";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection/>
      <CustomerLogosCarousel/>
    </BasicLayout>
  );
}
