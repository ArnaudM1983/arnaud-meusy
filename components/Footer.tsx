"use client";

import { useState, useEffect } from 'react';
import { CloudRain, Clock } from 'lucide-react';

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  return (
    <footer className="p-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 bg-black relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-[10px] tracking-widest uppercase">
        <div>
          <p className="text-white/40 mb-2">Socials</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FF6006]">GitHub</a>
            <a href="#" className="hover:text-[#FF6006]">LinkedIn</a>
          </div>
        </div>
        <div>
          <p className="text-white/40 mb-2">Location</p>
          <p className="flex items-center gap-1"><CloudRain className="w-3 h-3 text-[#CCFF00]" /> Lyon, FR // Rain 12°</p>
        </div>
        <div>
          <p className="text-white/40 mb-2">Time</p>
          <p className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#CCFF00]" /> {currentTime}</p>
        </div>
        <div>
          <p className="text-white/40 mb-2">Network</p>
          <p className="flex items-center gap-1">v4.0.2 Stable // Active</p>
        </div>
      </div>

      <div className="text-right">
        <h1 className="text-2xl font-bold tracking-tighter text-[#EDEDED] font-sans">
          ARNAUD<span className="text-[#FF6006]">MEUSY</span>
        </h1>
        <p className="font-mono text-[9px] text-white/30 mt-1 uppercase">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};