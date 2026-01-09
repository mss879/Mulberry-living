"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/mulberry-logo-white.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stays", label: "Stays" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHome
          ? "glass shadow-glass py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {isScrolled || !isHome ? (
              <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
                Mulberry Living
              </span>
            ) : (
              <Image
                src={logo}
                alt="Mulberry Living"
                height={40}
                width={180}
                priority
                className="h-10 w-auto"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative",
                  pathname === link.href
                    ? isScrolled || !isHome
                      ? "text-foreground"
                      : "text-primary-foreground"
                    : isScrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                  pathname === link.href && "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className={cn(
                isScrolled || !isHome 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              )}
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled || !isHome ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled || !isHome ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-foreground text-background hover:bg-foreground/90">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
