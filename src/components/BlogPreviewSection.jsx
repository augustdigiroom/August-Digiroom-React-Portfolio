
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreviewSection = ({ posts }) => {
  if (!Array.isArray(posts)) return <p>No posts available.</p>;

  return (
    <section className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
            <Link to={`/posts/${post.slug}`} className="text-blue-600 underline mt-2 inline-block">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewSection;
