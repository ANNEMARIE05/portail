"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setIsLoading(true);
        // Simuler envoi email
        setTimeout(() => {
            setIsLoading(false);
            router.push(`/forgot-password/verify?email=${encodeURIComponent(email.trim())}`);
        }, 1200);
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
                        <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Mot de passe oublié</h2>
                    <p className="text-slate-500 text-sm">
                        Saisissez votre adresse email. Nous vous enverrons un code de vérification pour réinitialiser votre mot de passe.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Adresse email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Mail className="h-5 w-5" />
                            </div>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none text-slate-900"
                                placeholder="vous@entreprise.com"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`btn-primary w-full py-3.5 rounded-btn ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Envoi en cours...
                            </span>
                        ) : (
                            "Envoyer le code de vérification"
                        )}
                    </button>
                </form>

                <p className="mt-6 text-center">
                    <Link href="/login" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1.5" />
                        Retour à la connexion
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
