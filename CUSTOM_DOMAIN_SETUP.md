# Custom Domain Setup Guide - niconet.site

This guide will help you connect your GitHub Pages site to your custom domain `niconet.site` purchased from Hostinger.

## 🌐 Step 1: DNS Configuration at Hostinger

### A. Login to Hostinger Control Panel
1. Go to [Hostinger Control Panel](https://hpanel.hostinger.com/)
2. Login with your credentials
3. Find your domain `niconet.site` and click on "Manage"

### B. Configure DNS Records
Navigate to the DNS Zone section and set up these records:

#### Root Domain (niconet.site)
Add these **A Records**:
```
Type: A
Name: @ (or leave blank)
Points to: 185.199.108.153
TTL: 14400 (or Auto)

Type: A  
Name: @ (or leave blank)
Points to: 185.199.109.153
TTL: 14400 (or Auto)

Type: A
Name: @ (or leave blank) 
Points to: 185.199.110.153
TTL: 14400 (or Auto)

Type: A
Name: @ (or leave blank)
Points to: 185.199.111.153  
TTL: 14400 (or Auto)
```

#### WWW Subdomain (www.niconet.site)
Add this **CNAME Record**:
```
Type: CNAME
Name: www
Points to: niconett18.github.io
TTL: 14400 (or Auto)
```

### C. Remove Conflicting Records
- **Delete any existing A records** pointing to Hostinger's servers
- **Delete any CNAME records** for @ or root domain
- Keep only the GitHub Pages A records and www CNAME

## 🚀 Step 2: GitHub Repository Configuration

### A. Enable Custom Domain in GitHub
1. Go to your repository: https://github.com/niconett18/nicoPortofolio
2. Navigate to **Settings** → **Pages**
3. In the "Custom domain" field, enter: `niconet.site`
4. Click **Save**
5. ✅ Check "Enforce HTTPS" (wait for it to become available)

### B. Verify Domain Configuration
GitHub will automatically:
- Create/update the CNAME file in your repository
- Check DNS configuration
- Issue SSL certificate (may take a few minutes)

## 📋 Step 3: Deploy Updated Configuration

### A. Commit and Push Changes
```bash
git add .
git commit -m "Configure custom domain niconet.site"
git push origin main
```

### B. Verify Deployment
- Check GitHub Actions for successful deployment
- Wait 5-15 minutes for DNS propagation
- Visit https://niconet.site to test

## 🔍 Step 4: Verification & Testing

### DNS Propagation Check
Use these tools to verify DNS setup:
- [DNS Checker](https://dnschecker.org/) - Enter `niconet.site`
- [What's My DNS](https://www.whatsmydns.net/) - Check A records

### Expected Results:
- `niconet.site` → Should show GitHub Pages IPs
- `www.niconet.site` → Should show CNAME to niconett18.github.io

### Website Testing:
- ✅ https://niconet.site (main domain)
- ✅ https://www.niconet.site (www subdomain)
- ✅ Both should show your portfolio with SSL certificate

## 🛠️ Troubleshooting

### If site doesn't load:
1. **Check DNS propagation** (can take up to 24 hours)
2. **Verify GitHub Pages settings** in repository
3. **Clear browser cache** and try incognito mode

### If SSL certificate issues:
1. Wait 10-15 minutes after domain configuration
2. Toggle "Enforce HTTPS" off and on in GitHub Pages settings
3. Check if domain verification passed in GitHub

### If redirects aren't working:
1. Ensure CNAME record points to `niconett18.github.io` (not the full URL)
2. Check that A records use all 4 GitHub Pages IPs
3. Verify no conflicting DNS records exist

## 📝 Important Notes

### DNS Propagation
- Changes can take **5 minutes to 24 hours** to fully propagate
- Test from different devices/networks to verify
- Use incognito mode to avoid cache issues

### SSL Certificate
- GitHub automatically provides SSL certificate
- May take 10-15 minutes to activate after domain setup
- Don't enable "Enforce HTTPS" until certificate is ready

### Domain Verification
- GitHub will verify domain ownership automatically
- Green checkmark should appear in repository settings
- If verification fails, double-check DNS records

## 🎯 Next Steps After Setup

1. **Update any hardcoded URLs** in your code to use `niconet.site`
2. **Set up 301 redirects** from GitHub Pages URL (optional)
3. **Update social media links** to use your custom domain
4. **Submit to search engines** with your new domain

## 🔗 Quick Reference

**Your Domains:**
- Primary: https://niconet.site
- WWW: https://www.niconet.site
- Old GitHub Pages: https://niconett18.github.io/nicoPortofolio (will redirect)

**Support Resources:**
- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Hostinger DNS Management](https://support.hostinger.com/en/articles/1583227-how-to-manage-dns-records)

Happy deploying! 🚀