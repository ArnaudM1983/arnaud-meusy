"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export const Navigation = () => {
    const { scrollY } = useScroll();
    const startScroll = 300;
    const endScroll = 600;

    const logoOpacity = useTransform(scrollY, [startScroll, endScroll], [0, 1]);
    const logoScale = useTransform(scrollY, [startScroll, endScroll], [0, 1]);
    const logoWidth = useTransform(scrollY, [startScroll, endScroll], [0, 70]);
    const headerScale = useTransform(scrollY, [0, 150], [1, 0.96]);

    const [activeTab, setActiveTab] = useState('WORK');
    const navItems = ["WORK", "SERVICES", "ABOUT"];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-full px-6 md:px-20 py-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
                    <h1 className="text-2xl md:text-2xl font-black tracking-tighter text-white font-sans flex items-center leading-none">
                        ARNAUD<span className="text-[#FF6006]">MEUSY</span>
                    </h1>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF6006] animate-pulse shadow-[0_0_10px_#FF6006]" />
                </div>
                <div className="hidden md:flex text-[#EDEDED] font-mono text-[10px] tracking-widest uppercase opacity-40">
                    LYON // 45.76°N 4.83°E
                </div>
            </div>

            <motion.header
                style={{ scale: headerScale }}
                className="fixed top-0 left-0 w-full z-[100] px-6 md:px-20 py-6 flex items-center justify-center pointer-events-none"
            >
                <div className="pointer-events-auto flex items-center bg-white rounded-full px-1.5 shadow-2xl border border-white/10 h-14 overflow-hidden">
                    <motion.div style={{ width: logoWidth, opacity: logoOpacity }} className="overflow-hidden h-full flex items-center justify-center">
                        <motion.div style={{ scale: logoScale, transformOrigin: "center center" }} onClick={scrollToTop} className="flex items-center justify-center gap-1.5 px-4 border-r border-gray-100 cursor-pointer whitespace-nowrap h-full min-w-[70px]">
                            <span className="font-black text-black text-sm tracking-tighter">
                                A<span className="text-[#FF6006]">M</span>
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6006]" />
                        </motion.div>
                    </motion.div>

                    <div className="hidden md:flex items-center h-full px-1">
                        {navItems.map((item) => (
                            <div key={item} className="h-full flex items-center px-0.5">
                                <button
                                    onClick={() => setActiveTab(item)}
                                    className={`px-5 h-[80%] flex items-center justify-center text-[14px] font-medium tracking-tighter transition-all duration-500 rounded-full font-sans cursor-pointer ${activeTab === item ? 'bg-[#F0F0ED] text-black' : 'text-black hover:bg-[#F0F0ED] hover:text-black'}`}
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="h-full flex items-center ml-1">
                        <a
                            href="mailto:arnaudmeusy@hotmail.com"
                            className="bg-black text-white px-7 h-[92%] flex items-center justify-center rounded-full text-[12px] font-bold tracking-widest hover:bg-[#FF6006] transition-colors duration-500 font-sans whitespace-nowrap cursor-pointer"
                        >
                            WORK WITH ME
                        </a>
                    </div>
                </div>
            </motion.header>
        </>
    );
};