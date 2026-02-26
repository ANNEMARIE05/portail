"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const DefaultFaqData = [
    {
        question: "Comment puis-je générer ma clé API ?",
        answer: "Une fois votre compte créé via la page d'inscription, rendez-vous dans le tableau de bord (Dashboard), naviguez vers 'Developers' > 'API Keys', et cliquez sur le bouton 'Generate New Key'. Votre clé secrète ne sera affichée qu'une seule fois."
    },
    {
        question: "Y a-t-il un environnement de test (Sandbox) ?",
        answer: "Oui, tous les comptes disposent d'un environnement de test. Utilisez vos clés API avec le préfixe 'sk_test_' pour simuler des paiements et tester vos intégrations sans utiliser de fonds réels."
    },
    {
        question: "Quels sont les langages supportés ?",
        answer: "Notre API REST peut être utilisée avec n'importe quel langage capable de faire des requêtes HTTP. Nous fournissons également des SDKs officiels pour Node.js, Python, PHP et Go."
    }
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-14 lg:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-5 shadow-card">
                        <MessageCircle className="w-7 h-7" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Questions fréquentes</h1>
                    <p className="text-slate-600">Tout ce que vous devez savoir pour démarrer avec PORTAIL API.</p>
                </div>

                <div className="space-y-3">
                    {DefaultFaqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`card overflow-hidden transition-all duration-200 ${openIndex === index ? 'ring-2 ring-primary-200 bg-primary-50/50 shadow-card-hover' : 'hover:border-slate-300'}`}
                        >
                            <button
                                type="button"
                                className="w-full px-5 py-4 flex items-center justify-between text-left rounded-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-primary-600' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    >
                                        <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
