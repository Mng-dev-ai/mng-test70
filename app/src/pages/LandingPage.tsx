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

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms that provide actionable insights and future predictions."
    },
    {
      icon: Users,
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce manual tasks with smart AI-driven processes."
    },
    {
      icon: Layers,
      title: "Comprehensive Solutions",
      description: "End-to-end AI capabilities that adapt and scale with your business needs."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/5">
      <h2 className="text-3xl font-bold text-center mb-12">
        Key Features That Drive Innovation
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-background p-6 rounded-lg text-center shadow-sm border"
          >
            <feature.icon className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ... [Rest of the previous code remains the same]

export default LandingPage