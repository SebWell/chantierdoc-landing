# ☁️ Configuration Cloudflare Pages

## 🚨 Configuration Correcte pour Cloudflare Pages

### ❌ Erreur Commune

Ne **PAS** mettre de commande de déploiement (`npx wrangler deploy`). Cloudflare Pages gère le déploiement automatiquement.

### ✅ Configuration Dashboard Cloudflare Pages

1. **Build command** : `npm run build`
2. **Build output directory** : `dist`
3. **Root directory** : `/` (ou laisser vide)
4. **Environment variables** : Aucune nécessaire pour l'instant

### 📋 Configuration Exacte

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (vide)
```

### 🔧 Variables d'environnement (optionnel)

Aucune variable nécessaire pour le build basique. Si vous ajoutez des features futures :

```
VITE_API_URL=https://api.chantierdoc.com
```

## 🚀 Processus de Déploiement

### Via Dashboard Cloudflare

1. Allez sur https://dash.cloudflare.com/
2. Pages > Create a project
3. Connect to Git > Sélectionner GitHub
4. Choisir le repo `SebWell/chantierdoc-landing`
5. Configurer build settings (voir ci-dessus)
6. Save and Deploy

### Via Wrangler CLI (Alternatif)

Si vous préférez le CLI :

```bash
# Build local
npm run build

# Déployer avec wrangler pages (PAS wrangler deploy!)
npx wrangler pages deploy dist --project-name=chantierdoc-landing
```

**Important :** Utiliser `wrangler pages deploy` et NON `wrangler deploy` !

## 🔍 Résolution du Problème Actuel

L'erreur vient de la configuration de build sur Cloudflare. Voici comment la corriger :

### Dans le Dashboard Cloudflare Pages :

1. Allez dans Settings > Builds & deployments
2. **Supprimer** la "Deploy command" si elle existe
3. Garder uniquement :
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Retry deployment

### Ou Modifier .github si vous utilisez Actions

Si vous avez un workflow GitHub Actions pour Cloudflare :

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main, master]

jobs:
  deploy:
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

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: chantierdoc-landing
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## 📊 Vérification Post-Déploiement

Une fois déployé, vous recevrez une URL de type :
```
https://[hash].chantierdoc-landing.pages.dev
```

### Tests à faire :

```bash
# Test du site
curl -I https://[votre-url].pages.dev

# Vérifier robots.txt
curl https://[votre-url].pages.dev/robots.txt

# Vérifier sitemap
curl https://[votre-url].pages.dev/sitemap.xml
```

## 🌐 Domaine Custom

### Ajouter chantierdoc.com

1. Dashboard Cloudflare Pages > votre projet
2. Custom domains > Set up a domain
3. Entrer `chantierdoc.com` (ou `www.chantierdoc.com`)
4. Cloudflare configure automatiquement les DNS

### Vérification DNS

Les records suivants seront créés automatiquement :
```
CNAME chantierdoc.com -> chantierdoc-landing.pages.dev
CNAME www.chantierdoc.com -> chantierdoc-landing.pages.dev
```

## 🐛 Troubleshooting

### Build échoue avec "Missing entry-point"

**Cause :** Commande de déploiement incorrecte (wrangler deploy au lieu de build)

**Solution :** Supprimer la deploy command dans Settings

### Assets 404

**Cause :** Mauvais output directory

**Solution :** Vérifier que "Build output directory" = `dist`

### CSS non chargé

**Cause :** Problème de chemins relatifs

**Solution :** Déjà OK, vite.config.ts configure automatiquement

## 📞 Support

Si problème persiste :
- Cloudflare Docs : https://developers.cloudflare.com/pages/
- Discord Cloudflare : https://discord.cloudflare.com/

---

**✅ Configuration correcte : Build command uniquement, PAS de deploy command !**
