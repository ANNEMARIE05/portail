"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export type TestimonialCard = {
    quote: string;
    author: string;
    handle: string;
    avatar: string;
};

const defaultTestimonials: TestimonialCard[] = [
    {
        quote: "Impressionné par le professionnalisme et le souci du détail.",
        author: "Guy Hawkins",
        handle: "@guyhawkins",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
        quote: "Une expérience fluide de bout en bout. Je recommande vivement !",
        author: "Karla Lynn",
        handle: "@karlalynn98",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
        quote: "Fiable et digne de confiance. Cela m'a beaucoup simplifié la vie !",
        author: "Jane Cooper",
        handle: "@janecooper",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

type Props = {
    label?: string;
    title?: string;
    testimonials?: TestimonialCard[];
};

export default function TestimonialsSection({
    label = "Témoignage",
    title = "Expériences client transformatives",
    testimonials = defaultTestimonials,
}: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-10 sm:py-16 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-6 sm:mb-10 lg:mb-16">
                    <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">
                        {label}
                    </p>
                    <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                        {title}
                    </h2>
                </div>

                {/* Grille de 3 cartes */}
                <div className="grid md:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                    {testimonials.slice(0, 3).map((t, i) => (
                        <motion.article
                            key={t.handle}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={fadeIn}
                            className="flex flex-col rounded-2xl sm:rounded-3xl bg-slate-100/90 overflow-hidden border border-slate-200/60"
                        >
                            <div className="flex-1 p-4 sm:p-6 lg:p-8 pb-3 sm:pb-4">
                                <Quote
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-slate-400 mb-2 sm:mb-4"
                                    aria-hidden
                                />
                                <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>
                            {/* Zone auteur (léger effet concave avec fond légèrement plus clair) */}
                            <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-5 bg-slate-50/80 border-t border-slate-200/50 rounded-b-2xl sm:rounded-b-3xl">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-2 ring-white shadow-sm">
                                        <Image
                                            src={t.avatar}
                                            alt=""
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                                            {t.author}
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-500 truncate">
                                            {t.handle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:mt-10">
                    {[0, 1, 2].map((i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className="rounded-full p-1 transition-colors hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            aria-label={`Page témoignage ${i + 1}`}
                        >
                            {i === activeIndex ? (
                                <span className="block w-8 h-1 rounded-full bg-slate-700" />
                            ) : (
                                <span className="block w-2 h-2 rounded-full bg-slate-300" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
