"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.h1
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                    >
                        Obtenez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Clé API</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600"
                    >
                        Commencez gratuitement, évoluez selon vos besoins. Pas de frais cachés.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="card-hover rounded-card p-6 lg:p-8 flex flex-col"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Hobby</h3>
                        <p className="text-slate-500 text-sm mb-6">Pour tester et construire l&apos;intégration</p>
                        <div className="mb-6">
                            <span className="text-4xl font-extrabold text-slate-900">0€</span>
                            <span className="text-slate-500 text-sm">/mois</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['1000 requêtes API / jour', 'Environnement de test', 'Support communautaire'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/register" className="btn-secondary w-full justify-center py-3">
                            Créer compte gratuit
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-card p-6 lg:p-8 bg-slate-900 text-white border-2 border-primary-500/30 shadow-card-hover relative overflow-hidden flex flex-col md:-mt-2 md:mb-2"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute top-4 right-4">
                            <span className="px-2.5 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Populaire</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1 relative z-10">Production</h3>
                        <p className="text-slate-400 text-sm mb-6 relative z-10">Pour les entreprises en croissance</p>
                        <div className="mb-6 flex items-baseline relative z-10">
                            <span className="text-4xl font-extrabold">99€</span>
                            <span className="text-slate-400 text-sm ml-1">/mois</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1 relative z-10">
                            {['1M requêtes API / jour', 'Clés API multiples', 'Webhooks illimités', 'SLA 99.9%', 'Support prioritaire 24/7'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-200">
                                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/register" className="btn-primary w-full justify-center py-3.5 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700">
                            Générer la clé API
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="card-hover rounded-card p-6 lg:p-8 flex flex-col"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Entreprise</h3>
                        <p className="text-slate-500 text-sm mb-6">Volume sur mesure & compliance</p>
                        <div className="mb-6">
                            <span className="text-4xl font-extrabold text-slate-900">Sur devis</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['Requêtes illimitées', 'Infrastructure dédiée', 'Account Manager', 'SLA sur mesure'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="btn-secondary w-full justify-center py-3">
                            Contacter les ventes
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
