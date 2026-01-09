"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Sparkles, ArrowRight, Star, Shield, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { testimonials, propertyData } from "@/lib/mock-data";
import heroImage from "@/assets/hero-villa.jpg";
import terraceImage from "@/assets/villa-terrace.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const values = [
  {
    icon: Heart,
    title: "Comfort You Can Count On",
    description: "Clean rooms, fresh linen, and hot water, every day.",
  },
  {
    icon: Users,
    title: "A Calm, Social Vibe",
    description: "Easy to meet people, easy to rest when you need quiet.",
  },
  {
    icon: Shield,
    title: "Safety and Good Management",
    description: "Secure premises with security and CCTV, plus a team that cares.",
  },
  {
    icon: Sparkles,
    title: "Local Help, Whenever You Want It",
    description: "From airport shuttles to city tours and boat trips, we can help you plan the fun parts too.",
  },
];

const stayOptions = [
  { type: "8 Ensuite Private Rooms", description: "for couples, solo travelers, and digital nomads" },
  { type: "2 Mixed Dorm Rooms", description: "(3 bunk beds each) for budget-friendly social stays" },
  { type: "A Two-Bedroom Apartment", description: "for friends, families, and longer visits" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground container-narrow">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-display mb-4"
          >
            About Mulberry Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            A friendly stay in Negombo, built for travelers
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="heading-section">A Relaxed, Welcoming Space</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mulberry Living is a relaxed, welcoming space in Ettukala, Negombo, created for 
                people who want comfort, cleanliness, and connection without the high price tag. 
                We combine the best of both worlds: the privacy of ensuite rooms, the social 
                energy of dorm living, and the flexibility of a full two-bedroom apartment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are in Sri Lanka for a quick stop near the airport, a beach break, 
                or a longer adventure, our goal is simple: help you settle in fast and feel at home.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src={terraceImage.src}
                alt="Mulberry Living space"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="heading-section mb-4">
              What We Stand For
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-background border border-border/50"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-card mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Space Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="heading-section mb-4">
              The Space
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              Mulberry Living offers three stay options, so you can choose what fits your trip.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {stayOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50"
              >
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-foreground">{option.type}</span>
                  <span className="text-muted-foreground"> – {option.description}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            You'll also enjoy free Wi-Fi, parking, and a rooftop space to unwind with a view.
            <br />
            Housekeeping is available on request, and laundry services are available at an additional charge.
          </motion.p>
        </div>
      </section>

      {/* Why Negombo Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Location</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="heading-section mb-6">
              Why Negombo, Why Ettukala
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
              Negombo is one of the easiest places to start or end your Sri Lanka trip. You're close 
              to the airport, minutes from the beach, and surrounded by restaurants, cafes, 
              supermarkets, and transport links.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
              Mulberry Living is located in Ettukala, a convenient area that keeps you connected 
              while still feeling relaxed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="heading-section mb-8">
              Our Promise
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large mb-8">
              When you stay with us, you can expect:
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Friendly support and local guidance when you need it</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">A clean, comfortable place to recharge</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">A welcoming atmosphere that suits both quiet travelers and social ones</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="heading-section mb-4">
                Guest Experiences
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeInUp}
                  className="p-8 rounded-2xl bg-background border border-border/50"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="heading-section mb-4">
              Come Be Our Guest
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Experience the warmth and comfort of Mulberry Living for yourself. We can't wait to welcome you.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero-outline" size="xl">
                <Link href="/booking">
                  Book Your Stay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href="/contact">Message Us</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-8 text-sm opacity-80">
              {propertyData.contact?.address}
              <br />
              <a href="tel:+94779900394" className="hover:underline">Telephone: {propertyData.contact?.phone}</a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
