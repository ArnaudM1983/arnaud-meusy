"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tech: string[];
  impact: string;
  image: string;
  index: number;
}

export const ProjectCard = ({ title, tech, impact, image, index }: ProjectCardProps) => {
  const isStaggered = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative w-full md:w-[80%] lg:w-[60%] mb-32 group ${isStaggered ? 'md:ml-auto' : 'md:mr-auto'}`}
    >
      <div className="aspect-[16/10] bg-zinc-900 overflow-hidden relative rounded-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={`https://images.unsplash.com/photo-${image}?auto=format&fit=crop&q=80&w=1200`} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-1">
          {tech.map((t) => (
            <span key={t} className="bg-black/80 text-[#EDEDED] font-mono text-[9px] px-2 py-1 border border-white/10 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#FF6006]/90 p-6 md:p-12 text-center">
          <div className="text-black font-sans font-black text-2xl md:text-4xl uppercase tracking-tighter">
            {impact}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#EDEDED] uppercase tracking-tighter">{title}</h3>
          <p className="font-serif italic text-lg md:text-xl text-[#EDEDED]/60 mt-1">Creative Direction & Full Stack Build</p>
        </div>
        <div className="hidden md:block h-px bg-white/20 flex-grow mx-8 mt-4" />
        <ArrowUpRight className="text-[#CCFF00] w-8 h-8 self-end md:self-auto" />
      </div>
    </motion.div>
  );
};