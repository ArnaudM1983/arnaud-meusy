"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; 
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Expertise } from '@/components/Expertise';

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
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="text-[10vw] md:text-[8vw] font-sans font-black tracking-tighter uppercase leading-none"
        >
          DISPONIBLE POUR<br/>VOTRE <span className="text-[#FF6006]">PROCHAIN DÉFI.</span>
        </motion.h2>
        <p className="mt-12 text-2xl md:text-3xl font-serif italic text-white/60">Let’s build something radical.</p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 bg-[#CCFF00] text-black px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold font-sans tracking-widest hover:bg-white transition-colors uppercase"
        >
          Start Project // →
        </motion.button>
      </section>
    </main>
  );
}