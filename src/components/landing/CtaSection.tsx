'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays, Zap, Clock, Lightbulb } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function CtaSection() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      value: "94%",
      label: "Faster development cycles",
      description: "Complete projects in days instead of months"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      value: "82%",
      label: "Less boilerplate code",
      description: "Focus on what matters, not repetitive tasks"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      value: "3.5x",
      label: "More ideas validated",
      description: "Test more concepts in the same timeframe"
    }
  ]

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20">
            Transform Your Development Process
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Your AI team delivers <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">in hours, not weeks.</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Backtick generates complete solutions, not just mockups.
            From initial concept to shipped product—with AI that truly understands
            your vision and executes with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/10 h-14 px-8 text-base">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            <Button size="lg" variant="outline" className="border-border h-14 px-8 rounded-full text-base">
              <CalendarDays className="mr-2 h-5 w-5" /> See a Demo
            </Button>
          </div>
        </motion.div>

        <Separator className="my-16 bg-border/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="font-semibold text-lg mb-2">{stat.label}</div>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* <p className="text-muted-foreground">
              Trusted by innovative teams at <span className="font-medium text-foreground">Stripe</span>, <span className="font-medium text-foreground">Shopify</span>, <span className="font-medium text-foreground">Linear</span>, and more
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
