# 🚀 Portfolio IT - Développeur Full Stack

Portfolio créatif et moderne avec une esthétique néo-brutaliste cyberpunk. Conçu avec React, Vite et Tailwind CSS.

🌐 **Site en ligne** : [https://plorent-droid.github.io/patrice.lorent.github.io/](https://plorent-droid.github.io/patrice.lorent.github.io/)

## ✨ Fonctionnalités

- **Design Unique** : Esthétique néo-brutaliste avec accents néon (vert lime & cyan)
- **Sections Complètes** :
  - 🎯 Hero avec animations dynamiques
  - 💼 Projets avec descriptions détaillées
  - 🛠️ Compétences techniques organisées par catégorie
  - 📊 Expérience professionnelle avec timeline
  - 📧 Formulaire de contact stylisé
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

### Modifier vos informations

Ouvre le fichier `src/portfolio.jsx` et personnalise :

**Projets** (ligne ~19) :
```javascript
const projects = [
  {
    title: "Ton Projet",
    description: "Description de ton projet",
    tech: ["React", "Node.js"],
    link: "https://ton-lien.com"
  }
]
```

**Compétences** (ligne ~44) :
```javascript
const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Vue.js", ...] 
  }
]
```

**Expériences** (ligne ~53) :
```javascript
const experiences = [
  {
    title: "Ton Poste",
    company: "Ton Entreprise",
    period: "2023 - Présent",
    description: "Description de ton rôle"
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

Modifie les liens vers tes profils (ligne ~129 dans `src/portfolio.jsx`) :
```javascript
<a href="https://github.com/ton-username" ...>
<a href="https://linkedin.com/in/ton-profil" ...>
<a href="mailto:ton-email@example.com" ...>
```

## 🚀 Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📱 Déploiement

### GitHub Pages (Configuré)

Ce projet est configuré pour un déploiement automatique sur GitHub Pages :

1. **Push sur la branche `develop`** déclenche automatiquement le déploiement
2. **GitHub Actions** build et déploie le site
3. **URL de production** : [https://plorent-droid.github.io/patrice.lorent.github.io/](https://plorent-droid.github.io/patrice.lorent.github.io/)

Le workflow est défini dans `.github/workflows/deploy.yml`

### Autres plateformes

Tu peux aussi déployer sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Drag & drop du dossier `dist/`
- **AWS S3** : Upload du dossier `dist/`

## 🎯 Structure du Projet

```
portfolio-it/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── src/
│   ├── main.jsx           # Initialisation React
│   ├── portfolio.jsx      # Composant principal
│   └── style.css          # Styles globaux
├── index.html             # Point d'entrée HTML
├── package.json           # Dépendances
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
├── postcss.config.js      # Configuration PostCSS
└── README.md              # Ce fichier
```

## 💡 Conseils

- **Performance** : Le site est optimisé, mais considère le lazy loading pour les images si tu en ajoutes beaucoup
- **SEO** : Ajoute des meta tags personnalisés dans `index.html`
- **Analytics** : Intègre Google Analytics ou Plausible pour suivre les visites
- **Blog** : Tu peux ajouter une section blog en créant un nouveau composant

## ⚙️ Configuration GitHub Pages

Le projet utilise la configuration suivante dans `vite.config.js` :

```javascript
base: '/patrice.lorent.github.io/'
```

Cette configuration est **essentielle** pour que les assets (JS, CSS) soient correctement chargés sur GitHub Pages. Le `base` doit correspondre au nom de ton repository.

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

**Erreur 404 sur GitHub Pages ?**
- Vérifie que le `base` dans `vite.config.js` correspond au nom de ton repository
- Assure-toi que le workflow GitHub Actions s'est exécuté sans erreur
- Vérifie que GitHub Pages est activé dans les paramètres du repository (Settings > Pages)

**Les assets ne se chargent pas sur GitHub Pages ?**
- Le problème vient souvent du `base` mal configuré dans `vite.config.js`
- Pour un repository `username.github.io`, utilise `base: '/'`
- Pour un repository avec un nom personnalisé, utilise `base: '/nom-du-repo/'`

## 📄 Licence

Ce projet est libre d'utilisation pour un usage personnel.

## 🤝 Contribution

N'hésite pas à personnaliser ce template selon tes besoins. Bon courage pour ton portfolio ! 🎉

---

**Créé avec ❤️ et beaucoup de caféine ☕**
