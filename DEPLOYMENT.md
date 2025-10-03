# 🚀 Déploiement ChantierDoc Landing Page

Guide de déploiement pour différentes plateformes.

## 📦 Build Local

```bash
# Installation
npm install

# Build
npm run build

# Output dans /dist (288KB)
```

## ☁️ Déploiement Cloudflare Pages (Recommandé)

### Via GitHub Integration (Automatique)

1. Push sur GitHub
2. Dashboard Cloudflare > Pages > "Create project"
3. Connecter GitHub repo
4. Configuration:
   - Build command: `npm run build`
   - Build output: `dist`
   - Root directory: `/`

**Domaine custom:**
```bash
# Ajouter domaine
wrangler pages project set chantierdoc-landing --domain chantierdoc.com
```

## 🌐 Déploiement Netlify

### Via CLI

```bash
# Installation Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Déploiement
netlify deploy --prod --dir=dist

# Ou déploiement automatique
netlify init
```

### Configuration `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## ▲ Déploiement Vercel

### Via CLI

```bash
# Installation Vercel CLI
npm install -g vercel

# Déploiement
vercel --prod
```

### Configuration `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🐙 Déploiement GitHub Pages

### Via GitHub Actions

Créer `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Configuration vite.config.ts:**
```typescript
export default {
  base: '/chantierdoc-landing/', // Nom du repo
  // ... rest of config
}
```

## 🔧 Variables d'Environnement

### Cloudflare Pages
```bash
wrangler pages secret put VITE_API_URL
```

### Netlify
Dashboard > Site settings > Environment variables

### Vercel
Dashboard > Settings > Environment Variables

## 🌍 Configuration Domaine Custom

### DNS Records (Cloudflare)

**Pour domaine racine (chantierdoc.com):**
```
A     @     192.0.2.1 (Cloudflare proxy enabled)
CNAME www   chantierdoc-landing.pages.dev
```

**Pour sous-domaine (landing.chantierdoc.com):**
```
CNAME landing chantierdoc-landing.pages.dev
```

### Vérification

```bash
# Test DNS
nslookup chantierdoc.com

# Test HTTPS
curl -I https://chantierdoc.com
```

## 📊 Performance & Optimisations

### Headers de Sécurité (recommandés)

**Netlify `_headers`:**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Cloudflare Pages:**
Configuré via Dashboard > Pages > Headers

### Cache Strategy

**Pour assets statiques:**
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/icons/*
  Cache-Control: public, max-age=31536000, immutable
```

## 🔍 SEO Post-Déploiement

### 1. Vérifier robots.txt
```bash
curl https://chantierdoc.com/robots.txt
```

### 2. Soumettre sitemap
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster: https://www.bing.com/webmasters

### 3. Vérifier métadonnées
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### 4. Test Core Web Vitals
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

## 🐛 Troubleshooting

### Build échoue
```bash
# Nettoyer cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 sur routes
Vérifier que les redirects sont configurés (SPA mode).

### Assets manquants
Vérifier que les chemins sont absolus (`/icons/logo.svg` et non `icons/logo.svg`).

## 📞 Support

- Documentation: `/docs` dans le repo
- Issues: GitHub Issues
- Email: support@chantierdoc.fr

---

**✅ Landing page prête pour production avec build optimisé 288KB !**
