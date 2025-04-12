import { Button } from '../components/ui/button';
import { Code, Layout, Smartphone, Zap, Server, Shield } from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-primary" />,
      title: "Responsive Web Design",
      description: "Beautiful, modern websites that work perfectly on all devices and screen sizes.",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Modern UI/UX design",
        "Performance optimization"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Progressive Web Apps",
      description: "Web applications that offer native app-like experiences with offline capabilities.",
      features: [
        "Offline functionality",
        "Push notifications",
        "Fast loading speeds",
        "App-like experience"
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Full-Stack Development",
      description: "End-to-end web development services using cutting-edge technologies.",
      features: [
        "Custom backend development",
        "API integration",
        "Database design",
        "Cloud deployment"
      ]
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern <span className="text-primary">Web Development</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Creating fast, responsive, and user-friendly web applications using the latest technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-muted/20 hover:border-primary/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground">
              We work with the latest and most powerful web technologies
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you create an amazing web presence.
            </p>
            <Button size="lg" variant="gradient">
              Start Your Project
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment; 