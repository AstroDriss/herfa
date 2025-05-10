import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfessionalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className=" px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Skilled Artisans
            </h1>
            <p className="text-xl text-gray-600">
              Connect with talented professionals who create beautiful
              handcrafted items
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search for artisans or craftspeople..."
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Location"
                    className="pl-10 w-full md:w-[200px]"
                  />
                </div>
                <Button className="shrink-0">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12  px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Craft Categories</h3>
              <div className="space-y-2">
                {professionalCategories.map((category) => (
                  <div key={category.slug} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category.slug}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={category.slug} className="ml-2 text-sm">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Location</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anywhere">Anywhere</SelectItem>
                  <SelectItem value="local">Within 50 miles</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Experience Level</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="master"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="master" className="ml-2 text-sm">
                    Master Craftsperson
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="journeyman"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="journeyman" className="ml-2 text-sm">
                    Journeyman
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="apprentice"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="apprentice" className="ml-2 text-sm">
                    Apprentice
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services Offered</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="custom"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="custom" className="ml-2 text-sm">
                    Custom Orders
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="workshops"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="workshops" className="ml-2 text-sm">
                    Workshops & Classes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="restoration"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="restoration" className="ml-2 text-sm">
                    Restoration
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consultation"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="consultation" className="ml-2 text-sm">
                    Consultation
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="ml-2 text-sm flex items-center"
                    >
                      {Array(rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      {Array(5 - rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                      <span className="ml-1">& Up</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Professionals</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6">
              {professionals.map((professional) => (
                <Card key={professional.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <div className="aspect-[4/3] md:h-full relative">
                          <Image
                            src={professional.coverImage || "/placeholder.svg"}
                            alt={professional.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-1">
                              {professional.name}
                            </h3>
                            <p className="text-gray-500 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {professional.location}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < professional.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              ({professional.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 my-3">
                          {professional.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary">
                              {specialty}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {professional.description}
                        </p>

                        <div className="grid grid-cols-4 gap-2 mb-4">
                          {professional.portfolioImages.map((image, index) => (
                            <div
                              key={index}
                              className="aspect-square relative rounded overflow-hidden"
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Portfolio ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-sm font-medium">
                              Services:
                            </span>
                            <span className="text-sm text-gray-600 ml-2">
                              {professional.services.join(", ")}
                            </span>
                          </div>
                          <Link href={`/professionals/${professional.id}`}>
                            <Button>View Profile</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="ml-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse Professionals by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {professionalCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/professionals/category/${category.slug}`}
                className="group flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className=" mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="opacity-70 group-hover:opacity-100 aspect-square rounded-full transition-opacity"
                  />
                </div>
                <h3 className="font-medium text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {category.count} Artisans
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Professional */}
      <section className="py-12 my-10 rounded-xl md:py-20 bg-primary text-primary-foreground">
        <div className=" px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Are You a Skilled Artisan?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of craftspeople and connect with customers who
              appreciate handmade quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">Join as a Professional</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Sample data
const professionalCategories = [
  {
    name: "Woodworkers",
    slug: "woodworkers",
    icon: "/images/woodworker.jpg",
    count: 245,
  },
  {
    name: "Ceramicists",
    slug: "ceramicists",
    icon: "/images/ceramicists.jpg",
    count: 189,
  },
  {
    name: "Textile Artists",
    slug: "textile-artists",
    icon: "/images/textile.jpg",
    count: 176,
  },
  {
    name: "Metalsmiths",
    slug: "metalsmiths",
    icon: "/images/metalsmiths.jpg",
    count: 132,
  },
  {
    name: "Leatherworkers",
    slug: "leatherworkers",
    icon: "/images/leatherworkers.jpg",
    count: 98,
  },
  {
    name: "Jewelers",
    slug: "jewelers",
    icon: "/images/jewelers.jpg",
    count: 215,
  },
  {
    name: "Glass Artists",
    slug: "glass-artists",
    icon: "/images/glass-artists.jpg",
    count: 87,
  },
  {
    name: "Paper Artists",
    slug: "paper-artists",
    icon: "/images/paper-artists.jpg",
    count: 64,
  },
  {
    name: "Stone Carvers",
    slug: "stone-carvers",
    icon: "/images/stone-carvers.jpg",
    count: 42,
  },
  {
    name: "Basket Weavers",
    slug: "basket-weavers",
    icon: "/images/basket-weavers.jpg",
    count: 38,
  },
  {
    name: "Printmakers",
    slug: "printmakers",
    icon: "/images/printmakers.jpg",
    count: 76,
  },
  {
    name: "Bookbinders",
    slug: "bookbinders",
    icon: "/images/bookbinders.jpg",
    count: 29,
  },
];

const professionals = [
  {
    id: "1",
    name: "Thomas Woodcraft Studio",
    location: "Portland, OR",
    rating: 5,
    reviews: 48,
    specialties: ["Custom Furniture", "Cabinetry", "Wood Sculpture"],
    description:
      "Master woodworker with over 20 years of experience crafting bespoke furniture and wooden art pieces. Specializing in sustainable hardwoods and traditional joinery techniques.",
    coverImage: "/placeholder.svg?height=400&width=600",
    portfolioImages: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    services: ["Custom Orders", "Restoration", "Consultation"],
  },
  {
    id: "2",
    name: "Clay Creations by Sarah",
    location: "Austin, TX",
    rating: 4,
    reviews: 36,
    specialties: ["Functional Pottery", "Ceramic Sculpture", "Dinnerware"],
    description:
      "Contemporary ceramicist creating both functional and decorative pieces. Each item is handmade using traditional wheel-throwing and hand-building techniques with custom glazes.",
    coverImage: "/placeholder.svg?height=400&width=600",
    portfolioImages: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    services: ["Custom Orders", "Workshops", "Commissions"],
  },
  {
    id: "3",
    name: "Fiber & Thread Collective",
    location: "Seattle, WA",
    rating: 5,
    reviews: 29,
    specialties: ["Handwoven Textiles", "Natural Dyeing", "Tapestry"],
    description:
      "A textile studio specializing in handwoven home goods and wearables. All pieces are created using traditional looms and natural fibers, with an emphasis on sustainable practices.",
    coverImage: "/placeholder.svg?height=400&width=600",
    portfolioImages: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    services: ["Custom Orders", "Workshops", "Collaboration"],
  },
  {
    id: "4",
    name: "Forge & Anvil Metalworks",
    location: "Denver, CO",
    rating: 5,
    reviews: 42,
    specialties: ["Architectural Ironwork", "Decorative Metalwork", "Knives"],
    description:
      "Traditional blacksmith creating hand-forged metal pieces for home and garden. Specializing in both functional and decorative items using time-honored techniques.",
    coverImage: "/placeholder.svg?height=400&width=600",
    portfolioImages: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    services: ["Custom Orders", "Restoration", "Installation"],
  },
];
