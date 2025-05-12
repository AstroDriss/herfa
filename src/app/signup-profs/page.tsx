"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Check,
  ChevronRight,
  Upload,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Schéma de validation pour l&apos;étape 1
const personalInfoSchema = z.object({
  prenom: z
    .string()
    .optional(),
  nom: z
    .string()
    .optional(),
  email: z
    .string()
    .optional(),
  telephone: z
    .string()
    .optional(),
  nomEntreprise: z.string().optional(),
  ville: z.string().optional(),
  adresse: z.string().optional() ,
});

// Schéma de validation pour l&apos;étape 2
const craftInfoSchema = z.object({
  categorie: z
    .string()
    .optional(),
  specialites: z
    .array(z.string())
    .optional(),
  description: z.string().optional(),
  experience: z.string().optional(),
  services: z
    .array(z.string())
    .optional(),
});

// Schéma de validation pour l&apos;étape 3
const portfolioSchema = z.object({
  photoProfil: z
    .string()
    .optional(),
  photoCouverture: z
    .string()
    .optional(),
  portfolioImages: z
    .array(z.string())
    .optional(),
});

// Schéma de validation pour l&apos;étape 4
const planSchema = z.object({
  plan: z.string().optional(),
  facturation: z
    .string()
    .optional(),
});

// Schéma de validation pour l&apos;étape 5
const paymentSchema = z.object({
  titulaireCarte: z
    .string()
    .min(3, { message: "Veuillez entrer le nom du titulaire de la carte" }),
  numeroCarte: z
    .string()
    .min(16, { message: "Veuillez entrer un numéro de carte valide" }),
  dateExpiration: z
    .string()
    .min(5, { message: "Veuillez entrer une date d&apos;expiration valide" }),
  cvc: z.string().min(3, { message: "Veuillez entrer un code CVC valide" }),
  conditionsAcceptees: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions d&apos;utilisation",
  }),
});

