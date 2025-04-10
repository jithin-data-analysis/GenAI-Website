import { Button } from "./ui/button"
import { Menu, Terminal, Code2, Cpu } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl animate-pulse"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary absolute transform -rotate-45" />
                  <Code2 className="w-6 h-6 text-secondary absolute transform rotate-45" />
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">
                GeekForge <span className="text-primary">AI</span>
              </span>
              <span className="text-xs text-muted-foreground tracking-wider">INNOVATE • BUILD • TRANSFORM</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="gradient" className="hidden md:inline-flex group">
              Get Started
              <Terminal className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 