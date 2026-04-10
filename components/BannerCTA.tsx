"use client";

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { Button } from '@/components/Button';

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isOrange?: boolean;
}

interface BannerCTAProps {
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const BannerCTA = ({
  subtitle = "Des architectures solides pour les ambitions de demain.",
  buttonLabel = "Lancer un projet",
  buttonHref = "mailto:arnaudmeusy@hotmail.com"
}: BannerCTAProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"] 
  });

  const text = "CONSTRUISONS VOTRE PROCHAIN STANDARD.";
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#F9F9F9]"
    >
      <h2 className="text-[10vw] md:text-[8vw] font-sans font-black tracking-tighter uppercase leading-[0.85] flex flex-wrap justify-center max-w-6xl">
        {words.map((word, i) => {
          // Calcul du timing pour chaque mot sur la timeline du scroll
          const start = i / words.length;
          const end = (i + 1) / words.length;
          
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
              isOrange={word === "STANDARD."} 
            >
              {word}
            </Word>
          );
        })}
      </h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-12 text-xl md:text-2xl text-[#4A4A4A] max-w-2xl"
      >
        {subtitle}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <Button label={buttonLabel} href={buttonHref} variant="dark" />
      </motion.div>
    </section>
  );
};

const Word = ({ children, progress, range, isOrange }: WordProps) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  
  return (
    <span className="relative mx-[0.15em] md:mx-[0.2em]">
      <motion.span 
        style={{ opacity }} 
        className={isOrange ? "text-[#FF6006]" : "text-[#1A1A1A]"}
      >
        {children}
      </motion.span>
    </span>
  );
};