"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TerminalSquare, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "Documentation", path: "/docs" },
        { name: "Tarifs", path: "/pricing" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-slate-900 border-b border-slate-700/60 shadow-sm">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                {/* Barre de navigation : flex sur mobile, grid sur desktop */}
                <div className="flex md:grid md:grid-cols-3 items-center justify-between md:justify-stretch h-14 sm:h-16 gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-2.5 min-w-0 group shrink-0 md:justify-self-start"
                    >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary-500 flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-shadow shrink-0">
                            <TerminalSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="font-bold text-sm sm:text-xl tracking-tight text-white truncate">
                            PORTAIL <span className="text-primary-300">API</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex justify-center items-center h-full">
                        <div className="flex items-center gap-1 h-full">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`relative flex items-center h-full px-4 text-sm uppercase tracking-wide transition-colors ${isActive ? "text-white font-semibold" : "text-white/80 hover:text-white font-medium"}`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    <div className="hidden md:flex items-center gap-3 shrink-0 justify-self-end">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white transition-colors"
                        >
                            Connexion
                        </Link>
                        <Link
                            href="/register"
                            className="btn-primary text-white text-sm py-2.5 px-5 rounded-btn flex items-center gap-2 uppercase tracking-wide bg-primary-500 hover:bg-primary-400 border-0"
                        >
                            <UserPlus size={16} />
                            S&apos;inscrire
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex items-center justify-center w-11 h-11 -mr-1 rounded-lg text-white hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed left-0 right-0 bottom-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden top-14 sm:top-16"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-card-hover mx-3 sm:mx-4 mt-2 rounded-card overflow-hidden top-14 sm:top-16"
                        >
                            <div className="p-3 space-y-0.5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-btn text-base transition-colors ${pathname === link.path ? "bg-primary-50 text-primary-600 font-semibold" : "text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900"}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="border-t border-slate-100 my-2 pt-2 flex gap-2">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex-1 flex items-center justify-center py-3 rounded-btn border-2 border-primary-200 text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-colors"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-btn font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                                    >
                                        <UserPlus size={18} />
                                        S&apos;inscrire
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
