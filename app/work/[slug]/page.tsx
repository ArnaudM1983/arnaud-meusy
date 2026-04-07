"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { use } from 'react';

// Base de données des projets
const projectData = {
  "eighty-one-store": {
    title: "Eighty-One Store",
    category: "E-Commerce Ecosystem",
    year: "2026",
    stack: "Next.js, Symfony, Refine, Stripe, Mondial Relay",
    overview: "Création d'un écosystème e-commerce complet, de l'expérience client front-end jusqu'à l'automatisation de la logistique en back-office.",
    features: [
      { title: "Frontend Client", desc: "Next.js. Expérience d'achat optimisée, tunnel de commande dynamique, et intégration carte interactive (Mondial Relay/Colissimo)." },
      { title: "Dashboard Admin", desc: "Refine. Pilotage des stocks, gestion des variantes, et automatisation des remboursements Stripe/PayPal." },
      { title: "Backend API", desc: "Symfony. Calcul dynamique des frais de port au poids, webhooks de paiement sécurisés, et génération de flux Google Shopping." }
    ]
  },
  "intelligence-crm": {
    title: "Intelligence CRM",
    category: "AI SaaS Platform",
    year: "2026",
    stack: "Next.js 14, Supabase, Google Gemini API",
    overview: "Un CRM intelligent équipé d'un copywriter IA pour automatiser et ultra-personnaliser la prospection commerciale B2B.",
    features: [
      { title: "Google Gemini AI", desc: "Génération automatique de messages de prospection ultra-personnalisés basés sur les données du lead." },
      { title: "Pipeline Kanban", desc: "Interface interactive complexe permettant de gérer l'état d'avancement des leads avec un système de drag & drop fluide." },
      { title: "Sécurité & Multi-Env", desc: "Mise en place d'un environnement backend robuste avec Supabase, séparant strictement le Mode Démo et la Production." }
    ]
  }
};

// 2. Le composant de la page dynamique
export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projectData[resolvedParams.slug as keyof typeof projectData];

  if (!project) {
    notFound(); 
  }

  return (
    <main className="min-h-screen bg-black text-[#EDEDED] pt-40 px-6 md:px-20 pb-32 overflow-hidden">
      
      {/* Bouton retour */}
      <Link href="/#work" className="inline-flex items-center gap-2 text-white/50 hover:text-[#CCFF00] font-mono text-sm tracking-widest uppercase transition-colors mb-20 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux projets
      </Link>

      {/* Titre masssif */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-[10vw] leading-[0.85] font-sans font-black tracking-tighter uppercase mb-12"
      >
        {project.title}
      </motion.h1>

      {/* Grille d'infos projet */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-b border-white/10 py-10 mb-32 font-mono text-xs md:text-sm tracking-widest uppercase"
      >
        <div>
          <span className="text-white/40 block mb-2">Role</span>
          <span>Full-Stack Dev</span>
        </div>
        <div>
          <span className="text-white/40 block mb-2">Catégorie</span>
          <span className="text-[#FF6006]">{project.category}</span>
        </div>
        <div>
          <span className="text-white/40 block mb-2">Année</span>
          <span>{project.year}</span>
        </div>
        <div>
          <span className="text-white/40 block mb-2">Stack Tech</span>
          <span>{project.stack}</span>
        </div>
      </motion.div>

      {/* Présentation et Features */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">Overview</h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-serif italic">
            {project.overview}
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-10 border-b border-white/10 pb-6">Détails Techniques</h2>
          
          {project.features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase mb-4">
                0{idx + 1} // {feat.title}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Zone d'image (Placeholder pour l'instant) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[60vh] md:h-[80vh] bg-white/5 mt-32 rounded-sm border border-white/10 flex items-center justify-center"
      >
        <span className="font-mono text-white/20 uppercase tracking-widest">[Image du Projet ou Vidéo UI]</span>
      </motion.div>

    </main>
  );
}