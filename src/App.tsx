import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import MissionSection from './components/MissionSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'

// Pages
const Home = () => (
  <main>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <MissionSection />
    <TeamSection />
    <ContactSection />
  </main>
)

const GenAISolutionsPage = () => (
  <div className="pt-20">
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
  </div>
)

const WebDevelopmentPage = () => (
  <div className="pt-20">
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genai-solutions" element={<GenAISolutionsPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 