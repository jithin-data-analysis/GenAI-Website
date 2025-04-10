import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Predictive Maintenance System",
    description: "AI-powered system that predicts equipment failures before they happen, reducing downtime for a manufacturing client.",
    image: "/projects/predictive-maintenance.jpg",
    tags: ["Machine Learning", "IoT", "Predictive Analytics"]
  },
  {
    title: "Customer Support Chatbot",
    description: "Intelligent virtual assistant that handles 70% of customer inquiries automatically for a major retail chain.",
    image: "/projects/chatbot.jpg",
    tags: ["NLP", "Conversational AI", "Customer Service"]
  },
  {
    title: "Market Trend Analyzer",
    description: "Deep learning system that identifies market trends and opportunities from vast amounts of unstructured data.",
    image: "/projects/market-analysis.jpg",
    tags: ["Deep Learning", "Data Analysis", "Financial Tech"]
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our recent AI solutions that have delivered tangible results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 