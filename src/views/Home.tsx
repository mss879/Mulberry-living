"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Wifi, Car, Shield, Eye, Star, MapPin, Bed, Users, Home as HomeIcon, Check, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { propertyData, testimonials, whyChooseUs, roomTypes, experiences } from "@/lib/mock-data";
import heroImage from "@/assets/hero-villa.jpg";
import interiorImage from "@/assets/villa-interior.jpg";
import poolImage from "@/assets/villa-pool.jpg";
import terraceImage from "@/assets/villa-terrace.jpg";
import bedroomImage from "@/assets/villa-bedroom.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { number: "200+", label: "Happy Guests" },
  { number: "5★", label: "Rating" },
  { number: "3", label: "Room Types" },
  { number: "24/7", label: "Support" },
];

const highlightAmenities = [
  { icon: Wifi, label: "Free WiFi", description: "High-speed internet" },
  { icon: Car, label: "Free Parking", description: "Secure parking space" },
  { icon: Shield, label: "24/7 Security", description: "Safe & protected" },
  { icon: Eye, label: "Rooftop Views", description: "Stunning panorama" },
];

const roomIcons = {
  private: Bed,
  dorm: Users,
  apartment: HomeIcon,
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Full Screen with Glass Overlay */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container-wide w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-primary-foreground"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm md:text-base font-medium mb-4 tracking-widest uppercase opacity-80"
              >
                Mulberry Living • Negombo, Sri Lanka
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="heading-display mb-6 text-primary-foreground"
              >
                {propertyData.headline}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl opacity-80 mb-10 max-w-xl leading-relaxed"
              >
                {propertyData.summary}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/booking">
                    Book Your Stay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 backdrop-blur-sm">
                  <a href="https://wa.me/94779900394" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Cards - Glass Effect */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card-dark p-6 text-center"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section - Asymmetric Layout */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="lg:col-span-5"
            >
              <motion.p variants={fadeInUp} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Our Philosophy
              </motion.p>
              <motion.h2 variants={fadeInUp} className="heading-section mb-6">
                A home away from home in tropical Sri Lanka
              </motion.h2>
              <motion.p variants={fadeInUp} className="body-large mb-8">
                Whether you're a solo traveler, a couple on a beach getaway, or a family exploring the island — we've got you covered. Comfy stays, real local experiences, and friendly vibes.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button asChild size="lg">
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="col-span-7 image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={interiorImage.src}
                    alt="Mulberry Living interior"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="col-span-5 image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={poolImage.src}
                    alt="Common area"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="col-span-5 image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={bedroomImage.src}
                    alt="Bedroom"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="col-span-7 image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={terraceImage.src}
                    alt="Rooftop view"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats with Glass Cards */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="heading-section mb-6">
              Why Guests Choose Mulberry Living
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-background border border-border hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{reason}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities - Premium Grid */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Premium Amenities
              </p>
              <h2 className="heading-section mb-6 text-background">
                Everything you need for a perfect stay
              </h2>
              <p className="text-lg text-background/70 mb-8 leading-relaxed">
                From high-speed WiFi to stunning rooftop views, we've thought of everything to make your stay comfortable and memorable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {highlightAmenities.map((amenity, i) => (
                  <motion.div
                    key={amenity.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-background/10">
                      <amenity.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-background mb-1">{amenity.label}</h4>
                      <p className="text-sm text-background/60">{amenity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src={heroImage.src}
                  alt="Mulberry Living amenities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">5.0 Rating</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "The best accommodation in Negombo. Clean, friendly, and perfectly located."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stay Your Way - Room Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Accommodations
            </motion.p>
            <motion.h2 variants={fadeInUp} className="heading-section mb-6">
              Stay Your Way
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large max-w-2xl mx-auto">
              Choose the perfect space for your trip, from private comfort to social dorm living.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {roomTypes.map((room, index) => {
              const IconComponent = roomIcons[room.id as keyof typeof roomIcons];
              return (
                <motion.div
                  key={room.id}
                  variants={fadeInUp}
                  className="group p-8 rounded-3xl bg-card border border-border hover-lift relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="heading-card mb-2">{room.name}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{room.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>
                    <ul className="space-y-3 mb-6">
                      {room.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Best for:</span> {room.bestFor}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/property">
                View All Room Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Extra Services
              </p>
              <h2 className="heading-section mb-6">
                Curated Experiences
              </h2>
              <p className="body-large mb-8">
                Make your trip smoother and more memorable with optional add-ons.
              </p>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover-lift"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                      <Play className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{exp.name}</h3>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={poolImage}
                    alt="Experience 1"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={terraceImage}
                    alt="Experience 2"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={interiorImage}
                    alt="Experience 3"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="image-zoom rounded-2xl overflow-hidden"
                >
                  <img
                    src={bedroomImage}
                    alt="Experience 4"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <img
                src={heroImage.src}
                alt="Mulberry Living location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              
              {/* Location Pin Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Negombo, Sri Lanka</h4>
                    <p className="text-sm text-muted-foreground">{propertyData.contact?.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeInUp} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Location
              </motion.p>
              <motion.h2 variants={fadeInUp} className="heading-section mb-6">
                Right Where You Need to Be
              </motion.h2>
              <motion.p variants={fadeInUp} className="body-large mb-8">
                {propertyData.locationText}
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                {propertyData.contact?.distances.map((d, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-secondary">
                    <span className="text-muted-foreground">{d.place}</span>
                    <span className="font-semibold text-foreground">{d.distance}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeInUp} className="heading-section text-background mb-6">
              What Our Guests Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="glass-card-dark p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-background/90 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-background">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-background">{testimonial.name}</p>
                    <p className="text-sm text-background/60">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${terraceImage.src})` }}
        >
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container-narrow text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="heading-section text-background mb-6">
              Ready to Experience Mulberry Living?
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large text-background/70 mb-10 max-w-2xl mx-auto">
              Book your stay today and discover why guests love our cozy, friendly accommodation in Negombo.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/booking">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-background/30 text-background bg-transparent hover:bg-background/10">
                <a href="https://wa.me/94779900394" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
