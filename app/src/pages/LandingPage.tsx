import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Layers,
  Database,
  Globe,
  Cpu,
  BarChart,
  Users,
  Briefcase,
  Code,
  Lightbulb
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <TechnologyOverviewSection />
      <IndustryApplicationsSection />
      <IntegrationCapabilitiesSection />
      <SocialProofSection />
      <PricingSection />
      <WorkflowSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

const HeroSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative container mx-auto px-4 py-24 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10 opacity-50"></div>
      <Badge variant="secondary" className="mb-4">New: GPT-4 Enhanced Models</Badge>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
        Intelligent AI Solutions for Modern Enterprises
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
        Unlock unprecedented business intelligence with our cutting-edge AI platform. Transform data into actionable insights, automate complex processes, and drive innovation across your organization.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="shadow-lg">
          Start Free Assessment <ArrowRight className="ml-2" />
        </Button>
        <Button variant="outline" size="lg">
          Watch Product Demo
        </Button>
      </div>
    </motion.div>
  )
}

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms that transform raw data into strategic foresight."
    },
    {
      icon: Layers,
      title: "Adaptive Intelligence",
      description: "Self-learning systems that continuously optimize and improve performance."
    },
    {
      icon: Code,
      title: "Seamless Integration",
      description: "Plug-and-play architecture compatible with existing enterprise ecosystems."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Revolutionize Your Business with AI
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-background p-8 rounded-xl text-center shadow-lg border hover:border-primary transition-all"
          >
            <feature.icon className="mx-auto mb-6 text-primary" size={56} strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const TechnologyOverviewSection: React.FC = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Neural Network Architecture",
      description: "Multi-layered deep learning models that process complex data with unprecedented accuracy."
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Distributed computing infrastructure handling petabytes of information in real-time."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Cloud-native design enabling instant global deployment and horizontal scaling."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Advanced Technological Foundation
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-secondary/10 p-8 rounded-xl text-center shadow-md border hover:border-primary transition-all"
          >
            <tech.icon className="mx-auto mb-6 text-primary" size={56} strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
            <p className="text-muted-foreground">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const IndustryApplicationsSection: React.FC = () => {
  const industries = [
    {
      icon: Briefcase,
      title: "Enterprise",
      description: "Strategic decision-making and operational optimization"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "R&D acceleration and breakthrough discovery"
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Personalized interactions and predictive service"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        AI Across Industries
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-background p-8 rounded-xl text-center shadow-lg border hover:border-primary transition-all"
          >
            <industry.icon className="mx-auto mb-6 text-primary" size={56} strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
            <p className="text-muted-foreground">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const IntegrationCapabilitiesSection: React.FC = () => {
  const integrations = [
    { name: "Salesforce", logo: "https://picsum.photos/seed/salesforce/100/100" },
    { name: "AWS", logo: "https://picsum.photos/seed/aws/100/100" },
    { name: "Google Cloud", logo: "https://picsum.photos/seed/google/100/100" },
    { name: "Microsoft Azure", logo: "https://picsum.photos/seed/azure/100/100" }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Enterprise-Grade Integrations
      </h2>
      <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
        {integrations.map((integration, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center"
          >
            <img 
              src={integration.logo} 
              alt={integration.name} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const WorkflowSection: React.FC = () => {
  const steps = [
    "Data Integration",
    "Model Training",
    "Insight Generation",
    "Continuous Learning"
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Streamlined AI Workflow
      </h2>
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold">{step}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechInnovate",
      quote: "This AI platform has transformed our operational efficiency by 40%.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Michael Chen",
      title: "CEO, DataDrive Solutions",
      quote: "Unprecedented insights and predictive capabilities that actually deliver results.",
      avatar: "https://picsum.photos/seed/michael/100/100"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Trusted by Industry Leaders
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-secondary/10 p-8 rounded-xl shadow-md"
          >
            <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full mr-6"
              />
              <div>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      features: [
        "Up to 5 AI Models",
        "Basic Analytics",
        "Community Support"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      featured: true,
      features: [
        "Unlimited AI Models",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated AI Consulting",
        "Unlimited Scaling",
        "24/7 Support",
        "Full Custom Solution"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Flexible Pricing for Every Need
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`
              p-8 rounded-xl border 
              ${plan.featured ? 'bg-primary/10 border-primary' : 'bg-background'}
            `}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}</div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="mr-3 text-primary" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">
              {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can I implement your AI solution?",
      answer: "Our platform is designed for rapid deployment. Most clients see initial integration within 2-4 weeks."
    },
    {
      question: "Is my data secure?",
      answer: "We use bank-grade encryption and follow strict GDPR and CCPA compliance standards."
    },
    {
      question: "Can I customize the AI models?",
      answer: "Yes, our platform offers extensive customization to fit your specific business needs."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const CTASection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24 text-center bg-primary/10"
    >
      <h2 className="text-5xl font-bold mb-8 text-primary leading-tight">
        Transform Your Business with AI Today
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Join leading enterprises leveraging cutting-edge AI technology. No risk, pure innovation.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="shadow-lg">
          Start Free Trial
        </Button>
        <Button variant="outline" size="lg">
          Request Consultation
        </Button>
      </div>
    </motion.div>
  )
}

export default LandingPage