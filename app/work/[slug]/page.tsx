"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { use, useEffect } from 'react'; // Ajout de useEffect

// Structure de données enrichie
const projectData = {
  "eighty-one-store": {
    title: "Eighty-One Store",
    client: "81 Store Lyon",
    role: "Full-Stack & UX Design",
    year: "2026",
    link: "https://81store.fr",
    category: "E-Commerce",
    overview: "Comment digitaliser une institution du graffiti lyonnais tout en conservant son ADN brut et urbain ? Nous avons conçu un écosystème e-commerce capable de gérer des milliers de références avec une fluidité absolue.",
    challenge: "Le défi majeur était la gestion dynamique des stocks et le calcul des frais de port complexes (poids/volume) pour des produits inflammables, tout en offrant une interface ultra-rapide sur mobile.",
    solution: "Une architecture Headless utilisant Next.js pour la rapidité et Symfony pour la robustesse du moteur de règles métier.",
    stack: ["Next.js", "Symfony", "Stripe", "Refine"],
  },
  // ... Ajoute tes autres projets ici
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projectData[resolvedParams.slug as keyof typeof projectData];

  // --- SOLUTION SCROLL ---
  useEffect(() => {
    // On force le scroll en haut immédiatement au montage du composant
    window.scrollTo(0, 0);
    
    // Si tu utilises un Smooth Scroll (Lenis), tu peux aussi forcer l'immédiat
    // document.documentElement.style.scrollBehavior = 'auto';
    // window.scrollTo(0, 0);
    // document.documentElement.style.scrollBehavior = 'smooth';
  }, [resolvedParams.slug]); // Se déclenche à chaque changement de projet

  if (!project) notFound();

  return (
    <main className="bg-[#F9F9F9] text-[#1A1A1A]">
      
      {/* 1. HERO SECTION  */}
      <section className="pt-40 pb-20 px-6 md:px-20">
        <Link href="/work" className="inline-flex items-center gap-2 text-black/40 hover:text-[#FF6006] font-sans text-xs font-bold tracking-widest uppercase transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux projets
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[9vw] leading-[0.8] font-sans font-medium tracking-tighter uppercase mb-16"
        >
          {project.title.split(' ')[0]}<br/>
          <span className="text-[#FF6006]">{project.title.split(' ').slice(1).join(' ') || ""}</span>
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-10 font-sans text-[10px] font-bold tracking-widest uppercase">
          <div><p className="opacity-40 mb-2">Client</p><p>{project.client}</p></div>
          <div><p className="opacity-40 mb-2">Année</p><p>{project.year}</p></div>
          <div><p className="opacity-40 mb-2">Rôle</p><p>{project.role}</p></div>
          <div>
            <p className="opacity-40 mb-2">Site Live</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#FF6006] transition-colors">
              Visiter <ArrowUpRight className="w-3 h-3"/>
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN IMAGE */}
      <section className="px-6 md:px-20 mb-32">
        <motion.div 
          initial={{ clipPath: "inset(10% 0% 10% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-video bg-[#EDEDED] rounded-sm overflow-hidden flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center text-white/5 font-sans font-bold uppercase tracking-widest text-sm">
             [ Hero Image ]
          </div>
        </motion.div>
      </section>

      {/* 3. THE STORY */}
      <section className="px-6 md:px-20 py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
           <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6006] mb-8">// Context</h2>
           <p className="text-3xl md:text-4xl font-serif italic leading-tight text-[#4A4A4A]">
             {project.overview}
           </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-8 flex flex-col justify-end">
           <div className="space-y-12">
             <div>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">Le Challenge</h3>
               <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">{project.challenge}</p>
             </div>
             <div>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">La Solution</h3>
               <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">{project.solution}</p>
             </div>
           </div>
        </div>
      </section>

      {/* 4. SHOWCASE SECTION */}
      <section className="bg-[#1A1A1A] text-white py-40 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter mb-8">
            Une interface <span className="text-[#FF6006]">optimisée</span> pour la performance.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.stack.map(s => (
              <span key={s} className="border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                {s}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="aspect-[4/5] bg-white/5 rounded-sm flex items-center justify-center italic text-white/5 uppercase tracking-widest text-[10px]">[ Mockup Mobile ]</div>
           <div className="aspect-[4/5] bg-white/5 rounded-sm flex items-center justify-center italic text-white/5 uppercase tracking-widest text-[10px] md:translate-y-20">[ Detail UI ]</div>
        </div>
      </section>

      {/* 5. FOOTER NEXT PROJECT */}
      <section className="py-40 px-6 md:px-20 text-center border-t border-black/5 bg-white">
         <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-8 font-sans">Projet Suivant</p>
         <Link href="/work/intelligence-crm" className="group">
           <h2 className="text-5xl md:text-8xl font-sans font-black uppercase tracking-tighter group-hover:text-[#FF6006] transition-colors duration-500">
             Drophub CRM
           </h2>
         </Link>
      </section>
    </main>
  );
}