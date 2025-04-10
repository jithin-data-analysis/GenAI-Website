import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Bot, LineChart, Code, MessageSquareText, Sparkles, LayoutGrid, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'GenAI Development',
    description: 'Custom generative AI solutions tailored to your specific business needs and industry requirements.',
    icon: <Brain className="h-12 w-12 text-white" />,
    badge: 'Featured',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'AI Sales Agents',
    description: 'Intelligent virtual sales agents that engage customers, answer questions, and drive conversions 24/7.',
    icon: <MessageSquareText className="h-12 w-12 text-white" />,
    badge: 'Popular',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Website Development',
    description: 'Professional, responsive websites built with modern technologies to showcase your brand effectively.',
    icon: <LayoutGrid className="h-12 w-12 text-white" />,
    badge: 'Essential',
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Chatbot Development',
    description: 'Custom conversational AI solutions to automate customer interactions and support.',
    icon: <Bot className="h-12 w-12 text-white" />,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Predictive Analytics',
    description: 'Advanced data analysis tools that forecast trends and inform strategic decisions.',
    icon: <LineChart className="h-12 w-12 text-white" />,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Custom AI Integration',
    description: 'Seamless integration of AI technologies into your existing systems and workflows.',
    icon: <Sparkles className="h-12 w-12 text-white" />,
    color: 'from-fuchsia-500 to-purple-600'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We specialize in GenAI solutions, AI sales agents, and website development to transform your business operations and customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="mb-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm w-fit">
                  {service.icon}
                </div>
                {service.badge && (
                  <Badge variant="secondary" className="absolute top-4 right-4 font-semibold">
                    {service.badge}
                  </Badge>
                )}
                <CardTitle className="text-white text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-white/90 text-base font-medium">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 