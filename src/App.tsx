import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home" className="section">
                <h2>Home</h2>
                <p>Welcome to our website. Scroll down to explore more about us.</p>
              </section>
            </main>
          } />
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
