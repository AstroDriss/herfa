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
              Trouvez des Artisans Qualifiés
            </h1>
            <p className="text-xl text-gray-600">
              Connectez-vous avec des professionnels talentueux qui créent de
              magnifiques objets artisanaux.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Recherchez des artisans ou des artisans d’art..."
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Emplacement"
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
              <h3 className="font-semibold text-lg mb-4">
                Catégories d&apos;Artisanat
              </h3>
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
              <h3 className="font-semibold text-lg mb-4">Emplacement</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un emplacement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anywhere">N&apos;importe où</SelectItem>
                  <SelectItem value="local">Dans un rayon de 80 km</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Niveau d&apos;Expérience
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="master"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="master" className="ml-2 text-sm">
                    Maître Artisan
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="journeyman"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="journeyman" className="ml-2 text-sm">
                    Compagnon
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="apprentice"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="apprentice" className="ml-2 text-sm">
                    Apprenti
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services Offerts</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="custom"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="custom" className="ml-2 text-sm">
                    Commandes Personnalisées
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="workshops"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="workshops" className="ml-2 text-sm">
                    Ateliers et Cours
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="restoration"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="restoration" className="ml-2 text-sm">
                    Restauration
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
              <h3 className="font-semibold text-lg mb-4">Évaluation</h3>
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
                      <span className="ml-1">& Plus</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">Appliquer les filtres</Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Professionnels en Vedette</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Trier par :</span>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommandé</SelectItem>
                    <SelectItem value="rating">Note la plus élevée</SelectItem>
                    <SelectItem value="reviews">Le plus d&apos;avis</SelectItem>
                    <SelectItem value="newest">Le plus récent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6">
              {professionals.map((professional) => (
                <Card key={professional.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="h-full md:w-1/3 px-4">
                        <Image
                          src={professional.coverImage || "/placeholder.svg"}
                          alt={professional.name}
                          fill
                          className="object-cover mx-4 aspect-square md:aspect-auto rounded-md static!"
                        />
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

                        <div className="flex justify-between items-center gap-3">
                          <div>
                            <span className="text-sm font-medium">
                              Services:
                            </span>
                            <span className="text-sm text-gray-600 ml-2">
                              {professional.services.join(", ")}
                            </span>
                          </div>
                          <Link href={`/coming-soon`}>
                            <Button>Voir le profil</Button>
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
                Précédent
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
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Parcourir les Professionnels par Catégorie
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
              Êtes-vous un Artisan Qualifié ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez notre communauté d&apos;artisans et connectez-vous avec
              des clients qui apprécient la qualité artisanale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">Rejoindre en tant que Professionnel</Link>
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
    name: "Menuisiers",
    slug: "menuisiers",
    icon: "/images/woodworker.jpg",
    count: 245,
  },
  {
    name: "Céramistes",
    slug: "ceramistes",
    icon: "/images/ceramicists.jpg",
    count: 189,
  },
  {
    name: "Artistes Textiles",
    slug: "artistes-textiles",
    icon: "/images/textile.jpg",
    count: 176,
  },
  {
    name: "Forgerons",
    slug: "forgerons",
    icon: "/images/metalsmiths.jpg",
    count: 132,
  },
  {
    name: "Maroquiniers",
    slug: "maroquiniers",
    icon: "/images/leatherworkers.jpg",
    count: 98,
  },
  {
    name: "Bijoutiers",
    slug: "bijoutiers",
    icon: "/images/jewelers.jpg",
    count: 215,
  },
  {
    name: "Verriers",
    slug: "verriers",
    icon: "/images/glass-artists.jpg",
    count: 87,
  },
  {
    name: "Artistes Papier",
    slug: "artistes-papier",
    icon: "/images/paper-artists.jpg",
    count: 64,
  },
  {
    name: "Sculpteurs sur Pierre",
    slug: "sculpteurs-pierre",
    icon: "/images/stone-carvers.jpg",
    count: 42,
  },
  {
    name: "Vanniers",
    slug: "vanniers",
    icon: "/images/basket-weavers.jpg",
    count: 38,
  },
  {
    name: "Graveurs",
    slug: "graveurs",
    icon: "/images/printmakers.jpg",
    count: 76,
  },
  {
    name: "Relieurs",
    slug: "relieurs",
    icon: "/images/bookbinders.jpg",
    count: 29,
  },
];

const professionals = [
  {
    id: "1",
    name: "Atelier Bois de Kamal",
    location: "Marrakech, Maroc",
    rating: 5,
    reviews: 48,
    specialties: ["Meubles sur Mesure", "Ébénisterie", "Sculpture sur Bois"],
    description:
      "Maître menuisier avec plus de 20 ans d'expérience dans la création de meubles sur mesure et d'œuvres d'art en bois. Spécialisé dans les bois durables et les techniques traditionnelles d'assemblage.",
    coverImage: "/images/profs/1.jpg",
    services: ["Commandes Personnalisées", "Restauration", "Consultation"],
  },
  {
    id: "2",
    name: "Poteries de Fatima",
    location: "Fès, Maroc",
    rating: 4,
    reviews: 36,
    specialties: [
      "Poterie Fonctionnelle",
      "Sculpture Céramique",
      "Arts de la Table",
    ],
    description:
      "Céramiste contemporaine créant des pièces fonctionnelles et décoratives. Chaque objet est fait à la main en utilisant des techniques traditionnelles de tournage et de façonnage avec des émaux personnalisés.",
    coverImage: "/images/profs/2.jpg",
    services: ["Commandes Personnalisées", "Ateliers", "Commissions"],
  },
  {
    id: "3",
    name: "Collectif Fil & Tissu",
    location: "Essaouira, Maroc",
    rating: 5,
    reviews: 29,
    specialties: [
      "Textiles Tissés à la Main",
      "Teinture Naturelle",
      "Tapisserie",
    ],
    description:
      "Un atelier textile spécialisé dans les articles ménagers et vestimentaires tissés à la main. Toutes les pièces sont créées à l'aide de métiers à tisser traditionnels et de fibres naturelles, avec un accent sur les pratiques durables.",
    coverImage: "/images/profs/3.jpg",
    services: ["Commandes Personnalisées", "Ateliers", "Collaboration"],
  },
  {
    id: "4",
    name: "Forge & Enclume de Hassan",
    location: "Casablanca, Maroc",
    rating: 5,
    reviews: 42,
    specialties: ["Ferronnerie Architecturale", "Métal Décoratif", "Couteaux"],
    description:
      "Forgeron traditionnel créant des pièces en métal forgées à la main pour la maison et le jardin. Spécialisé dans les articles fonctionnels et décoratifs utilisant des techniques ancestrales.",
    coverImage: "/images/profs/4.jpg",
    services: ["Commandes Personnalisées", "Restauration", "Installation"],
  },
];
