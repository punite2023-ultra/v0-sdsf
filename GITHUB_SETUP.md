# GitHub Setup Guide for SDSF

Complete instructions for setting up your SDSF project on GitHub with automatic deployment.

## Prerequisites

- GitHub account (free at [github.com](https://github.com))
- Git installed locally
- Project downloaded or cloned

## Step 1: Initialize GitHub Repository

### Option A: Create New Repository (Recommended)

```bash
# Navigate to your project
cd /path/to/sdsf

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SDSF website"

# Rename branch to main (GitHub default)
git branch -M main

# Add remote origin (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/sdsf.git

# Push to GitHub
git push -u origin main
```

### Option B: Use GitHub CLI

```bash
# Install GitHub CLI (if not already installed)
# https://cli.github.com

# Create new repository
gh repo create sdsf --source=. --remote=origin --push

# Follow the prompts
```

## Step 2: Customize for Your Brand

Before first commit:

### 1. Update Company Information

**File: `/lib/content.ts`**

```typescript
export const companyInfo = {
  name: "Your Company Name",
  email: "hello@yourcompany.com",
  phone: "+1234567890",
  location: "Your City, Country",
  // ... etc
}
```

### 2. Update Navigation & Footer

**File: `/components/navigation.tsx`**
```typescript
// Update company name and logo
```

**File: `/components/site-footer.tsx`**
```typescript
// Update footer links and contact info
```

### 3. Update Content

**File: `/lib/content.ts`** (All content in one place!)
```typescript
export const blogArticles = [...]
export const jobs = [...]
export const services = [...]
// etc
```

## Step 3: Configure GitHub Secrets

**In GitHub Repository Settings → Secrets and variables → Actions:**

### Required Secrets for CI/CD

Get these values from Vercel:

1. **VERCEL_TOKEN**
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create new token
   - Copy and paste into GitHub secret

2. **VERCEL_ORG_ID**
   - Vercel Dashboard → Settings → General
   - Copy Team ID

3. **VERCEL_PROJECT_ID**
   - Vercel Dashboard → Project → Settings → General
   - Copy Project ID

**Add Secrets:**
1. Click "New repository secret"
2. Name: `VERCEL_TOKEN`, Value: [paste token]
3. Name: `VERCEL_ORG_ID`, Value: [paste ID]
4. Name: `VERCEL_PROJECT_ID`, Value: [paste ID]
5. Click "Add secret"

## Step 4: Enable GitHub Actions

The CI/CD pipeline is already configured in `.github/workflows/ci.yml`

**What it does:**
- Runs on every push to `main` and `develop`
- Lints your code
- Builds the application
- Auto-deploys to Vercel if build succeeds

**Enable:**
1. GitHub → Settings → Actions
2. "All actions and reusable workflows" (should be default)
3. ✅ Done!

## Step 5: Configure Branch Protection

**To prevent direct pushes to main:**

1. GitHub → Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date before merging
5. Click "Create"

**Now developers must:**
- Create feature branches
- Make pull requests
- Pass CI/CD checks
- Get review approval
- Then merge to main

## Step 6: Deploy to Vercel

### Option A: Connect Through GitHub

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Search for your `sdsf` repo
4. Click "Import"
5. Vercel auto-detects Next.js
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel --prod
```

## Step 7: Verify Deployment

**Check GitHub Actions:**
1. GitHub → Actions tab
2. View workflow runs
3. Verify "CI/CD Pipeline" passed
4. Click run to see details

**Check Vercel:**
1. Vercel Dashboard → Deployments
2. Verify latest deploy succeeded
3. Click to preview live site
4. Check deployment logs

## Step 8: Add Custom Domain (Optional)

### In Vercel

1. Vercel Dashboard → Project Settings
2. Domains section
3. Add your domain (e.g., sdsf.com)
4. Choose:
   - **Use Vercel Nameservers** (easiest)
   - **Add DNS Records** (using existing registrar)

### DNS Setup

**If using Vercel nameservers:**
1. Copy nameservers from Vercel
2. Go to domain registrar
3. Update nameservers
4. Wait 24-48 hours

**If using existing DNS:**
1. Get CNAME record from Vercel
2. Add to registrar DNS
3. Verify in Vercel dashboard

## Workflow: Making Changes

### Daily Development

```bash
# Create feature branch
git checkout -b feature/add-blog-post

# Make your changes (edit /lib/content.ts, etc)
# Test locally: npm run dev

# Commit changes
git add .
git commit -m "Add new blog post about TikTok Shop"

# Push to GitHub
git push origin feature/add-blog-post

# Create Pull Request on GitHub
# - Wait for CI/CD to pass
# - Review changes
# - Merge to main
# - Auto-deploys to Vercel!
```

### Quick Content Updates

For minor content changes (no code changes):

```bash
# Edit /lib/content.ts locally
nano lib/content.ts

# Test: npm run dev

# Commit and push
git add .
git commit -m "Update job descriptions"
git push origin main

# Wait for GitHub Actions
# Site auto-deploys in ~1 minute
```

## Branch Strategy

### Recommended Workflow

```
main (production)
  ↑
  └─ develop (staging)
     ↑
     └─ feature/* (development)
        └─ bugfix/*
```

**Branches:**
- `main` - Production-ready, deployed to Vercel
- `develop` - Staging branch, internal testing
- `feature/name` - New features
- `bugfix/name` - Bug fixes

**Flow:**
1. Create branch from `develop`
2. Make changes and test
3. Push and create PR to `develop`
4. After review, merge to `develop`
5. Test on staging
6. Create PR from `develop` to `main`
7. After final review, merge and deploy

## Monitoring & Maintenance

### Weekly Tasks

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Review recent deployments
# (Check Vercel Dashboard)
```

### Monthly Tasks

```bash
# Major dependency updates
npm install

# Run full test suite
npm run build

# Check performance
# (Vercel Analytics Dashboard)
```

## Collaboration

### Adding Team Members

1. **On GitHub:**
   - Settings → Collaborators
   - Add their GitHub username
   - Set permissions (Maintain/Push/Triage)

2. **On Vercel:**
   - Team Settings → Members
   - Invite by email
   - Set role

### Code Review Process

1. **When reviewing PRs:**
   - Check code changes
   - Verify CI/CD passed
   - Test if needed
   - Leave comments
   - Approve or request changes

2. **Before merging:**
   - All comments resolved
   - CI/CD passed
   - At least 1 approval
   - Branch up to date

## Rollback & Recovery

### If Deployment Fails

```bash
# View commit history
git log --oneline

# Revert to previous version
git revert <commit-hash>

# Push to trigger new deploy
git push origin main

# Check GitHub Actions
# Site will redeploy
```

### Emergency Rollback

```bash
# Go back to specific commit
git reset --hard <commit-hash>

# Force push (use with caution!)
git push --force origin main

# Check Vercel for rollback option
```

## Troubleshooting

### Build Fails in GitHub Actions

1. Go to Actions tab
2. Click failed workflow
3. View logs for error
4. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Linting failures

**Fix locally:**
```bash
npm run build  # Test build
npm run lint   # Check linting
npm install    # Ensure dependencies
```

### Site Works Locally but Fails in CI

1. Check Node version (should match `.nvmrc`)
2. Clear local cache: `rm -rf node_modules .next`
3. Reinstall: `npm install`
4. Build: `npm run build`

### Vercel Deployment Stuck

1. Check Vercel dashboard
2. Cancel deployment
3. Trigger new deploy:
   ```bash
   git commit --allow-empty -m "Trigger rebuild"
   git push origin main
   ```

## Security Best Practices

### Protect Sensitive Data

1. ✅ Never commit `.env.local`
2. ✅ Use GitHub Secrets for tokens
3. ✅ Keep API keys in Vercel environment
4. ✅ Rotate tokens regularly

### Branch Protection

Already configured (see Step 5):
- Require PR reviews
- Require status checks
- Protect main branch

### Access Control

1. Limit who can merge to `main`
2. Use roles (Maintain, Push, Triage)
3. Require pull request reviews
4. Enable "Dismiss stale reviews"

## Next Steps

1. ✅ Initialize GitHub repository
2. ✅ Add team members
3. ✅ Configure CI/CD secrets
4. ✅ Enable branch protection
5. ✅ Deploy to Vercel
6. ✅ Test deployment
7. ✅ Make your first changes
8. ✅ Monitor and maintain

## Resources

- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Actions**: https://github.com/features/actions

## Support

- Check existing issues: GitHub → Issues
- Create new issue: GitHub → New Issue
- Use issue templates for bugs/features
- Include error logs and steps to reproduce

---

**Your SDSF project is ready for GitHub and Vercel!**

Start by pushing your first changes:
```bash
git add .
git commit -m "Customize for our brand"
git push origin main
```

Watch it deploy in real-time on Vercel! 🚀
