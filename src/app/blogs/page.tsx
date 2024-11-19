
// import BlogFeatured from "@/components/Blogs/blogsFeatured";
// import BlogFeaturedClient from "@/components/Blogs/blogsFeaturedClient";
// // import BlogFeaturedItems from "@/components/Blogs/blogsFeatured";
// import BlogsPagination from "@/components/Blogs/blogsPagination";


// import BasicLayout from "@/layouts/BasicLayout"

// const page = () =>{
//     return(
//         <div >
//         <BasicLayout>
//             <div className="flex flex-col mx-48 justify-center items-center">
//                 <BlogFeaturedClient posts={[]}/>
//             </div>
//             <div>
//                 <BlogsPagination/>
//             </div>
//         </BasicLayout>
//         </div>
//     )
// };

// export default page;


import BasicLayout from "@/layouts/BasicLayout"
import React from 'react';
import BlogsPagination from "@/components/Blogs/blogsPagination";
import BlogList from '@/components/Blogs/BlogList';

async function fetchPosts() {
  const res = await fetch(process.env.WORDPRESS_BASE_URL!+"/posts?per_page=6&orderby=date");

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

const BlogPage = async () => {
  const posts = await fetchPosts();

  return (
            <div >
        <BasicLayout>
            <div className="flex flex-col mx-48 justify-center items-center">
                
                <BlogList posts={posts} />
            </div>
            <div>
                <BlogsPagination/>
            </div>
        </BasicLayout>
        </div>
  );
};

export default BlogPage;
