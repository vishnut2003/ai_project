import ContentSection from "@/components/BlogsPage/SingleBlog/ContentSection"
import BasicLayout from "@/layouts/BasicLayout"
import { getSingleBlog } from "@/utils/server/blogsHelper"
import { RiArrowRightSLine } from "@remixicon/react"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
 
  // fetch data
  const singleBlog = await getSingleBlog({ slug });
 
  return {
    title: singleBlog.yoast_head_json.title,
    description: singleBlog.yoast_head_json.description
  }
}

const page = async ({ params }: {
  params: Promise<{
    slug: string
  }>
}) => {
  const slug = (await params).slug
  const singleBlog = await getSingleBlog({ slug });

  return (
    <BasicLayout>
      <div className="w-full py-10 px-7 flex justify-center items-center bg-white text-black">
        <div className="w-full max-w-screen-xl flex flex-col gap-10">

          {/* Blogs bredcrump */}
          <div>
            <p className="flex gap-2 items-center m-0 font-semibold">Home <RiArrowRightSLine size={18} /> Blogs <RiArrowRightSLine size={18} /> {singleBlog.title.rendered}</p>
          </div>

          {/* Content section */}
          <ContentSection blogContent={singleBlog} />
          
        </div>
      </div>
    </BasicLayout>
  )
}

export default page