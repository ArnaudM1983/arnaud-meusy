import { ProjectCard } from '@/components/ProjectCard';
import * as motion from "framer-motion/client"; 
import { PROJECTS } from '@/data/projects';

export const metadata = {
  title: "Projets | Arnaud Meusy",
  description: "Découvrez l'intégralité des projets récents d'Arnaud Meusy.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen">
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-black/30 pb-12 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#1A1A1A] text-5xl md:text-8xl font-sans font-medium uppercase tracking-tighter"
          >
            MES<br />PROJETS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#4A4A4A] text-xl md:text-2xl max-w-sm mt-8 md:mt-0"
          >
            Entre projets concrets et explorations conceptuelles : un répertoire de solutions techniques et d'expérimentations visuelles.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-40">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              slug={p.slug}
              tech={p.stack} 
              impact={p.impact}
              image={p.image}
              video={p.video}
              index={i}
            />
          ))}
        </div>

      </section>
    </main>
  );
}