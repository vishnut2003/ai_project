
import React from 'react';
import BlogCard from '@/components/Blogs/BlogCard';

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
  if (!posts || posts.length === 0) return <p>No posts available.</p>;

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
