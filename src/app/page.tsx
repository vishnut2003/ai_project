import { TopSection } from "@/components/HomePage/TopSection/TopSection";
import BasicLayout from "@/layouts/BasicLayout";

export default function Home() {
  return (
    <BasicLayout>
      <div className="flex justify-center font-serif ">
        <TopSection />
      </div>
     </BasicLayout>
  );
}
