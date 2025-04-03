import { fetchBlogs } from "@/utils/server/blogsHelper";
import LightThemeBlogCard from "../BlogCard/LightThemeBlogCard";

const RelatedBlogsGrid = async () => {

    const posts = await fetchBlogs({
        pageId: '1',
        postPerPage: '3',
    });

    return (
        <div className="w-full flex flex-col items-center p-10">
            <div className="max-w-screen-xl w-full flex flex-col gap-5">
                <h1 className="text-3xl font-semibold">Related Blogs</h1>

                {/* Latest blogs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-black">
                    {
                        posts.map((post, index) => (
                            <LightThemeBlogCard key={index} post={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RelatedBlogsGrid