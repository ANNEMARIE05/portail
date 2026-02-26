"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-14 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-5 shadow-card"
                    >
                        <Mail className="w-7 h-7" />
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3"
                    >
                        Nous contacter
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-slate-600"
                    >
                        Une question, un projet ou besoin d&apos;aide ? Envoyez-nous un message.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* Infos de contact */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="card p-5">
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                    <a href="mailto:contact@portail-api.com" className="text-slate-600 text-sm hover:text-primary-600 transition-colors">
                                        contact@portail-api.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card p-5">
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Téléphone</h3>
                                    <a href="tel:+33123456789" className="text-slate-600 text-sm hover:text-primary-600 transition-colors">
                                        +33 1 23 45 67 89
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card p-5">
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Adresse</h3>
                                    <p className="text-slate-600 text-sm">
                                        123 Avenue des Champs-Élysées<br />
                                        75008 Paris, France
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="lg:col-span-2"
                    >
                        <div className="card p-6 sm:p-8">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600 mb-4">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message envoyé</h3>
                                    <p className="text-slate-600 mb-6">
                                        Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="btn-secondary text-sm py-2.5 px-4"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
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
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
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
                                                placeholder="vous@exemple.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Sujet
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                                        >
                                            <option value="">Choisir un sujet</option>
                                            <option value="support">Support technique</option>
                                            <option value="commercial">Question commerciale</option>
                                            <option value="partenariat">Partenariat</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y min-h-[120px]"
                                            placeholder="Décrivez votre demande..."
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Envoyer
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
