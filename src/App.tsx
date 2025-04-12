import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
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
                <button 
                  onClick={() => {
                    const genaiSection = document.getElementById('genai-solutions');
                    if (genaiSection) {
                      genaiSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Explore GenAI Solutions
                </button>
              </section>

              <section id="genai-solutions" className="section">
                <h2>GenAI Solutions</h2>
                <p>Our cutting-edge Generative AI solutions and services.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-background/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
                    <p>Expert guidance on implementing AI solutions for your business.</p>
                  </div>
                  <div className="p-6 bg-background/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Custom AI Development</h3>
                    <p>Tailored AI solutions designed for your specific needs.</p>
                  </div>
                  <div className="p-6 bg-background/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                    <p>Seamless integration of AI technologies into your existing systems.</p>
                  </div>
                </div>
              </section>
            </main>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
