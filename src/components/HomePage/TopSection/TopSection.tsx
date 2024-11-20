import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import Menu from "@/components/Header/Menu";

export async function TopSection() {
  return (
    <div className="mb-6 size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <p className="text-[3.5rem] font-semibold">
          Advanced Elite AI<span className="text-[#5046e6]">.</span>
        </p>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Domain-specific AI for  for{" "}
          <span className="text-[#5046e6]">law firms</span>, professional service providers, and the Fortune 500.
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]" >Contact Us</Button>
        
      </BoxReveal>
    </div>
  );
}
