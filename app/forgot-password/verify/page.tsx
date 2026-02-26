"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { OTPInput } from "@/components/OTPInput";
import ButtonLoader from "@/components/ButtonLoader";

function VerifyContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") ?? "";

    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);

    const maskedEmail = email ? `${email.slice(0, 2)}***@${email.split("@")[1] ?? ""}` : "";

    const handleComplete = (value: string) => {
        setError(false);
        // Simuler vérification
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push(`/forgot-password/reset?email=${encodeURIComponent(email)}`);
        }, 800);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError(true);
            return;
        }
        handleComplete(otp);
    };

    const handleResend = () => {
        if (resendCooldown > 0) return;
        setResendCooldown(60);
        const interval = setInterval(() => {
            setResendCooldown((prev) => {
                if (prev <= 1) clearInterval(interval);
                return Math.max(0, prev - 1);
            });
        }, 1000);
    };

    if (!email) {
        return (
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card max-w-md w-full rounded-card p-8 text-center"
                >
                    <p className="text-slate-600 mb-4">Aucun email fourni. Demandez d&apos;abord un code.</p>
                    <Link href="/forgot-password" className="btn-primary py-3 px-6 rounded-btn">
                        Demander un code
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center bg-slate-50 px-4 py-12 lg:py-20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-100/50 to-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/4 translate-x-1/3" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="card max-w-md w-full rounded-card p-8 lg:p-10 shadow-card-hover relative z-10"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-5 shadow-card">
                        <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Vérification du code</h2>
                    <p className="text-slate-500 text-sm">
                        Entrez le code à 6 chiffres envoyé à <span className="font-medium text-slate-700">{maskedEmail}</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3 text-center">Code OTP</label>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            onComplete={handleComplete}
                            error={error}
                            disabled={isLoading}
                        />
                        {error && (
                            <p className="mt-2 text-center text-sm text-red-600">Veuillez saisir les 6 chiffres du code.</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || otp.length !== 6}
                        className={`btn-primary w-full py-3.5 rounded-btn inline-flex items-center justify-center gap-2 ${isLoading || otp.length !== 6 ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? (
                            <ButtonLoader label="Vérification..." className="text-white" />
                        ) : (
                            "Vérifier le code"
                        )}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-500 mb-1">Vous n&apos;avez pas reçu le code ?</p>
                    <button
                        type="button"
                        onClick={handleResend}
                        disabled={resendCooldown > 0}
                        className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <RefreshCw className="w-4 h-4 mr-1.5" />
                        {resendCooldown > 0 ? `Renvoyer dans ${resendCooldown}s` : "Renvoyer le code"}
                    </button>
                </div>

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

export default function ForgotPasswordVerifyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50">
                <div className="animate-pulse rounded-card bg-slate-200 w-80 h-96" />
            </div>
        }>
            <VerifyContent />
        </Suspense>
    );
}
