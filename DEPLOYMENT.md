# Deployment Guide - Star Digital Solutions

Complete guide to deploy Star Digital Solutions website to Vercel with GitHub integration and automatic CI/CD.

## Prerequisites

- GitHub account (free at github.com)
- Vercel account (free tier - 100GB/month bandwidth, unlimited deployments)
- Node.js 18.x, 20.x, or 22.x installed locally
- pnpm package manager

## Step 1: Prepare Your GitHub Repository

```bash
# Navigate to project directory
cd v0-sdsf

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Star Digital Solutions with hero slider"

# Create/rename main branch
git branch -M main

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/v0-sdsf.git

# Push to GitHub
git push -u origin main
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `v0-sdsf`
3. **Description**: `Star Digital Solutions - Award-winning digital agency website`
4. **Visibility**: Choose Public (for collaboration) or Private (for confidentiality)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**
7. Follow GitHub's instructions to connect your local repository

**Or use GitHub CLI:**
```bash
gh repo create v0-sdsf --source=. --remote=origin --push
```

## Step 3: Verify Repository on GitHub

Visit `https://github.com/USERNAME/v0-sdsf` and confirm:
- ✅ All source files are present
- ✅ No `node_modules` folder
- ✅ `.gitignore` properly configured
- ✅ `next.config.js` and `vercel.json` present
- ✅ `package.json` exists

## Step 4: Connect to Vercel

### Option A: Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Under "Import Git Repository," select your GitHub repo `v0-sdsf`
4. Click **Import**

### Step 5: Configure Project Settings

**Framework**: Next.js (auto-detected)

**Build Settings** (auto-detected):
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

**Environment Variables**: Leave empty for now (optional)

**Advanced Settings**:
- **Node.js Version**: 20.x (recommended)
- **Automatically expose System Environment Variables**: Enabled

### Step 6: Deploy

Click **Deploy** button. Vercel will:
1. Clone your GitHub repository
2. Install dependencies
3. Build the project
4. Deploy to CDN
5. Provide live URL (deployment-hash.vercel.app)

Deployment takes 2-5 minutes. Once complete, you'll see a confirmation with your live URL.

## Step 7: Configure Environment Variables (Optional)

In Vercel Dashboard → **Settings** → **Environment Variables**:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Note: Prefix with `NEXT_PUBLIC_` to expose to browser. Other variables are server-only.

## Step 8: Set Up Automatic Deployments

Once your repository is connected to Vercel, **automatic deployments are enabled**. Every push to the main branch automatically deploys to production.

### Automatic Deployment Workflow

```bash
# Make changes locally
# ...edit files...

# Test locally
pnpm dev

# Build to verify no errors
pnpm build

# Commit and push
git add .
git commit -m "Update hero section styling"
git push origin main

# Vercel automatically deploys!
# Check status: Vercel Dashboard → Deployments
```

### GitHub Actions CI/CD (Optional Enhancement)

For automated testing before deployment:

**GitHub Actions is pre-configured** in `.github/workflows/` but not required for Vercel deployments.

To enable GitHub Actions validation:

1. Go to GitHub → Repository **Settings**
2. Click **Secrets and variables** → **Actions**
3. Create a new secret: `VERCEL_TOKEN`
4. Get token from [vercel.com/account/tokens](https://vercel.com/account/tokens)

This enables:
- Automated linting on pull requests
- Build validation before merge
- Automatic preview deployments
- Production deployment on merge to main

## Step 9: Preview Deployments

Every pull request automatically gets a preview URL:

1. Push to a branch: `git checkout -b feature/new-feature`
2. Make changes and push
3. Create Pull Request on GitHub
4. Vercel comments with preview URL
5. Share preview link for team review
6. Merge PR to deploy to production

## Step 10: Add Custom Domain (Optional)

### Prerequisites
- Own domain name (e.g., stardigitalsolutions.com)
- Domain registrar account (GoDaddy, Namecheap, Google Domains, etc.)

### Add Domain to Vercel

1. **Vercel Dashboard** → **Settings** → **Domains**
2. Enter your domain: `stardigitalsolutions.com`
3. Click **Add**
4. Vercel shows DNS configuration options

### DNS Configuration Options

**Option A: Change Nameservers (Recommended)**
1. Copy Vercel nameservers provided
2. Log into your domain registrar
3. Update nameservers to Vercel's
4. Wait 24-48 hours for DNS propagation
5. Vercel auto-verifies once propagated

**Option B: Add DNS Records**
1. Use registrar's DNS management
2. Add CNAME/A records provided by Vercel
3. Update all required records
4. Vercel auto-verifies once live

**Option C: Connect via Registrar**
Some registrars (Route 53, Cloudflare) integrate directly with Vercel.

### Verify Domain Setup

1. After DNS propagates, visit your domain
2. Should show your Vercel-deployed site
3. Vercel auto-provisions SSL certificate
4. Certificate valid within 24 hours

### SSL/TLS Certificate

✅ **Automatically provided** by Vercel (Let's Encrypt)
- Free for all projects
- Auto-renewal included
- No configuration needed
- HTTPS enabled by default

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
