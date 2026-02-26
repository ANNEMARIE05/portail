"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function ResetContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") ?? "";

    const [formData, setFormData] = useState({ password: "", confirm: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (formData.password.length < 8) {
            setError("Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }
        if (formData.password !== formData.confirm) {
            setError("Les deux mots de passe ne correspondent pas.");
            return;
        }
        setIsLoading(true);
        // Simuler réinitialisation
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1200);
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
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Mot de passe réinitialisé</h2>
                    <p className="text-slate-600 text-sm mb-6">
                        Votre mot de passe a été mis à jour. Vous pouvez vous connecter avec votre nouvel identifiant.
                    </p>
                    <Link href="/login" className="btn-primary w-full justify-center py-3.5 rounded-btn">
                        Se connecter
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center bg-slate-50 px-4 py-12 lg:py-20">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-100/50 to-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="card max-w-md w-full rounded-card p-8 lg:p-10 shadow-card-hover relative z-10"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-5 shadow-card">
                        <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Nouveau mot de passe</h2>
                    <p className="text-slate-500 text-sm">
                        Choisissez un mot de passe sécurisé d&apos;au moins 8 caractères.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nouveau mot de passe</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Lock className="h-5 w-5" />
                            </div>
                            <input
                                required
                                minLength={8}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none text-slate-900"
                                placeholder="••••••••"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-1.5">Au moins 8 caractères.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Confirmer le mot de passe</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Lock className="h-5 w-5" />
                            </div>
                            <input
                                required
                                type="password"
                                name="confirm"
                                value={formData.confirm}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-4 py-3 rounded-btn border border-slate-200 bg-slate-50/80 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all outline-none text-slate-900"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`btn-primary w-full py-3.5 rounded-btn ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Réinitialisation...
                            </span>
                        ) : (
                            "Réinitialiser le mot de passe"
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

export default function ForgotPasswordResetPage() {
    return (
        <Suspense fallback={
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50">
                <div className="animate-pulse rounded-card bg-slate-200 w-80 h-96" />
            </div>
        }>
            <ResetContent />
        </Suspense>
    );
}
