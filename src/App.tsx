import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import MissionSection from './components/MissionSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <MissionSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App 