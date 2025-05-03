'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Terminal, Clock, Code, Lightbulb, Sparkles, ShoppingCart, CreditCard, Star, ArrowRight, Users, Settings } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function WhyItMatters() {
  const benefits = [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      text: "Transform ideas into code in minutes, not days"
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      text: "Remembers your preferences across every project"
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      text: "Implements best practices without being asked"
    },
    {
      icon: <Terminal className="h-5 w-5 text-primary" />,
      text: "Eliminates repetitive setup and configuration"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      text: "Evolves with you as you build more products"
    }
  ]

  return (
    <section className="p bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20">
              Why It Matters
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Tools that match your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">speed and vision.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Backtick isn't just another AI tool—it's an extension of your creativity.
              It understands your intent and executes with precision, letting you
              build at the speed of thought without compromising on quality.
            </p>

            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-primary/10">
                    {benefit.icon}
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* <Button size="lg" className="rounded-full px-8">
              Start Building Faster
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <Card className="relative border border-border/40 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur opacity-20"></div>
              <CardContent className="p-0 relative z-10">
                <div className="bg-muted p-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium">Backtick Studio</div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                <Tabs defaultValue="ui" className="w-full">
                  <div className="flex justify-center border-b px-3">
                    <TabsList className="my-2 h-9 bg-muted/50">
                      <TabsTrigger value="ui" className="text-xs px-3">Product UI</TabsTrigger>
                      <TabsTrigger value="back" className="text-xs px-3">Backend</TabsTrigger>
                      <TabsTrigger value="data" className="text-xs px-3">Data Model</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="ui" className="mt-0">
                    <div className="bg-card p-6 h-80 overflow-auto">
                      <div className="w-full max-w-md space-y-8 mx-auto">
                        {/* Real UI content instead of loading skeletons */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-primary">Featured Products</h3>
                          <p className="text-sm text-muted-foreground">
                            Discover our top items, handpicked for quality and innovation
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Product cards */}
                          <div className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-24 bg-gradient-to-r from-primary/10 to-blue-500/10 flex items-center justify-center">
                              <ShoppingCart className="h-8 w-8 text-primary/70" />
                            </div>
                            <div className="p-3">
                              <div className="text-sm font-medium mb-1">Smart Watch</div>
                              <div className="text-xs text-muted-foreground mb-2">$129.99</div>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <Star className="h-3 w-3 text-muted" />
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                              <Users className="h-8 w-8 text-blue-500/70" />
                            </div>
                            <div className="p-3">
                              <div className="text-sm font-medium mb-1">Pro Membership</div>
                              <div className="text-xs text-muted-foreground mb-2">$19.99/mo</div>
                              <div className="text-xs inline-flex items-center gap-1 text-primary">
                                <Badge variant="outline" className="text-[10px] py-0 px-1 border-primary/20">Popular</Badge>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                              <Settings className="h-8 w-8 text-purple-500/70" />
                            </div>
                            <div className="p-3">
                              <div className="text-sm font-medium mb-1">Developer Kit</div>
                              <div className="text-xs text-muted-foreground mb-2">$49.99</div>
                              <div className="flex items-center">
                                <Badge variant="outline" className="text-[10px] py-0 px-1 border-purple-500/20 text-purple-500">New</Badge>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-24 bg-gradient-to-r from-cyan-500/10 to-primary/10 flex items-center justify-center">
                              <CreditCard className="h-8 w-8 text-cyan-500/70" />
                            </div>
                            <div className="p-3">
                              <div className="text-sm font-medium mb-1">Gift Card</div>
                              <div className="text-xs text-muted-foreground mb-2">$25 - $500</div>
                              <div className="text-xs text-muted-foreground">Customizable</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button variant="outline" size="sm" className="rounded-full text-xs gap-1 border-primary/20 text-primary hover:bg-primary/5">
                            View All Products <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="back" className="mt-0">
                    <div className="bg-card p-6 h-80 overflow-hidden">
                      <pre className="text-xs text-muted-foreground h-full overflow-hidden">
                        <code>{`// Generated API endpoint
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await db.product.findUnique({
      where: {
        id: params.id,
      },
      include: {
        features: true,
        pricing: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="data" className="mt-0">
                    <div className="bg-card p-6 h-80 overflow-hidden flex items-center justify-center">
                      <div className="w-full max-w-md">
                        <div className="space-y-6">
                          <div className="p-4 border border-border/60 rounded-lg">
                            <div className="text-sm font-medium mb-2">Product</div>
                            <div className="space-y-2 pl-2">
                              <div className="text-xs text-muted-foreground flex justify-between">
                                <span>id</span>
                                <span>string</span>
                              </div>
                              <div className="text-xs text-muted-foreground flex justify-between">
                                <span>name</span>
                                <span>string</span>
                              </div>
                              <div className="text-xs text-muted-foreground flex justify-between">
                                <span>description</span>
                                <span>string</span>
                              </div>
                              <div className="text-xs text-muted-foreground flex justify-between">
                                <span>createdAt</span>
                                <span>datetime</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border border-border/60 rounded-lg">
                              <div className="text-sm font-medium mb-2">Feature</div>
                              <div className="space-y-1 pl-2 text-xs text-muted-foreground">
                                <div>id: string</div>
                                <div>title: string</div>
                                <div>productId: string</div>
                              </div>
                            </div>

                            <div className="p-4 border border-border/60 rounded-lg">
                              <div className="text-sm font-medium mb-2">Pricing</div>
                              <div className="space-y-1 pl-2 text-xs text-muted-foreground">
                                <div>id: string</div>
                                <div>amount: decimal</div>
                                <div>interval: string</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
