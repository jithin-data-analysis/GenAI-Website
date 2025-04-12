import { useState } from 'react'
import './App.css'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#genai" onClick={(e) => { e.preventDefault(); scrollToSection('genai'); }}>GenAI Solutions</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="section">
          <h2>Home</h2>
          <p>Welcome to our website. Scroll down to explore more about us.</p>
        </section>

        <section id="genai" className="section">
          <h2>GenAI Solutions</h2>
          <p>Our cutting-edge Generative AI solutions and services.</p>
        </section>

        <section id="services" className="section">
          <h2>Services</h2>
          <p>Discover our range of professional services.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Explore our portfolio of successful projects.</p>
        </section>

        <section id="team" className="section">
          <h2>Team</h2>
          <p>Meet our talented team members.</p>
        </section>
      </main>
    </div>
  )
}

export default App
