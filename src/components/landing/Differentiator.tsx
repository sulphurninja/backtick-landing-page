'use client'
import { motion } from 'framer-motion'
import { CircuitBoard, Network, Braces } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Differentiator() {
  const features = [
    {
      icon: <Network className="h-12 w-12 text-primary" />,
      title: "Multi-Agent Architecture",
      badge: "Specialized",
      description: "AI teammates with defined roles that work together—unlike using a single AI that tries to do everything at once."
    },
    {
      icon: <CircuitBoard className="h-12 w-12 text-primary" />,
      title: "Model Context Protocol",
      badge: "Exclusive",
      description: "Our memory layer remembers your brand voice, design choices, and business rules across every project and iteration."
    },
    {
      icon: <Braces className="h-12 w-12 text-primary" />,
      title: "Full-Stack Capability",
      badge: "Complete",
      description: "Seamlessly create and connect UI, APIs, database logic, and assets—all working together as a cohesive system."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20">
            What Sets Us Apart
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            They wrap AI. <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">We built a system.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Others give you a fancy chat box. Backtick gives you an ecosystem of
            AI experts that collaborate, remember context, and turn your ideas
            into complete, production-ready solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 rounded-lg inline-flex p-3 bg-primary/10">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="font-medium">
                      {feature.badge}
                    </Badge>
                    <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
