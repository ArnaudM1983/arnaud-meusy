"use client";

import { motion } from 'framer-motion';

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
  isExternal?: boolean;
}

export const Button = ({ label, href, className = "", isExternal = false }: ButtonProps) => {
  return (
    <motion.a 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial="initial"
      whileHover="hover"
      className={`group relative inline-flex items-center gap-6 bg-[#EDEDED] text-black px-10 py-6 rounded-full overflow-hidden transition-all duration-500 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-3 font-black uppercase tracking-widest text-sm md:text-base group-hover:text-white transition-colors duration-500">
        <span>{label} //</span>
        
        <motion.span 
          variants={{
            initial: { x: 0 },
            hover: { x: 8 }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          →
        </motion.span>
      </span>
      
      {/* Effet de remplissage Orange par le bas */}
      <motion.div 
        variants={{
          initial: { y: "101%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#FF6006]" 
      />
    </motion.a>
  );
};