export default function InscriptionProfessionnelPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const totalSteps = 5;

  // Formulaire pour l&apos;étape 1
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      nomEntreprise: "",
      ville: "",
      adresse: "",
    },
  });

  // Formulaire pour l&apos;étape 2
  const craftInfoForm = useForm<z.infer<typeof craftInfoSchema>>({
    resolver: zodResolver(craftInfoSchema),
    defaultValues: {
      categorie: "",
      specialites: [],
      description: "",
      experience: "",
      services: [],
    },
  });

  // Formulaire pour l&apos;étape 3
  const portfolioForm = useForm<z.infer<typeof portfolioSchema>>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      photoProfil: "",
      photoCouverture: "",
      portfolioImages: [],
    },
  });

  // Formulaire pour l&apos;étape 4
  const planForm = useForm<z.infer<typeof planSchema>>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      plan: "",
      facturation: "mensuel",
    },
  });

  // Formulaire pour l&apos;étape 5
  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      titulaireCarte: "",
      numeroCarte: "",
      dateExpiration: "",
      cvc: "",
      conditionsAcceptees: false,
    },
  });

  // Gérer la soumission de l&apos;étape 1
  const onSubmitPersonalInfo = (data: z.infer<typeof personalInfoSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  // Gérer la soumission de l&apos;étape 2
  const onSubmitCraftInfo = (data: z.infer<typeof craftInfoSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  // Gérer la soumission de l&apos;étape 3
  const onSubmitPortfolio = (data: z.infer<typeof portfolioSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(4);
  };

  // Gérer la soumission de l&apos;étape 4
  const onSubmitPlan = (data: z.infer<typeof planSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(5);
  };

  // Gérer la soumission de l&apos;étape 5
  const onSubmitPayment = (data: z.infer<typeof paymentSchema>) => {
    setFormData({ ...formData, ...data });
    // Ici, vous enverriez normalement les données au serveur
    console.log("Données complètes du formulaire:", { ...formData, ...data });
    // Rediriger vers une page de confirmation
    router.push("/inscription-confirmation");
  };

  // Fonction pour revenir à l&apos;étape précédente
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container px-4 py-12 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">
              Rejoignez notre communauté d&apos;artisans
            </h1>
            <p className="mt-2 text-gray-600">
              Créez votre profil professionnel et connectez-vous avec des
              clients qui apprécient le travail artisanal
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index < step ? "text-primary" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      index + 1 === step
                        ? "bg-primary text-white"
                        : index + 1 < step
                        ? "bg-primary/20 text-primary"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {index + 1 < step ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="mt-2 text-xs font-medium">
                    {index === 0
                      ? "Informations"
                      : index === 1
                      ? "Métier"
                      : index === 2
                      ? "Portfolio"
                      : index === 3
                      ? "Abonnement"
                      : "Paiement"}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute h-1 w-full bg-gray-200"></div>
              <div
                className="absolute h-1 bg-primary transition-all duration-300"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Parlez-nous de vous et de votre entreprise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...personalInfoForm}>
                  <form
                    onSubmit={personalInfoForm.handleSubmit(
                      onSubmitPersonalInfo
                    )}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={personalInfoForm.control}
                        name="prenom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom*</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={personalInfoForm.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom*</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={personalInfoForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="votre@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={personalInfoForm.control}
                        name="telephone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+212 6XX XX XX XX"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={personalInfoForm.control}
                      name="nomEntreprise"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Nom de l&apos;entreprise ou de l&apos;atelier
                            (optionnel)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nom de votre entreprise ou atelier"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalInfoForm.control}
                      name="ville"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ville*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez votre ville" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="casablanca">
                                Casablanca
                              </SelectItem>
                              <SelectItem value="rabat">Rabat</SelectItem>
                              <SelectItem value="marrakech">
                                Marrakech
                              </SelectItem>
                              <SelectItem value="fes">Fès</SelectItem>
                              <SelectItem value="tanger">Tanger</SelectItem>
                              <SelectItem value="agadir">Agadir</SelectItem>
                              <SelectItem value="essaouira">
                                Essaouira
                              </SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalInfoForm.control}
                      name="adresse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Votre adresse complète"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button type="submit">
                        Continuer <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Craft Information */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Informations sur votre métier</CardTitle>
                <CardDescription>
                  Parlez-nous de votre artisanat et de vos spécialités
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...craftInfoForm}>
                  <form
                    onSubmit={craftInfoForm.handleSubmit(onSubmitCraftInfo)}
                    className="space-y-6"
                  >
                    <FormField
                      control={craftInfoForm.control}
                      name="categorie"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Catégorie principale*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez votre catégorie principale" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="menuiserie">
                                Menuiserie & Ébénisterie
                              </SelectItem>
                              <SelectItem value="ceramique">
                                Céramique & Poterie
                              </SelectItem>
                              <SelectItem value="textile">
                                Textile & Arts de la Fibre
                              </SelectItem>
                              <SelectItem value="metal">
                                Métallurgie & Forge
                              </SelectItem>
                              <SelectItem value="cuir">
                                Maroquinerie & Travail du Cuir
                              </SelectItem>
                              <SelectItem value="bijouterie">
                                Bijouterie & Joaillerie
                              </SelectItem>
                              <SelectItem value="verre">
                                Art du Verre
                              </SelectItem>
                              <SelectItem value="papier">
                                Arts du Papier
                              </SelectItem>
                              <SelectItem value="zellige">
                                Zellige & Mosaïque
                              </SelectItem>
                              <SelectItem value="tadelakt">
                                Tadelakt & Enduits Traditionnels
                              </SelectItem>
                              <SelectItem value="vannerie">Vannerie</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={craftInfoForm.control}
                      name="specialites"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Spécialités*</FormLabel>
                            <FormDescription>
                              Sélectionnez toutes vos spécialités
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {specialites.map((specialite) => (
                              <FormField
                                key={specialite.id}
                                control={craftInfoForm.control}
                                name="specialites"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={specialite.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            specialite.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  specialite.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== specialite.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {specialite.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={craftInfoForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description de votre activité*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez votre activité, votre parcours, vos techniques et ce qui rend votre travail unique..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Minimum 50 caractères. Cette description apparaîtra
                            sur votre profil public.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={craftInfoForm.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Niveau d&apos;expérience*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="apprenti" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Apprenti (1-3 ans d&apos;expérience)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="compagnon" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Compagnon (3-10 ans d&apos;expérience)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="maitre" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Maître Artisan (10+ ans d&apos;expérience)
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={craftInfoForm.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Services proposés*</FormLabel>
                            <FormDescription>
                              Sélectionnez tous les services que vous proposez
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {services.map((service) => (
                              <FormField
                                key={service.id}
                                control={craftInfoForm.control}
                                name="services"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={service.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            service.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  service.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== service.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {service.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                      </Button>
                      <Button type="submit">
                        Continuer <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Portfolio */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Votre portfolio</CardTitle>
                <CardDescription>
                  Téléchargez des photos pour présenter votre travail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...portfolioForm}>
                  <form
                    onSubmit={portfolioForm.handleSubmit(onSubmitPortfolio)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={portfolioForm.control}
                        name="photoProfil"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Photo de profil*</FormLabel>
                            <FormControl>
                              <div className="flex flex-col items-center">
                                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
                                  {field.value ? (
                                    <Image
                                      src={field.value || "/placeholder.svg"}
                                      alt="Photo de profil"
                                      fill
                                      className="object-cover"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full flex-col items-center justify-center text-gray-500">
                                      <Upload className="h-6 w-6" />
                                      <span className="mt-1 text-xs">
                                        Télécharger
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    // Simuler le téléchargement d&apos;une image
                                    field.onChange(
                                      "/placeholder.svg?height=200&width=200"
                                    );
                                  }}
                                >
                                  Choisir une photo
                                </Button>
                              </div>
                            </FormControl>
                            <FormDescription>
                              Format carré recommandé, minimum 400x400px
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={portfolioForm.control}
                        name="photoCouverture"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Photo de couverture*</FormLabel>
                            <FormControl>
                              <div className="flex flex-col">
                                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md border-2 border-dashed border-gray-300 bg-gray-50">
                                  {field.value ? (
                                    <Image
                                      src={field.value || "/placeholder.svg"}
                                      alt="Photo de couverture"
                                      fill
                                      className="object-cover"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full flex-col items-center justify-center text-gray-500">
                                      <Upload className="h-6 w-6" />
                                      <span className="mt-1 text-xs">
                                        Télécharger
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="self-start"
                                  onClick={() => {
                                    // Simuler le téléchargement d&apos;une image
                                    field.onChange(
                                      "/placeholder.svg?height=400&width=800"
                                    );
                                  }}
                                >
                                  Choisir une photo
                                </Button>
                              </div>
                            </FormControl>
                            <FormDescription>
                              Format paysage recommandé, minimum 1200x600px
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={portfolioForm.control}
                      name="portfolioImages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Images de portfolio*</FormLabel>
                          <FormDescription>
                            Téléchargez au moins 3 images de vos meilleures
                            créations (maximum 10)
                          </FormDescription>
                          <FormControl>
                            <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
                              {Array.from({ length: 10 }).map((_, index) => (
                                <div
                                  key={index}
                                  className="relative aspect-square overflow-hidden rounded-md border-2 border-dashed border-gray-300 bg-gray-50"
                                >
                                  {field.value[index] ? (
                                    <>
                                      <Image
                                        src={
                                          field.value[index] ||
                                          "/placeholder.svg"
                                        }
                                        alt={`Portfolio image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                      />
                                      <Button
                                        type="button"
                                        variant="destructive"
                                        size="icon"
                                        className="absolute right-1 top-1 h-6 w-6"
                                        onClick={() => {
                                          const newImages = [...field.value];
                                          newImages.splice(index, 1);
                                          field.onChange(newImages);
                                        }}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </>
                                  ) : (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      className="flex h-full w-full flex-col items-center justify-center"
                                      onClick={() => {
                                        // Simuler le téléchargement d&apos;une image
                                        const newImages = [...field.value];
                                        newImages[
                                          index
                                        ] = `/placeholder.svg?height=300&width=300&text=Image+${
                                          index + 1
                                        }`;
                                        field.onChange(newImages);
                                      }}
                                    >
                                      <Upload className="h-6 w-6 text-gray-500" />
                                      <span className="mt-1 text-xs text-gray-500">
                                        Ajouter
                                      </span>
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                      </Button>
                      <Button type="submit">
                        Continuer <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Subscription Plan */}
          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Choisissez votre abonnement</CardTitle>
                <CardDescription>
                  Sélectionnez le plan qui correspond le mieux à vos besoins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...planForm}>
                  <form
                    onSubmit={planForm.handleSubmit(onSubmitPlan)}
                    className="space-y-6"
                  >
                    <FormField
                      control={planForm.control}
                      name="facturation"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormControl>
                            <Tabs
                              defaultValue={field.value}
                              onValueChange={field.onChange}
                              className="w-full max-w-md mx-auto"
                            >
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="mensuel">
                                  Mensuel
                                </TabsTrigger>
                                <TabsTrigger value="annuel">
                                  Annuel{" "}
                                  <Badge className="ml-2 bg-green-100 text-green-800">
                                    -20%
                                  </Badge>
                                </TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={planForm.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid gap-4 md:grid-cols-3"
                            >
                              <FormItem>
                                <FormControl>
                                  <RadioGroupItem
                                    value="basique"
                                    className="sr-only peer"
                                    id="basique"
                                  />
                                </FormControl>
                                <Label
                                  htmlFor="basique"
                                  className="flex flex-col rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <span className="text-lg font-semibold">
                                    Basique
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    Pour les artisans débutants
                                  </span>
                                  <span className="mt-2 text-2xl font-bold">
                                    {field.value === "mensuel"
                                      ? "0MAD"
                                      : "0MAD"}
                                    <span className="text-sm font-normal text-gray-500">
                                      /
                                      {field.value === "mensuel"
                                        ? "mois"
                                        : "an"}
                                    </span>
                                  </span>
                                  <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Profil de base</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Jusqu&apos;à 10 photos</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Commission de 10%</span>
                                    </li>
                                  </ul>
                                </Label>
                              </FormItem>

                              <FormItem>
                                <FormControl>
                                  <RadioGroupItem
                                    value="professionnel"
                                    className="sr-only peer"
                                    id="professionnel"
                                  />
                                </FormControl>
                                <Label
                                  htmlFor="professionnel"
                                  className="relative flex flex-col rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <Badge className="absolute -right-2 -top-2 bg-primary">
                                    Populaire
                                  </Badge>
                                  <span className="text-lg font-semibold">
                                    Professionnel
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    Pour les artisans établis
                                  </span>
                                  <span className="mt-2 text-2xl font-bold">
                                    {field.value === "mensuel"
                                      ? "99MAD"
                                      : "99MAD"}
                                    <span className="text-sm font-normal text-gray-500">
                                      /
                                      {field.value === "mensuel"
                                        ? "mois"
                                        : "an"}
                                    </span>
                                  </span>
                                  <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Profil amélioré</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Jusqu&apos;à 50 photos</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Commission de 7%</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Mise en avant catégories</span>
                                    </li>
                                  </ul>
                                </Label>
                              </FormItem>

                              <FormItem>
                                <FormControl>
                                  <RadioGroupItem
                                    value="maitre"
                                    className="sr-only peer"
                                    id="maitre"
                                  />
                                </FormControl>
                                <Label
                                  htmlFor="maitre"
                                  className="flex flex-col rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <span className="text-lg font-semibold">
                                    Maître
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    Pour les maîtres artisans
                                  </span>
                                  <span className="mt-2 text-2xl font-bold">
                                    {field.value === "mensuel"
                                      ? "149MAD"
                                      : "146MAD"}
                                    <span className="text-sm font-normal text-gray-500">
                                      /
                                      {field.value === "mensuel"
                                        ? "mois"
                                        : "an"}
                                    </span>
                                  </span>
                                  <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Profil premium</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Photos illimitées</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>0% de commission</span>
                                    </li>
                                    <li className="flex items-center">
                                      <Check className="mr-2 h-4 w-4 text-green-500" />
                                      <span>Support dédié</span>
                                    </li>
                                  </ul>
                                </Label>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                      </Button>
                      <Button type="submit">
                        Continuer <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Payment Information */}
          {step === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Informations de paiement</CardTitle>
                <CardDescription>
                  Vos informations de paiement sont sécurisées. Aucun
                  prélèvement ne sera effectué avant la fin de votre période
                  d&apos;essai.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...paymentForm}>
                  <form
                    onSubmit={paymentForm.handleSubmit(onSubmitPayment)}
                    className="space-y-6"
                  >
                    <div className="rounded-lg border p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Récapitulatif</h3>
                          <p className="text-sm text-gray-500">
                            Plan {formData.plan}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            {formData.plan === "basique"
                              ? formData.facturation === "mensuel"
                                ? "0MAD"
                                : "0MAD"
                              : formData.plan === "professionnel"
                              ? formData.facturation === "mensuel"
                                ? "199MAD"
                                : "199MAD"
                              : formData.facturation === "mensuel"
                              ? "149MAD"
                              : "149MAD"}
                          </p>
                          <p className="text-sm text-gray-500">
                            Facturation{" "}
                            {formData.facturation === "mensuel"
                              ? "mensuelle"
                              : "annuelle"}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Essai gratuit de 14 jours</p>
                        <p>Annulation possible à tout moment</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={paymentForm.control}
                        name="titulaireCarte"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom du titulaire de la carte*</FormLabel>
                            <FormControl>
                              <Input placeholder="Nom complet" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={paymentForm.control}
                        name="numeroCarte"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de carte*</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="1234 5678 9012 3456"
                                  {...field}
                                />
                                <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={paymentForm.control}
                          name="dateExpiration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date d&apos;expiration*</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/AA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={paymentForm.control}
                          name="cvc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Code de sécurité (CVC)*</FormLabel>
                              <FormControl>
                                <Input placeholder="123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={paymentForm.control}
                      name="conditionsAcceptees"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="conditionsAcceptees"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel htmlFor="conditionsAcceptees">
                              J&apos;accepte les{" "}
                              <Link
                                href="/conditions"
                                className="text-primary underline"
                              >
                                conditions d&apos;utilisation
                              </Link>{" "}
                              et la{" "}
                              <Link
                                href="/confidentialite"
                                className="text-primary underline"
                              >
                                politique de confidentialité
                              </Link>
                              *
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                      </Button>
                      <Button type="submit">
                        Finaliser l&apos;inscription
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

    </div>
  );
}

// Données pour les spécialités
const specialites = [
  { id: "meubles", label: "Meubles" },
  { id: "decoration", label: "Décoration" },
  { id: "ustensiles", label: "Ustensiles" },
  { id: "bijoux", label: "Bijoux" },
  { id: "accessoires", label: "Accessoires" },
  { id: "vetements", label: "Vêtements" },
  { id: "maroquinerie", label: "Maroquinerie" },
  { id: "ceramique", label: "Céramique" },
  { id: "verrerie", label: "Verrerie" },
  { id: "textile", label: "Textile" },
  { id: "sculpture", label: "Sculpture" },
  { id: "zellige", label: "Zellige" },
  { id: "tadelakt", label: "Tadelakt" },
  { id: "vannerie", label: "Vannerie" },
  { id: "autre", label: "Autre" },
];

// Données pour les services
const services = [
  { id: "commandes-personnalisees", label: "Commandes personnalisées" },
  { id: "ateliers", label: "Ateliers & cours" },
  { id: "restauration", label: "Restauration" },
  { id: "consultation", label: "Consultation" },
  { id: "installation", label: "Installation" },
  { id: "livraison", label: "Livraison" },
  { id: "vente-en-ligne", label: "Vente en ligne" },
  { id: "vente-en-boutique", label: "Vente en boutique" },
];
