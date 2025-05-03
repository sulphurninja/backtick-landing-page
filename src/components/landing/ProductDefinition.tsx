'use client'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Database,
  Rocket,
  Eye,
  Save
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ProductDefinition() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Describe your vision",
      description: "AI Designer and Developer build your UI with shadcn & Tailwind"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Define your data",
      description: "AI wires up APIs and database connections automatically"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Prepare for launch",
      description: "AI creates your marketing assets and conversion elements"
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Preview instantly",
      description: "See your project unfold in real-time alongside the code"
    },
    {
      icon: <Save className="h-8 w-8 text-primary" />,
      title: "Deploy with confidence",
      description: "Export, save, or launch your complete solution"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20">
            Streamlined Workflow
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Idea to launch — <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">in one platform.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI team handles the entire product journey while you stay in control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive preview mockup with Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-xl overflow-hidden border shadow-xl"
        >
          <div className="bg-muted p-3 flex items-center gap-3 border-b">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-foreground font-medium flex-1 text-center">Backtick Project Studio</div>
          </div>

          <Tabs defaultValue="preview" className="w-full">
            <div className="px-4 pt-4 bg-card">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="preview" className="bg-background mt-0 p-6">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">Real-time preview as you describe your project</p>
                  <div className="animate-pulse h-60 max-w-lg mx-auto bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="bg-background mt-0 p-6">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">Code generated as you describe features</p>
                  <div className="h-60 max-w-lg mx-auto rounded-lg bg-muted/50 p-4 text-left overflow-hidden">
                    <pre className="opacity-70 text-sm">{`// Generated React component
import React from 'react';
import { Button } from './ui/button';

export function FeatureCard({ title, description }) {
  return (
    <div className="rounded-lg p-6 border bg-card">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <Button className="mt-4">Learn more</Button>
    </div>
  );
}`}</pre>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assets" className="bg-background mt-0 p-6">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">Marketing assets created alongside your product</p>
                  <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    <div className="aspect-square rounded-md bg-primary/10 animate-pulse"></div>
                    <div className="aspect-square rounded-md bg-blue-500/10 animate-pulse delay-100"></div>
                    <div className="aspect-square rounded-md bg-primary/10 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
