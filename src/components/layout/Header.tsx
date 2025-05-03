'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import {
  Menu,
  X,
  Sparkles,
  Keyboard,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showCommandMenu, setShowCommandMenu] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to scroll to a section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigation = [
    { name: 'Features', id: 'features' },
    { name: 'How it works', id: 'how-it-works' },
    { name: 'Technology', id: 'technology' },
    // { name: 'Pricing', id: 'pricing' },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled
        ? "bg-background/70 backdrop-blur-xl border-b border-border/30 py-3"
        : "bg-transparent py-5"
    )}>
      {/* Premium accent line */}
      {isScrolled && mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      )}

      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with premium AI indicator */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative group flex items-center cursor-pointer"
          >
            <div className="relative">
              <img src='/back.svg' className='h-10 dark:invert-[100]' alt="Backtick" />
              {/* Premium glow effect on hover */}
              <div className="absolute -inset-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            </div>

            {/* AI Badge with premium styling */}

          </div>

          {/* Desktop navigation - Premium and clean */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group cursor-pointer"
                >
                  {item.name}
                  {/* Premium animated underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-primary/60 to-blue-500/60 group-hover:w-full transition-all duration-300"/>
                </button>
              ))}
            </div>
          </nav>

          {/* Action buttons with premium styling */}
          <div className="flex items-center space-x-3">

            {/* Modern theme toggle */}
            <ModeToggle />

            {/* Join Waitlist button (replaces login/signup) */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('waitlist')}
                size="sm"
                className="relative overflow-hidden dark:text-black cursor-pointer  text-white text-sm font-medium rounded-md px-4"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  Join Waitlist
                </span>
              </Button>
            </div>

            {/* Fixed mobile menu button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-8 w-8 border-border/40">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>

                {/* Fixed and enhanced mobile navigation with premium feel */}
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] border-l border-border/40 bg-background/95 backdrop-blur-lg p-6"
                >
                  {/* Premium mobile header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        document.querySelector('[data-state="open"]')?.dispatchEvent(
                          new KeyboardEvent('keydown', { key: 'Escape' })
                        )
                      }}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <img src='/back.svg' className='h-8 dark:invert-[100]' alt="Backtick" />

                    </div>
                    <SheetClose className="rounded-full h-7 w-7 flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors">
                      {/* <X className="h-4 w-4" /> */}
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>

                  {/* Premium mobile navigation */}
                  <nav className="flex flex-col space-y-1 mb-6">
                    {navigation.map((item) => (
                      <SheetClose key={item.id} asChild>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="flex py-2.5 px-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-md transition-colors text-left w-full"
                        >
                          {item.name}
                        </button>
                      </SheetClose>
                    ))}
                  </nav>

                  <Separator className="my-4 bg-border/40" />

                  {/* Mobile waitlist button */}
                  <div className="mt-4">
                    <SheetClose asChild>
                      <Button
                        onClick={() => scrollToSection('waitlist')}
                        className="w-full h-10 font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white"
                      >
                        <span className="flex items-center">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Join Waitlist
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Premium keyboard shortcut info */}

                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
