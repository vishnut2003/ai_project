import { fetchBlogs } from "@/utils/client/blogsHelper"

const FeaturedBlogs = async () => {
  
    await fetchBlogs({pageId: '1'})
  
    return (
    <div className="w-full flex flex-col items-center p-10">
        <div className="max-w-screen-xl w-full">
            <h2 className="text-3xl font-semibold">Featured Blogs</h2>

            {/* Featured blogs */}

        </div>
    </div>
  )
}

export default FeaturedBlogs