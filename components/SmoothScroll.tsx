"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Import nécessaire
import Lenis from "lenis";

export const SmoothScroll = () => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialisation de Lenis (une seule fois)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Reset du scroll à chaque changement de page
  useEffect(() => {
    if (lenisRef.current) {
      // 'immediate: true' est crucial pour éviter de voir la page défiler vers le haut
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    
    // Sécurité supplémentaire pour le scroll natif
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche dès que l'URL change

  return null;
};