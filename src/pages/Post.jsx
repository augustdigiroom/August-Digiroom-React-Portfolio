import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
        if (!res.ok) throw new Error('Post not found');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) return <div className="text-red-600 text-center mt-10">⚠️ {error.message}</div>;
  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <ReactMarkdown className="prose prose-indigo">{post.content}</ReactMarkdown>
    </section>
  );
}
