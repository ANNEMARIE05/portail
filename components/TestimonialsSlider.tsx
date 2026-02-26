"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export type Testimonial = {
    quote: string;
    author: string;
    role: string;
    company: string;
};

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        filter: "blur(8px)",
    }),
    center: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        filter: "blur(8px)",
        transition: { duration: 0.3 },
    }),
};

type Props = {
    testimonials: Testimonial[];
    autoPlayMs?: number;
};

export default function TestimonialsSlider({ testimonials, autoPlayMs = 6000 }: Props) {
    const [[page, direction], setPage] = useState([0, 0]);
    const currentIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;
    const t = testimonials[currentIndex];

    const goTo = useCallback(
        (next: number) => {
            setPage(([p, d]) => [p + next, next]);
        },
        []
    );

    useEffect(() => {
        if (testimonials.length <= 1 || !autoPlayMs) return;
        const id = setInterval(() => goTo(1), autoPlayMs);
        return () => clearInterval(id);
    }, [testimonials.length, autoPlayMs, goTo]);

    if (!t) return null;

    return (
        <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden min-h-[260px] flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex items-center justify-center px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.98 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full card-hover rounded-2xl p-8 lg:p-12 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 text-center overflow-hidden"
                        >
                            <Quote
                                className="w-14 h-14 text-primary-200/90 mx-auto mb-6"
                                aria-hidden
                            />
                            <blockquote className="text-slate-700 text-lg lg:text-xl leading-relaxed mb-10 font-medium">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-base shadow-lg ring-4 ring-primary-100/50">
                                    {t.author
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-slate-900 text-base">
                                        {t.author}
                                    </p>
                                    <p className="text-slate-500 text-sm mt-0.5">
                                        {t.role} · {t.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                    type="button"
                    onClick={() => goTo(-1)}
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-card flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200 hover:shadow-card-hover transition-colors disabled:opacity-40 disabled:pointer-events-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Témoignage précédent"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex items-center gap-2.5">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                            className="rounded-full p-1 transition-all duration-300 hover:opacity-80"
                            aria-label={`Aller au témoignage ${i + 1}`}
                        >
                            <motion.span
                                className="block w-3 h-3 rounded-full"
                                animate={{
                                    scale: i === currentIndex ? 1.2 : 1,
                                    backgroundColor:
                                        i === currentIndex
                                            ? "rgb(79 70 229)"
                                            : "rgb(203 213 225)",
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </button>
                    ))}
                </div>

                <motion.button
                    type="button"
                    onClick={() => goTo(1)}
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-card flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200 hover:shadow-card-hover transition-colors disabled:opacity-40 disabled:pointer-events-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Témoignage suivant"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>
        </div>
    );
}
