# ☁️ Déploiement Cloudflare Pages

## 🎯 Configuration Cloudflare Pages (Recommandée)

Cloudflare Pages gère automatiquement le déploiement depuis GitHub.

### Configuration Dashboard

1. **Dashboard Cloudflare** : https://dash.cloudflare.com/
2. **Workers & Pages** > votre projet
3. **Settings** > Builds & deployments

### ✅ Configuration Exacte

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (vide)
```

### Deploy Command

Si Cloudflare demande un "Deploy command" obligatoire, utilisez :
```bash
echo "Deployment ready"
```

**Note :** Cloudflare Pages déploie automatiquement après le build. Cette commande est juste un placeholder.

## 🔄 Workflow Automatique

1. **Push sur GitHub** → Cloudflare détecte le changement
2. **npm install** → Installation des dépendances
3. **npm run build** → Build avec Vite → Génère `/dist`
4. **Cloudflare déploie** → `/dist` sur le CDN global
5. **URL disponible** → `https://[hash].chantierdoc-landing.pages.dev`

## 🌐 Domaine Custom

Pour ajouter `chantierdoc.com` :

1. Dashboard > votre projet > **Custom domains**
2. **Set up a domain**
3. Entrer : `chantierdoc.com`
4. Cloudflare configure automatiquement les DNS

## 📊 Build Output

Après chaque déploiement :
```
dist/
├── index.html (3.60 KB)
├── assets/
│   ├── index-[hash].css (35.59 KB)
│   └── index-[hash].js (216.81 KB)
├── icons/ (SVG)
├── robots.txt
└── sitemap.xml
```

**Total gzip : ~73 KB**

## 🐛 Troubleshooting

### Build échoue
- Vérifier que `Build output directory` = `dist` (pas `/dist` ou `./dist`)
- Vérifier Node.js version (18+)

### 404 sur assets
- Les chemins sont déjà absolus dans le code
- Vérifier que `/public` contient bien les fichiers statiques

### Déploiement lent
- Normal : 1-3 minutes pour build + déploiement global

## 📞 Support

- Docs Cloudflare Pages : https://developers.cloudflare.com/pages/
- Statut : https://www.cloudflarestatus.com/

---

**✅ Configuration simple : Cloudflare s'occupe de tout après le build !**
