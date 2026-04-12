"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { use, useEffect } from 'react';
import { PROJECTS_MAP } from '@/data/projects';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS_MAP[resolvedParams.slug];

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [20, 150], [0, 1]);
  const y = useTransform(scrollY, [20, 150], [30, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedParams.slug]);

  if (!project) notFound();

  return (
    <main className="bg-[#F9F9F9] text-[#1A1A1A]">

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-black/40 hover:text-[#FF6006] font-sans text-xs font-bold tracking-widest uppercase transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux projets
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[9vw] leading-[0.8] font-sans font-medium tracking-tighter uppercase mb-16"
        >
          {project.title.split(' ')[0]}<br />
          <span className="text-[#FF6006]">{project.title.split(' ').slice(1).join(' ') || ""}</span>
        </motion.h1>

        {/* --- CASE STUDY & INTRO REVEAL --- */}
        <div className="border-t border-black/30 pt-4 mb-10">
          <div className="flex flex-col gap-4">

            <p className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6006]">
              Case Study
            </p>

            <motion.p
              style={{ opacity, y }}
              className="text-xl md:text-4xl leading-tight font-sans font-medium text-[#4A4A4A] pt-4"
            >
              {project.intro}
            </motion.p>

          </div>
        </div>

        {/* GRILLE DE DÉTAILS */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 font-sans text-[10px] font-bold tracking-widest uppercase mt-24">
          <div><p className="opacity-40 mb-2">Client</p><p>{project.client}</p></div>
          <div><p className="opacity-40 mb-2">Année</p><p>{project.year}</p></div>
          <div><p className="opacity-40 mb-2">Rôle</p><p>{project.role}</p></div>
          <div><p className="opacity-40 mb-2">Catégorie</p><p>{project.category}</p></div>
          <div>
            <p className="opacity-40 mb-2">Site Live</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#FF6006] transition-colors"
            >
              Visiter <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. DUAL IMAGES  */}
      <section className="px-6 md:px-20 md:my-16 overflow-hidden">
        {/* Conteneur motion qui gère l'apparition de toute la grille */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >

          {/* Image 1 */}
          <div className="w-full aspect-[4/3] bg-[#EDEDED] rounded-4xl overflow-hidden flex items-center justify-center">
            {project.gallery?.[0] ? (
              <img src={project.gallery[0]} alt={`${project.title} 1`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1A1A1A]" />
            )}
          </div>

          {/* Image 2 */}
          <div className="w-full aspect-[4/3] bg-[#EDEDED] rounded-4xl overflow-hidden flex items-center justify-center">
            {project.gallery?.[1] ? (
              <img src={project.gallery[1]} alt={`${project.title} 2`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1A1A1A]" />
            )}
          </div>

        </motion.div>
      </section>

      {/* 3. THE STORY */}
      <section className="px-6 md:px-20 py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6006] mb-8">// Contexte</h2>
          <p className="text-2xl md:text-3xl leading-tight text-[#4A4A4A]">
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
      <section className="px-6 md:px-20 pb-40 overflow-hidden">

        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6006] mb-8">
            // Focus Projet
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.stack.map(s => (
              <span
                key={s}
                className="border border-black/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Grille d'images animées */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          {/* Image 3 */}
          <div className="w-full aspect-[4/3] bg-[#EDEDED] rounded-4xl overflow-hidden flex items-center justify-center">
            {project.gallery?.[2] ? (
              <img src={project.gallery[2]} alt={`${project.title} 3`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1A1A1A]" />
            )}
          </div>

          {/* Image 4 */}
          <div className="w-full aspect-[4/3] bg-[#EDEDED] rounded-4xl overflow-hidden flex items-center justify-center">
            {project.gallery?.[3] ? (
              <img src={project.gallery[3]} alt={`${project.title} 4`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1A1A1A]" />
            )}
          </div>
        </motion.div>

      </section>

    </main>
  );
}