import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/providers/ClientProviders';
import Header from '@/components/Header';
import Link from 'next/link';
import { TerminalSquare } from 'lucide-react';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'PORTAIL API - Premium',
    description: 'Portail développeur premium pour vos intégrations API.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={`${plusJakarta.variable} font-sans flex flex-col min-h-screen`}>
                <ClientProviders>
                    <Header />
                    <main className="flex-1 w-full mt-16">
                        {children}
                    </main>

                    {/* Footer */}
                    <footer className="bg-slate-900 text-slate-400 mt-auto">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                                <div className="md:col-span-1 md:pr-8 md:border-r border-slate-700/80">
                                    <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
                                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500/20 text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                                            <TerminalSquare className="w-5 h-5" />
                                        </span>
                                        <span className="font-bold text-lg text-white tracking-tight">PORTAIL API</span>
                                    </Link>
                                    <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">L&apos;infrastructure API premium pour propulser vos applications de paiement.</p>
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">Produit</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/docs" className="text-slate-400 hover:text-primary-400 transition-colors">Documentation</Link></li>
                                        <li><Link href="/pricing" className="text-slate-400 hover:text-primary-400 transition-colors">Tarifs</Link></li>
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Status</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">Ressources</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/faq" className="text-slate-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
                                        <li><Link href="/contact" className="text-slate-400 hover:text-primary-400 transition-colors">Contact</Link></li>
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Blog</Link></li>
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Communauté</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">Légal</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Mentions légales</Link></li>
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Confidentialité</Link></li>
                                        <li><Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">CGV</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-14 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                                <p className="text-slate-500">© {new Date().getFullYear()} PORTAIL API. Tous droits réservés.</p>
                                <div className="flex items-center gap-6">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-400 transition-colors rounded px-1 py-0.5">Twitter</a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-400 transition-colors rounded px-1 py-0.5">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </ClientProviders>
            </body>
        </html>
    );
}
