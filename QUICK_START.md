# Quick Start - Star Digital Solutions

Get your website live in 5 minutes.

## 1️⃣ Local Setup (2 minutes)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## 2️⃣ Test Everything Works (1 minute)

- ✅ Hero slider auto-scrolls every 10 seconds
- ✅ Marquee section displays services
- ✅ All navigation links work
- ✅ Mobile responsive (test with DevTools)
- ✅ No console errors

## 3️⃣ Verify Build (1 minute)

```bash
pnpm build
# Should complete with no errors
```

## 4️⃣ Push to GitHub (1 minute)

```bash
# Create repo at github.com/new (name: v0-sdsf)
# Then connect locally:

git remote add origin https://github.com/USERNAME/v0-sdsf.git
git branch -M main
git add .
git commit -m "Initial commit: Star Digital Solutions"
git push -u origin main
```

## 5️⃣ Deploy to Vercel (auto - 2-5 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Select `v0-sdsf` repository
4. Click **Deploy**
5. Get live URL in 2-5 minutes ✅

## 📝 Update Your Site

```bash
# Make changes locally
# Test: pnpm dev

# Push to deploy
git add .
git commit -m "Update hero section"
git push origin main

# Automatically deployed! ✨
```

## 🎨 Customize Design

**Colors**: Edit `app/globals.css`
```css
:root {
  --color-primary: #62248e;      /* Purple */
  --color-accent: #CCFF00;       /* Neon Yellow */
}
```

**Hero Section**: Edit `components/home/hero-section.tsx`
- Change slider images
- Adjust text sizing
- Modify animation timing (currently 10 seconds)

**Marquee Services**: Edit `components/home/clients-marquee.tsx`
- Update service text
- Change background color
- Adjust speed/spacing

## 🎯 What You Get

- ✅ Auto-scaling (Vercel handles traffic)
- ✅ Free SSL/HTTPS (automatic)
- ✅ Global CDN (fast everywhere)
- ✅ Free tier: 100GB/month, unlimited deployments
- ✅ Auto-deployments (push = instant deploy)
- ✅ Preview URLs (pull requests get test links)
- ✅ Built-in analytics

## 🆘 Troubleshooting

| Issue | Fix |
|-------|-----|
| Hero slider not visible | Check Vercel build logs |
| Build fails locally | Run `pnpm install` then `pnpm build` |
| Images not loading | Verify paths in `/public/images/` |
| Want to rollback | Vercel Deployments → select previous version |

## 📚 Full Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-launch checklist
- **[README.md](./README.md)** - Project overview

## ✨ You're Ready!

```bash
# 1. Test locally
pnpm dev

# 2. Push to GitHub
git push origin main

# 3. Deploy to Vercel
# Automatic - takes 2-5 minutes

# 4. Share your live URL!
```

---

**That's it! Your website is live.** 🎉
