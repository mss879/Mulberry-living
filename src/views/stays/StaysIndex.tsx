"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bed, Users, Home as HomeIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useStays } from '@/hooks/useStays';
import { Skeleton } from '@/components/ui/skeleton';
import heroImage from '@/assets/hero-villa.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'private-rooms': Bed,
  'dorms': Users,
  'apartment': HomeIcon,
};

export default function StaysIndex() {
  const { data: stays, isLoading } = useStays();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent mb-4 tracking-widest uppercase">
              Our Accommodations
            </motion.p>
            <motion.h1 variants={fadeInUp} className="heading-display text-primary-foreground mb-4">
              Stay Your Way
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/80 max-w-2xl">
              Choose the perfect space for your trip — from private comfort to social dorm living, 
              or a full apartment for longer stays.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stays Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-3xl border border-border p-8">
                  <Skeleton className="h-12 w-12 rounded-2xl mb-6" />
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-20 w-full mb-6" />
                  <div className="space-y-3 mb-6">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid md:grid-cols-3 gap-8"
            >
              {stays?.map((stay) => {
                const IconComponent = iconMap[stay.slug] || Bed;
                const amenities = (stay.amenities as string[]) || [];
                const available = stay.inventory_available ?? stay.inventory_total ?? 1;
                const total = stay.inventory_total ?? 1;
                const isAvailable = available > 0;
                const unitType = stay.inventory_type === 'bed' ? 'beds' : stay.inventory_type === 'unit' ? 'unit' : 'rooms';

                return (
                  <motion.div
                    key={stay.id}
                    variants={fadeInUp}
                    className="group relative rounded-3xl bg-card border border-border overflow-hidden hover-lift"
                  >
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${
                      isAvailable 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-destructive/10 text-destructive border border-destructive/20'
                    }`}>
                      {isAvailable ? `${available} ${unitType} left` : 'Fully Booked'}
                    </div>

                    <div className="p-8">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="h-7 w-7 text-accent" />
                        </div>
                        
                        <h3 className="heading-card mb-2">{stay.title}</h3>
                        <p className="text-sm text-accent font-medium mb-4">{stay.headline}</p>
                        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                          {stay.summary}
                        </p>
                        
                        <ul className="space-y-3 mb-6">
                          {amenities.slice(0, 4).map((amenity, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-accent shrink-0" />
                              {amenity}
                            </li>
                          ))}
                        </ul>
                        
                        {stay.best_for && (
                          <p className="text-sm text-foreground mb-6">
                            <span className="font-semibold">Best for:</span> {stay.best_for}
                          </p>
                        )}

                        <div className="flex flex-col gap-3">
                          <Button asChild className="w-full">
                            <Link href={`/stays/${stay.slug}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/booking?stay=${stay.slug}`}>
                              Book Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
