"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, Mail, MapPin, Send } from "lucide-react";
import ButtonLoader from "@/components/ButtonLoader";

const faqData = [
    {
        question: "Comment puis-je générer ma clé API ?",
        answer:
            "Une fois votre compte créé via la page d'inscription, rendez-vous dans le tableau de bord, naviguez vers « Développeurs » > « Clés API », et cliquez sur « Générer une nouvelle clé ». Votre clé secrète ne sera affichée qu'une seule fois.",
    },
    {
        question: "Y a-t-il un environnement de test (Sandbox) ?",
        answer:
            "Oui, tous les comptes disposent d'un environnement de test. Utilisez vos clés API avec le préfixe 'sk_test_' pour simuler des paiements et tester vos intégrations sans utiliser de fonds réels.",
    },
    {
        question: "Quels sont les langages supportés ?",
        answer:
            "Notre API REST peut être utilisée avec n'importe quel langage capable de faire des requêtes HTTP. Nous fournissons également des SDKs officiels pour Node.js, Python, PHP et Go.",
    },
    {
        question: "Comment fonctionne le processus d'intégration ?",
        answer:
            "Après avoir généré votre clé API, consultez notre documentation pour les endpoints disponibles. Vous pouvez tester vos appels via l'environnement Sandbox avant de passer en production.",
    },
    {
        question: "Quel est le coût pour utiliser l'API ?",
        answer:
            "Consultez la page Tarifs pour les différents plans. Un plan gratuit est disponible pour les tests et les petits volumes. Les prix varient selon le volume d'appels et les fonctionnalités.",
    },
    {
        question: "À quoi sert l'interface utilisateur (UI/UX) de votre portail ?",
        answer:
            "Le portail développeur vous permet de gérer vos clés API, consulter les logs, suivre votre consommation et accéder à la documentation. Une expérience claire pour intégrer nos services rapidement.",
    },
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simuler envoi (à remplacer par un vrai appel API)
        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: "",
            });
        }, 1000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Bannière sombre */}
            <section className="relative bg-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                    >
                        FAQ&apos;S
                    </motion.h1>
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-300"
                        aria-label="Fil d'Ariane"
                    >
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            Accueil
                        </Link>
                        <span className="mx-2">-</span>
                        <span className="text-white">FAQ&apos;s</span>
                    </motion.nav>
                </div>
            </section>

            {/* Contenu principal : deux colonnes */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* Colonne gauche : bloc contact + formulaire */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        {/* Bloc "Prêt pour votre prochain projet" */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-brandDark text-white rounded-card p-4 sm:p-6 lg:p-8 shadow-card-hover"
                        >
                            <h3 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-5">
                                Prêt pour votre prochain projet ?
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-sm">
                                <a
                                    href="tel:+44123456789"
                                    className="flex items-start gap-3 hover:text-white transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                                    <span>(+44) 123 456 789</span>
                                </a>
                                <a
                                    href="mailto:info@portail-api.com"
                                    className="flex items-start gap-3 hover:text-white transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                                    <span>info@portail-api.com</span>
                                </a>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                                    <span>
                                        Paris - 66 rue de la Paix, 75002 Paris.
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Formulaire de contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-white rounded-card border border-slate-200 shadow-card p-4 sm:p-6 lg:p-8"
                        >
                            {submitted ? (
                                <div className="text-center py-6">
                                    <Send className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                                    <p className="text-slate-600 font-medium">
                                        Message envoyé. Nous vous répondrons
                                        rapidement.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre email"
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Sujet"
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Téléphone"
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm"
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Décrivez votre projet en quelques mots"
                                        className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-y min-h-[100px] text-sm"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full py-3.5 rounded-btn font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2 ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
                                    >
                                        {isLoading ? (
                                            <ButtonLoader label="Envoi en cours..." className="text-white" />
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Envoyer le message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Colonne droite : FAQ accordéon */}
                    <div className="lg:col-span-3">
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-5 sm:mb-8"
                        >
                            Questions fréquemment posées
                        </motion.h2>

                        <div className="space-y-1.5 sm:space-y-2">
                            {faqData.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.05 * index,
                                        }}
                                        className="bg-white rounded-card border border-slate-200 shadow-card overflow-hidden"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenIndex(
                                                    isOpen ? null : index
                                                )
                                            }
                                            className="w-full px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left gap-2 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset rounded-card"
                                        >
                                            <span
                                                className={`font-semibold text-sm sm:text-base ${
                                                    isOpen
                                                        ? "text-primary-600"
                                                        : "text-slate-900"
                                                }`}
                                            >
                                                <span className="text-slate-500 font-normal mr-2">
                                                    {index + 1}.
                                                </span>
                                                {faq.question}
                                            </span>
                                            <span
                                                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                                                    isOpen
                                                        ? "bg-primary-600 border-primary-600 text-white"
                                                        : "border-slate-300 text-slate-600 hover:border-primary-400 hover:text-primary-600"
                                                }`}
                                            >
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4" />
                                                ) : (
                                                    <Plus className="w-4 h-4" />
                                                )}
                                            </span>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <div className="px-3 sm:px-5 pb-4 sm:pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
