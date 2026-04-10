import { ProjectCard } from '@/components/ProjectCard';
import * as motion from "framer-motion/client"; 

export const metadata = {
  title: "Projets | Arnaud Meusy",
  description: "Découvrez l'intégralité des projets récents d'Arnaud Meusy.",
};

export default function WorkPage() {
  const projects = [
    {
      title: "Eighty One Store",
      slug: "eighty-one-store",
      tech: ["Next.js", "Symfony", "Refine"],
      impact: "Écosystème e-commerce haute performance.",
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
      impact: "Configurateur 3D immersif avec personnalisation en temps réel.",
      video: "kickflip.mp4",
      image: "kickflip-fallback.webp"
    },
    {
      title: "Gellery",
      slug: "gellery",
      tech: ["PHP", "WordPress", "WooCommerce"],
      impact: "Boutique cosmétique axé sur une navigation fluide et éditoriale.",
      image: "gellery.webp"
    },
    {
      title: "Cheesenaan",
      slug: "Cheesenaan",
      tech: ["PHP", "WordPress"],
      impact: "Refine digitale pour une agence de création de contenus documentaires.",
      image: "cheesenann.webp"
    }
  ];

  return (
    <main className="bg-[#F9F9F9] min-h-screen">
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A] pb-12 overflow-hidden">
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
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
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
      </section>
    </main>
  );
}