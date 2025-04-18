import LatestBlogs from "@/components/BlogsPage/LatestBlogs/LatestBlogs"
import BasicLayout from "@/layouts/BasicLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com/blogs"
  },
  title: "Blogs | News & Insights in legal AI - Legallyours",
  description: "Explore Legallyours blog for the latest on AI in legal tech, compliance tips, privacy trends, and industry updates to stay informed and ahead.",
}

const page = async ({searchParams}: {searchParams: Promise<{page: string | undefined}>}) => {
  const pageId = (await searchParams).page
  return (
    <BasicLayout>
      <LatestBlogs  pageId={pageId} postPerPage="9"/>
    </BasicLayout>
  )
}

export default page