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
  Users
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <TechnologyOverviewSection />
      <IntegrationCapabilitiesSection />
      <SocialProofSection />
      <PricingSection />
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
      className="container mx-auto px-4 py-16 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"></div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
        Intelligent AI Solutions for Enterprise
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Revolutionize your business with our advanced AI platform. Seamless integration, predictive analytics, and transformative intelligence.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="shadow-lg">
          Start Free Assessment <ArrowRight className="ml-2" />
        </Button>
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </div>
    </motion.div>
  )
}

const TechnologyOverviewSection: React.FC = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Advanced Machine Learning",
      description: "Cutting-edge neural networks that continuously learn and adapt to your unique business environment."
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Handle massive datasets with lightning-fast processing and real-time insights generation."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Cloud-native architecture designed to scale seamlessly across international markets."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Technological Edge
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-background p-6 rounded-lg text-center shadow-sm border"
          >
            <tech.icon className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-muted-foreground">{tech.description}</p>
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
      <h2 className="text-3xl font-bold text-center mb-12">
        Seamless Enterprise Integrations
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
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
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
    <div className="container mx-auto px-4 py-16 bg-secondary/10">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trusted by Industry Leaders
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-background p-6 rounded-lg shadow-md border"
          >
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Flexible Pricing for Every Need
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`
              p-6 rounded-lg border 
              ${plan.featured ? 'bg-primary/10 border-primary' : 'bg-background'}
            `}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4">{plan.price}</div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="mr-2 text-primary" size={16} />
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
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
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
      className="container mx-auto px-4 py-16 text-center bg-primary/10"
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Transform Your Business with AI Today
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
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