"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; 
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Expertise } from '@/components/Expertise';
import { BannerCTA } from '@/components/BannerCTA';


export default function Home() {
  const pathname = usePathname(); 

  return (
    
    <main key={pathname} className="relative z-10">
      <Hero />

      {/* Work Section */}
      <Work />

      {/* Expertise Section */}
      <Expertise />

      {/* Final CTA */}
      <BannerCTA />
    </main>
  );
}