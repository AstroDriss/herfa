import comingSoon from "@/assets/coming-soon.jpg";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ComingSoonPage = () => {
  return (
    <section className="section grid gap-6 md:grid-cols-2">
      <div className="flex text-center md:text-start self-center flex-col gap-8">
        <h1 className="font-bold text-4xl leading-tight md:text-6xl text-balance">
          Nous arrivons très bientôt
        </h1>
        <p className="text-2xl">
          L&apos;artisant traditionnel marocain à portée de clic.
        </p>
        <Button asChild>
          <Link href="/">
          Accueil <Home />
          </Link>
        </Button>
      </div>
      <Image src={comingSoon} alt="a man crafting" />
    </section>
  );
};

export default ComingSoonPage;
