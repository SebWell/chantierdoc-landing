# 🏗️ ChantierDoc Landing Page

Landing page standalone pour ChantierDoc - Plateforme de gestion documentaire IA pour le BTP.

## 📋 Description

Page d'accueil moderne et optimisée SEO présentant ChantierDoc, une solution de gestion documentaire intelligente pour le secteur de la construction. Intègre l'IA pour la recherche instantanée, le chat intelligent et la collaboration d'équipe.

## 🚀 Stack Technique

- **React 18** - Interface utilisateur réactive
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Radix UI** - Composants accessibles

## 🎨 Composants Inclus

### Composants UI (Shadcn/ui)
- `badge` - Badges et étiquettes
- `button` - Boutons avec variants
- `card` - Cartes de contenu
- `animated-container` - Conteneur avec animations
- `floating-background` - Éléments flottants décoratifs
- `Logo` - Logo ChantierDoc

### Composants Custom
- `FeatureCard` - Carte de fonctionnalité
- `HeroSection` - Section hero principale
- `SEOHead` - Métadonnées SEO dynamiques

## 📂 Structure du Projet

```
chantierdoc-landing/
├── src/
│   ├── components/
│   │   ├── ui/              # Composants Shadcn
│   │   ├── cards/           # Cartes de fonctionnalités
│   │   ├── sections/        # Sections de page
│   │   └── core/            # Composants système (SEO)
│   ├── lib/
│   │   └── utils.ts         # Utilitaires (cn)
│   ├── App.tsx              # Landing page principale
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── docs/
│   ├── seo/                 # Documentation SEO
│   ├── design/              # Charte graphique
│   └── legal/               # Documents légaux
├── public/
│   ├── icons/               # Logos et favicons
│   ├── robots.txt           # Configuration robots
│   ├── sitemap.xml          # Plan du site
│   └── _redirects           # Règles de redirection
└── Configuration files...
```

## 🛠️ Installation

```bash
# Installation des dépendances
npm install

# Démarrage en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 📊 Documentation Incluse

### SEO & Optimisation
- **guide-seo-landing-page.md** (514 lignes)
  - Optimisation on-page
  - Méta-données
  - Performance et Core Web Vitals

- **guide-seo-llm-optimization.md** (513 lignes)
  - Optimisation pour ChatGPT, Claude, Perplexity
  - Données structurées pour l'IA
  - Stratégie de contenu pour LLM

### Design
- **charte-graphique-landing-page.md** (677 lignes)
  - Palette de couleurs
  - Typographie
  - Composants UI

- **landing-page-optimisations.md** (431 lignes)
  - Améliorations UX
  - Conversion optimization
  - A/B testing

### Légal
- Conditions d'utilisation (FR + NL)
- Politique de confidentialité (FR + NL)

## 🎯 Fonctionnalités Landing Page

### Hero Section
- Badge "Nouveau" avec IA révolutionnaire
- Titre impactant avec économie de temps
- CTA double (Rendez-vous + Inscription)
- Animations de scroll

### Fonctionnalités
- 4 features principales avec icônes
- Animations au hover
- Gradient personnalisés

### Statistiques
- 4 métriques clés (75% temps économisé, 10x plus rapide, etc.)
- Animations d'entrée échelonnées

### Témoignages
- 3 témoignages clients
- Avatar + notation 5 étoiles
- Entreprises réelles

### Pricing
- 3 plans (Gratuit, Pro, Entreprise)
- Comparaison fonctionnalités
- CTA par plan

### FAQ
- 8 questions fréquentes
- Accordéon Radix UI
- Format SEO optimisé

### Footer
- Liens de navigation
- Réseaux sociaux
- Copyright

## 🔍 SEO Features

### Métadonnées
- Title optimisé (70 caractères)
- Description unique (160 caractères)
- Keywords BTP ciblés

### Open Graph
- og:title, og:description, og:image
- Partage social optimisé
- Twitter Cards

### Structured Data
- Schema.org SoftwareApplication
- Données structurées complètes
- Rich snippets Google

### Fichiers SEO
- `robots.txt` - Configuration crawl
- `sitemap.xml` - Pages indexables
- Canonical URLs

## 🎨 Thème & Couleurs

### Palette Principale
- **Emerald** (#059669) - Primary
- **Green** (#065f46) - Secondary
- **Mint** (#10b981, #6ee7b7) - Accents

### Gradients
- Hero: `from-slate-100 via-green-100/30 to-emerald-100`
- Features: Gradients personnalisés par carte
- Buttons: `from-emerald-500 to-emerald-600`

## 📱 Responsive Design

- **Mobile First** - Design optimisé mobile
- **Breakpoints Tailwind** - sm, md, lg, xl, 2xl
- **Touch Friendly** - Zones tactiles optimisées
- **Performance** - Animations GPU-accelerated

## ⚡ Performance

### Optimisations
- Code splitting automatique (Vite)
- Lazy loading images
- CSS-in-JS avec Tailwind JIT
- Tree shaking des dépendances

### Core Web Vitals
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## 🚀 Déploiement

### Build Production
```bash
npm run build
# Output dans /dist
```

### Options de déploiement
- **Netlify** - `netlify deploy --prod --dir=dist`
- **Vercel** - `vercel --prod`
- **Cloudflare Pages** - `wrangler pages deploy dist`
- **GitHub Pages** - Via Actions

## 🔧 Configuration

### Vite Config
- React plugin
- Path aliases (@/)
- Build optimization

### Tailwind Config
- Custom colors (brand)
- Animations personnalisées
- Plugins (tailwindcss-animate)

### TypeScript
- Strict mode
- Path mapping (@/*)
- Type checking

## 📞 Support

- **Documentation** : `/docs` folder
- **Email** : support@chantierdoc.fr
- **Site** : https://chantierdoc.com

## 📄 Licence

MIT - Voir LICENSE pour détails

---

## 🎯 Prochaines Étapes

1. ✅ **Setup complet** - Structure et dépendances
2. 🔄 **Customisation** - Adapter contenu et branding
3. 🧪 **Tests** - Performance et accessibilité
4. 🚀 **Déploiement** - Mise en production

**✨ Landing page prête à déployer avec SEO optimisé et design moderne !**

---

*Extrait du projet ChantierDoc complet - Focus landing page uniquement*
