# 🚀 Portfolio Patrice Lorent - Ingénieur Développement PHP & Python

Portfolio professionnel avec une esthétique néo-brutaliste cyberpunk. Conçu avec React, Vite et Tailwind CSS.

## 👤 À propos

**Patrice Lorent** - Ingénieur développement avec 10+ ans d'expérience  
📧 patrice.lorent@gmail.com | 📞 06.64.03.91.46  
📍 Champigny-sur-Marne (94) - Île-de-France + Télétravail  
🔗 [LinkedIn](https://linkedin.com/in/patrice-lorent) | [GitHub](https://github.com/patricelorent)

## ✨ Fonctionnalités

- **Design Unique** : Esthétique néo-brutaliste avec accents néon (vert lime & cyan)
- **Sections Complètes** :
  - 🎯 Hero avec nom et titre professionnel
  - 💼 6 Projets réels avec descriptions détaillées (Docapost DPS, AVÉO, DIMENSIO)
  - 🛠️ Compétences techniques organisées en 6 catégories
  - 🎓 Formation & Certifications (GitHub Copilot, Python, Cloud/DevOps)
  - 📊 Expérience professionnelle complète (2005-2025)
  - 📧 Formulaire de contact avec informations personnelles
- **Animations Fluides** : Effets de survol, transitions, animations d'apparition
- **Responsive Design** : Optimisé pour tous les écrans
- **Effets Visuels** : Cursor glow, texture grain, grille animée, formes géométriques flottantes

## 🛠️ Technologies Utilisées

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utilitaire
- **Lucide React** - Icônes modernes
- **Space Mono** - Police monospace pour l'esthétique tech

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou extraire le projet**
```bash
cd portfolio-it
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
Le site s'ouvrira automatiquement à `http://localhost:3000`

## 🎨 Personnalisation

### ⚠️ IMPORTANT : Configuration GitHub Pages

Avant de déployer, dans `vite.config.js`, remplace `'nom-de-ton-repo'` par le nom exact de ton repository GitHub :
```javascript
base: '/portfolio/',  // Si ton repo s'appelle "portfolio"
// OU
base: '/',  // Si ton repo s'appelle exactement "patricelorent.github.io"
```

### Modifier tes informations personnelles

Les informations dans ce portfolio sont déjà personnalisées avec ton CV. Tu peux les ajuster dans `portfolio.jsx` :

**Liens sociaux** (ligne ~265) :
```javascript
<a href="https://github.com/patricelorent" ...>
<a href="https://linkedin.com/in/patrice-lorent" ...>
<a href="mailto:patrice.lorent@gmail.com" ...>
```

**Ajouter de nouveaux projets** (ligne ~19) :
```javascript
const projects = [
  {
    title: "Ton Nouveau Projet",
    description: "Description du projet",
    tech: ["PHP", "Docker", "MySQL"],
    link: "https://ton-lien.com",
    company: "Nom de l'entreprise",
    period: "2024-2025"
  }
]
```

**Ajouter des compétences** (ligne ~70) :
```javascript
const skills = [
  { 
    category: "Nouvelle Catégorie", 
    items: ["Compétence 1", "Compétence 2"] 
  }
]
```

### Modifier les couleurs

Dans `tailwind.config.js`, change les couleurs néon :
```javascript
colors: {
  'neon-green': '#00ff96',  // Vert néon
  'cyber-cyan': '#00d9ff',  // Cyan néon
}
```

### Liens sociaux

Modifie les liens vers tes profils (ligne ~265 dans `portfolio.jsx`) :
```javascript
<a href="https://github.com/patricelorent" ...>  // Déjà configuré
<a href="https://linkedin.com/in/patrice-lorent" ...>  // Déjà configuré
<a href="mailto:patrice.lorent@gmail.com" ...>  // Déjà configuré
```

## 🚀 Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📱 Déploiement sur GitHub Pages

**📖 Consulte le guide complet** : `DEPLOIEMENT_GITHUB_PAGES.md`

### Déploiement rapide :

1. **Configure la base URL** dans `vite.config.js`
2. **Pousse sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Portfolio Patrice Lorent"
   git remote add origin https://github.com/patricelorent/ton-repo.git
   git push -u origin main
   ```
3. **Active GitHub Pages** : Settings → Pages → Source : GitHub Actions
4. Ton site sera en ligne à `https://patricelorent.github.io/ton-repo/`

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) est déjà configuré pour un déploiement automatique !

## 📊 Autres Options de Déploiement

Tu peux aussi déployer sur :

- **Vercel** : `vercel --prod`
- **Netlify** : Drag & drop du dossier `dist/`
- **GitHub Pages** : Configure avec GitHub Actions
- **AWS S3** : Upload du dossier `dist/`

## 🎯 Structure du Projet

```
portfolio-it/
├── index.html          # Point d'entrée HTML
├── main.jsx           # Initialisation React
├── portfolio.jsx      # Composant principal
├── style.css          # Styles globaux
├── package.json       # Dépendances
├── vite.config.js     # Configuration Vite
├── tailwind.config.js # Configuration Tailwind
└── README.md          # Ce fichier
```

## 💡 Conseils

- **Performance** : Le site est optimisé, mais considère le lazy loading pour les images si tu en ajoutes beaucoup
- **SEO** : Ajoute des meta tags personnalisés dans `index.html`
- **Analytics** : Intègre Google Analytics ou Plausible pour suivre les visites
- **Blog** : Tu peux ajouter une section blog en créant un nouveau composant

## 🐛 Problèmes Courants

**Le serveur ne démarre pas ?**
- Vérifie que Node.js est installé : `node --version`
- Supprime `node_modules` et réinstalle : `rm -rf node_modules && npm install`

**Les styles ne s'appliquent pas ?**
- Vérifie que Tailwind est bien configuré dans `postcss.config.js`
- Redémarre le serveur de développement

**Les animations sont lentes ?**
- Désactive les effets de curseur si ton ordinateur rame
- Réduis le nombre de formes géométriques animées

## 📄 Licence

Ce projet est libre d'utilisation pour ton portfolio personnel. Si tu l'utilises, un petit crédit est apprécié mais pas obligatoire ! 😊

## 🤝 Contribution

N'hésite pas à personnaliser ce template selon tes besoins. Bon courage pour ton portfolio ! 🎉

---

**Créé avec ❤️ et beaucoup de caféine ☕**
