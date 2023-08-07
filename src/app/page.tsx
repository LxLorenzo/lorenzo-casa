import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ScrollToTop />
      <Projects />
      <Contact />
    </main>
  )
}
