"use client";

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
// import { ExpertiseMatrix } from '@/components/ExpertiseMatrix';

export default function Home() {
  const projects = [
    { title: "Neo Fashion House", tech: ["Next.js", "GSAP", "Three.js"], impact: "+40% Conversion Rate", image: "1581091226821-2f7b574ef88a" },
    { title: "Quant Engine V2", tech: ["Rust", "WASM", "React"], impact: "Sub-10ms Latency", image: "1550751827-4bd374c3f58b" },
    { title: "Ether Studio", tech: ["WebGL", "Tailwind", "Motion"], impact: "Award Winning UI", image: "1534972195531-d756b9bfa9f2" }
  ];

  return (
    <main className="relative z-10">
      <Hero />

      {/* Work Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12">
          <h2 className="text-5xl md:text-8xl font-sans font-medium uppercase tracking-tighter">Selected<br/>Works</h2>
          <p className="font-serif italic text-xl md:text-2xl text-white/50 max-w-sm mt-8 md:mt-0">
            A curation of projects emphasizing technical precision and visual radicalism.
          </p>
        </div>
        
        <div className="space-y-40">
          {projects.map((p, i) => (
            <ProjectCard 
              key={i} 
              title={p.title}
              tech={p.tech}
              impact={p.impact}
              image={p.image}
              index={i} 
            />
          ))}
        </div>
      </section>

      {/* <ExpertiseMatrix /> */}

      {/* Final CTA */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
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