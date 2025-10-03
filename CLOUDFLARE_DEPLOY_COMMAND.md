# ✅ Deploy Command pour Cloudflare Pages

## Si le champ "Deploy command" est REQUIS

Cloudflare Pages demande parfois un champ "Deploy command" obligatoire. Voici quoi mettre :

### Option 1 : Commande vide (recommandé)
```bash
echo "Build completed"
```

### Option 2 : Vérification simple
```bash
ls -la dist
```

### Option 3 : Pages deploy correct
```bash
npx wrangler pages deploy dist --project-name=chantierdoc-landing
```

## 🎯 Configuration Complète

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (vide)
Deploy command: echo "Build completed"
```

## ⚠️ IMPORTANT

Si vous utilisez l'Option 3 (`wrangler pages deploy`), assurez-vous que :
- La commande est `wrangler pages deploy` (PAS `wrangler deploy`)
- Le path est correct : `dist`
- Le nom du projet est correct : `chantierdoc-landing`

## 🔄 Ordre d'Exécution

1. **npm install** (automatique)
2. **npm run build** → Crée le dossier `dist/`
3. **Deploy command** → Utilise le dossier `dist/`

---

**Recommandation : Utilisez `echo "Build completed"` pour éviter toute confusion**
