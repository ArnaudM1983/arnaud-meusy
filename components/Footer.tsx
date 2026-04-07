"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Clock, ArrowUp, MapPin } from 'lucide-react';

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  // Gestion de l'horloge temps réel
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateClock();
    const clockTimer = setInterval(updateClock, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-[#EDEDED] pt-32 pb-10 px-6 md:px-20 border-t border-white/10 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* GAUCHE : APPEL À L'ACTION */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-5xl font-medium leading-[0.85] tracking-tighter mb-12">
                Prêt à passer <br />
                au <span className="text-[#FF6006]">niveau supérieur ?</span>
              </h2>
              
              {/* BOUTON ANIMÉ AVEC FRAMER MOTION */}
              <motion.a 
                href="mailto:arnaudmeusy@hotmail.com" 
                initial="initial"
                whileHover="hover"
                className="group relative inline-flex items-center gap-6 bg-[#EDEDED] text-black px-10 py-6 rounded-full overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3 font-black uppercase tracking-widest text-sm md:text-base group-hover:text-white transition-colors duration-500">
                  <span>Démarrer un projet //</span>
                  
                  {/* Animation de la flèche (Propulsion) */}
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
            </div>

            <p className="text-[10px] text-white/40 mt-12 font-mono uppercase tracking-[0.3em] max-w-xs leading-relaxed">
              Basé à Lyon, disponible pour des missions <br /> partout dans le monde.
            </p>
          </div>

          {/* DROITE : NAVIGATION & INFOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            
            <div>
              <p className="text-[#9A99A2] font-mono text-[10px] uppercase tracking-[0.2em] mb-8">Navigation</p>
              <ul className="space-y-4 text-xl font-medium uppercase tracking-tighter">
                <li><a href="#work" className="hover:text-[#FF6006] transition-colors duration-300">Projets</a></li>
                <li><a href="#services" className="hover:text-[#FF6006] transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="hover:text-[#FF6006] transition-colors duration-300">À propos</a></li>
              </ul>
            </div>

            <div>
              <p className="text-[#9A99A2] font-mono text-[10px] uppercase tracking-[0.2em] mb-8">Socials</p>
              <ul className="space-y-4 text-xl font-medium uppercase tracking-tighter">
                <li><a href="https://www.linkedin.com/in/arnaudmeusy/" target="_blank" className="hover:text-[#FF6006] transition-colors duration-300">LinkedIn</a></li>
                <li><a href="https://github.com/ArnaudM1983" target="_blank" className="hover:text-[#FF6006] transition-colors duration-300">GitHub</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 pt-8 md:pt-0">
              <p className="text-[#9A99A2] font-mono text-[10px] uppercase tracking-[0.2em] mb-8">Localisation</p>
              <div className="space-y-6 font-mono text-[11px] uppercase tracking-widest text-white/50">
                <p className="flex items-center gap-2">
                 <MapPin className="w-3 h-3 text-[#CCFF00]" />Lyon, FR
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#CCFF00]" /> {currentTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRE DE COPYRIGHT & BACK TO TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/20 font-mono text-[9px] tracking-[0.4em] uppercase text-white/40">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
            <p>© 2026 ARNAUD MEUSY</p>
            <p className="hidden md:block text-white/40">//</p>
            <p>Conception & Code par moi-même</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#EDEDED] transition-colors mt-8 md:mt-0 group cursor-pointer"
          >
            Back to top <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};