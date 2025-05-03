'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Braces, PenTool, Database, Palette, Code, Zap, LayoutGrid, MessageSquare, Target, LineChart, Bot, Terminal, Clipboard, Save } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Transform values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [codeLines, setCodeLines] = useState([
    { id: 1, content: '<Card className="product-item">', delay: 0 },
    { id: 2, content: '  <CardHeader>', delay: 0.3 },
    { id: 3, content: '    <CardTitle>{data.name}</CardTitle>', delay: 0.6 },
    { id: 4, content: '    <CardDescription>{data.description}</CardDescription>', delay: 0.9 },
    { id: 5, content: '  </CardHeader>', delay: 1.2 },
    { id: 6, content: '  <CardContent>', delay: 1.5 },
    { id: 7, content: '    <p className="price">${data.price}</p>', delay: 1.8 },
    { id: 8, content: '    <Button>Add to Cart</Button>', delay: 2.1 },
    { id: 9, content: '  </CardContent>', delay: 2.4 },
    { id: 10, content: '</Card>', delay: 2.7 }
  ])

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

  const codeBlockVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (line: { delay: number }) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: line.delay
      }
    })
  }

  if (!mounted) return null

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced background with AI neural network patterns */}
      <div className="absolute inset-0  -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        {/* Neural network nodes and connections - authentic AI visual metaphor */}
        <svg className="absolute  mt-56 inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Neural network nodes */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={100 + Math.random() * 800}
              cy={100 + Math.random() * 800}
              r={2 + Math.random() * 5}
              className={i % 2 === 0 ? "fill-primary" : "fill-blue-500"}
              filter="url(#glow)"
            />
          ))}

          {/* Neural connections */}
          {[...Array(30)].map((_, i) => (
            <line
              key={`connection-${i}`}
              x1={100 + Math.random() * 800}
              y1={100 + Math.random() * 800}
              x2={100 + Math.random() * 800}
              y2={100 + Math.random() * 800}
              strokeWidth="0.5"
              className="stroke-primary/40"
            />
          ))}
        </svg>

        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Digital signal wave animation - representing AI processing */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 bg-primary/30"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [1, 15, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
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

          {/* Headline with highlighted keywords */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            From concept to product with<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
              intelligent AI collaboration
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M0,5 C50,15 150,-5 300,5"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </svg>
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

        {/* Interactive Code Generation Visualization */}
        <motion.div
          variants={itemVariants}
          className="mb-16 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur"></div>
          <Card className="border border-border/40 bg-card/80 backdrop-blur-md shadow-xl relative overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/80 px-4 py-2 flex items-center gap-2 border-b border-border/40">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-xs flex items-center justify-center gap-2 text-muted-foreground">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>backtick-ai-team: building UI components</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row p-4 gap-6">
                {/* Left side: Command prompt */}
                <div className="md:w-2/5 font-mono text-sm space-y-2 bg-muted/30 p-4 rounded-md">
                  <div className="text-muted-foreground"># Generating product card component</div>
                  <div className="text-primary/80">$ backtick build component</div>
                  <div className="text-gray-400">Type: <span className="text-blue-400">product-card</span></div>
                  <div className="text-gray-400">Style: <span className="text-blue-400">minimal, responsive</span></div>
                  <div className="text-gray-400">Features: <span className="text-blue-400">image, title, price, button</span></div>
                  <div className="h-px bg-border/40 my-2"></div>
                  <div className="text-green-500">Generating code...</div>
                </div>

                {/* Right side: Code output with animation */}
                <div className="md:w-3/5 font-mono text-sm border bg-muted/20 rounded-md p-4 relative overflow-hidden">
                  {/* Animated code lines */}
                  <div className="space-y-1">
                    {codeLines.map(line => (
                      <motion.div
                        key={line.id}
                        custom={line}
                        variants={codeBlockVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex"
                      >
                        <span className="text-muted-foreground mr-4 select-none w-5 text-right">{line.id}</span>
                        <span className="text-foreground whitespace-nowrap">{line.content}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Cursor blinking effect */}
                  <motion.div
                    className="absolute bottom-5 left-[calc(2rem+10ch)] h-5 w-2 bg-primary/80"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />

                  {/* Code scan line effect */}
                  <motion.div
                    className="absolute left-0 right-0 h-10 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
                    animate={{ y: [0, 200] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Bottom panel with process info */}
              <div className="bg-muted/50 border-t border-border/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {teamMembers.slice(0, 3).map((member, i) => (
                      <div
                        key={i}
                        className={`h-6 w-6 rounded-full flex items-center justify-center border border-background bg-${i === 0 ? 'primary' : i === 1 ? 'blue-500' : 'purple-500'}/20`}
                      >
                        {member.icon2}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">3 AI teammates collaborating</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">Output ready</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pulsing indicator dots around the card */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{
                top: `${25 + i * 20}%`,
                left: i % 2 === 0 ? "-10px" : "calc(100% + 10px)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>


        {/* Enhanced team tabs section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-10">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Your Complete AI Team
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Each AI specialist brings unique expertise to your project, collaborating seamlessly to build your vision.
            </motion.p>
          </div>

          <div className="relative">
            {/* Floating connection lines between team members - appears when scrolling (hidden on mobile) */}
            <motion.svg
              className="absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-30 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.path
                d="M200,100 C300,200 500,200 600,100"
                stroke="var(--primary)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M200,100 C300,50 500,50 600,100"
                stroke="var(--primary)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.svg>

            <motion.div
              className="relative max-w-5xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="developer" className="w-full">
                {/* Responsive, floating navigation */}
                <div className="flex justify-center mb-8 overflow-x-auto pb-2 max-w-full">
                  <TabsList className="py- rounded-full gap-2">
                    {teamMembers.map((member) => (
                      <TabsTrigger
                        key={member.id}
                        value={member.id}
                        className="rounded-full cursor-pointer relative px-4 md:px-5 md:py-4  whitespace-nowrap"
                      >

                        {/* Content that remains visible */}
                        <span className="relative z-10 flex items-center gap-2">
                          {member.icon}
                          <span className="font-medium hidden sm:inline">{member.name}</span>
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Dynamic content area with 3D-like transforms */}
                <div className="relative min-h-[500px] md:min-h-[550px]">
                  {teamMembers.map((member) => (
                    <TabsContent
                      key={member.id}
                      value={member.id}
                      className="absolute inset-0 mt-0 transition-all duration-500 ease-out"
                      style={{ transform: "perspective(1000px)" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, rotateX: 10, y: 20 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: -10, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        <Card className={`bg-background/70 backdrop-blur-xl border border-${member.color}/20 shadow-xl h-full overflow-hidden group`}>
                          <CardContent className="p-0 h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                              {/* Team member info - takes full width on mobile, left side on desktop */}
                              <div className="p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                                {/* Animated gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}/5 to-transparent opacity-70`}></div>

                                {/* Animated circles in background (hidden on smaller screens) */}
                                <motion.div
                                  className={`absolute w-40 h-40 rounded-full bg-${member.color}/10 -bottom-20 -left-20 blur-md hidden sm:block`}
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                  }}
                                  transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                  }}
                                />

                                <div className="relative">
                                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                    <div className="relative">
                                      <div className={`absolute inset-0 rounded-full bg-${member.color}/20 blur-md animate-pulse`}></div>
                                      <Avatar className={`h-12 w-12 md:h-16 md:w-16 bg-${member.color}/10 border-2 border-${member.color}/40`}>
                                        <AvatarFallback className={`text-${member.color}`}>
                                          {member.icon}
                                        </AvatarFallback>
                                      </Avatar>
                                    </div>
                                    <div>
                                      <h3 className="text-xl md:text-2xl font-semibold">AI {member.name}</h3>
                                      <p className="text-sm text-muted-foreground">Your dedicated specialist</p>
                                    </div>
                                  </div>

                                  <div className="space-y-4 md:space-y-5">
                                    <div>
                                      <h4 className={`text-${member.color} font-semibold mb-1 md:mb-2 flex items-center text-sm md:text-base`}>
                                        <Zap className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                                        Expertise
                                      </h4>
                                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {member.description}
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className={`text-${member.color} font-semibold mb-1 md:mb-2 flex items-center text-sm md:text-base`}>
                                        <Bot className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                                        Core Skills
                                      </h4>
                                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {member.skills.map((skill, i) => (
                                          <Badge key={i} variant="secondary" className={`bg-${member.color}/10 text-${member.color} border-${member.color}/20 text-xs md:text-sm`}>
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  viewport={{ once: true }}
                                  className="mt-4 md:mt-6 hidden md:block"
                                >
                                  <Button
                                    variant="ghost"
                                    className={`group w-full justify-start px-3 md:px-4 py-3 md:py-6 border border-dashed border-${member.color}/30 text-${member.color} hover:bg-${member.color}/5 rounded-xl`}
                                  >
                                    <div className="flex items-center gap-2 md:gap-3">
                                      <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full bg-${member.color}/10 flex items-center justify-center`}>
                                        <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                                      </div>
                                      <div className="text-left">
                                        <div className="font-medium text-sm md:text-base">Chat with AI {member.name}</div>
                                        <div className="text-xs md:text-sm text-muted-foreground">Get personalized assistance</div>
                                      </div>
                                    </div>
                                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-auto transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </motion.div>
                              </div>

                              {/* Dynamic output preview - right side on desktop, below on mobile */}
                              <div className="relative group/preview border-t md:border-t-0 md:border-l border-border/20">
                                {/* Terminal-like style header */}
                                <div className="absolute top-0 inset-x-0 h-8 md:h-10 bg-muted/80 backdrop-blur-sm flex items-center px-3 md:px-4 border-b border-border gap-2 z-10">
                                  <div className="flex space-x-1.5 md:space-x-2">
                                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500"></div>
                                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500"></div>
                                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500"></div>
                                  </div>
                                  <div className={`ml-2 md:ml-3 h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-${member.color} animate-pulse`}></div>
                                  <span className="text-[10px] md:text-xs text-muted-foreground font-mono">AI {member.name} Output</span>

                                  <div className="ml-auto flex gap-2 md:gap-3 opacity-0 group-hover/preview:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="icon" className="h-5 w-5 md:h-6 md:w-6">
                                      <Clipboard className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-5 w-5 md:h-6 md:w-6">
                                      <Save className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                    </Button>
                                  </div>
                                </div>

                                {/* Processing indicator line */}
                                <motion.div
                                  className={`absolute top-8 md:top-10 h-px w-full bg-${member.color}/30 z-10`}
                                >
                                  <motion.div
                                    className={`h-full bg-${member.color}`}
                                    animate={{
                                      width: ["0%", "100%"],
                                      x: [0, 0]
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  />
                                </motion.div>

                                {/* Output content - adjustable height for different screen sizes */}
                                <div className="h-[250px] md:h-full pt-8 md:pt-10 pb-0 overflow-hidden">
                                  <div className="h-full p-3 md:p-6 overflow-auto backdrop-blur-sm bg-black/5">
                                    <div className="scale-90 md:scale-100 transform origin-top-left">
                                      {member.output}
                                    </div>
                                  </div>
                                </div>

                                {/* Interactive corner gradient effect (hidden on smaller screens) */}
                                <motion.div
                                  className={`absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-tl from-${member.color}/20 to-transparent rounded-tl-3xl opacity-0 group-hover/preview:opacity-100 pointer-events-none hidden sm:block`}
                                  animate={{
                                    opacity: [0, 0.7, 0],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                  }}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Mobile-only chat button */}
                        {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 sm:hidden"
                >
                  <Button
                    variant="ghost"
                    className={`group w-full justify-start px-3 py-3 border border-dashed border-${member.color}/30 text-${member.color} hover:bg-${member.color}/5 rounded-xl`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`h-8 w-8 rounded-full bg-${member.color}/10 flex items-center justify-center`}>
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">Chat with AI {member.name}</div>
                        <div className="text-xs text-muted-foreground">Get personalized assistance</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div> */}
                      </motion.div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>

              {/* Floating collaborative indicator - responsive positioning and sizing */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-background/70 backdrop-blur-md px-3 py-2 md:px-4 md:py-2 rounded-full border border-border/40 shadow-lg flex items-center gap-2 md:gap-3 max-w-full overflow-hidden">
                  <div className="flex -space-x-1 md:-space-x-2">
                    {teamMembers.map((member, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        animate={{
                          y: [0, -4, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <div className={`h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-background bg-${i === 0 ? 'primary' : i === 1 ? 'blue-500' : i === 2 ? 'purple-500' : 'cyan-500'
                          }/20 flex items-center justify-center`}>
                          {member.icon2}
                        </div>
                        <motion.div
                          className={`absolute -bottom-1 -right-1 h-2 w-2 md:h-3 md:w-3 rounded-full `}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-[10px] md:text-xs flex items-center gap-1 md:gap-2 truncate">
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-primary"></span>
                    </span>
                    <span className="truncate">All AI teammates collaborate in real-time</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Button variant="outline" className="h-12 px-6 rounded-full text-base border-border group hover:bg-background hover:text-primary transition-colors">
              <Bot className="mr-2 h-4 w-4" />
              View AI Demos
            </Button>
          </div>

          {/* Technology badges */}
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/60 backdrop-blur-sm px-5 py-2 text-sm text-muted-foreground shadow-sm">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  UI/UX
                </motion.span>
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                >
                  Code
                </motion.span>
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                >
                  Content
                </motion.span>
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                >
                  Deployment
                </motion.span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Side connectors - representing AI interconnectivity */}
      <div className="absolute left-0 inset-y-0 w-px hidden md:block overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`left-connector-${i}`}
            className="absolute h-20 w-px"
            style={{
              top: `${(i * 10) + 5}%`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'var(--primary)' : '#3b82f6'}, transparent)`,
              left: 0
            }}
            animate={{
              x: [-10, 3, -10],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute right-0 inset-y-0 w-px hidden md:block overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`right-connector-${i}`}
            className="absolute h-20 w-px"
            style={{
              top: `${(i * 10) + 5}%`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#7c3aed' : '#06b6d4'}, transparent)`,
              right: 0
            }}
            animate={{
              x: [10, -3, 10],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating data packets */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`data-packet-${i}`}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary to-${i % 2 === 0 ? 'blue-500' : 'purple-500'}`}
            style={{
              filter: `blur(${i % 2 === 0 ? '0px' : '1px'})`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--primary)' : '#3b82f6'}`
            }}
            initial={{
              x: i % 2 === 0 ? '-5vw' : '105vw',
              y: 30 + (i * 15) + '%'
            }}
            animate={{
              x: i % 2 === 0 ? '105vw' : '-5vw',
              y: [
                30 + (i * 15) + '%',
                35 + (i * 15) + '%',
                30 + (i * 15) + '%'
              ]
            }}
            transition={{
              x: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </div> */}

      {/* Binary data stream at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/80 to-transparent flex items-end overflow-hidden">
        <div className="font-mono text-[8px] text-primary/30 whitespace-nowrap flex-nowrap">
          {[...Array(50)].map((_, i) => (
            <motion.span
              key={`binary-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.05,
                repeatDelay: 2
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
