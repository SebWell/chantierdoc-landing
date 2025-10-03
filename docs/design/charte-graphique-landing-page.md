# Charte Graphique & Guide d'Organisation Landing Page

## Table des Matières
1. [Système de Couleurs](#système-de-couleurs)
2. [Typographie](#typographie)
3. [Architecture des Sections](#architecture-des-sections)
4. [Système de Grille](#système-de-grille)
5. [Animations & Transitions](#animations--transitions)
6. [Composants UI](#composants-ui)
7. [Responsive Design](#responsive-design)
8. [Bonnes Pratiques](#bonnes-pratiques)

---

## Système de Couleurs

### Couleurs Principales
```css
/* Couleurs de marque */
--brand-emerald: hsl(158.1, 64.4%, 51.6%)  /* #22c55e - Vert principal */
--brand-mint: hsl(152.4, 76%, 80.4%)       /* #7dd3fc - Vert clair */

/* Couleurs Tailwind étendues */
--emerald-50: #ecfdf5
--emerald-100: #d1fae5
--emerald-200: #a7f3d0
--emerald-600: #059669
--emerald-700: #047857

/* Couleurs neutres */
--slate-50: #f8fafc
--slate-100: #f1f5f9
--slate-600: #475569
--slate-700: #334155
--slate-900: #0f172a
```

### Usage des Couleurs
- **Primaire (`brand-emerald`)** : Boutons CTA, liens, éléments interactifs
- **Secondaire (`brand-mint`)** : Arrière-plans subtils, badges, accents
- **Neutre (`slate`)** : Textes, bordures, arrière-plans
- **Blanc** : Arrière-plans de cartes, zones de contenu
- **Rouge (`red-400` à `red-600`)** : Icônes et éléments de la section "problème"

### Gradients
```css
/* Gradients principaux */
.gradient-primary {
  background: linear-gradient(to right, var(--brand-emerald), #059669);
}

.gradient-background {
  background: linear-gradient(to bottom right, #f1f5f9, var(--brand-mint)/30, #ecfdf5);
}

.gradient-section {
  background: linear-gradient(to right, white, #ecfdf5/50, white);
}

/* Gradients de problème */
.gradient-problem-card {
  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
}

.gradient-problem-icon-main {
  background: linear-gradient(to bottom right, #ef4444, #dc2626);
}

.gradient-problem-icon-secondary {
  background: linear-gradient(to bottom right, #f87171, #ef4444);
}
```

---

## Typographie

### Hiérarchie des Titres
```css
/* H1 - Titre principal */
.title-hero {
  font-size: 4rem; /* 64px */
  font-weight: 700;
  line-height: 1.1;
  color: var(--slate-900);
}

/* H2 - Titres de section */
.title-section {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 1rem;
}

/* H3 - Sous-titres */
.title-card {
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  color: var(--slate-900);
}

/* Corps de texte */
.text-body {
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
  color: var(--slate-600);
}

/* Texte d'accroche */
.text-lead {
  font-size: 1.25rem; /* 20px */
  line-height: 1.5;
  color: var(--slate-600);
}
```

### Responsive Typography
```css
/* Mobile First */
@media (min-width: 640px) {
  .title-hero { font-size: 3rem; } /* 48px */
}

@media (min-width: 1024px) {
  .title-hero { font-size: 4.5rem; } /* 72px */
}
```

---

## Architecture des Sections

### 1. Header (Navigation)
```html
<header class="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Logo + Navigation + CTA -->
  </div>
</header>
```

**Caractéristiques :**
- Position sticky avec backdrop-blur
- Shadow subtile avec effet de profondeur
- Logo à gauche, navigation au centre, CTA à droite
- Menu mobile hamburger

### 2. Hero Section
```html
<section class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-brand-mint/30 to-emerald-100 py-20 lg:py-32">
  <!-- Éléments de background animés -->
  <!-- Contenu centré avec CTA -->
  <!-- Indicateur de scroll -->
</section>
```

**Éléments clés :**
- Gradient de background subtil
- Éléments flottants animés
- Badge d'annonce
- Titre avec mot-clé en couleur
- Double CTA (primaire + secondaire)
- Indicateur de scroll animé

### 3. Stats Section
```html
<section class="py-16 bg-gradient-to-r from-white via-brand-mint/10 to-white">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- Statistiques avec animations décalées -->
  </div>
</section>
```

### 4. Problem/Solution
```html
<section class="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-brand-mint/20">
  <div class="grid lg:grid-cols-2 gap-16 items-center">
    <!-- Carte problème (rouge) vs Carte solution (verte) -->
  </div>
</section>
```

**Structure de la carte problème :**
- Background : `bg-gradient-to-br from-slate-50 to-slate-100`
- Icône principale : Search (loupe) en rouge `from-red-500 to-red-600`
- Icônes secondaires : toutes en rouge `from-red-400 to-red-500`
- Arguments : temps perdu, documents éparpillés, décisions remises
- Style moderne avec containers d'icônes carrés arrondis

### 5. Features Section
```html
<section class="py-20 bg-gradient-to-r from-white via-emerald-50/50 to-white">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
    <!-- Cartes de fonctionnalités avec icônes -->
  </div>
</section>
```

### 6. How it Works
```html
<section class="py-20 bg-gradient-to-br from-slate-50 to-brand-mint/5">
  <div class="grid sm:grid-cols-3 gap-8">
    <!-- Étapes numérotées -->
  </div>
</section>
```

### 7. Testimonials
```html
<section class="py-20 bg-white">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Cartes de témoignages avec avatars -->
  </div>
</section>
```

### 8. Pricing
```html
<section class="py-20 bg-gradient-to-br from-slate-50 to-brand-mint/5">
  <!-- Toggle mensuel/annuel -->
  <!-- Notice prix HT -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Cartes de tarification -->
  </div>
</section>
```

### 9. CTA Final
```html
<section class="py-20 bg-gradient-to-br from-brand-emerald via-emerald-600 to-emerald-700">
  <!-- Pattern de background -->
  <!-- CTA centré avec double bouton -->
</section>
```

### 10. Footer
```html
<footer class="bg-slate-900 text-white py-16">
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
    <!-- Logo + liens organisés par colonnes -->
  </div>
</footer>
```

---

## Système de Grille

### Conteneur Principal
```css
.container {
  max-width: 1280px; /* 7xl */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }
}
```

### Grilles Responsives
```css
/* Features (4 éléments) */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1280px) {
  .features-grid { grid-template-columns: repeat(4, 1fr); }
}

/* Stats (4 éléments) */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Animations & Transitions

### Keyframes Personnalisées
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Classes d'Animation
```css
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 0.6s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### Transitions Hover
```css
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.button-hover {
  transition: all 0.3s ease;
}

.button-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3);
}
```

---

## Composants UI

### Boutons
```css
/* Bouton Primaire */
.btn-primary {
  background: linear-gradient(to right, var(--brand-emerald), #059669);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 4px 14px 0 rgba(34, 197, 94, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(to right, #059669, #047857);
  transform: scale(1.05);
  box-shadow: 0 6px 20px 0 rgba(34, 197, 94, 0.4);
}

/* Bouton Secondaire */
.btn-secondary {
  background: white;
  color: var(--brand-emerald);
  border: 2px solid var(--brand-emerald);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--brand-emerald);
  color: white;
}
```

### Cartes
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-feature {
  background: linear-gradient(to bottom right, white, #f8fafc);
  border: none;
}

.card-popular {
  border: 2px solid var(--brand-emerald);
  background: linear-gradient(to bottom right, white, var(--brand-mint)/5);
}

.card-problem {
  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-problem:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.card-solution {
  background: linear-gradient(to bottom right, var(--brand-mint)/30, #ecfdf5);
  border: 1px solid var(--brand-emerald)/40;
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--brand-emerald)/40;
  background: var(--brand-mint)/20;
  color: var(--brand-emerald);
}
```

### Icônes
```css
.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: transform 0.3s ease;
}

.icon-container:hover {
  transform: scale(1.1);
}

.icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

/* Icônes de problème - toutes en rouge */
.icon-problem-main {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #ef4444, #dc2626);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-problem-secondary {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to bottom right, #f87171, #ef4444);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-problem-main .icon,
.icon-problem-secondary .icon {
  color: white;
}
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile First */
/* xs: 0px */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

### Stratégie Mobile-First
1. **Mobile (0-639px)** : Layout vertical, navigation hamburger
2. **Tablet (640-1023px)** : Grilles 2 colonnes, navigation visible
3. **Desktop (1024px+)** : Grilles complètes, tous les éléments visibles

### Spacing Responsive
```css
/* Padding de section */
.section-padding {
  padding: 5rem 0; /* 80px mobile */
}

@media (min-width: 1024px) {
  .section-padding {
    padding: 8rem 0; /* 128px desktop */
  }
}

/* Gaps de grille */
.grid-gap {
  gap: 2rem; /* 32px mobile */
}

@media (min-width: 1024px) {
  .grid-gap {
    gap: 4rem; /* 64px desktop */
  }
}
```

---

## Bonnes Pratiques

### Performance
- Utiliser `backdrop-blur` avec parcimonie
- Optimiser les animations avec `transform` et `opacity`
- Lazy loading pour les images
- Minimiser les reflows avec `will-change`

### Accessibilité
- Contraste minimum 4.5:1 pour le texte
- Focus visible sur tous les éléments interactifs
- Navigation au clavier
- Textes alternatifs pour les icônes

### SEO
- Structure HTML sémantique
- Hiérarchie des titres respectée (H1 > H2 > H3)
- Meta descriptions optimisées
- Schema.org pour les témoignages

### UX
- Temps de chargement < 3 secondes
- CTA visibles et contrastés
- Feedback visuel sur les interactions
- Navigation intuitive

### Code
- Classes utilitaires Tailwind
- Composants réutilisables
- Variables CSS pour les couleurs
- Mobile-first responsive design

---

## Template de Section Type

```html
<section class="py-20 bg-gradient-to-r from-white via-emerald-50/50 to-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- En-tête de section -->
    <div class="text-center mb-16 animate-fade-in-up">
      <Badge variant="outline" class="mb-4 bg-brand-mint/20 border-brand-emerald/40 text-brand-emerald">
        <Icon class="w-3 h-3 mr-1" />
        Badge descriptif
      </Badge>
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Titre de la section
      </h2>
      <p class="text-xl text-slate-600 max-w-3xl mx-auto">
        Description de la section qui explique le contenu
      </p>
    </div>
    
    <!-- Contenu de section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Éléments avec animations décalées -->
    </div>
  </div>
</section>
```

---

## Changelog

### Version 1.1 - Décembre 2024
- **Section Problem/Solution améliorée** :
  - Carte "Le problème actuel" redesignée avec palette slate/rouge
  - Icône principale changée de Clock vers Search (plus pertinente)
  - Unification de toutes les icônes en rouge pour cohérence visuelle
  - Arguments mis à jour : "heures perdues dans une semaine" et "décisions remises à plus tard"
  - Style moderne avec containers d'icônes carrés arrondis
  - Hiérarchie visuelle améliorée avec titres et sous-textes

### Version 1.0 - Décembre 2024
- Charte graphique initiale
- Système de couleurs brand-emerald/brand-mint
- Architecture complète des 10 sections
- Système d'animations et transitions
- Guide responsive design

---

*Ce guide peut être adapté selon les besoins spécifiques de chaque projet en conservant la cohérence visuelle et les bonnes pratiques établies.* 