// components/Blogs/BlogCard.tsx
import React from 'react';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}

// Helper function to extract image URL from the HTML content
const extractImageUrl = (content: string) => {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : '/default-image.jpg'; // Default image if no match found
};

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const imageUrl = extractImageUrl(post.content.rendered);

  return (
    <div className="blog-card">
      <h2>{post.title.rendered}</h2>
      <img src={imageUrl} alt={post.title.rendered} />
      <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
};

export default BlogCard;
