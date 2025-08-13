# 🚀 Vercel Deployment Guide

## Prerequisites
- [Git](https://git-scm.com/) installed on your computer
- [GitHub](https://github.com) account
- [Vercel](https://vercel.com) account (can sign up with GitHub)

## Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Repository name: `portfolio-nicholas-edmund` (or your preferred name)
   - Set to **Public** (recommended for portfolio sites)
   - Don't initialize with README, .gitignore, or license (we already have files)

## Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-nicholas-edmund.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**

### Option B: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy your project
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: nicholas-edmund-portfolio
# - Directory: ./
# - Override settings? No
```

## Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project in Vercel dashboard
2. Click **"Domains"** tab
3. Add your custom domain
4. Update DNS settings as instructed

## Environment Variables

If you need to add environment variables:
1. Go to project settings in Vercel
2. Navigate to **"Environment Variables"**
3. Add variables for Production, Preview, and Development

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get preview deployments automatically

## Build Settings Verification

Your project is already configured with:
- ✅ **vercel.json** for SPA routing
- ✅ **package.json** with correct build scripts
- ✅ **Vite configuration** optimized for production
- ✅ **All assets** properly referenced
- ✅ **Favicon** updated to your profile picture
- ✅ **SEO meta tags** configured

## Troubleshooting

### Build Fails?
```bash
# Test locally first
npm run build
npm run preview
```

### 404 on page refresh?
- Check that `vercel.json` exists with SPA rewrites
- Ensure all routes are handled by React Router

### Slow loading?
- Images are already optimized
- Build chunks are already configured
- Consider using Vercel's Image Optimization

## Post-Deployment Checklist

- [ ] Check homepage loads correctly
- [ ] Test all navigation links
- [ ] Verify social media links work
- [ ] Test contact form (if applicable)
- [ ] Check favicon displays correctly
- [ ] Test on mobile devices
- [ ] Verify 3D background works (if enabled)
- [ ] Check CV download works

## Domain Examples

Your deployed site will be available at:
- **Vercel subdomain:** `https://your-project-name.vercel.app`
- **Custom domain:** `https://nicholasedmund.com` (if configured)

## Support

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Test locally with `npm run build && npm run preview`

---

**Ready to deploy! 🚀**
