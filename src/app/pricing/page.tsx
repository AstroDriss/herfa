import Image from "next/image";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing Plans for Artisans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan to showcase your craft and connect with
              customers who appreciate handmade quality
            </p>
            <Tabs defaultValue="monthly" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">
                  Annually{" "}
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                    Save 20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="text-sm text-gray-500 mt-2">
                  Pay monthly, cancel anytime
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="text-sm text-gray-500 mt-2">
                  Pay annually, get 2 months free
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className=" px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 flex flex-col">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>
                  Perfect for artisans just getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Basic profile listing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Up to 10 portfolio items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Standard search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Featured in category listings</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Custom shop URL</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Commission-free sales</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary relative flex flex-col">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-primary text-white">Most Popular</Badge>
              </div>
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>
                  For established artisans looking to grow
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Enhanced profile with story section</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Up to 50 portfolio items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Priority search placement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Advanced analytics and insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Priority email & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Featured in category listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Custom shop URL</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Commission-free sales</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Master Plan */}
            <Card className="border-2 border-gray-200 flex flex-col">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Master</CardTitle>
                <CardDescription>
                  For master craftspeople and studios
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Premium profile with video showcase</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited portfolio items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Top search placement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Featured in homepage & category listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Custom shop URL & branding options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Commission-free sales</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Compare Features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 font-medium">Basic</th>
                  <th className="text-center py-4 px-4 font-medium">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-medium">Master</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span>Portfolio Items</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">
                              Number of images, videos, and projects you can
                              showcase in your portfolio
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4">50</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span>Commission Rate</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">
                              Percentage of each sale that goes to Handcrafted
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">10%</td>
                  <td className="text-center py-4 px-4">7%</td>
                  <td className="text-center py-4 px-4">0%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Featured Placement</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Workshop Listings</td>
                  <td className="text-center py-4 px-4">2</td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Custom URL</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Analytics</td>
                  <td className="text-center py-4 px-4">Basic</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                  <td className="text-center py-4 px-4">Comprehensive</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4">
                    Priority Email & Chat
                  </td>
                  <td className="text-center py-4 px-4">Dedicated Manager</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Video Showcase</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Artisans Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6">
                  &ldquo;Since upgrading to the Professional plan, my visibility
                  has increased dramatically. I&apos;m getting more inquiries
                  and sales than ever before. The analytics help me understand
                  what customers are looking for.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emma Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emma Thompson</h4>
                    <p className="text-sm text-gray-500">Ceramic Artist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6">
                  &ldquo;The Master plan has been a game-changer for my
                  woodworking business. The commission-free sales alone paid for
                  the subscription in the first month. The dedicated account
                  manager has been incredibly helpful.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="James Wilson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">James Wilson</h4>
                    <p className="text-sm text-gray-500">Master Woodworker</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6">
                  &ldquo;I started with the Basic plan when I was just beginning
                  my jewelry business. As I grew, I upgraded to Professional.
                  The platform has been instrumental in helping me build my
                  brand and connect with customers.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sofia Martinez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sofia Martinez</h4>
                    <p className="text-sm text-gray-500">Jewelry Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can I upgrade or downgrade my plan later?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time. When
                  upgrading, you&apos;ll be charged the prorated difference for
                  the remainder of your billing cycle. When downgrading, the new
                  rate will apply at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial for all plans. You can
                  explore all the features and benefits before committing to a
                  subscription. No credit card is required to start your trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American
                  Express, Discover), PayPal, and bank transfers for annual
                  plans. All payments are processed securely through our payment
                  partners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How does the commission structure work?
                </AccordionTrigger>
                <AccordionContent>
                  For Basic plans, we charge a 10% commission on all sales made
                  through the platform. Professional plans have a reduced rate
                  of 7%, and Master plans enjoy commission-free sales.
                  Commissions are automatically calculated and deducted when a
                  customer makes a purchase.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I cancel my subscription at any time?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time from your
                  account settings. If you cancel, you&apos;ll still have access
                  to your plan features until the end of your current billing
                  cycle. We don&apos;t offer refunds for partial months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Do you offer discounts for artisan collectives or studios?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special pricing for artisan collectives, studios
                  with multiple craftspeople, and educational institutions.
                  Please contact our sales team at sales@herfa.ma to discuss
                  your specific needs and get a custom quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
