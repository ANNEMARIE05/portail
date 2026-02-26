"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Check, Copy, Key, BookOpen, Layers } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const fetchDocSections = async () => {
    await new Promise((r) => setTimeout(r, 600)); // Simulate loading
    return [
        { id: 'auth', title: 'Authentification', content: 'Toutes les requêtes d\'API nécessitent un en-tête Authorization. Utilisez votre clé d\'API secrète générée depuis votre Dashboard.', endpoint: 'POST /v1/auth' },
        { id: 'charges', title: 'Créer un Paiement', content: 'Pour facturer une carte de crédit ou un autre moyen de paiement, créez un objet Charge avec les informations du client.', endpoint: 'POST /v1/charges' },
        { id: 'refunds', title: 'Gérer les Remboursements', content: 'Si vous devez rendre le montant d\'un paiement à un client, créez un objet Refund. Le délai de remboursement dépend des banques.', endpoint: 'POST /v1/refunds' },
        { id: 'webhooks', title: 'Événements Webhook', content: 'Configurez des webhooks pour être notifié asynchronement des changements de statut (succès, échec) dans vos transactions.', endpoint: 'POST /v1/webhooks' },
    ];
};

export default function DocumentationPage() {
    const [activeTab, setActiveTab] = useState('cURL');
    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState('auth');

    const { data: sections, isLoading } = useQuery({
        queryKey: ['docSections'],
        queryFn: fetchDocSections,
    });

    const languages = ['cURL', 'Node.js', 'Python', 'Go', 'PHP'];

    const codeSnippets: Record<string, string> = {
        'cURL': `curl https://api.paymoney.com/v1/charges \\
  -H "Authorization: Bearer sk_test_..." \\
  -d amount=4500 \\
  -d currency=eur \\
  -d source=tok_mastercard`,
        'Node.js': `import PayAPI from 'payapi';

const payapi = new PayAPI('sk_test_...');

const charge = await payapi.charges.create({
  amount: 4500,
  currency: 'eur',
  source: 'tok_mastercard',
});`,
        'Python': `import payapi

payapi.api_key = "sk_test_..."

payapi.Charge.create(
  amount=4500,
  currency="eur",
  source="tok_mastercard",
)`,
        'Go': `import "github.com/paymoney/paymoney-go/v72"
import "github.com/paymoney/paymoney-go/v72/charge"

params := &paymoney.ChargeParams{
  Amount:   paymoney.Int64(4500),
  Currency: paymoney.String("eur"),
  Source:   &paymoney.SourceParams{Token: paymoney.String("tok_mastercard")},
}
ch, _ := charge.New(params)`,
        'PHP': `$payapi = new \\PayAPI\\Client('sk_test_...');

$payapi->charges->create([
  'amount' => 4500,
  'currency' => 'eur',
  'source' => 'tok_mastercard',
]);`
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippets[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex bg-white min-h-[calc(100vh-80px)]">
            {/* Sidebar - Plus large et aérée */}
            <aside className="w-72 border-r border-slate-200 bg-slate-50/60 hidden lg:block overflow-y-auto shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
                <div className="p-6">
                    <div className="relative mb-8">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Rechercher (Ctrl+K)..."
                            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-btn bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-card"
                        />
                    </div>

                    <div className="space-y-2 mb-8">
                        <h5 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center"><BookOpen className="w-3 h-3 mr-2" /> Démarrage</h5>
                        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl text-primary-600 bg-primary-50">
                            Introduction
                        </button>
                        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl text-slate-600 hover:bg-slate-100">
                            Migration
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h5 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center"><Layers className="w-3 h-3 mr-2" /> Ressources Core</h5>
                        {isLoading ? (
                            <div className="space-y-3 px-3">
                                <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                                <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                                <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
                            </div>
                        ) : (
                            sections?.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${activeSection === section.id
                                            ? 'text-primary-600 bg-primary-50 shadow-sm border border-primary-100'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content - Utilisation maximale de l'espace (Width étendu) */}
            <div className="flex-1 overflow-x-hidden p-6 lg:p-12 xl:p-16">
                <div className="max-w-[1200px] mx-auto">

                    <div className="mb-12 border-b border-slate-200 pb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Documentation Développeur</h1>
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                            Tout ce dont vous avez besoin pour intégrer notre solution de paiement en quelques minutes.
                            Des requêtes authentifiées JSON, des SDKs performants et des webhooks temps réel.
                        </p>
                    </div>

                    {/* Grid Layout plus large */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start relative">

                        {/* Text Content (Généreux) */}
                        <div className="xl:col-span-7 prose prose-slate prose-lg max-w-none prose-a:text-primary-600">
                            {isLoading ? (
                                <div className="space-y-6">
                                    <div className="h-10 bg-slate-100 rounded-lg animate-pulse w-1/2"></div>
                                    <div className="h-32 bg-slate-100 rounded-lg animate-pulse w-full"></div>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-slate-900 border-none mt-0 mb-6 font-century">
                                        {sections?.find(s => s.id === activeSection)?.title}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        {sections?.find(s => s.id === activeSection)?.content}
                                    </p>

                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                                            <Key className="w-5 h-5 mr-2 text-primary-500" />
                                            Détail de la requête HTTP
                                        </h3>
                                        <div className="bg-white border-2 border-slate-100 p-4 rounded-xl flex items-center justify-between group hover:border-primary-200 transition-colors">
                                            <div className="flex items-center space-x-4">
                                                <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-md tracking-wider">
                                                    {sections?.find(s => s.id === activeSection)?.endpoint.split(' ')[0]}
                                                </span>
                                                <code className="text-[15px] font-mono text-slate-700 font-semibold group-hover:text-primary-700 transition-colors">
                                                    {sections?.find(s => s.id === activeSection)?.endpoint.split(' ')[1]}
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Code Viewer Panel (Plus imposant) */}
                        <div className="xl:col-span-5 rounded-card bg-slate-900 overflow-hidden border border-slate-700 shadow-card-hover xl:sticky xl:top-20">

                            <div className="flex bg-slate-900 border-b border-slate-800">
                                <div className="flex space-x-2 px-4 py-3 items-center border-r border-slate-800">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                </div>
                            </div>

                            {/* Tabs Langages */}
                            <div className="flex overflow-x-auto border-b border-slate-800 scrollbar-hide bg-slate-900">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setActiveTab(lang)}
                                        className={`px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === lang
                                                ? 'border-primary-500 text-primary-400 bg-primary-500/10'
                                                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                            }`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>

                            {/* Code Sandbox */}
                            <div className="p-6 relative group min-h-[300px]">
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute top-4 right-4 p-2.5 rounded-lg text-slate-400 bg-slate-800 border border-slate-700 opacity-0 group-hover:opacity-100 transition-all hover:text-white hover:bg-slate-700 focus:outline-none"
                                    title="Copier le code"
                                >
                                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                                </button>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <pre className="font-mono text-[14px] leading-relaxed text-slate-300 overflow-x-auto p-1">
                                            <code>{codeSnippets[activeTab]}</code>
                                        </pre>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="bg-slate-900 border-t border-slate-800 p-4 text-xs text-slate-500 font-mono text-center flex justify-between items-center px-6">
                                <span>v2.4.0</span>
                                <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Systems Operational</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
