# Quick GitHub Deployment Guide

After restarting your terminal, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to main branch
git push -u origin main
```

## Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The site will automatically deploy when you push to main branch

## Your site will be live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Update base path in vite.config.js

If deploying to `username.github.io/repo-name`, change in vite.config.js:
```js
base: '/your-repo-name/',
```

Then rebuild and commit:
```bash
npm run build
git add .
git commit -m "Update base path"
git push
```
