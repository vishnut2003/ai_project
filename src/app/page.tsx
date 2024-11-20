import CustomerLogosCarousel from "@/components/HomePage/CustomerLogosCarousel/CustomerLogosCarousel";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import BasicLayout from "@/layouts/BasicLayout";
import QuoteSlider from "@/components/HomePage/QuoteSlider/QuoteSlider";
import { withAuth } from "@workos-inc/authkit-nextjs";


export default async function Home() {
  await withAuth();
  return (
    <BasicLayout>
      <HeroSection/>
      <CustomerLogosCarousel/>
      <QuoteSlider/>
    </BasicLayout>
  );
}
