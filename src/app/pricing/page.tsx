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
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Formules tarifaires pour les artisans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choisissez la formule idéale pour mettre en valeur votre
              savoir-faire et entrer en contact avec des clients qui apprécient
              la qualité artisanale
            </p>
            <Tabs defaultValue="monthly" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Mensuel</TabsTrigger>
                <TabsTrigger value="annually">
                  Annuel{" "}
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                    Économisez 20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="text-sm text-gray-500 mt-2">
                  Payez chaque mois, annulez à tout moment
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="text-sm text-gray-500 mt-2">
                  Paiement annuel, obtenez 2 mois gratuits
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
                <CardTitle className="text-2xl">Basique</CardTitle>
                <CardDescription>
                  Parfait pour les artisans débutants
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">0MAD</span>
                  <span className="text-gray-500 ml-2">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Profil de base</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Jusqu&apos;à 10 éléments de portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Visibilité standard dans les recherches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Analyses de base</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Support par email</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Mise en avant dans les catégories</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>URL de boutique personnalisée</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Visibilité sur les réseaux sociaux</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="coming-soon">Commencer</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary relative flex flex-col">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-primary text-white">
                  Le Plus Populaire
                </Badge>
              </div>
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <CardDescription>
                  Pour les artisans établis qui cherchent à se développer
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">99MAD</span>
                  <span className="text-gray-500 ml-2">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Profil amélioré avec section histoire</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Jusqu&apos;à 50 éléments de portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Placement prioritaire dans les recherches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Analyses et insights avancés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Support prioritaire par email et chat</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Mise en avant dans les catégories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>URL de boutique personnalisée</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                    <span>Visibilité sur les réseaux sociaux</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="coming-soon">Commencer</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Master Plan */}
            <Card className="border-2 border-gray-200 flex flex-col">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Maître</CardTitle>
                <CardDescription>
                  Pour les maîtres artisans et les ateliers
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">149MAD</span>
                  <span className="text-gray-500 ml-2">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Profil premium avec présentation vidéo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Éléments de portfolio illimités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Placement optimal dans les recherches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Tableau de bord d&apos;analyses complet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Gestionnaire de compte dédié</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Mise en avant sur la page d&apos;accueil et dans les
                      catégories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>URL personnalisée et options de marque</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Visibilité sur les réseaux sociaux</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="coming-soon">Commencer</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Comparer les Fonctionnalités
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-medium">
                    Fonctionnalité
                  </th>
                  <th className="text-center py-4 px-4 font-medium">Basique</th>
                  <th className="text-center py-4 px-4 font-medium">
                    Professionnel
                  </th>
                  <th className="text-center py-4 px-4 font-medium">Maître</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span>Éléments de Portfolio</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">
                              Nombre d&apos;images, vidéos et projets que vous
                              pouvez présenter dans votre portfolio
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4">50</td>
                  <td className="text-center py-4 px-4">Illimité</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span>Visibilité sur les réseaux sociaux</span>
                    </div>
                  </td>
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
                <tr className="border-b">
                  <td className="py-4 px-4">Mise en Avant</td>
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
                  <td className="py-4 px-4">Annonces d&apos;Ateliers</td>
                  <td className="text-center py-4 px-4">2</td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4">Illimité</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">URL Personnalisée</td>
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
                  <td className="py-4 px-4">Analyses</td>
                  <td className="text-center py-4 px-4">Basiques</td>
                  <td className="text-center py-4 px-4">Avancées</td>
                  <td className="text-center py-4 px-4">Complètes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4">
                    Email & Chat Prioritaires
                  </td>
                  <td className="text-center py-4 px-4">Gestionnaire Dédié</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Présentation Vidéo</td>
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
            Ce que Disent Nos Artisans
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
                  &ldquo;Depuis que j&apos;ai opté pour le plan Professionnel,
                  ma visibilité a considérablement augmenté. Je reçois plus de
                  demandes et de ventes que jamais. Les analyses m&apos;aident à
                  comprendre ce que recherchent les clients.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/images/profiles/clay.png"
                      alt="Amina Benali"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Amina Benali</h4>
                    <p className="text-sm text-gray-500">Artiste Céramiste</p>
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
                  &ldquo;Le plan Maître a transformé mon entreprise de
                  menuiserie. Les ventes sans commission ont à elles seules
                  couvert l&apos;abonnement dès le premier mois. Le gestionnaire
                  de compte dédié a été incroyablement utile.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/images/profiles/man.jpg"
                      alt="Youssef Alami"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Youssef Alami</h4>
                    <p className="text-sm text-gray-500">Maître Menuisier</p>
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
                  &ldquo;J&apos;ai commencé avec le plan Basique quand je
                  débutais mon entreprise de bijoux. Au fur et à mesure de ma
                  croissance, j&apos;ai évolué vers le plan Professionnel. La
                  plateforme a été essentielle pour m&apos;aider à construire ma
                  marque et à me connecter avec les clients.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src="/images/jewelers.jpg"
                      alt="Nadia Tazi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Nadia Tazi</h4>
                    <p className="text-sm text-gray-500">Créatrice de Bijoux</p>
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
            Questions Fréquemment Posées
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Puis-je changer de plan ultérieurement ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, vous pouvez passer à un plan supérieur ou inférieur à
                  tout moment. Lors d&apos;une mise à niveau, la différence au
                  prorata sera facturée pour le reste de votre cycle de
                  facturation. Lors d&apos;un passage à un plan inférieur, le
                  nouveau tarif s&apos;appliquera au début de votre prochain
                  cycle de facturation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Y a-t-il un essai gratuit disponible ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons un plan gratuit basique. Vous pouvez
                  explorer toutes les fonctionnalités et avantages avant de vous
                  engager dans un abonnement. Aucune carte de crédit n&apos;est
                  requise pour commencer votre essai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Quels modes de paiement acceptez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous acceptons toutes les principales cartes de crédit (Visa,
                  Mastercard, American Express, Discover), PayPal et les
                  virements bancaires pour les plans annuels. Tous les paiements
                  sont traités en toute sécurité par nos partenaires de
                  paiement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Puis-je annuler mon abonnement à tout moment ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, vous pouvez annuler votre abonnement à tout moment depuis
                  les paramètres de votre compte. Si vous annulez, vous aurez
                  toujours accès aux fonctionnalités de votre plan jusqu&apos;à
                  la fin de votre cycle de facturation en cours. Nous ne
                  proposons pas de remboursements pour les mois partiels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Proposez-vous des réductions pour les collectifs
                  d&apos;artisans ou les ateliers ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons des tarifs spéciaux pour les collectifs
                  d&apos;artisans, les ateliers avec plusieurs artisans et les
                  établissements d&apos;enseignement. Veuillez contacter notre
                  équipe commerciale à sales@herfa.ma pour discuter de vos
                  besoins spécifiques et obtenir un devis personnalisé.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
