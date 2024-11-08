
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

// src/app/blogs/page.tsx
import React from 'react';
import BlogList from '@/components/Blogs/BlogList';

async function fetchPosts() {
  const res = await fetch('https://vansh.gogalax.in/wp-json/wp/v2/posts', {
    // Set caching options here if desired, e.g., `cache: 'no-store'` for no caching
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

const BlogPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
