# Deployment Guide

This guide covers deploying SDSF to Vercel with GitHub Actions CI/CD.

## Prerequisites

- GitHub account with repository
- Vercel account (free tier works great)
- Node.js 18+ installed locally

## Step-by-Step Deployment

### 1. Prepare Your GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SDSF website"

# Create main branch (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/yourusername/sdsf.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Vercel

**Option A: Direct Vercel Connection (Easiest)**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Option B: Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts to connect GitHub
```

### 3. Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add any needed variables (optional for basic setup):

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Set Up GitHub Actions CI/CD

The `.github/workflows/ci.yml` file is already configured, but you need to set secrets:

**In GitHub Repository Settings:**

1. Go to Settings → Secrets and variables → Actions
2. Add these secrets (from Vercel):

```
VERCEL_ORG_ID        # Found in Vercel dashboard
VERCEL_PROJECT_ID    # Found in Vercel dashboard  
VERCEL_TOKEN         # Create at vercel.com/account/tokens
```

**To Get These Values:**

- **VERCEL_ORG_ID**: Vercel Dashboard → Settings → General → Team ID
- **VERCEL_PROJECT_ID**: Project Settings → General → Project ID
- **VERCEL_TOKEN**: Create at [vercel.com/account/tokens](https://vercel.com/account/tokens)

### 5. Automatic Deployments

Now every time you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions will:
1. ✅ Lint your code
2. ✅ Run Next.js build
3. ✅ Deploy to Vercel (if main branch)

Check deployment status:
- GitHub: Actions tab
- Vercel: Deployments section

## Custom Domain

### Add Custom Domain to Vercel

1. Vercel Dashboard → Project Settings
2. Click "Domains"
3. Add your domain (e.g., sdsf.com)
4. Follow Vercel's DNS instructions
5. Point your domain registrar to Vercel nameservers

### DNS Configuration

**If using separate registrar:**

1. Get Vercel's nameservers
2. Update DNS records at domain registrar
3. Wait 24-48 hours for propagation
4. Verify domain in Vercel dashboard

**If using registrar's DNS:**

1. Add CNAME/A records pointing to Vercel
2. Check Vercel docs for specific records
3. Verify in Vercel dashboard

## SSL/TLS Certificate

✅ Automatically provided by Vercel (Let's Encrypt)

- Free for all projects
- Auto-renewal included
- No configuration needed

## Performance Optimization

### Vercel Analytics

Enable in Vercel Dashboard:
1. Project Settings → Integrations
2. Enable Vercel Analytics
3. View performance metrics

### Image Optimization

Already configured with Next.js Image component:
- Auto-optimization
- Multiple formats (webp, avif)
- Responsive sizes
- Lazy loading

### Build Optimization

Current settings:
- Minified CSS/JS
- Code splitting
- Static generation where possible
- API route caching

## Monitoring & Logs

### Vercel Dashboard

- **Deployments**: View build logs and status
- **Analytics**: Monitor traffic and performance
- **Functions**: View API route execution
- **Logs**: Real-time application logs

### GitHub Actions

- **Actions Tab**: View CI/CD pipeline
- **Workflow Runs**: Click to see detailed logs
- **Artifacts**: Download build artifacts

## Rollback

### If Deployment Fails

1. GitHub Actions will not deploy if build fails
2. Check logs for error messages
3. Fix issue locally
4. Push again to trigger redeploy

### Revert to Previous Version

```bash
# View deployment history
git log

# Revert to previous commit
git revert <commit-hash>

# Push to trigger new deployment
git push origin main
```

## Troubleshooting

### Build Fails

1. Check GitHub Actions logs
2. Look for TypeScript errors
3. Verify all imports are correct
4. Run locally: `npm run build`

### Deployment Succeeds but Site Shows Error

1. Check Vercel logs (Deployments tab)
2. Check environment variables are set
3. Clear Vercel cache: Settings → Advanced → Clear Cache
4. Trigger redeploy

### DNS Not Resolving

1. Verify nameserver changes propagated (48 hours max)
2. Use [whatsmydns.net](https://whatsmydns.net) to check
3. Ensure domain is verified in Vercel
4. Check registrar DNS settings

### Performance Issues

1. Check Vercel Analytics
2. Look for slow API routes
3. Optimize images
4. Check bundle size: `npm run build`

## Scaling & Limits

### Vercel Free Tier Includes

- 100 GB/month bandwidth
- Unlimited deployments
- Automatic HTTPS
- Edge caching
- Up to 25 function invocations/second
- 12 second function timeout

### When to Upgrade

Upgrade to Pro if you need:
- Higher function limits
- Longer timeouts
- Priority support
- Advanced analytics
- Custom domains with Team plan

## Security

### Best Practices

1. ✅ Never commit `.env.local` (added to .gitignore)
2. ✅ Use Vercel Secrets for sensitive data
3. ✅ Enable branch protection on main
4. ✅ Require pull request reviews
5. ✅ Keep dependencies updated

### Branch Protection

In GitHub Settings → Branches:

1. Add rule for `main` branch
2. Require status checks to pass
3. Require pull request reviews
4. Dismiss stale reviews on push

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor Vercel Analytics
- Check for deployment errors

**Monthly:**
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review GitHub Actions logs

**Quarterly:**
- Major dependency updates
- Performance optimization review
- Security audit

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Actions**: https://docs.github.com/actions

## Quick Reference

```bash
# Local development
npm install
npm run dev

# Build and test
npm run build
npm run start

# Check for issues
npm run lint
npm audit

# Deploy
git push origin main  # Automatic via GitHub Actions
```

---

**Your SDSF website is ready to scale!**
