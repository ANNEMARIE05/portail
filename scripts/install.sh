#!/usr/bin/env bash
#
# Script d'installation des dépendances pour PORTAIL API.
# Usage: ./scripts/install.sh [--dev]
#   --dev : installe puis lance le serveur de développement
#

set -e
PROJECT="PORTAIL API"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
START_DEV=false

for arg in "$@"; do
  case "$arg" in
    --dev) START_DEV=true ;;
  esac
done

red='\033[0;31m'
green='\033[0;32m'
cyan='\033[0;36m'
yellow='\033[1;33m'
gray='\033[0;90m'
nc='\033[0m'

step() { echo -e " ${cyan}→${nc} $1"; }
ok()   { echo -e " ${green}✓${nc} $1"; }
fail() { echo -e " ${red}✗${nc} $1"; exit 1; }

echo ""
echo -e "  ${cyan}╔══════════════════════════════════════════╗${nc}"
echo -e "  ${cyan}║${nc}  $PROJECT — Installation   ${cyan}║${nc}"
echo -e "  ${cyan}╚══════════════════════════════════════════╝${nc}"
echo ""

cd "$ROOT"

step "Vérification de Node.js..."
if ! command -v node &>/dev/null; then
  fail "Node.js est requis. Installez-le depuis https://nodejs.org"
fi
NODE_VER=$(node -v)
ok "Node $NODE_VER détecté"

step "Installation des dépendances (npm install)..."
if ! npm install --silent; then
  fail "npm install a échoué"
fi
ok "Packages installés"

echo ""
echo -e "  ${gray}─────────────────────────────────────────────${nc}"
echo -e "  Pour lancer l'app : ${yellow}npm run dev${nc}"
echo -e "  Puis ouvrir : ${yellow}http://localhost:3000${nc}"
echo -e "  ${gray}─────────────────────────────────────────────${nc}"
echo ""

if [ "$START_DEV" = true ]; then
  step "Démarrage du serveur de développement..."
  echo ""
  npm run dev
else
  echo -e "  ${gray}(Utilisez ./scripts/install.sh --dev pour installer et lancer le serveur)${nc}"
  echo ""
fi
