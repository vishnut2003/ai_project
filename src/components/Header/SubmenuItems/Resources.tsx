'use client';

import Link from "next/link";

const ResourcessSubmenuLinks: {
  text: string,
  url: string,
}[] = [
    {
      text: "Prompts for Legal Consumers",
      url: "/legal-prompts-for-consumers",
    },
    {
      text: "Prompts for Legal Research",
      url: "/ai-prompts-for-legal-research",
    },
    {
      text: "Prompts for Drafting Legal Documents",
      url: "/legal-document-drafting-prompts",
    },
    {
      text: "Prompts for Family Lawyers",
      url: "/family-law-prompts",
    },
    {
      text: "Prompts for Personal Injury Lawyers",
      url: "/personal-injury-prompts",
    },
    {
      text: "Prompts for Employment and Labor lawyers",
      url: "/employment-law-prompts",
    },
    {
      text: "Prompts for Immigration lawyers",
      url: "/immigration-law-prompts",
    },
    {
      text: "Prompts for Business Lawyers",
      url: "/business-law-prompts",
    },
    {
      text: "Prompts for Tax Lawyers",
      url: "/tax-law-prompts",
    },
    {
      text: "Prompts for Real Estate Lawyers",
      url: "/real-estate-law-prompts",
    },
    {
      text: "Prompts for Intellectual Property (IP) Lawyers",
      url: "/intellectual-property-law-prompts",
    },
    {
      text: "Prompts for Criminal Defense Lawyers",
      url: "/criminal-defense-law-prompts",
    },
  ];

const Resources = () => {
  return (
    <div
      className="md:min-w-max space-y-5 overflow-y-auto text-wrap"
    >
      <p
        className="text-2xl hidden md:block font-semibold underline underline-offset-8"
      >Resources</p>
      <div
        className="flex gap-5 flex-col md:flex-row"
      >
        <div
          className="flex flex-col gap-4 text-white/70"
        >
          {ResourcessSubmenuLinks.map((item, index) => {
            if (index <= 5) {
              return (
                <Link
                  href={item.url}
                  className="block text-sm md:text-base border-b border-white/5 pb-3"
                  key={index}
                >
                  {item.text}
                </Link>
              )
            }
          })}
        </div>
        <div
          className="flex flex-col gap-4 text-white/70"
        >
          {ResourcessSubmenuLinks.map((item, index) => {
            if (index > 5) {
              return (
                <Link
                  href={item.url}
                  className="block text-sm md:text-base border-b border-white/5 pb-3"
                  key={index}
                >
                  {item.text}
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Resources
export { ResourcessSubmenuLinks };