"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold">
              Mulberry Living
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              A relaxed, welcoming space in Negombo, Sri Lanka. Private rooms, social dorms, and a full apartment for every type of traveler.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/property" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Rooms & Apartments
              </Link>
              <Link href="/booking" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Book Your Stay
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+94779900394"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                0779900394
              </a>
              <a
                href="https://wa.me/94779900394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>No 25, Rani Mawatha, Ettukala, Negombo, Sri Lanka 11500</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Mulberry Living. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin/login" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Admin
            </Link>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-primary-foreground/40">
           <span className="flex items-center gap-1.5">
             Made by 
             <a 
               href="https://www.arcai.agency" 
               target="_blank" 
               rel="noopener noreferrer"
               className="relative h-8 w-28 block hover:opacity-90 transition-opacity"
             >
                 <Image 
                   src="/arc logo.png" 
                   alt="ARC AI" 
                   fill
                   className="object-contain"
                 />
             </a>
           </span>
           <span className="hidden md:inline text-primary-foreground/20">|</span>
           <span>Powered by Next.js</span>
        </div>
      </div>
    </footer>
  );
}
