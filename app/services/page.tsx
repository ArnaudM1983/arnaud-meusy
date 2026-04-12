"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    id: "01",
    title: "Développement Full-Stack",
    description: "Je conçois des architectures solides et scalables. De la logique métier complexe en Symfony jusqu'aux interfaces pixel-perfect en Next.js, je transforme vos idées en produits robustes.",
    tags: ["React / Next.js", "Symfony / PHP", "TypeScript", "Node.js", "Architecture API"]
  },
  {
    id: "02",
    title: "E-Commerce & Solutions Métier",
    description: "Spécialiste des flux complexes : gestion de stocks, automatisations SaaS (CRM) et tunnels de vente haute performance optimisés pour la conversion.",
    tags: ["Stripe / Paiement", "Refine (Admin Dashboards)", "WooCommerce", "Supabase", "Automatisation"]
  },
  {
    id: "03",
    title: "UI/UX & Creative Tech",
    description: "Une approche centrée sur l'utilisateur pour garantir des interfaces intuitives. J'intègre des animations et des éléments interactifs pour marquer les esprits.",
    tags: ["Figma Prototypage", "Tailwind CSS", "Framer Motion", "Three.js", "Responsive Design"]
  }
];

const REASONS = [
  "Double Culture Tech & Business",
  "Sens des Responsabilités",
  "Vision ROI & Performance",
  "Code Propre & Scalable",
  "Expertise Full-Stack",
  "Communication Transparente",
  "Respect des Deadlines",
  "Autonomie & Force de proposition",
  "Partenaire Projet",
  "Maîtrise Next.js & Symfony",
  "Approche Pixel-Perfect",
  "Accompagnement A à Z"
];

export default function ServicesPage() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [20, 150], [0, 1]);
  const y = useTransform(scrollY, [20, 150], [30, 0]);

  return (
    <main className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/40 hover:text-[#FF6006] font-sans text-xs font-bold tracking-widest uppercase transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour à l'accueil
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8vw] leading-[0.85] font-sans font-medium tracking-tighter uppercase mb-12"
        >
          Propulser votre<br />
          <span className="text-[#FF6006]">Vision Digitale.</span>
        </motion.h1>

        {/* --- CASE STUDY STYLE INTRO --- */}
        <div className="border-t border-black/30 pt-4 mb-10">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6006]">
              Expertise & Partenariat
            </p>
            <motion.p
              style={{ opacity, y }}
              className="text-xl md:text-4xl leading-tight font-sans font-medium text-[#4A4A4A] pt-4"
            >
              Plus qu’un simple développeur, je suis votre partenaire technique. J'allie la rigueur du management à l'agilité du développement moderne pour livrer des produits qui ont un réel impact business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="px-6 md:px-20 py-20 border-t border-black/5">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-16">Mes Piliers d'Accompagnement</h2>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              <div className="lg:col-span-1 text-2xl font-sans font-light opacity-20 group-hover:text-[#FF6006] group-hover:opacity-100 transition-all">
                {service.id}
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight uppercase mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-[#1A1A1A] hover:text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY ME SECTION */}
      <section className="py-32 bg-white shadow-sm overflow-hidden border-t border-black/5">
        <div className="px-6 md:px-20 mb-20">
          <h2 className="text-4xl md:text-[5vw] leading-[0.9] font-sans font-medium tracking-tighter uppercase">
            POURQUOI TRAVAILLER <br />
            <span className="text-[#FF6006]">AVEC MOI ?</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap gap-6 whitespace-nowrap"
            >
              {[...REASONS, ...REASONS].map((reason, i) => (
                <div
                  key={i}
                  className="px-16 py-5 md:py-8 rounded-full bg-gradient-to-t from-[#F7F7F7] via-[#F0F0F0] to-[#E8E8E8] flex items-center justify-center "
                >
                  <p className="text-sm md:text-3xl font-medium text-[#1A1A1A] tracking-tight">{reason}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex overflow-hidden">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap gap-6 whitespace-nowrap"
            >
              {[...REASONS, ...REASONS].map((reason, i) => (
                <div
                  key={i}
                  className="px-16 py-5 md:py-8 rounded-full bg-gradient-to-t from-[#F7F7F7] via-[#F0F0F0] to-[#E8E8E8] flex items-center justify-center "
                >
                  <p className="text-sm md:text-3xl font-medium text-[#1A1A1A] tracking-tight">{reason}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}