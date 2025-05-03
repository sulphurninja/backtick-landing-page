'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Clock, Badge as BadgeIcon, Mail, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        // Show success toast using Sonner
        toast.success("You're on the list!", {
          description: "We'll be in touch when your access is ready.",
          duration: 5000,
        })
      } else {
        // Handle specific error scenarios with nicer messages
        if (response.status === 409) {
          setError("This email is already on our waitlist! We'll be in touch soon.")
        } else if (response.status === 400) {
          setError("Please provide a valid email address.")
        } else {
          setError(data.message || "Something went wrong. Please try again.")
        }

        // Small animation effect - shake the input field
        const inputEl = document.getElementById('waitlist-email')
        if (inputEl) {
          inputEl.classList.add('shake-error')
          setTimeout(() => inputEl.classList.remove('shake-error'), 820)
        }
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    {
      icon: <Clock className="h-4 w-4 text-primary" />,
      label: "Early access",
      tooltip: "Get access weeks before public release"
    },
    {
      icon: <Sparkles className="h-4 w-4 text-primary" />,
      label: "Beta features",
      tooltip: "Test advanced capabilities still in development"
    },
    {
      icon: <BadgeIcon className="h-4 w-4 text-primary" />,
      label: "Founder status",
      tooltip: "Lifetime recognition and special perks for early adopters"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50" id="waitlist">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="absolute h-1 top-0 left-0 right-0 bg-gradient-to-r from-primary to-blue-500"></div>

            <CardHeader className="text-center pt-10">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20 mx-auto">
                Limited Spots
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                Reserve your access
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Join the builders creating tomorrow's products today
              </CardDescription>
            </CardHeader>

            <CardContent>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                          </Alert>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="md:col-span-3 relative">
                          <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                          <Input
                            id="waitlist-email"
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                            disabled={isLoading}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Button
                            type="submit"
                            className="h-12 w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 relative overflow-hidden group"
                            disabled={isLoading}
                          >
                            <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1">
                              {isLoading ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Join Waitlist
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              )}
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                        {benefits.map((benefit, i) => (
                          <TooltipProvider key={i}>
                            <Tooltip delayDuration={100}>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-2 text-sm cursor-default">
                                  <div className="flex-shrink-0 p-1 rounded-full bg-primary/10">
                                    {benefit.icon}
                                  </div>
                                  <span>{benefit.label}</span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="bottom" className="bg-card p-3 max-w-[200px] text-foreground text-sm">
                                {benefit.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                    >
                      <Check className="h-8 w-8 text-primary" />
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-2xl font-semibold mb-2"
                    >
                      You're on the list!
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="text-muted-foreground max-w-md mx-auto"
                    >
                      Thank you for joining. We'll be in touch when your access is ready.
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="mt-8"
                    >
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="hover:bg-primary/5"
                      >
                        Add another email
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>

            <CardFooter className="bg-muted/50 p-6 flex items-center justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Current wait time: <span className="font-medium text-foreground">approximately 2 weeks</span></span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Add CSS for shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake-error {
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </section>
  )
}
