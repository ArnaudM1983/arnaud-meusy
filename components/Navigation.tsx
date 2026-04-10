"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
    const { scrollY } = useScroll();
    const pathname = usePathname(); 
    const isHome = pathname === "/";
    
    const startScroll = 300;
    const endScroll = 600;

    const logoOpacity = useTransform(scrollY, [startScroll, endScroll], [0, 1]);
    const logoScale = useTransform(scrollY, [startScroll, endScroll], [0, 1]);
    const logoWidth = useTransform(scrollY, [startScroll, endScroll], [0, 70]);
    const headerScale = useTransform(scrollY, [0, 150], [1, 0.96]);

    const navItems = [
        { label: "PROJETS", href: "/work" },
        { label: "SERVICES", href: "/#services" }, 
        { label: "À PROPOS", href: "/#about" }        
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Logo Fixe (Haut gauche) */}
            <div className="absolute top-0 left-0 w-full px-6 md:px-20 py-6 flex items-center justify-between z-10">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <h1 className={`text-2xl md:text-2xl font-black tracking-tighter font-sans flex items-center leading-none transition-colors duration-500 ${
                        isHome ? 'text-white' : 'text-black'
                    }`}>
                        ARNAUD<span className="text-[#FF6006]">MEUSY</span>
                    </h1>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF6006] animate-pulse shadow-[0_0_10px_#FF6006]" />
                </Link>
                <div className="hidden md:flex text-[#EDEDED] font-mono text-[10px] tracking-widest uppercase opacity-40">
                    LYON // 45.76°N 4.83°E
                </div>
            </div>

            {/* Navigation Flottante */}
            <motion.header
                style={{ scale: headerScale }}
                className="fixed top-0 left-0 w-full z-100 px-6 md:px-20 py-6 flex items-center justify-center pointer-events-none"
            >
                <div className="pointer-events-auto flex items-center bg-white rounded-full px-1.5 shadow-2xl border border-white/10 h-14 overflow-hidden">
                    
                    {/* Petit logo qui apparait au scroll */}
                    <motion.div style={{ width: logoWidth, opacity: logoOpacity }} className="overflow-hidden h-full flex items-center justify-center">
                        <Link href="/" className="flex items-center justify-center gap-1.5 px-4 border-r border-gray-100 cursor-pointer whitespace-nowrap h-full min-w-[70px]">
                            <span className="font-black text-black text-sm tracking-tighter">
                                A<span className="text-[#FF6006]">M</span>
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6006]" />
                        </Link>
                    </motion.div>

                    {/* Liens de navigation */}
                    <div className="hidden md:flex items-center h-full px-1">
                        {navItems.map((item) => {
                    
                            const isActive = item.href === '/work' 
                                ? pathname.startsWith('/work') 
                                : pathname === item.href;

                            return (
                                <div key={item.label} className="h-full flex items-center px-0.5">
                                    <Link
                                        href={item.href}
                                        className={`px-5 h-[80%] flex items-center justify-center text-[14px] font-medium tracking-tighter transition-all duration-500 rounded-full font-sans cursor-pointer ${
                                            isActive 
                                            ? 'bg-[#e2dfdf] text-black' 
                                            : 'text-black hover:bg-[#e2dfdf] hover:text-black'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bouton Call to Action */}
                    <div className="h-full flex items-center ml-1">
                        <a
                            href="mailto:arnaudmeusy@hotmail.com"
                            className="bg-black text-white px-7 h-[92%] flex items-center justify-center rounded-full text-[12px] font-bold tracking-widest hover:bg-[#FF6006] transition-colors duration-500 font-sans whitespace-nowrap cursor-pointer"
                        >
                            ME CONTACTER
                        </a>
                    </div>
                </div>
            </motion.header>
        </>
    );
};