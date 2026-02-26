"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Forfait Basique",
    description:
      "Idéal pour les startups et petites structures qui veulent tester l’API à moindre coût.",
    price: "0",
    cta: "Créer un compte gratuit",
    href: "/register",
    features: [
      "Session de découverte pour évaluer vos besoins.",
      "Recommandations et premiers retours concrets.",
      "Support par email ou documentation.",
    ],
  },
  {
    name: "Forfait Standard",
    description:
      "Pour les entreprises en croissance qui ont besoin d’un usage API soutenu.",
    price: "99",
    cta: "Obtenir la clé API",
    href: "/register",
    popular: true,
    features: [
      "Consultation pour définir vos objectifs d’intégration.",
      "Analyse de vos flux, volumes et cas d’usage.",
      "Plans d’implémentation et bonnes pratiques.",
    ],
  },
  {
    name: "Forfait Premium",
    description:
      "Pour les grands comptes qui veulent une solution stratégique et un accompagnement dédié.",
    price: "Sur devis",
    cta: "Contacter les ventes",
    href: "/contact",
    features: [
      "Audit complet de votre architecture et intégrations.",
      "Stratégie d’évolution et roadmap sur mesure.",
      "Gestionnaire de compte dédié et SLA garanti.",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sombre avec overlay */}
      <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          >
            Nos tarifs
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-1.5 text-white/80 text-sm"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">Tarifs</span>
          </motion.nav>
        </div>
      </section>

      {/* Section tarifs - fond blanc */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-2">
              Plans tarifaires
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Des tarifs adaptés à vos besoins
            </h2>
            <p className="text-slate-600">
              Que vous soyez une startup avec un budget serré ou une entreprise
              qui vise une intégration complète, nous avons une offre pour vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border bg-white p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow ${
                  plan.popular
                    ? "border-primary-500/40 ring-1 ring-primary-500/20"
                    : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Populaire
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Sur devis" && (
                    <span className="text-slate-500 text-sm ml-1">/mois</span>
                  )}
                </div>
                <Link
                  href={plan.href}
                  className="inline-flex justify-center items-center rounded-xl px-6 py-3.5 font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors uppercase tracking-wide text-sm"
                >
                  {plan.cta}
                </Link>
                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-600 text-sm mt-8">
            Besoin de plus de détails ?{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-2"
            >
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
