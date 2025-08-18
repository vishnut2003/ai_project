
import { Metadata } from "next";
import AiPageClientComponent from "./ClientComp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com/ai",
  },
};


const Page = () => {
  return <AiPageClientComponent/>
}

export default Page;