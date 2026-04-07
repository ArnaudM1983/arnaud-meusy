"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

export const Work = () => {
    const projects = [
        { title: "Neo Fashion House", tech: ["Next.js", "GSAP", "Three.js"], impact: "+40% Conversion Rate", image: "1581091226821-2f7b574ef88a" },
        { title: "Quant Engine V2", tech: ["Rust", "WASM", "React"], impact: "Sub-10ms Latency", image: "1550751827-4bd374c3f58b" },
        { title: "Ether Studio", tech: ["WebGL", "Tailwind", "Motion"], impact: "Award Winning UI", image: "1534972195531-d756b9bfa9f2" }
    ];

    return (
        <section className="py-32 px-6 md:px-12 lg:px-24">
            <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 overflow-hidden">

                <motion.h2
                    initial={{ opacity: 0, y: 100 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 1.5, 
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="text-5xl md:text-8xl font-sans font-medium uppercase tracking-tighter"
                >
                    PROJETS<br />SÉLECTIONNÉS
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 1.2,
                        delay: 0.5, 
                        ease: [0.22, 1, 0.36, 1]
                    }}
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