
import BlogFeatured from "@/components/Blogs/blogsFeatured";
// import BlogFeaturedItems from "@/components/Blogs/blogsFeatured";
import BlogsPagination from "@/components/Blogs/blogsPagination";


import BasicLayout from "@/layouts/BasicLayout"

const page = () =>{
    return(
        <div >
        <BasicLayout>
            <div className="flex flex-col mx-48 justify-center items-center">
                <BlogFeatured/>
            </div>
            <div>
                <BlogsPagination/>
            </div>
        </BasicLayout>
        </div>
    )
};

export default page;

