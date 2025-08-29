import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import StackSection from '../components/StackSection';
import BlogPreviewSection from '../components/BlogPreviewSection';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
        const data = await res.json();

        // Flatten nested posts from {2025: {08: [ ... ]}}
        const allPosts = Object.values(data).flatMap(months =>
          Object.values(months).flat()
        );

        // Optional: sort newest first
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(allPosts);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <HeroSection />
      <StackSection />
      <ProjectSection />
      <BlogPreviewSection posts={posts} />
    </>
  );
}

