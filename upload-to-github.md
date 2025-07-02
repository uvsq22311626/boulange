# Upload rapide vers GitHub

## Prérequis
- Avoir Git installé
- Avoir un compte GitHub

## Commandes à exécuter dans le dossier du projet

```bash
# Initialiser le repository Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site boulangerie artisanale"

# Ajouter l'origine GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/boulangerie-les-clayes.git

# Pousser vers GitHub
git push -u origin main
```

## Si vous n'avez pas encore créé le repository sur GitHub
1. Allez sur github.com
2. Cliquez sur "New repository"
3. Nommez-le "boulangerie-les-clayes"
4. NE cochez PAS "Initialize with README"
5. Cliquez "Create repository"
6. Utilisez les commandes ci-dessus