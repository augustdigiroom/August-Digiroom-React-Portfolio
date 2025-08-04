import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${slug}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch post');
      }
    }

    fetchPost();
  }, [slug]);

  if (error) return <p className="p-8 text-center text-red-600">Error: {error}</p>;
  if (!post) return <p className="p-8 text-center">Loading post...</p>;

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  );
}
