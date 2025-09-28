# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages while keeping all animations intact.

## 🚀 Quick Setup Steps

### 1. Repository Setup
1. Push your code to GitHub if you haven't already:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Install Dependencies
Run this command to install the new dependency:
```bash
npm install
```

## 🔧 Configuration Details

### Vite Configuration
- ✅ Base path configured for GitHub Pages
- ✅ Asset optimization for animations (Lottie, AOS, Framer Motion)
- ✅ Proper build settings for production

### Animation Libraries Preserved
- ✅ **Lottie animations** - Your coding animations will work perfectly
- ✅ **AOS (Animate on Scroll)** - All scroll animations preserved  
- ✅ **Framer Motion** - All interactive animations maintained
- ✅ **CSS animations** - Tailwind and custom animations intact

## 📦 Deployment Options

### Option 1: Automatic Deployment (Recommended)
- Every push to `main` branch triggers automatic deployment
- GitHub Actions handles the build and deployment
- No manual intervention needed

### Option 2: Manual Deployment
If you prefer manual control:
```bash
npm run deploy
```

## 🌐 Your Live Site
After deployment, your portfolio will be available at:
```
https://niconett18.github.io/nicoPortofolio/
```

## 🔍 Troubleshooting

### If animations don't work:
1. Check browser console for errors
2. Verify all animation assets are in the `public` folder
3. Ensure Lottie JSON files are properly referenced

### If routing doesn't work:
- The app is configured as SPA (Single Page Application)
- All routes will redirect to index.html properly

### If styles are broken:
- Clear browser cache
- Check if Tailwind CSS is loading correctly

## 📋 Pre-deployment Checklist
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Dependencies installed (`npm install`)
- [ ] Build works locally (`npm run build`)
- [ ] All animations tested locally

## 🎯 Next Steps
1. Test your deployment locally: `npm run preview`
2. Push your changes to trigger the first deployment
3. Check the Actions tab on GitHub to monitor deployment progress
4. Visit your live site and verify all animations work

## 💡 Tips
- The first deployment might take 5-10 minutes
- Subsequent deployments are usually faster (2-3 minutes)
- Your animations will work exactly as they do locally
- All assets are properly bundled and optimized

Happy deploying! 🚀