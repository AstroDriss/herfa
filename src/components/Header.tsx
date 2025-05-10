"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// TODO: make it responsive
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="z-50">
      <div className="wrapper">
        <Link href="/">
          <img
            src="/herfa.svg"
            alt=""
            width="46"
            height="46"
            title="herfa - home"
          />
        </Link>

        <Button
          className="md:hidden"
          aria-label="menu"
          variant="ghost"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-10! h-10!" />
          ) : (
            <Menu className="w-10! h-10!" />
          )}
        </Button>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/ideas">Ideas</Link>
            </li>
            <li>
              <Link href="/professionals">Profs</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link className="md:hidden" href="/coming-soon">
                Register →
              </Link>
            </li>
          </ul>
        </nav>

        <Link className="hidden md:block" href="/coming-soon">
          Register →
        </Link>
      </div>
    </header>
  );
};

export default Header;
