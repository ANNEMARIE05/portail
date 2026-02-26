"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import AnimatedDataPattern from "@/components/AnimatedDataPattern";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    const contactCards = [
        {
            icon: Phone,
            title: "Téléphone",
            value: "207-8767-452",
            href: "tel:2078767452",
        },
        {
            icon: Mail,
            title: "Email",
            value: "support@portail-api.com",
            href: "mailto:support@portail-api.com",
        },
        {
            icon: MapPin,
            title: "Adresse",
            value: "2443 Rue du Chêne, 69001 Lyon",
            href: "#map",
        },
    ];

    const cardStagger = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
        }),
    };

    return (
        <motion.div
            className="min-h-screen bg-slate-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            {/* Hero / Bannière */}
            <section className="relative bg-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/90" />
                <AnimatedDataPattern variant="dots" className="opacity-50" opacity={0.2} />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                    >
                        Contactez-nous
                    </motion.h1>
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mt-4 text-sm text-slate-300"
                        aria-label="Fil d'Ariane"
                    >
                        <Link href="/" className="hover:text-white transition-colors">
                            Accueil
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Contact</span>
                    </motion.nav>
                </div>
            </section>

            {/* Contenu principal : formulaire + infos */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Colonne gauche : Formulaire "Prenez contact" */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="bg-white rounded-card border border-slate-200/80 shadow-card p-8 lg:p-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                            Prenez contact
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Une question, un projet ou besoin d&apos;une démo ? Remplissez le
                            formulaire et nous vous répondrons rapidement.
                        </p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-8"
                            >
                                <Send className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Message envoyé
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Nous vous répondrons dans les plus brefs délais.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="px-5 py-2.5 rounded-btn font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                                >
                                    Envoyer un autre message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 mb-1.5"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 mb-1.5"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                                        placeholder="name@exemple.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-slate-700 mb-1.5"
                                    >
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                                        placeholder="Objet de votre message"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-slate-700 mb-1.5"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y min-h-[120px]"
                                        placeholder="Votre message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-btn font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Envoyer
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Colonne droite : Cartes d'infos contact */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        className="space-y-6"
                    >
                        {contactCards.map((item, i) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                variants={cardStagger}
                                custom={i}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="flex flex-col items-center text-center bg-white rounded-card border border-slate-200/80 shadow-card p-8 hover:shadow-card-hover hover:border-primary-200/50 transition-shadow transition-colors duration-200 group block"
                            >
                                <motion.span
                                    className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <item.icon className="w-6 h-6" />
                                </motion.span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600">{item.value}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section carte */}
            <section id="map" className="w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[400px] bg-slate-200 overflow-hidden rounded-none"
                >
                    <iframe
                        title="Carte"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C0.15%2C51.52&layer=mapnik&marker=51.505%2C0"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </section>
        </motion.div>
    );
}
