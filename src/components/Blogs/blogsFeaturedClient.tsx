"use client"
import { useEffect, useState } from "react";
import fetchPost from "./blogsFeaturedItems";
import BlogFeatured from "./blogsFeatured";


const BlogFeaturedClient = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchPost();
      setPosts(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>ksadnasnd</h2>
      <ol className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
export default BlogFeatured