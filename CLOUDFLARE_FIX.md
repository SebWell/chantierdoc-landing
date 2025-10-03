# 🚨 FIX URGENT - Configuration Cloudflare Pages

## ❌ Problème Actuel

Cloudflare Pages exécute `npx wrangler deploy` ce qui est **INCORRECT** pour Pages.

## ✅ Solution Immédiate

### Étape 1 : Dashboard Cloudflare
1. Allez sur https://dash.cloudflare.com/
2. Workers & Pages > chantierdoc-landing
3. Settings > Builds & deployments
4. **SUPPRIMER COMPLÈTEMENT** le champ "Deploy command"
5. Laissez ce champ **VIDE** ou supprimez "npx wrangler deploy"

### Étape 2 : Configuration Correcte

Voici la **SEULE** configuration nécessaire :

```
Production branch: master (ou main)

Build settings:
├─ Framework preset: Vite
├─ Build command: npm run build
├─ Build output directory: dist
└─ Deploy command: [VIDE - NE RIEN METTRE]
```

### Pourquoi cette erreur ?

**Workers** ≠ **Pages**

- **Workers** = Code JavaScript serverless → utilise `wrangler deploy`
- **Pages** = Site statique → PAS besoin de wrangler deploy

Notre projet est un site statique (Pages), donc :
- ✅ Build avec `npm run build`
- ✅ Output dans `dist`
- ❌ PAS de commande wrangler deploy

## 🔧 Actions Immédiates

### Dans Cloudflare Dashboard :

1. **Pages** > chantierdoc-landing > **Settings**
2. Section "**Builds & deployments**"
3. Cliquer "**Configure Production deployments**" ou "Edit configuration"
4. **Build command** : `npm run build`
5. **Build output directory** : `dist`
6. **Deploy command** : **LAISSER VIDE** (supprimer tout texte)
7. **Save**
8. Retourner à "**Deployments**" > Retry latest deployment

## 📸 Screenshot de la Configuration

Votre écran devrait ressembler à :

```
┌─────────────────────────────────────────┐
│ Build settings                          │
├─────────────────────────────────────────┤
│ Framework preset: Vite                  │
│                                         │
│ Build command                           │
│ ┌─────────────────────────────────────┐ │
│ │ npm run build                       │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Build output directory                  │
│ ┌─────────────────────────────────────┐ │
│ │ dist                                │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Root directory (optional)               │
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │ ← VIDE
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**IMPORTANT** : Il ne doit PAS y avoir de section "Deploy command" !

## 🎯 Résultat Attendu

Après correction, vous verrez dans les logs :

```
✓ Build command completed
Deploying to Cloudflare Pages...
✓ Deployment complete!
```

**PAS** de ligne "Executing user deploy command"

## 🌐 Alternative : Déploiement Manuel CLI

Si vous voulez déployer depuis votre machine au lieu du dashboard :

```bash
# Sur votre VPS
cd /root/chantierdoc-landing
npm run build
npx wrangler pages deploy dist --project-name=chantierdoc-landing
```

Mais pour l'intégration GitHub → Cloudflare automatique, utilisez la config dashboard ci-dessus.

## 📞 Si ça ne marche toujours pas

Créez un nouveau projet Pages :
1. Dashboard > Create new Pages project
2. Connect to Git > chantierdoc-landing
3. Configuration :
   - Build: `npm run build`
   - Output: `dist`
   - **NE TOUCHEZ PAS** aux autres champs
4. Deploy

---

**✅ RÈGLE D'OR : Pour Cloudflare Pages, PAS de deploy command !**
