"use client"
// import { useEffect, useState } from "react";
// import fetchPost from "./blogsFeaturedItems";



// const BlogFeaturedClient = () => {
//   const [posts, setPosts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result: any = await fetchPost();
//       setPosts(result);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* <h2>ksadnasnd</h2> */}
//       <ol className="flex flex-col gap-4">
//         {posts.map((post, index) => (
//           <li key={index}>{post.title}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };
// export default BlogFeaturedClient;

// pages/index.js or a blog component page
// import React, { FC } from 'react';

// interface Post {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   content: { rendered: string };
// }

// interface HomeProps {
//   posts: Post[];
// }

// // Helper function to extract the first image URL from the HTML content
// const extractImageUrl = (content: string) => {
//   const match = content.match(/<img[^>]+src="([^">]+)"/);
//   return match ? match[1] : '/home/vansh/Documents/Office/headless_wordpress'; // Use default image if no match found
// };




// const BlogFeaturedClient: FC<HomeProps> = ({ posts }) => (
//   <div>
//     {posts && posts.length > 0 ? (
//       posts.map(post => (
//         <div key={post.id} className="blog-post">
//           <h2>{post.title.rendered}</h2>
//           <img src={extractImageUrl(post.content.rendered)} alt={post.title.rendered} />
//           <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//         </div>
//       ))
//     ) : (
//       <p>No posts available.</p>
//     )}
//   </div>
// );

// export default BlogFeaturedClient;

import fetchPost from './blogsFeaturedItems';
import React, { FC, useEffect } from 'react';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}
fetchPost
interface HomeProps {
  posts: Post[];
}

// Helper function to extract the first image URL from the HTML content
const extractImageUrl = (content: string) => {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : '/default-image.jpg'; // Use default image if no match found
};

const BlogFeaturedClient: FC<HomeProps> = ({ posts }) => {
  
  useEffect(() => {
    // Log the entire posts array
    console.log("Posts data:", posts);

    // Optionally, log each post's details individually
    posts.forEach(post => {
      console.log("Title:", post.title.rendered);
      console.log("Image URL:", extractImageUrl(post.content.rendered));
      console.log("Excerpt:", post.excerpt.rendered);
    });
  }, [posts]); // This will run whenever `posts` changes

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title.rendered}</h2>
            <img src={extractImageUrl(post.content.rendered)} alt={post.title.rendered} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default BlogFeaturedClient;
