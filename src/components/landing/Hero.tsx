'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Braces, PenTool, Database, Palette, Code, Zap, LayoutGrid, MessageSquare, Target, LineChart, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])



  // AI team members data with enhanced content
  const teamMembers = [
    {
      id: "developer",
      name: "Developer",
      icon: <Braces className="h-5 w-5" />,
      color: "primary",
      description: "Engineers production-ready code with modern frameworks, builds scalable APIs, and creates optimized application architecture.",
      skills: ["Next.js/React", "TypeScript", "APIs", "Architecture"],
      output: (
        <div className="space-y-3">
          <div className="font-mono text-sm">
            <span className="text-blue-500">function</span>{" "}
            <span className="text-green-500">createProductCard</span>
            <span className="text-foreground">(props) {`{`}</span>
          </div>
          <div className="font-mono text-sm pl-4">
            <span className="text-foreground">return (</span>
          </div>
          <div className="font-mono text-sm pl-8">
            <span className="text-purple-500">{`<Card>`}</span>
          </div>
          <div className="font-mono text-sm pl-12">
            <span className="text-purple-500">{`<Image src={props.image} />`}</span>
          </div>
          <div className="font-mono text-sm pl-12">
            <span className="text-purple-500">{`<Title>{props.title}</Title>`}</span>
          </div>
          <div className="font-mono text-sm pl-12">
            <span className="text-purple-500">{`<Price>{props.price}</Price>`}</span>
          </div>
          <div className="font-mono text-sm pl-8">
            <span className="text-purple-500">{`</Card>`}</span>
          </div>
          <div className="font-mono text-sm pl-4">
            <span className="text-foreground">);</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-foreground">{`}`}</span>
          </div>
        </div>
      ),
      icon2: <Code className="h-4 w-4" />
    },
    {
      id: "designer",
      name: "Designer",
      icon: <Palette className="h-5 w-5" />,
      color: "blue",
      description: "Crafts visually stunning interfaces with pixel-perfect components and fluid interactions that elevate your brand identity.",
      skills: ["UI Systems", "Responsive", "Animation", "Prototyping"],
      output: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-md p-2">
              <div className="h-2 w-12 bg-blue-500/40 rounded mb-1"></div>
              <div className="h-8 w-full bg-blue-500/20 rounded"></div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-md p-2">
              <div className="h-2 w-10 bg-primary/40 rounded mb-1"></div>
              <div className="h-8 w-full bg-primary/20 rounded"></div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-md p-2">
              <div className="h-2 w-14 bg-purple-500/40 rounded mb-1"></div>
              <div className="h-8 w-full bg-purple-500/20 rounded"></div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center">
              <Zap className="h-3 w-3 text-blue-500" />
            </div>
            <div className="h-2 w-24 bg-muted-foreground/20 rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-8 w-28 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-md"></div>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      ),
      icon2: <LayoutGrid className="h-4 w-4" />
    },
    {
      id: "copywriter",
      name: "Copywriter",
      icon: <PenTool className="h-5 w-5" />,
      color: "purple",
      description: "Creates compelling narratives and clear messaging that resonates with your audience and drives user engagement.",
      skills: ["UX Writing", "Brand Voice", "Content", "Messaging"],
      output: (
        <div className="space-y-3">
          <div className="h-5 font-semibold text-base">Transform Your Workflow with AI</div>
          <div className="space-y-1.5">
            <div className="text-sm text-muted-foreground">Backtick helps you:</div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-purple-500"><span className="text-sm">•</span></div>
              <div className="text-sm">Build faster with AI-powered development</div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-purple-500"><span className="text-sm">•</span></div>
              <div className="text-sm">Create stunning interfaces that users love</div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-0.5 text-purple-500"><span className="text-sm">•</span></div>
              <div className="text-sm">Launch products in days, not months</div>
            </div>
          </div>
          <div className="text-sm italic text-purple-500">Ready to reinvent your development process?</div>
        </div>
      ),
      icon2: <MessageSquare className="h-4 w-4" />
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: <Sparkles className="h-5 w-5" />,
      color: "cyan",
      description: "Develops targeted strategies to position your product, acquire users, and create measurable growth campaigns.",
      skills: ["Growth", "Analytics", "Acquisition", "Strategy"],
      output: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-medium">Conversion Strategy</div>
            <div className="text-xs text-cyan-500">+24% Growth</div>
          </div>
          <div className="h-3 w-full bg-muted/40 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-cyan-500/10 rounded p-2">
              <div className="flex justify-between items-center">
                <div className="text-xs font-medium">Acquisition</div>
                <Target className="h-3 w-3 text-cyan-500" />
              </div>
              <div className="text-sm mt-1">12.4K visitors</div>
            </div>
            <div className="bg-cyan-500/10 rounded p-2">
              <div className="flex justify-between items-center">
                <div className="text-xs font-medium">Conversion</div>
                <LineChart className="h-3 w-3 text-cyan-500" />
              </div>
              <div className="text-sm mt-1">3.2% rate</div>
            </div>
          </div>
        </div>
      ),
      icon2: <Target className="h-4 w-4" />
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

        {/* Added AI-themed circuit patterns */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.03]"></div>

        {/* Digital binary data stream effect */}
        <div className="absolute top-20 left-10 right-10 overflow-hidden h-[1px] bg-primary/10">
          {mounted && [...Array(15)].map((_, i) => (
            <motion.div
              key={`data-${i}`}
              className="absolute h-full w-10 bg-primary/30"
              style={{ left: `${i * 7}%` }}
              animate={{
                x: ['-100vw', '100vw'],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Digital nodes and connections */}
        {mounted && [...Array(8)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: [
                '0 0 0 rgba(0, 0, 0, 0)',
                '0 0 8px rgba(120, 100, 255, 0.5)',
                '0 0 0 rgba(0, 0, 0, 0)'
              ]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>


      {/* Animated particles */}
      {mounted && (
        <div className="absolute inset-0 -z-5">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-6xl mx-auto px-4"
      >
        <div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
          {/* Premium badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-background/60 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-1.5 text-primary" />
              <span className="text-sm font-medium">Your AI Product Team</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            From concept to product with<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              intelligent AI collaboration
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Backtick provides AI teammates who understand your vision, remember your
            preferences, and build complete, production-ready software—from frontend
            to backend to deployment.
          </motion.p>
        </div>

       {/* Enhanced team tabs section */}
       <motion.div variants={itemVariants} className="mb-16">
          <Tabs defaultValue="developer" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid gap-2 grid-cols-4 bg-muted/50 p backdrop-blur-sm border border-border/30">
                {teamMembers.map((member) => (
                  <TabsTrigger
                    key={member.id}
                    value={member.id}
                    className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm flex items-center gap-2 px-4 py-4 relative cursor-pointer overflow-hidden"
                  >
                    {/* Subtle glow effect on active tab */}
                    <div className="absolute inset-0 data-[state=active]:bg-primary/5 rounded-sm"></div>
                    {member.icon}
                    <span className="hidden md:inline relative z-10">{member.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Enhanced team member content */}
            {teamMembers.map((member) => (
              <TabsContent key={member.id} value={member.id} className="mt-0">
                <Card className="border border-border/40 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-6">
                      {/* Left column - Avatar and info */}
                      <div className="md:col-span-2 p-8 bg-gradient-to-br from-muted/80 to-muted/30 backdrop-filter backdrop-blur-sm flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start gap-6">
                          <div className="relative">
                            <div className={`absolute -inset-1 bg-gradient-to-r from-${member.color} to-blue-500 rounded-full blur opacity-40 animate-pulse`} style={{ animationDuration: '3s' }}></div>
                            <Avatar className="h-24 w-24 border-2 border-background relative">
                              <AvatarFallback className={`bg-${member.color}/10 text-${member.color} text-2xl`}>
                                {member.icon}
                              </AvatarFallback>
                            </Avatar>


                          </div>

                          <div>
                            <h3 className="text-2xl font-semibold mb-1">AI {member.name}</h3>
                            <p className="text-muted-foreground">Your dedicated specialist</p>
                          </div>

                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {member.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary" className={`bg-${member.color}/10 text-${member.color} border-${member.color}/20 px-2.5 py-0.5`}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right column - Description and AI output */}
                      <div className="md:col-span-3 p-8 flex flex-col gap-6">
                        <div>
                          <h4 className="text-lg font-medium mb-2 flex items-center">
                            <Bot className="mr-2 h-4 w-4 text-primary" />
                            How I'll help you
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.description}
                          </p>
                        </div>

                        <div className="flex-1 border rounded-lg p-4 bg-muted/40 relative overflow-hidden">
                          {/* Terminal-like header */}
                          <div className="flex items-center gap-3 mb-4 border-b border-border/40 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="text-xs text-muted-foreground ml-2 flex items-center">
                              {member.icon2}
                              <span className="ml-1.5">AI {member.name} Output</span>
                            </div>
                          </div>

                          {/* Actual AI output instead of skeletons */}
                          <div className="overflow-auto max-h-48">
                            {member.output}
                          </div>

                          {/* Futuristic scanning effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
                            style={{ height: '200%' }}
                            animate={{
                              y: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* CTA section */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-6 rounded-full text-base shadow-lg shadow-primary/10">
              Start Building <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Button variant="outline" className="h-12 px-6 rounded-full text-base border-border">
              View Demo
            </Button>
          </div>

          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/60 backdrop-blur-sm px-5 py-2 text-sm text-muted-foreground shadow-sm">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                UI/UX
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                Code
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                Content
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                Deployment
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
