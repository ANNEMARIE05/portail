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
                    <div className="fixed top-0 left-0 right-0 z-50">
                        <Header />
                    </div>
                    <main className="flex-1 w-full pt-16">
                        {children}
                    </main>

                    {/* Footer minimal comme référence */}
                    <footer className="bg-slate-900 text-white mt-auto">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <Link href="/" className="inline-flex items-center gap-2.5">
                                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500/20 text-primary-400">
                                    <TerminalSquare className="w-5 h-5" />
                                </span>
                                <span className="font-bold text-lg tracking-tight">PORTAIL API</span>
                            </Link>
                            <p className="text-slate-400 text-sm">
                                © {new Date().getFullYear()} PORTAIL API. Tous droits réservés.
                            </p>
                        </div>
                    </footer>
                </ClientProviders>
            </body>
        </html>
    );
}
