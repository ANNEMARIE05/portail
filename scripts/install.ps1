#Requires -Version 5.1
<#
.SYNOPSIS
    Script d'installation des dépendances pour PORTAIL API.
.DESCRIPTION
    Installe les packages npm et optionnellement lance le serveur de développement.
.EXAMPLE
    .\install.ps1
    .\install.ps1 -StartDev
#>

param(
    [switch]$StartDev
)

$ErrorActionPreference = "Stop"
$ProjectName = "PORTAIL API"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

function Write-Step {
    param([string]$Text, [string]$Icon = "→")
    Write-Host " " $Icon " " -NoNewline -ForegroundColor Cyan
    Write-Host $Text -ForegroundColor White
}

function Write-Success {
    param([string]$Text)
    Write-Host "  ✓ " -NoNewline -ForegroundColor Green
    Write-Host $Text -ForegroundColor Gray
}

function Write-Header {
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════╗" -ForegroundColor DarkCyan
    Write-Host "  ║  " -NoNewline -ForegroundColor DarkCyan
    Write-Host " $ProjectName — Installation " -NoNewline -ForegroundColor White
    Write-Host "  ║" -ForegroundColor DarkCyan
    Write-Host "  ╚══════════════════════════════════════════╝" -ForegroundColor DarkCyan
    Write-Host ""
}

# Vérifier Node.js
function Test-NodeVersion {
    try {
        $version = node -v 2>$null
        if (-not $version) { return $false }
        $major = [int]($version -replace 'v(\d+).*', '$1')
        return $major -ge 18
    } catch {
        return $false
    }
}

Set-Location $Root

Write-Header

Write-Step "Vérification de Node.js..."
if (-not (Test-NodeVersion)) {
    Write-Host "  ✗ Node.js 18+ est requis. Installez-le depuis https://nodejs.org" -ForegroundColor Red
    exit 1
}
Write-Success "Node $(node -v) détecté"

Write-Step "Installation des dépendances (npm install)..."
try {
    npm install --silent 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "npm install a échoué" }
} catch {
    Write-Host "  ✗ Erreur lors de l'installation: $_" -ForegroundColor Red
    exit 1
}
Write-Success "Packages installés"

Write-Host ""
Write-Host "  ───────────────────────────────────────────── " -ForegroundColor DarkGray
Write-Host "  Pour lancer l'app : " -NoNewline -ForegroundColor Gray
Write-Host "npm run dev" -ForegroundColor Yellow
Write-Host "  Puis ouvrir : " -NoNewline -ForegroundColor Gray
Write-Host "http://localhost:3000" -ForegroundColor Yellow
Write-Host "  ───────────────────────────────────────────── " -ForegroundColor DarkGray
Write-Host ""

if ($StartDev) {
    Write-Step "Démarrage du serveur de développement..."
    Write-Host ""
    npm run dev
} else {
    Write-Host "  (Utilisez " -NoNewline -ForegroundColor DarkGray
    Write-Host ".\scripts\install.ps1 -StartDev" -NoNewline -ForegroundColor Cyan
    Write-Host " pour installer et lancer le serveur)" -ForegroundColor DarkGray
    Write-Host ""
}
