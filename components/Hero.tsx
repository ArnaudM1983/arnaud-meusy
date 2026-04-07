"use client";

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-[15vw] md:text-[12vw] leading-[0.85] font-sans font-black tracking-tighter text-[#EDEDED] flex flex-col items-center">
          <span>DESIGNER</span>
          <span className="text-transparent text-outline" style={{ WebkitTextStroke: '1px #EDEDED' }}>DEVELOPER</span>
          <span>ENGINEER.</span>
        </h2>
        
        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          <p className="font-mono text-[#CCFF00] text-xs md:text-sm tracking-widest uppercase">
            Building high-performance digital architectures with a radical aesthetic.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-[#EDEDED] opacity-80">
            Based in Lyon, France. Operating at the intersection of luxury fashion and brutalist engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
};