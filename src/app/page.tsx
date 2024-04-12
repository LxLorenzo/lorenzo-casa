import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import ProfessionalExperience from './components/ProfessionalExperience'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProfessionalExperience />
      <Projects />
      <Contact />
    </main>
  )
}
