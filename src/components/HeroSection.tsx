import { Button } from "./ui/button"
import { ArrowRight, Sparkles, Code, Bot, Terminal, Code2, Cpu } from "lucide-react"
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Large Decorative Circle */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        {/* Top Section with Badge and Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary animate-fade-in hover:bg-primary/20 transition-colors cursor-pointer mb-6 md:mb-0">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">Innovating with AI</span>
          </div>
          
          <div className="flex gap-8 border-l border-muted/20 pl-8">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text group-hover:from-primary group-hover:to-secondary transition-all duration-300">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text group-hover:from-primary group-hover:to-secondary transition-all duration-300">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text group-hover:from-primary group-hover:to-secondary transition-all duration-300">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 relative z-10">
            <div className="space-y-6">
              {/* Large Logo */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl animate-pulse"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-primary absolute transform -rotate-45" />
                      <Code2 className="w-8 h-8 text-secondary absolute transform rotate-45" />
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-1">
                    GeekForge <span className="text-primary">AI</span>
                  </h1>
                  <p className="text-muted-foreground tracking-wider">INNOVATE • BUILD • TRANSFORM</p>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
                Advanced{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  GenAI Solutions
                </span>{" "}
                for Modern{" "}
                <span className="block mt-1">Businesses</span>
              </h2>
              
              <p className="text-xl text-muted-foreground animate-fade-in max-w-xl">
                We specialize in cutting-edge GenAI development, intelligent sales agents, and custom website building to transform your business capabilities.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up">
                <Button 
                  size="lg" 
                  variant="gradient" 
                  className="group hover:scale-105 transition-transform"
                  onClick={() => navigate('/genai-solutions')}
                >
                  Explore GenAI Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group hover:scale-105 transition-transform"
                  onClick={() => navigate('/web-development')}
                >
                  Our Web Development
                  <Code className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards & Illustration */}
          <div className="lg:col-span-6 relative">
            {/* Abstract Shapes */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            
            {/* Interactive SVG Illustration */}
            <div className="relative z-10 mb-8 w-full aspect-square max-w-2xl mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full animate-float">
                {/* Background Circle */}
                <circle cx="200" cy="200" r="180" className="fill-primary/5 animate-pulse" />
                
                {/* Animated Paths */}
                <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                  <path d="M200,20 A180,180 0 0,1 380,200" className="stroke-primary/20 stroke-2 fill-none" />
                  <path d="M200,380 A180,180 0 0,1 20,200" className="stroke-secondary/20 stroke-2 fill-none" />
                </g>
                
                {/* Central Elements */}
                <g className="animate-bounce-gentle">
                  <circle cx="200" cy="200" r="60" className="fill-primary/10" />
                  <circle cx="200" cy="200" r="40" className="fill-secondary/10" />
                  <circle cx="200" cy="200" r="20" className="fill-primary/20" />
                </g>
                
                {/* Floating Dots */}
                <g className="animate-float">
                  <circle cx="320" cy="200" r="8" className="fill-primary" />
                  <circle cx="80" cy="200" r="8" className="fill-secondary" />
                  <circle cx="200" cy="320" r="8" className="fill-primary" />
                  <circle cx="200" cy="80" r="8" className="fill-secondary" />
                </g>
              </svg>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-3 gap-4 relative z-10">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">GenAI</h3>
                <p className="text-sm text-muted-foreground">Custom AI models</p>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">AI Sales</h3>
                <p className="text-sm text-muted-foreground">24/7 support</p>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Web Dev</h3>
                <p className="text-sm text-muted-foreground">Modern sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 