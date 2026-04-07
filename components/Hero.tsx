"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();

  const leftX = useTransform(scrollY, [0, 500], [0, -200]);   // Glisse à gauche
  const rightX = useTransform(scrollY, [0, 500], [0, 200]);   // Glisse à droite
  const middleY = useTransform(scrollY, [0, 500], [0, 80]);   // Descend 
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]); // Fade-out global

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center w-full"
        style={{ opacity: heroOpacity }} 
      >
        <h2 className="text-[15vw] md:text-[10vw] leading-[0.85] font-sans font-black tracking-tighter text-[#EDEDED] flex flex-col items-center w-full">
          <motion.span style={{ x: leftX }}>
            DÉVELOPPEUR
          </motion.span>
          
          <motion.span 
            className="text-transparent text-outline" 
            style={{ 
              WebkitTextStroke: '1px #EDEDED',
              y: middleY 
            }}
          >
            FULL-STACK
          </motion.span>
          
          <motion.span style={{ x: rightX }}>
            CONCEPTEUR.
          </motion.span>
        </h2>
        
        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          <p className="font-mono text-[#CCFF00] text-xs md:text-sm tracking-widest uppercase">
            Transformer des visions complexes en architectures web modernes pour propulser votre croissance et optimiser vos performances digitales.
          </p>
        </div>
      </motion.div>
    </section>
  );
};