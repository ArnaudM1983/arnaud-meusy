"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, MapPin, Briefcase, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PHILOSOPHY = [
  {
    id: "01",
    title: "Maturité & Fiabilité",
    description: "6 ans de management m'ont appris la responsabilité. Un budget, une deadline ou un engagement sont pour moi des priorités absolues.",
    icon: <Briefcase className="w-6 h-6 text-[#FF6006]" />
  },
  {
    id: "02",
    title: "Vision Produit (ROI)",
    description: "Je ne code pas pour coder. Je comprends vos enjeux business et je développe des solutions techniques qui servent votre stratégie et votre rentabilité.",
    icon: <Target className="w-6 h-6 text-[#FF6006]" />
  },
  {
    id: "03",
    title: "Agilité Technique",
    description: "Full-Stack par passion, j'allie la puissance des environnements Symfony et Node.js à l'interactivité moderne de Next.js pour des produits performants.",
    icon: <Zap className="w-6 h-6 text-[#FF6006]" />
  }
];

export default function AboutPage() {
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
          Expertise technique,<br />
          <span className="text-[#FF6006]">Vision Business.</span>
        </motion.h1>

        {/* --- CASE STUDY STYLE INTRO --- */}
        <div className="border-t border-black/30 pt-4 mb-10">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6006]">
              Mon Histoire & Ma Méthode
            </p>
            <motion.p
              style={{ opacity, y }}
              className="text-xl md:text-4xl leading-tight font-sans font-medium text-[#4A4A4A] pt-4"
            >
              Du pilotage de rayons chez Carrefour au développement d'applications web scalables à Lyon. Je suis Arnaud, un développeur dans l'âme, passionné par la transformation de la complexité business en expériences fluides.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. PHOTOS & DUAL CONTENT */}
      <section className="px-6 md:px-20 py-20 border-t border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Photo 1 : Profil (Style détouré ou minimaliste) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-4 relative aspect-square bg-[#EDEDED] rounded-3xl  overflow-hidden "
        >
          <Image 
            src="/profil.webp" // Ta photo LinkedIn
            alt="Arnaud Meusy - Développeur Full-Stack Lyon"
            fill
            className="object-cover object-center transition-all duration-500"
          />
        </motion.div>

        {/* Texte de Bio/Parcours */}
        <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-lg text-[#4A4A4A] leading-relaxed pt-4">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-sans font-medium text-[#1A1A1A] leading-tight tracking-tighter uppercase">
              Vous avez l'idée, <br/>
              <span className="text-[#FF6006]">j'apporte l'architecture technique.</span>
            </h3>
            
            <p>
              J’accompagne les entreprises et les porteurs de projets dans la création d’applications modernes, robustes et centrées sur l’utilisateur. Mon objectif : transformer votre complexité métier en une expérience fluide et intuitive.
            </p>

            <div className="pt-6 border-t border-black/10">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A] mb-4">
                Pourquoi travailler avec moi ?
              </h4>
              <p>
                Ancien manager chez Carrefour (gestion de 14M€ de CA), je ne suis pas qu'un développeur : je suis un partenaire de projet. Je comprends vos enjeux business et je m'assure que chaque ligne de code sert vos objectifs de croissance.
              </p>
            </div>
          </div>

          <div className="pt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
            <MapPin className="w-5 h-5 text-[#FF6006]" /> Basé à Lyon, disponible partout.
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY LIST (Style "Services") */}
      <section className="px-6 md:px-20 py-32 bg-white shadow-sm border-t border-black/5">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-16">Ma Philosophie de Travail</h2>

        <div className="space-y-20">
          {PHILOSOPHY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              <div className="lg:col-span-1 text-2xl font-sans font-light opacity-20 group-hover:text-[#FF6006] group-hover:opacity-100 transition-all">
                {item.id}
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                   <div>{item.icon}</div>
                   <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}