import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="section">
      <h1 className="my-10 font-bold text-3xl md:text-5xl">Contactez Nous</h1>
      <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-2 gap-8">
        <form className="grid gap-3">
          <div>
            <label htmlFor="name">Name</label>
            <Input required name="name" placeholder="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              required
              name="email"
              placeholder="email@domain.com"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Textarea
              className="h-40"
              required
              name="message"
              placeholder="message..."
              id="message"
            ></Textarea>
          </div>
          <Button>
            Send Message
            <Send />
          </Button>
        </form>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[auto_1fr] gap-x-2">
            <div className="bg-primary text-background p-2 rounded-full">
              <Phone className="w-4 h-4" />
            </div>
            <h2 className="font-semibold text-xl">Appeler</h2>
            <p className="col-start-2">+212 651 501 766</p>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-2">
            <div className="bg-primary text-background p-2 rounded-full">
              <MapPin className="w-4 h-4" />
            </div>
            <h2 className="font-semibold text-xl">Se rendre visite</h2>
            <p className="col-start-2">Ait melloul, Maroc</p>
          </div>

          <div className="flex gap-6 mt-6 items-center">
            <Link target="_blank" title="tiktok" href="https://www.tiktok.com">
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </Link>
            <Link href="#" target="_blank">
              <Instagram />
            </Link>
            <Link href="#" target="_blank">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
