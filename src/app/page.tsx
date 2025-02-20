import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import BasicLayout from "@/layouts/BasicLayout";
import PromptCarousel from "../components/HomePage/PromptCarousel/PromptCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com"
  }
}

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection />
      {/* <CustomerLogosCarousel/> */}
      {/* <QuoteSlider/> */}
      <PromptCarousel />
    </BasicLayout>
  );
}
