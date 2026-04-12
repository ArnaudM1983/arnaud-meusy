"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button'; 
import { PROJECTS } from '@/data/projects'; 

export const Work = ({ limit }: { limit?: number }) => {
    
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

    return (
        <section className="bg-[#F9F9F9] py-16 md:py-32 px-6 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-12 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#1A1A1A] text-4xl md:text-8xl font-sans font-medium uppercase tracking-tighter"
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

            {/* Project List : On utilise ici displayedProjects au lieu de PROJECTS */}
            <div className="space-y-40">
                {displayedProjects.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        title={project.title}
                        slug={project.slug}
                        tech={project.stack} 
                        impact={project.impact}
                        image={project.image}
                        video={project.video}
                        index={index}
                    />
                ))}
            </div>

            {/* CTA: N'apparaît que si on a mis une limite */}
            {limit && (
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
            )}
        </section>
    );
};