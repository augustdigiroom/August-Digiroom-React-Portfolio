import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        // ✅ Flatten year/month grouped data
        const flatPosts = Object.values(data).flatMap(monthsObj =>
          Object.values(monthsObj).flat()
        );

        // 🕒 Optional: Sort by date descending
        flatPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(flatPosts);
      } catch (err) {
        setError(err.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) return <p className="p-8 text-center">Loading posts...</p>;
  if (error) return <p className="p-8 text-center text-red-600">Error: {error}</p>;

  return (
    <Container>
      <section className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Blog</h1>
        <ul className="space-y-6">
          {posts.map(post => (
            <li key={post.slug} className="border-b pb-4">
              <Link to={`/blog/${post.slug}`} className="text-2xl text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2">{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
