# GitHub Pages Deployment Script for Windows
# Run this script after building your site

# Build the project
npm run build

# Navigate to dist directory
Set-Location dist

# Initialize git and commit
git init
git add -A
git commit -m "deploy to GitHub Pages"

# Push to GitHub Pages
# Replace <USERNAME> with your GitHub username
# Replace <REPO> with your repository name
# git push -f https://github.com/<USERNAME>/<REPO>.git main:gh-pages

# Return to root directory
Set-Location ..

Write-Host "Build complete! Follow these steps:" -ForegroundColor Green
Write-Host "1. Create a new repository on GitHub" -ForegroundColor Yellow
Write-Host "2. Run: git push -f https://github.com/YOUR-USERNAME/YOUR-REPO.git main:gh-pages" -ForegroundColor Yellow
Write-Host "3. Enable GitHub Pages in repository settings (Settings > Pages > Source: gh-pages branch)" -ForegroundColor Yellow
