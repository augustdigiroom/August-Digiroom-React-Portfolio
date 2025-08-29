import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Post from './pages/Post'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogPost from './pages/BlogPost'
import Project from './pages/Project'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/blog" element={<Blog posts={posts} />} />
        <Route path="/blog/:slug" element={<BlogPost />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

