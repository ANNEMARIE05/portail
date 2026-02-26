"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Zap, HelpCircle, CreditCard, Menu, X, TerminalSquare, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Accueil', path: '/', icon: <Zap className="w-4 h-4 ml-2" /> },
        { name: 'Documentation', path: '/docs', icon: <Code2 className="w-4 h-4 ml-2" /> },
        { name: 'Tarifs', path: '/pricing', icon: <CreditCard className="w-4 h-4 ml-2" /> },
        { name: 'FAQ', path: '/faq', icon: <HelpCircle className="w-4 h-4 ml-2" /> },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 w-auto group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-indigo-600 flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-shadow">
                            <TerminalSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">
                            PORTAIL <span className="text-primary-600">API</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center h-full">
                        <div className="flex items-center gap-1 h-full">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`relative flex items-center h-full px-4 text-sm font-medium transition-colors hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'}`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                                                initial={false}
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-3 pl-6 ml-2 border-l border-slate-200 h-full">
                            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                Connexion
                            </Link>
                            <Link href="/register" className="btn-primary text-sm py-2.5 px-4 rounded-btn flex items-center gap-2">
                                <UserPlus size={16} />
                                S&apos;inscrire
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-btn transition-colors"
                        aria-label="Menu"
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
                            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
                            style={{ top: '4rem' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-card-hover mx-4 mt-2 rounded-card overflow-hidden"
                            style={{ top: '4rem' }}
                        >
                            <div className="p-3 space-y-0.5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-btn text-base font-medium transition-colors ${pathname === link.path ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50'}`}
                                    >
                                        {link.name}
                                        <span className="text-primary-400">{link.icon}</span>
                                    </Link>
                                ))}
                                <div className="border-t border-slate-100 my-2 pt-2 flex gap-2">
                                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 py-3 text-center rounded-btn font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                                        Connexion
                                    </Link>
                                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 py-3 text-center rounded-btn font-semibold text-white bg-primary-600 hover:bg-primary-700 flex items-center justify-center gap-2">
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
