'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cpu, Server, Database, Network, Layers } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Tech() {
  const technologies = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Claude 3.5",
      description: "Logical reasoning & structure"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "GPT-4o",
      description: "Creative generation"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Mistral & Open Models",
      description: "Speed & efficiency"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Integrated Memory",
      description: "Context-aware processing"
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Enterprise Infrastructure",
      description: "Secured & scalable"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20">
            Advanced Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Intelligent model orchestration.</span> Purpose-built for results.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just connect to APIs. We've built a proprietary system that selects and coordinates models for optimal outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-2 rounded-lg bg-primary/10">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          {/* <Card className="border border-border/40 overflow-hidden bg-card shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="mb-4 w-fit">Exclusive Technology</Badge>
                  <h3 className="text-2xl font-bold mb-4">Model Coordination Platform</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Each task is routed to the optimal AI model based on its specific requirements.
                    </p>
                    <Separator />
                    <p>
                      Models collaborate seamlessly, sharing context and maintaining memory across your entire project.
                    </p>
                    <Separator />
                    <p>
                      Custom infrastructure ensures security, speed, and reliability at enterprise scale.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <Layers className="h-44 w-44 text-primary opacity-90" />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  )
}
