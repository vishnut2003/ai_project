// import React from "react";
// import BlogCard from "@/components/Blogs/BlogCard";

// interface Post {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   content: { rendered: string };
// }

// interface BlogListProps {
//   posts: Post[];
// }

// const BlogList: React.FC<BlogListProps> = ({ posts }) => {
//   if (!posts || posts.length === 0) return <p>No posts available.</p>;

//   return (
//     <div className="blog-list">
//       {posts.map((post) => (
//         <BlogCard key={post.id} post={post} />
//       ))}
//     </div>
//   );

// };

// export default BlogList;


import React from "react";
import BlogCard from "@/components/Blogs/BlogCard";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return <p className="text-center text-gray-500">No posts available.</p>;

  return (
    <div className="py-10 px-5 bg-gray-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
    
