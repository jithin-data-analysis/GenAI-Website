import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GenAISolutions from './pages/GenAISolutions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home" className="section">
                <h2>Home</h2>
                <p>Welcome to our website. Scroll down to explore more about us.</p>
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
          } />
          <Route path="/genai-solutions" element={<GenAISolutions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
