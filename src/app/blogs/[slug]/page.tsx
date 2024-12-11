import ContentSection from "@/components/BlogsPage/SingleBlog/ContentSection"
import BasicLayout from "@/layouts/BasicLayout"
import { getSingleBlog } from "@/utils/server/blogsHelper"
import { RiArrowRightSLine } from "@remixicon/react"

const page = async ({ params }: {
  params: Promise<{
    slug: string
  }>
}) => {
  const slug = (await params).slug
  const singleBlog = await getSingleBlog({ slug });

  return (
    <BasicLayout>
      <div className="w-full py-10 px-7 flex justify-center items-center">
        <div className="w-full max-w-screen-xl flex flex-col gap-10">

          {/* Blogs bredcrump */}
          <div>
            <p className="flex gap-2 items-center m-0">Home <RiArrowRightSLine size={18} /> Blogs <RiArrowRightSLine size={18} /> {singleBlog.title.rendered}</p>
          </div>

          {/* Content section */}
          <ContentSection blogContent={singleBlog} />
          
        </div>
      </div>
    </BasicLayout>
  )
}

export default page