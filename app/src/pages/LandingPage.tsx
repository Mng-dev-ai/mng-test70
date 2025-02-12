import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
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
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
        AI-Powered Solutions for Modern Businesses
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Transform your workflow with cutting-edge artificial intelligence that adapts, learns, and delivers unprecedented efficiency.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="shadow-lg">
          Get Started <ArrowRight className="ml-2" />
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </motion.div>
  )
}

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Implement AI solutions in days, not months."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Advanced algorithms delivering lightning-fast results."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and data protection."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our AI Platform?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-lg text-center shadow-sm"
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

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Reduce operational costs",
    "Increase productivity",
    "Data-driven insights",
    "Scalable solutions"
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Unlock Business Potential with AI
          </h2>
          <p className="text-muted-foreground mb-6">
            Our AI platform is designed to seamlessly integrate with your existing infrastructure, providing intelligent solutions that drive growth and innovation.
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-3 text-primary" size={24} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card p-8 rounded-lg shadow-md"
        >
          <img 
            src="https://picsum.photos/seed/ai/600/400" 
            alt="AI Dashboard" 
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}

const CTASection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Start your AI journey today. No credit card required.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="shadow-lg">
          Start Free Trial
        </Button>
        <Button variant="outline" size="lg">
          Schedule Demo
        </Button>
      </div>
    </motion.div>
  )
}

export default LandingPage