import { Button } from '../components/ui/button';
import { Brain, Bot, Database, Cloud, Shield, Zap } from 'lucide-react';

const GenAISolutions = () => {
  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business needs and data.",
      features: [
        "Custom model development",
        "Data preprocessing",
        "Model training & optimization",
        "Performance monitoring"
      ]
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational agents that understand context and provide human-like responses.",
      features: [
        "Natural language processing",
        "Context awareness",
        "Multi-language support",
        "Integration with existing systems"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Custom dashboards",
        "Automated reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-primary">GenAI</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Harness the power of artificial intelligence to transform your business and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-muted/20 hover:border-primary/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our GenAI solutions can help you achieve your goals.
            </p>
            <Button size="lg" variant="gradient">
              Schedule a Consultation
              <Shield className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenAISolutions; 