import { fetchBlogs } from "@/utils/server/blogsHelper"
import BlogCard from "../BlogCard/BlogCard";
import Pagination from "./Pagination";

const LatestBlogs = async ({pageId, postPerPage}: {
    pageId: string | undefined,
    postPerPage: string
}) => {

    const posts = await fetchBlogs({ pageId, postPerPage });

    return (
        <div className="w-full flex flex-col items-center p-10">
            <div className="max-w-screen-xl w-full flex flex-col gap-5">
                <h2 className="text-3xl font-semibold">Latest Blogs</h2>

                {/* Latest blogs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        posts.map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))
                    }
                </div>
                
                {/* Pagination */}
                <div className="w-full flex justify-center">
                    <Pagination pageId={pageId}/>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs