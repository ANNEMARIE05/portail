"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ApiCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-lg rounded-2xl overflow-hidden bg-slate-800/95 shadow-2xl border border-slate-700/80"
        >
            {/* Barre de titre (boutons fenêtre + nom fichier) */}
            <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/80 border-b border-slate-700/80">
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/90" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <span className="flex-1 text-center text-sm font-medium text-slate-400 truncate">
                    api-integration.ts
                </span>
                <div className="w-14" /> {/* spacer pour centrer le nom */}
            </div>

            {/* Contenu code */}
            <div className="p-5 pb-20 font-mono text-sm leading-relaxed relative">
                <pre className="text-slate-100 overflow-x-auto">
                    <code>
                        <span className="text-violet-400">import</span>
                        <span className="text-slate-300"> {"{ PortailAPI } "}</span>
                        <span className="text-violet-400">from</span>
                        <span className="text-amber-300"> {"'@portail/node'"}</span>
                        <span className="text-slate-300">;</span>
                        {"\n"}
                        <span className="text-violet-400">const</span>
                        <span className="text-slate-300"> client = </span>
                        <span className="text-violet-400">new</span>
                        <span className="text-sky-400"> PortailAPI</span>
                        <span className="text-slate-300">(process.env.API_KEY);</span>
                        {"\n"}
                        <span className="text-violet-400">const</span>
                        <span className="text-slate-300"> session = </span>
                        <span className="text-violet-400">await</span>
                        <span className="text-slate-300"> client.checkout.create(</span>
                        {"\n"}
                        <span className="text-slate-300">  {"{"}</span>
                        {"\n"}
                        <span className="text-slate-300">    </span>
                        <span className="text-emerald-400">success_url</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-amber-300">{"'https://example.com/success'"}</span>
                        <span className="text-slate-300">,</span>
                        {"\n"}
                        <span className="text-slate-300">    </span>
                        <span className="text-emerald-400">line_items</span>
                        <span className="text-slate-300">: [</span>
                        <span className="text-slate-300">{"{"}</span>
                        {"\n"}
                        <span className="text-slate-300">      </span>
                        <span className="text-emerald-400">price</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-amber-300">{"'price_1Mow'"}</span>
                        <span className="text-slate-300">,</span>
                        {"\n"}
                        <span className="text-slate-300">      </span>
                        <span className="text-emerald-400">quantity</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-sky-400">2</span>
                        <span className="text-slate-300">,</span>
                        {"\n"}
                        <span className="text-slate-300">    {"}"}],</span>
                        {"\n"}
                        <span className="text-slate-300">    </span>
                        <span className="text-emerald-400">mode</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-amber-300">{"'payment'"}</span>
                        <span className="text-slate-300">,</span>
                        {"\n"}
                        <span className="text-slate-300">  {"}"});</span>
                    </code>
                </pre>

                {/* Notification succès */}
                <div className="absolute bottom-4 right-4 flex items-start gap-2 px-3 py-2.5 rounded-lg bg-white border border-emerald-200 shadow-lg">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold text-slate-800">Requête validée</p>
                        <p className="text-xs text-slate-500">Il y a à l&apos;instant • 200 OK</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
