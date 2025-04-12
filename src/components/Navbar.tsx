import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-1">
              GeekForge <span className="text-primary">AI</span>
            </h1>
            <p className="text-muted-foreground tracking-wider text-sm">
              INNOVATE • BUILD • TRANSFORM
            </p>
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/genai-solutions" className="nav-link">
            GenAI Solutions
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/contact" className="nav-link contact">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 