"use client";

import React, { useEffect, useRef } from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiWordpress, SiPrismic, SiPhp, SiFigma, SiSymfony } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
    { name: "Next.js", color: "#FF6006", icon: <SiNextdotjs /> },
    { name: "React", color: "#000000", icon: <FaReact /> },
    { name: "TypeScript", color: "#FF6006", icon: <SiTypescript /> },
    { name: "TailwindCSS", color: "#000000", icon: <SiTailwindcss /> },
    { name: "Symfony", color: "#FF6006", icon: <SiSymfony /> },
    { name: "Vue.js", color: "#000000", icon: <FaVuejs /> },
    { name: "WordPress", color: "#FF6006", icon: <SiWordpress /> },
    { name: "PHP", color: "#000000", icon: <SiPhp /> },
    { name: "Figma", color: "#FF6006", icon: <SiFigma /> },
];

export const Expertise = () => {
    const component = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => (index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)),
                },
                {
                    x: (index) => (index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)),
                    ease: "power1.inOut",
                }
            );
        }, component);

        return () => ctx.revert(); // Cleanup au démontage du composant
    }, []);

    return (
        <section ref={component} className="bg-[#F0EDE6] py-32 px-6 md:px-20 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-sans font-medium tracking-tighter mb-20 uppercase">
                    Expertise
                </h2>

                {/* Animation des technologies */}
                <div className="flex flex-col gap-8 md:gap-12 w-full mt-10">
                    {techStack.map(({ name, color, icon }, index) => (
                        <div
                            key={index}
                            className="tech-row flex items-center justify-center gap-4 text-black/10"
                        >
                            {Array.from({ length: 15 }, (_, i) => (
                                <span
                                    key={i}
                                    aria-hidden={i !== 7 ? "true" : undefined}
                                    className="tech-item text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter flex items-center gap-3 whitespace-nowrap"
                                    style={{ color: i === 7 ? color : "inherit" }}
                                >
                                    {icon}
                                    {name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};