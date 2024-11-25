import React from "react";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}

interface BlogCardProps {
  post: Post;
}



const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Function to extract the image URL from the content if available
  const extractImageUrl = (htmlContent: string): string | null => {
    const imgMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  const imageUrl = extractImageUrl(post.content.rendered);
  

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Post Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.title.rendered}
          className="w-full h-40 object-cover"
        />
      )}

      {/* Post Content */}
      <div className="p-5">
        <p className="text-sm text-gray-400 mb-2">daily.dev</p>
        <h3 className="text-xl font-semibold mb-2 text-white">
          {post.title.rendered}
        </h3>
        <p
          className="text-sm text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
          </p>
      </div>
    </div>
  );
};

export default BlogCard;
