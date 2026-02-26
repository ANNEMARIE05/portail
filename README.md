<div align="center">

# PORTAIL API · Premium

**L'infrastructure API premium pour propulser vos applications de paiement.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React_Query-5-FF4154?style=for-the-badge&logo=react-query)](https://tanstack.com/query/latest)

</div>

---

## Ce que fait l'application

**PORTAIL API** est un **portail développeur premium** qui permet d’intégrer des **paiements sécurisés** dans ses applications via des APIs et des clés API.

| Rôle | Description |
|------|-------------|
| **Visiteur** | Découvre les APIs, la doc, les tarifs, la FAQ ; peut s’inscrire ou se connecter. |
| **Développeur** | Se connecte avec une clé API, consulte la documentation (Auth, Paiements, Remboursements, Webhooks), choisit un plan (Hobby / Production / Enterprise). |

**Pages principales :**

- **/** — Accueil : présentation, intégration rapide, sécurité (PCI-DSS, chiffrement), haute dispo, témoignages.
- **/docs** — Documentation API : sections (Authentification, Créer un paiement, Remboursements, Webhooks), exemples de code (cURL, Node.js, Python, Go, PHP), copie dans le presse-papier.
- **/pricing** — Tarifs : Hobby (0€), Production (99€), Enterprise ; liens vers inscription.
- **/faq** — FAQ : clé API, sandbox, langages supportés.
- **/login** — Connexion (email / mot de passe) vers l’espace développeur et les clés API.
- **/register** — Inscription pour créer un compte et obtenir une clé API.

**État global (Zustand)** : `useUserStore` gère `apiKey`, `isAuthenticated`, `setApiKey`, `logout` pour l’accès authentifié au portail.

> 📄 Détail complet : [FONCTIONNALITES.md](./FONCTIONNALITES.md)

---

## Installation

### Prérequis

- **Node.js** 18.x ou supérieur  
- **npm** 9+ (ou **pnpm** / **yarn**)

### Installer en tant que projet (dépendances)

```bash
# Cloner le dépôt (si applicable)
git clone <url-du-repo> portail-api
cd portail-api

# Installer les dépendances
npm install
```

### Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Scripts disponibles

| Commande        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Serveur de développement       |
| `npm run build`| Build de production            |
| `npm run start`| Démarrer le build en production|
| `npm run lint` | Vérification ESLint           |

---

## Structure du projet

```
portail-api/
├── app/                 # App Router Next.js
│   ├── layout.tsx       # Layout racine
│   ├── page.tsx         # Page d'accueil
│   ├── docs/            # Documentation
│   ├── pricing/         # Tarifs
│   ├── faq/             # FAQ
│   ├── login/           # Connexion
│   └── register/        # Inscription
├── components/          # Composants réutilisables
├── lib/                 # Utilitaires et config
├── store/               # État global (Zustand)
├── scripts/             # Scripts d'installation
└── package.json
```

---

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **UI** : React 18, Tailwind CSS, Framer Motion, Lucide React
- **État** : Zustand
- **Data** : TanStack React Query
- **Langage** : TypeScript

---

## Installation en une commande

**Windows (PowerShell)** — à la racine du projet :

```powershell
.\scripts\install.ps1
```

Pour installer puis lancer directement le serveur de dev :

```powershell
.\scripts\install.ps1 -StartDev
```

**Linux / macOS** :

```bash
chmod +x scripts/install.sh
./scripts/install.sh
# ou avec lancement du serveur :
./scripts/install.sh --dev
```

Les scripts vérifient Node.js 18+, installent les packages et affichent les prochaines étapes.

---

<div align="center">

**© PORTAIL API** — *Premium Developer Portal*

</div>
