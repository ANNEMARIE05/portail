# Ce que fait PORTAIL API

Documentation des fonctionnalités de l’application **PORTAIL API** — portail développeur pour intégrer des paiements sécurisés via API.

---

## Vision produit

L’application fournit **l’infrastructure API** pour que les développeurs puissent :

- **Envoyer et recevoir de l’argent** de façon sécurisée depuis n’importe quelle app.
- **S’intégrer rapidement** avec des SDKs (JS, Python, PHP, Go) et une REST API.
- **Bénéficier** de la conformité (ex. PCI-DSS), du chiffrement et d’une haute disponibilité.

---

## Parcours utilisateur

```
Visiteur → Accueil / Docs / Pricing / FAQ
    ↓
Inscription (/register) ou Connexion (/login)
    ↓
Espace développeur → Clé API → Utilisation de l’API (Auth, Paiements, Remboursements, Webhooks)
```

---

## Pages et contenus

| Route | Rôle | Contenu principal |
|-------|------|-------------------|
| **/** | Tous | Hero, valeur ajoutée (intégration rapide, sécurité, haute dispo), bloc code d’exemple, témoignages (slider). |
| **/docs** | Tous | Doc structurée : Authentification, Créer un Paiement, Remboursements, Webhooks. Onglets langages (cURL, Node, Python, Go, PHP), bouton copier. |
| **/pricing** | Tous | 3 offres : Hobby (0€), Production (99€, mise en avant), Enterprise (sur devis). CTA vers inscription. |
| **/faq** | Tous | Accordéon : génération clé API, sandbox, langages supportés. |
| **/login** | Connexion | Formulaire email + mot de passe ; accès espace développeur et clés API. |
| **/register** | Inscription | Création de compte pour obtenir une clé API. |

---

## Fonctionnalités techniques côté app

- **Authentification / état** : store Zustand (`useUserStore`) — `apiKey`, `isAuthenticated`, `setApiKey`, `logout`.
- **Documentation** : chargement des sections doc via React Query (simulation), onglets par langage, copie de code.
- **UI** : Tailwind, Framer Motion (animations, slider témoignages), design cohérent (primary/indigo, cartes, gradients).
- **Header / footer** : navigation (Docs, Tarifs, FAQ, Login, etc.), liens légaux et réseaux.

---

## Offres (pricing)

| Plan | Prix | Inclus (résumé) |
|------|------|------------------|
| **Hobby** | 0€/mois | 1000 req/jour, test, support communautaire. |
| **Production** | 99€/mois | 1M req/jour, clés multiples, webhooks illimités, SLA 99.9%, support 24/7. |
| **Enterprise** | Sur devis | Volume illimité, dédié, conformité avancée. |

---

## Résumé en une phrase

**PORTAIL API** est un site vitrine + portail développeur (documentation, tarifs, FAQ, login/register) permettant d’obtenir et d’utiliser une **clé API** pour intégrer des **paiements sécurisés** dans une application, avec un état utilisateur géré par Zustand.
