import BasicLayout from '@/layouts/BasicLayout'
import { fetchBlogs } from '@/utils/server/blogsHelper';
import Link from 'next/link'
import React from 'react'

interface LinkItemIterface {
  text: string,
  url: string,
}

const SITEMAP_BASEURL = "https://ailawgpt.com"

const Sitemap = async () => {

  const pagesUrl: LinkItemIterface[] = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Blogs",
      url: "/blogs",
    },
    {
      text: "Contact",
      url: "/contact",
    },
    {
      text: "Cookies Policy",
      url: "/support/cookies-policy",
    },
    {
      text: "Privacy Policy",
      url: "/support/privacy-policy",
    },
    {
      text: "Terms and Conditions",
      url: "/support/terms-conditions",
    }
  ];

  const resourcesPage: LinkItemIterface[] = [
    {
      text: "AI Prompts to Supercharge Legal Research",
      url: "/ai-prompts-for-legal-research",
    },
    {
      text: "Legal Prompts for Consumers",
      url: "/legal-prompts-for-consumers",
    },
    {
      text: "AI Legal Prompts for Drafting Documents",
      url: "/legal-document-drafting-prompts",
    },
    {
      text: "AI-Powered Prompts for Family Law Professionals",
      url: "/family-law-prompts",
    },
    {
      text: "Legal Prompts for Personal Injury Law with AI",
      url: "/personal-injury-prompts",
    },
    {
      text: "AI Legal Prompts for Employment & Labor Law",
      url: "/employment-law-prompts",
    },
    {
      text: "AI Legal Prompts for Immigration Lawyers",
      url: "/immigration-law-prompts",
    },
    {
      text: "Smart Prompts for Business Lawyers Using AI",
      url: "/business-law-prompts",
    },
    {
      text: "AI-Powered Legal Prompts for Tax Law Practice",
      url: "/tax-law-prompts",
    },
    {
      text: "Real Estate Law Prompts with AI Assistance",
      url: "/real-estate-law-prompts",
    },
    {
      text: "AI-Powered Prompts for IP & Trademark Lawyers",
      url: "/intellectual-property-law-prompts",
    },
    {
      text: "Legal Prompts for Criminal Defense with AI",
      url: "/criminal-defense-law-prompts",
    },
  ]

  const blogs = await fetchBlogs({pageId: '1', postPerPage: '15'});
  const blogsLinkItems: LinkItemIterface[] = []

  for (const blog of blogs) {
    const item: LinkItemIterface = {
      text: blog.title.rendered,
      url: `${SITEMAP_BASEURL}/blogs/${blog.slug}`,
    };

    blogsLinkItems.push(item);
  }

  return (
    <BasicLayout>
      <div
        className='flex justify-center items-center py-20 px-5'
      >
        <div className='max-w-screen-lg w-full text-left flex flex-col justify-center items-start gap-5'>
          <h1
            className='text-xl'
          >HTML Sitemap</h1>
          <div
            className='flex items-start gap-5 flex-col md:flex-row'
          >
            
            <div>
              <h2
                className='text-xl font-semibold mb-3'
              >Pages</h2>
              <ul
                className='list-disc pl-4'
              >
                <SingleLinkItem
                  itemList={pagesUrl}
                />
              </ul>
            </div>
            
            <div>
              <h2
                className='text-xl font-semibold mb-3'
              >Resources</h2>
              <ul
                className='list-disc pl-4'
              >
                <SingleLinkItem
                  itemList={resourcesPage}
                />
              </ul>
            </div>
            
            <div>
              <h2
                className='text-xl font-semibold mb-3'
              >Blogs</h2>
              <ul
                className='list-disc pl-4'
              >
                <SingleLinkItem
                  itemList={blogsLinkItems}
                />
              </ul>
            </div>

          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

function SingleLinkItem({ itemList }: {
  itemList: LinkItemIterface[]
}) {
  return (
    <ul
      className='list-disc pl-4 space-y-3'
    >
      {itemList.map((item) => (
        <li>
          <Link
            href={item.url}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Sitemap