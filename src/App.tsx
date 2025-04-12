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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home" className="section hero">
                <div className="hero-content">
                  <h1 className="text-5xl font-bold mb-6">Welcome to GeekForge AI</h1>
                  <p className="text-xl mb-8">Transforming businesses with cutting-edge AI solutions</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => scrollToSection('genai-solutions')}
                      className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Explore GenAI Solutions
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src="/hero-ai.jpg" alt="AI Technology" className="rounded-lg shadow-2xl" />
                </div>
              </section>

              <section id="genai-solutions" className="section">
                <h2 className="text-4xl font-bold mb-12">GenAI Solutions</h2>
                <p className="text-xl mb-12">Our cutting-edge Generative AI solutions and services.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-8 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <img src="/ai-consulting.jpg" alt="AI Consulting" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">AI Consulting</h3>
                    <p className="text-muted-foreground">Expert guidance on implementing AI solutions for your business needs.</p>
                  </div>
                  <div className="p-8 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <img src="/custom-ai.jpg" alt="Custom AI Development" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">Custom AI Development</h3>
                    <p className="text-muted-foreground">Tailored AI solutions designed specifically for your requirements.</p>
                  </div>
                  <div className="p-8 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <img src="/ai-integration.jpg" alt="AI Integration" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
                    <p className="text-muted-foreground">Seamless integration of AI technologies into your existing systems.</p>
                  </div>
                </div>
              </section>

              <section id="contact" className="section">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                      <p className="text-muted-foreground mb-8">
                        Have a project in mind? Let's discuss how we can help transform your business with AI.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>contact@geekforge.ai</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>123 AI Street, Tech City, TC 12345</span>
                        </div>
                      </div>
                    </div>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 bg-background/50 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 bg-background/50 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 bg-background/50 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
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
