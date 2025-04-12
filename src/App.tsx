import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import GenAISolutions from './pages/GenAISolutions';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section id="home" className="section">
        <h2>Home</h2>
        <p>Welcome to our website. Scroll down to explore more about us.</p>
        <button 
          onClick={() => navigate('/genai-solutions')}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Explore GenAI Solutions
        </button>
      </section>
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genai-solutions" element={<GenAISolutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
