import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import StackSection from '../components/StackSection'
import BlogPreviewSection from '../components/BlogPreviewSection'
import AboutMeSection from '../components/AboutMeSection'

export default function Home({ posts }) {
  return (
    <>
      <HeroSection />
      <StackSection />
      <ProjectSection />
      <BlogPreviewSection posts={posts} />
      <AboutMeSection />
    </>
  )
}
