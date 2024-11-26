import BasicLayout from "@/layouts/BasicLayout"
import { getSingleBlog } from "@/utils/server/blogsHelper"

const page = async ({params}: {
    params: Promise <{
        slug: string
    }>
}) => {
    const slug = (await params).slug
    const singleBlog = await getSingleBlog({slug});
    console.log(singleBlog);
  return (
    <BasicLayout>
        <h2>{singleBlog.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{__html: singleBlog.content.rendered}}></div>
    </BasicLayout>
  )
}

export default page