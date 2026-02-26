"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import ButtonLoader from '@/components/ButtonLoader';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        company: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simuler un fetch via hook
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSuccess) {
        return (
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card max-w-md w-full rounded-card p-8 lg:p-10 shadow-card-hover text-center"
                >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-card">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Compte créé !</h2>
                    <p className="text-slate-600 text-sm mb-6">Un email de confirmation a été envoyé à <strong>{formData.email}</strong>. Vérifiez votre boîte de réception pour activer vos clés API.</p>
                    <Link href="/login" className="btn-primary w-full justify-center py-3.5">
                        Aller à la connexion
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center bg-slate-50 px-4 py-12 lg:py-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-100/50 to-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/4 translate-x-1/3" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-card shadow-card-hover bg-white border border-slate-200/80 z-10"
            >
                <div className="p-8 md:p-10 lg:p-12 bg-white">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">Rejoindre PORTAIL API</h2>
                        <p className="text-slate-500 text-sm">Créez votre espace développeur gratuit.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom complet</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <User className="h-5 w-5" />
                                </div>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none" placeholder="Jean Dupont" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email professionnel</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none" placeholder="jean@entreprise.com" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mot de passe</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <input required minLength={8} type="password" name="password" value={formData.password} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none" placeholder="••••••••" />
                            </div>
                            <p className="text-xs text-slate-500 mt-1.5">Au moins 8 caractères.</p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`btn-primary w-full py-3.5 rounded-btn inline-flex items-center justify-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <ButtonLoader label="Création en cours..." className="text-white" />
                            ) : (
                                <span className="flex items-center">Créer mon compte <ArrowRight className="w-5 h-5 ml-2" /></span>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                        <button type="button" className="btn-secondary w-full justify-center py-3">
                            <Github className="w-5 h-5 mr-2" />
                            S&apos;inscrire avec GitHub
                        </button>
                        <p className="mt-5 text-center text-sm text-slate-500">
                            Déjà un compte ? <Link href="/login" className="font-semibold text-primary-600 hover:underline">Connectez-vous</Link>
                        </p>
                    </div>
                </div>

                {/* Right : Cover */}
                <div className="hidden lg:block bg-slate-900 p-10 text-white relative overflow-hidden flex flex-col justify-between" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(37,99,235,0.25) 0%, transparent 50%)' }}>
                    <div>
                        <div className="w-12 h-12 bg-white/10 rounded-xl mb-8 flex items-center justify-center backdrop-blur-md border border-white/20">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold font-century mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Accédez à l'environnement de production.</h3>
                        <p className="text-slate-400 text-lg">Intégrez nos APIs en quelques minutes. Bénéficiez de 1000 requêtes gratuites par jour dans l'environnement de test.</p>
                    </div>

                    <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center mb-4">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=JS&background=random" alt="" />
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=MD&background=random" alt="" />
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=AK&background=random" alt="" />
                            </div>
                            <div className="text-sm ml-4 text-slate-300">Rejoignez 10k+ développeurs</div>
                        </div>
                        <p className="italic text-slate-400 text-sm">"L'API est incroyablement bien conçue, la doc est claire, on a gagné des semaines de développement."</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
