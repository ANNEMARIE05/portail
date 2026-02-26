"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Terminal,
    ArrowRight,
    Building2,
    Users,
    FileText,
    Briefcase,
    TrendingUp,
    Handshake,
    Scale,
    Award,
} from "lucide-react";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApiCard from "@/components/ApiCard";
import AnimatedDataPattern from "@/components/AnimatedDataPattern";

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
};

const cardEnter = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const valueBlocks = [
    {
        icon: Handshake,
        title: "Confiance",
        description:
            "Nous nous engageons à fournir une infrastructure fiable et transparente pour vos intégrations de paiement.",
    },
    {
        icon: Award,
        title: "Crédibilité",
        description:
            "Normes et certifications au rendez-vous. Une API conçue pour les professionnels exigeants.",
    },
    {
        icon: Scale,
        title: "Éthique",
        description:
            "Sécurité des données et pratiques responsables au cœur de notre plateforme.",
    },
];

const services = [
    {
        icon: Building2,
        title: "Assistance technique",
        description: "Support dédié et documentation à jour pour intégrer nos APIs rapidement.",
        href: "/docs",
    },
    {
        icon: Terminal,
        title: "API & Intégration",
        description: "REST API, webhooks et SDKs pour tous les langages courants.",
        href: "/docs",
    },
    {
        icon: Users,
        title: "Gestion des accès",
        description: "Clés API, rôles et permissions pour une équipe maîtrisée.",
        href: "/pricing",
    },
    {
        icon: FileText,
        title: "Facturation",
        description: "Modèles tarifaires clairs, facturation mensuelle ou à l'usage.",
        href: "/pricing",
    },
    {
        icon: Briefcase,
        title: "Environnements",
        description: "Sandbox et production pour développer et déployer en toute sérénité.",
        href: "/docs",
    },
    {
        icon: TrendingUp,
        title: "Analytics",
        description: "Tableaux de bord et métriques pour suivre l'usage de vos intégrations.",
        href: "/docs",
    },
];

export default function HomePage() {
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero avec zone type image de fond + bloc texte à gauche */}
            <section className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[480px] flex items-center overflow-hidden bg-slate-100">
                {/* Fond type image (dégradé + motif) */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-slate-200/80 via-slate-100 to-primary-100/30"
                    aria-hidden
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2394a3b8\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-90"
                    aria-hidden
                />
                <AnimatedDataPattern variant="grid" className="opacity-70" opacity={0.08} />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        <div className="max-w-2xl">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-6 leading-tight"
                            >
                                Concevez sans limites avec nos APIs.
                            </motion.h1>
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                transition={{ delay: 0.1 }}
                                className="text-sm sm:text-base lg:text-lg text-slate-600 mb-5 sm:mb-8 leading-relaxed"
                            >
                                L'infrastructure API la plus puissante pour intégrer des moyens sécurisés d'envoyer et de recevoir de l'argent depuis n'importe quelle application
                            </motion.p>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-2 sm:gap-3"
                            >
                                <Link
                                    href="/docs"
                                    className="btn-primary inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm rounded-btn uppercase tracking-wide"
                                >
                                    Explorer la doc <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm rounded-btn border-2 border-slate-300 text-slate-700 font-semibold uppercase tracking-wide hover:bg-slate-50 hover:border-slate-400 transition-colors"
                                >
                                    Obtenir une clé API
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex justify-center lg:justify-end order-first lg:order-none">
                            <ApiCard />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 blocs valeurs (fond sombre) */}
            <section className="relative z-10 -mt-0 w-full bg-slate-800 overflow-hidden">
                <AnimatedDataPattern variant="dots" className="opacity-60" opacity={0.25} />
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6 sm:mb-8 lg:mb-12"
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight mb-1 sm:mb-2">
                            Nos valeurs
                        </h2>
                        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
                            Ce qui guide notre plateforme et vos intégrations.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
                        {valueBlocks.map((block, i) => (
                            <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                                className="bg-slate-700/50 backdrop-blur-sm text-white p-4 sm:p-6 lg:p-10 flex flex-col items-center text-center rounded-xl border border-slate-600/50 hover:border-primary-500/30 transition-colors"
                            >
                                <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-500/20 text-primary-300 mb-3 sm:mb-5">
                                    <block.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                                </span>
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider mb-2 sm:mb-3 text-white">
                                    {block.title}
                                </h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {block.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Services */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="py-10 sm:py-16 lg:py-28 bg-white border-t border-slate-200/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-14">
                        <motion.h2
                            variants={fadeIn}
                            className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-4 uppercase tracking-tight"
                        >
                            Services
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Découvrez notre portefeuille de services pour développeurs et équipes.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-10">
                        {services.map((service, i) => {
                            const ServiceIcon = service.icon;
                            return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                variants={cardEnter}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="group"
                            >
                                <motion.div
                                    className="flex flex-col h-full p-4 sm:p-5 lg:p-6 rounded-card border border-slate-200/80 bg-white hover:shadow-card-hover hover:border-slate-200 transition-shadow transition-colors duration-200"
                                    whileHover={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)" }}
                                >
                                    <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 text-primary-600 mb-3 sm:mb-5 group-hover:bg-primary-100 transition-colors">
                                        <ServiceIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 flex-1">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                                    >
                                        En savoir plus
                                        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-primary-200 text-primary-600 group-hover:bg-primary-50 transition-colors">
                                            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                        </span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Témoignages — design 3 cartes */}
            <section id="temoignages" className="relative border-t border-slate-200/60">
                <AnimatedDataPattern variant="code-grid" className="opacity-50" opacity={0.06} />
                <div className="relative z-10">
                    <TestimonialsSection
                        label="Témoignage"
                        title="Expériences client transformatives"
                    />
                </div>
            </section>
        </motion.div>
    );
}
