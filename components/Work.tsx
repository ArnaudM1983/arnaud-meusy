"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button'; 

export const Work = () => {
    const projects = [
        {
            title: "Eighty One Store",
            slug: "eighty-one-store",
            tech: ["Next.js", "Symfony", "Refine"],
            impact: "Écosystème e-commerce haute performance",
            image: "81.webp"
        },
        {
            title: "Drophub CRM",
            slug: "intelligence-crm",
            tech: ["Next.js", "Supabase", "Gemini API"],
            impact: "Assistant de copywriting IA et gestion de pipeline de prospection.",
            image: "drophub.webp"
        },
        {
            title: "Kickflip Studio",
            slug: "kickflip-studio",
            tech: ["Next.js", "Three.js", "GSAP", "Tailwind"],
            impact: "Configurateur 3D immersif avec personnalisation en temps réel",
            video: "kickflip.mp4", 
            image: "kickflip-fallback.webp" 
        }
    ];

    return (
        <section className="bg-[#F9F9F9] py-32 px-6 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-12 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#1A1A1A] text-5xl md:text-8xl font-sans font-medium uppercase tracking-tighter"
                >
                    PROJETS<br />SÉLECTIONNÉS
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#4A4A4A] text-xl md:text-2xl max-w-sm mt-8 md:mt-0"
                >
                    Une sélection de projets mettant l'accent sur la précision technique et l'exigence esthétique.
                </motion.p>
            </div>

            {/* Project List */}
            <div className="space-y-40">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={i}
                        title={p.title}
                        slug={p.slug}
                        tech={p.tech}
                        impact={p.impact}
                        image={p.image}
                        video={p.video}
                        index={i}
                    />
                ))}
            </div>

            {/* CTA: Voir tous les projets */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-40 flex justify-center"
            >
                <Button 
                    label="Voir Plus" 
                    href="/work"
                    variant="dark" 
                />
            </motion.div>
        </section>
    );
};