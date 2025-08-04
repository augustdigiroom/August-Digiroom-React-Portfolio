
const API_URL = `${import.meta.env.VITE_API_URL}/api/posts`;

const fetchPosts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export default fetchPosts;
