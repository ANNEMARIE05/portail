"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, KeyRound } from 'lucide-react';
import Link from 'next/link';
import ButtonLoader from '@/components/ButtonLoader';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Redirection simulée vers dashboard / docs
        }, 1200);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center bg-slate-50 px-4 py-12 lg:py-20">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-100/60 to-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 -translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="card max-w-md w-full rounded-card p-8 lg:p-10 shadow-card-hover relative z-10"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-5 shadow-card">
                        <KeyRound className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Connexion</h2>
                    <p className="text-slate-500 text-sm">Accédez à votre espace développeur et à vos clés API.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Mail className="h-5 w-5" />
                            </div>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none text-slate-900"
                                placeholder="vous@entreprise.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mot de passe</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Lock className="h-5 w-5" />
                            </div>
                            <input
                                required
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none text-slate-900"
                                placeholder="••••••••"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-1.5 text-right">
                            <Link href="/forgot-password" className="font-medium text-primary-600 hover:underline">Mot de passe oublié ?</Link>
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`btn-primary w-full py-3.5 rounded-btn inline-flex items-center justify-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <ButtonLoader label="Connexion..." className="text-white" />
                        ) : (
                            <span className="flex items-center">Se connecter <ArrowRight className="w-5 h-5 ml-2" /></span>
                        )}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-200">
                    <button type="button" className="btn-secondary w-full justify-center py-3">
                        <Github className="w-5 h-5 mr-2" />
                        Se connecter avec GitHub
                    </button>
                    <p className="mt-5 text-center text-sm text-slate-500">
                        Pas encore de compte ? <Link href="/register" className="font-semibold text-primary-600 hover:underline">S&apos;inscrire</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
