import { Card, CardContent } from "./ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

const TeamSection = () => {
  return (
    <section className="py-16 bg-muted/50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-primary">GeekForge AI</span> Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of passionate tech enthusiasts combines expertise in GenAI, Cloud Engineering, and Machine Learning
            to forge innovative solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Jithin */}
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src="/team/jithin.jpg"
                  alt="Jithin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jithin</h3>
              <p className="text-primary font-medium mb-2">GenAI Expert</p>
              <p className="text-muted-foreground text-sm mb-4">
                Specializes in developing cutting-edge Generative AI solutions and large language models for enterprise applications.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Chandru */}
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src="/team/chandru.jpg"
                  alt="Chandru"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Chandru</h3>
              <p className="text-primary font-medium mb-2">Cloud & DevOps Engineer</p>
              <p className="text-muted-foreground text-sm mb-4">
                Expert in cloud architecture, data engineering, and DevOps practices, ensuring robust and scalable infrastructure.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Ajay */}
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src="/team/ajay.jpg"
                  alt="Ajay"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ajay</h3>
              <p className="text-primary font-medium mb-2">ML Engineer</p>
              <p className="text-muted-foreground text-sm mb-4">
                Specializes in developing advanced machine learning models and AI algorithms for complex business challenges.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default TeamSection 