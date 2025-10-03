# ✅ Configuration Cloudflare Pages - Solution Simple

## 🚨 Problème d'Authentification

L'erreur "Authentication error [code: 10000]" indique que le token API n'a pas les permissions pour `wrangler pages deploy`.

## ✅ Solution : Laisser Cloudflare Gérer le Déploiement

Cloudflare Pages déploie **automatiquement** après le build. Pas besoin de commande !

### Configuration Dashboard

```
Project name: chantierdoc-landing
Build command: npm run build
Build output directory: dist
Root directory: (vide)
Deploy command: (LAISSER VIDE ou SUPPRIMER)
```

### 🔑 Si le champ Deploy command est obligatoire

Deux options :

**Option 1 - Echo simple (Recommandé)**
```bash
echo "Build completed, Cloudflare handles deployment"
```

**Option 2 - Copie simple**
```bash
cp -r dist/* /tmp/deployment-ready/
```

Ces commandes ne font rien de critique, Cloudflare déploie automatiquement `dist/` ensuite.

## 🔄 Comment ça Marche

1. **Git Push** → Cloudflare détecte le commit
2. **npm install** → Installation dépendances
3. **npm run build** → Création du dossier `dist/`
4. **(Deploy command)** → Si présent, s'exécute mais optionnel
5. **Cloudflare déploie dist/** → Automatiquement sur le CDN
6. **URL générée** → `https://[hash].chantierdoc-landing.pages.dev`

## 📊 Logs Attendus

```
✓ npm install completed
✓ npm run build completed
  dist/index.html created (3.60 KB)
  dist/assets/* created
✓ Deploying to Cloudflare Pages...
✓ Success! Deployed to https://[hash].chantierdoc-landing.pages.dev
```

**SANS** ligne "Executing user deploy command: npx wrangler..."

## 🔧 Permissions Token (si vraiment nécessaire)

Si vous voulez absolument utiliser `wrangler pages deploy`, le token doit avoir :

- **Account** → Cloudflare Pages → Edit
- **Zone** → DNS → Edit (pour domaines custom)

Mais **ce n'est PAS nécessaire** pour Cloudflare Pages standard !

## 🎯 Action Immédiate

Dans Cloudflare Dashboard :

1. Settings > Builds & deployments
2. **Supprimer** ou vider le champ "Deploy command"
3. OU mettre `echo "Build completed"`
4. Save
5. Retry deployment

---

**✅ Cloudflare Pages = Déploiement automatique après build !**
