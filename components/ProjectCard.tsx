"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  slug: string; 
  tech: string[];
  impact: string;
  image: string;
  video?: string; 
  index: number;
}

export const ProjectCard = ({ title, slug, tech, impact, image, video, index }: ProjectCardProps) => {
  const isStaggered = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative w-full md:w-[80%] lg:w-[60%] mb-32 ${isStaggered ? 'md:ml-auto' : 'md:mr-auto'}`}
    >
      <Link href={`/work/${slug}`} className="block group">
        
        {/* Zone Visuelle (Image ou Vidéo) */}
        <div className="aspect-[16/10] bg-zinc-900 overflow-hidden relative rounded-4xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
          
          {video ? (
            <video 
              src={video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          
          {/* Tags Techniques */}
          <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-1 pointer-events-none">
            {tech.map((t) => (
              <span key={t} className="bg-black/80 text-[#EDEDED] font-mono text-[9px] px-2 py-1 border border-white/10 uppercase tracking-widest backdrop-blur-sm rounded-xl">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer de la carte */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="transition-opacity duration-500 group-hover:opacity-50">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white uppercase tracking-tighter transition-colors duration-300">
              {title}
            </h3>
            <p className="text-lg md:text-xl text-[#EDEDED]/80 mt-1 transition-colors duration-300">
              {impact}
            </p>
          </div>
          
          <div className="hidden md:block h-px bg-white/40 flex-grow mx-8 mt-4 group-hover:opacity-20 transition-all duration-500" />
          
          <ArrowUpRight className="text-[#CCFF00] w-8 h-8 self-end md:self-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};