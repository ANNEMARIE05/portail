"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, ShieldCheck, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import Link from 'next/link';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function HomePage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.08 }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    const testimonials = [
        {
            quote: "L'intégration a pris moins d'une journée. La doc est claire et les webhooks sont fiables. On a déployé en production sans accroc.",
            author: "Marie Dupont",
            role: "CTO",
            company: "PayFlow",
        },
        {
            quote: "La conformité PCI-DSS gérée côté Portail API nous a fait gagner des mois. Sécurité et simplicité au même endroit.",
            author: "Thomas Martin",
            role: "Lead Dev",
            company: "FinTech Pro",
        },
        {
            quote: "Uptime impeccable, support réactif. On scale sans se poser de questions. L'API est devenue notre colonne vertébrale.",
            author: "Sophie Bernard",
            role: "Directrice technique",
            company: "ScalePay",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-24 lg:pb-36">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary-100/50 to-indigo-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4 animate-gradient-shift" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-purple-100/30 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4 animate-gradient-shift" style={{ animationDelay: '-4s' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-2xl"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold mb-6 shadow-card">
                                <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                                PORTAIL API Nouvelle Génération est en ligne
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Concevez sans limites avec nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">APIs</span>.
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                                L&apos;infrastructure API la plus puissante pour intégrer des moyens sécurisés d&apos;envoyer et de recevoir de l&apos;argent depuis n&apos;importe quelle application.
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
                                <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link href="/docs" className="btn-primary px-6 py-3.5 rounded-btn flex items-center gap-2">
                                        Explorer la Docs <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.span>
                                <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link href="/pricing" className="btn-secondary px-6 py-3.5 rounded-btn flex items-center">
                                        Obtenir une clé API
                                    </Link>
                                </motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Skewed chic cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block perspective-1000"
                        >
                            <div className="relative w-full aspect-square">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl border border-white/40 shadow-2xl backdrop-blur-xl"
                                    style={{ transform: 'rotateY(-15deg) rotateX(10deg) rotateZ(5deg) scale(0.95)' }}
                                >
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                    className="absolute inset-4 bg-[#0f172a]/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50"
                                    style={{ transform: 'rotateY(-15deg) rotateX(10deg) translateZ(50px)' }}
                                >
                                    <div className="flex items-center px-4 py-3 border-b border-slate-700/50 bg-slate-800/40">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div className="mx-auto text-xs text-slate-400 font-mono">api-integration.ts</div>
                                    </div>
                                    <div className="p-6 text-sm font-mono text-slate-300">
                                        <p><span className="text-purple-400">import</span> {'{ PortailAPI }'} <span className="text-purple-400">from</span> <span className="text-green-300">'@portail/node'</span>;</p>
                                        <br />
                                        <p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> PortailAPI(process.env.API_KEY);</p>
                                        <br />
                                        <p><span className="text-blue-400">const</span> <span className="text-amber-300">session</span> = <span className="text-purple-400">await</span> client.checkout.create({'{'}</p>
                                        <p className="pl-4">success_url: <span className="text-green-300">'https://example.com/success'</span>,</p>
                                        <p className="pl-4">line_items: [{'{'}</p>
                                        <p className="pl-8">price: <span className="text-green-300">'price_1Mow'</span>,</p>
                                        <p className="pl-8">quantity: <span className="text-amber-400">2</span>,</p>
                                        <p className="pl-4">{'}'}],</p>
                                        <p className="pl-4">mode: <span className="text-green-300">'payment'</span>,</p>
                                        <p>{'}'});</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                    className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4"
                                    style={{ transform: 'translateZ(100px)' }}
                                >
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Requête validée</p>
                                        <p className="text-xs text-slate-500">Il y a à l'instant • 200 OK</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="py-20 lg:py-28 bg-white border-t border-slate-200/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Un écosystème pensé pour vous</motion.h2>
                        <motion.p variants={fadeIn} className="text-slate-600 leading-relaxed">APIs modernes, sécurisées et intégrables pour concevoir les meilleures expériences.</motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="card-hover rounded-card p-6 lg:p-8"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-xl flex items-center justify-center mb-5 shadow-card">
                                <Terminal className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Intégration rapide</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">Connectez-vous en quelques lignes avec nos SDKs officiels.</p>
                            <ul className="space-y-2">
                                {['REST API et Webhooks', 'JS, Python, PHP, Go', 'Rétrocompatible'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="rounded-card p-6 lg:p-8 bg-slate-900 text-white border border-slate-700 shadow-card-hover relative overflow-hidden md:-mt-2 md:mb-2"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 relative z-10 shadow-card">
                                <ShieldCheck className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 relative z-10">Sécurité de pointe</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-5 relative z-10">Conformité et normes gérées. Authentification robuste sur toutes les routes.</p>
                            <ul className="space-y-2 relative z-10">
                                {['PCI-DSS Niveau 1', 'Chiffrement AES-256', 'Détection fraude IA'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-200">
                                        <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="card-hover rounded-card p-6 lg:p-8"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-card">
                                <Database className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Haute disponibilité</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">Architecture serverless globale, uptime 99,99%.</p>
                            <ul className="space-y-2">
                                {['Multi-régions', 'Latence < 50ms', 'SLA garanti'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Témoignages - Slider */}
            <motion.section
                id="temoignages"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ils nous font confiance</motion.h2>
                        <motion.p variants={fadeIn} className="text-slate-600 leading-relaxed">Découvrez ce que les équipes qui utilisent Portail API en disent.</motion.p>
                    </div>

                    <motion.div variants={fadeIn}>
                        <TestimonialsSlider testimonials={testimonials} autoPlayMs={6000} />
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
