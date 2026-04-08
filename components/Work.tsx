"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

export const Work = () => {
    const projects = [
        { 
            title: "Eighty One Store", 
            slug: "eighty-one-store",
            tech: ["Next.js", "Symfony", "Refine"], 
            impact: "Écosystème E-Commerce Complet", 
            image: "81.webp" 
        },
        { 
            title: "Intelligence CRM", 
            slug: "intelligence-crm",
            tech: ["Next.js", "Supabase", "Gemini API"], 
            impact: "Prospection Automatisée par IA", 
            image: "ton-image-crm.jpg" 
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 lg:px-24">
            <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl font-sans font-medium uppercase tracking-tighter"
                >
                    PROJETS<br />SÉLECTIONNÉS
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl md:text-2xl text-white/70 max-w-sm mt-8 md:mt-0"
                >
                    Une sélection de projets mettant l'accent sur la précision technique et l'exigence esthétique.
                </motion.p>
            </div>

            <div className="space-y-40">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={i}
                        title={p.title}
                        slug={p.slug} 
                        tech={p.tech}
                        impact={p.impact}
                        image={p.image}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
};