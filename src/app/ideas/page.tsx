import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IdeasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/ideas/cover.jpg"
          alt="herfa items showcase"
          fill
          className="object-cover brightness-75 rounded-2xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Discover herfa Inspiration
          </h1>
          <div className="w-full max-w-md relative">
            <Input
              type="search"
              placeholder="Rechercher des idées, des produits ou des artisans..."
              className="pl-10 pr-4 py-6 rounded-full bg-white/90 text-black"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-12  px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">
          Parcourir les idées par catégorie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/ideas/category/${category.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Ideas */}
      <section className="py-12">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Idées à la une</h2>
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="popular">Populaires</TabsTrigger>
              <TabsTrigger value="new">Nouvelles & Remarquables</TabsTrigger>
              <TabsTrigger value="seasonal">Saisonnières</TabsTrigger>
              <TabsTrigger value="sustainable">Durables</TabsTrigger>
            </TabsList>
            <TabsContent value="popular" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredIdeas.map((idea) => (
                  <Link
                    key={idea.id}
                    href={`/ideas/${idea.id}`}
                    className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={idea.image || "/placeholder.svg"}
                        alt={idea.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-gray-500 hover:text-red-500"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {idea.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {idea.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full overflow-hidden relative">
                          <Image
                            src={idea.artisanImage || "/placeholder.svg"}
                            alt={idea.artisanName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm">{idea.artisanName}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Charger plus d'idées</Button>
              </div>
            </TabsContent>
            <TabsContent value="new">
              <div className="text-center py-12">
                <p className="text-gray-500">
                  De nouvelles idées Herfa remarquables arrivent bientôt !
                </p>
              </div>
            </TabsContent>
            <TabsContent value="seasonal">
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Des idées Herfa saisonnières arrivent bientôt !
                </p>
              </div>
            </TabsContent>
            <TabsContent value="sustainable">
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Des idées Herfa durables arrivent bientôt !
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

// Sample data
const categories = [
  {
    name: "Woodworking",
    slug: "woodworking",
    image: "/images/ideas/wood.jpg",
  },
  {
    name: "Ceramics & Pottery",
    slug: "ceramics-pottery",
    image: "/images/ideas/ceramics.jpg",
  },
  {
    name: "Textiles & Fiber Arts",
    slug: "textiles-fiber",
    image: "/images/ideas/textiles.jpg",
  },
  {
    name: "Metalwork",
    slug: "metalwork",
    image: "/images/ideas/metal.jpg",
  },
  {
    name: "Leathercraft",
    slug: "leathercraft",
    image: "/images/ideas/leathercraft.jpg",
  },
  {
    name: "Jewelry Making",
    slug: "jewelry",
    image: "/images/ideas/jewelry.jpg",
  },
  {
    name: "Glass Art",
    slug: "glass-art",
    image: "/images/ideas/glass-art.jpg",
  },
  {
    name: "Paper Crafts",
    slug: "paper-crafts",
    image: "/images/ideas/paper.jpg",
  },
];

const featuredIdeas = [
  {
    id: "1",
    title: "herfa Oak Dining Table",
    category: "Woodworking",
    image: "/images/ideas/table.jpeg",
    artisanName: "Thomas Woodcraft",
    artisanImage: "/images/profiles/man.jpg",
  },
  {
    id: "2",
    title: "Ceramic Dinner Set with Glazed Finish",
    category: "Ceramics & Pottery",
    image: "/images/ideas/ceramic-set.jpg",
    artisanName: "Clay Creations",
    artisanImage: "/images/profiles/clay.png",
  },
  {
    id: "3",
    title: "Hand-woven Wool Tapestry",
    category: "Textiles & Fiber Arts",
    image: "/images/ideas/wool-tapestry.jpg",
    artisanName: "Fiber & Thread",
    artisanImage: "/images/profiles/fiber.jpeg",
  },
  {
    id: "4",
    title: "Forged Iron Wall Sconce",
    category: "Metalwork",
    image: "/images/ideas/wall-sconce.jpg",
    artisanName: "Metal Masters",
    artisanImage: "/images/profiles/metal.png",
  },
  {
    id: "5",
    title: "Handstitched Leather Journal",
    category: "Leathercraft",
    image: "/images/ideas/handstitched-journal.jpg",
    artisanName: "Leather & Stitch",
    artisanImage: "/images/profiles/leather.png",
  },
  {
    id: "6",
    title: "Blown Glass Pendant Light",
    category: "Glass Art",
    image: "/images/ideas/pendant-light.jpg",
    artisanName: "Glass Works Studio",
    artisanImage: "/images/profiles/glass-works.png",
  },
];
