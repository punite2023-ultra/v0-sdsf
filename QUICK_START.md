# Quick Start Guide

Get your SDSF website running in 5 minutes.

## Installation (2 minutes)

```bash
# Clone or download the project
git clone https://github.com/your-username/sdsf.git
cd sdsf

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open browser to http://localhost:3000
```

## Customize Content (3 minutes)

**Edit `/config/content.ts` to change:**

```typescript
// Change company name
export const companyInfo = {
  name: "Your Company Name",  // ← Change this
  email: "your@email.com",     // ← Change this
  phone: "+66 2 XXX XXXX",     // ← Change this
  location: "Your City",       // ← Change this
  // ...
}

// Update blog articles
export const blogArticles = [
  {
    id: 1,
    title: "Your Article",     // ← Change this
    excerpt: "Your summary",   // ← Change this
    // ...
  },
  // Add more articles here
]

// Update jobs
export const jobOpenings = [
  {
    id: 1,
    title: "Your Job Title",   // ← Change this
    // ...
  },
  // Add more jobs here
]
```

Save the file → Changes appear instantly!

## Common Edits

### Update Logo Text
```typescript
// components/navigation.tsx (line ~28)
<span className="text-xl font-semibold">Your Company</span>
```

### Change Primary Color
```css
/* app/globals.css */
--color-primary: #00d4ff;  /* ← Your color */
```

### Add New Blog Article
```typescript
// Add to blogArticles array in config/content.ts
{
  id: 6,
  title: "Your New Article",
  excerpt: "Short summary",
  image: "https://...",
  category: "E-Commerce",
  author: "Your Name",
  date: "Mar 25, 2024",
  readTime: "10 min read",
  slug: "article-url-slug",
  content: `Your full article content...`,
}
```

### Add New Job
```typescript
// Add to jobOpenings array in config/content.ts
{
  id: 7,
  title: "New Job Title",
  department: "Your Dept",
  location: "Your Location",
  type: "Full-Time",
  salary: "$X - $Y",
  description: "Job description",
  image: "https://...",
  responsibilities: ["Task 1", "Task 2"],
  requirements: ["Req 1", "Req 2"],
  benefits: ["Benefit 1", "Benefit 2"],
}
```

### Replace Images
1. Add images to `/public/images/` folder
2. Update URLs in `/config/content.ts`:
   ```typescript
   image: "/images/your-image.jpg"  // Instead of URL
   ```

## Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Update content"
git push origin main

# 2. Go to vercel.com
# 3. Import your GitHub repository
# 4. Click "Deploy"

# Done! Your site is live.
```

## File Locations Quick Reference

| What | Where | What to Edit |
|------|-------|-------------|
| Company Info | `/config/content.ts` | name, email, phone, location |
| Blog Articles | `/config/content.ts` | title, content, author, date |
| Jobs | `/config/content.ts` | title, salary, responsibilities |
| Team Members | `/config/content.ts` | name, role, bio |
| Images (Local) | `/public/images/` | Add .jpg/.png files here |
| Colors | `/app/globals.css` | --color-primary, etc. |
| Fonts | `/app/layout.tsx` | Font imports |
| Navigation | `/components/navigation.tsx` | Menu links |
| Footer | `/components/site-footer.tsx` | Footer content |

## Useful Commands

```bash
# Development
pnpm run dev              # Start dev server

# Production
pnpm run build            # Build for production
pnpm run start            # Start production server

# Code quality
pnpm run lint             # Check code quality

# Clean up
rm -rf .next node_modules # Remove cache
pnpm install              # Reinstall dependencies
```

## Page URLs

- Homepage: `/`
- About: `/about`
- Services: `/services`
- Portfolio: `/portfolio`
- Blog: `/blog`
- Blog Post: `/blog/article-slug`
- Pricing: `/pricing`
- Contact: `/contact`
- Careers: `/careers`

## Troubleshooting

### Page not loading?
```bash
pnpm run dev              # Restart dev server
```

### Changes not showing?
1. Check file is saved
2. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Restart dev server

### Port 3000 already in use?
```bash
# Use different port
pnpm run dev -- -p 3001
```

### Dependencies error?
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Need More Help?

- **Content editing**: See `EDITABLE_CONTENT.md`
- **GitHub & Deployment**: See `GITHUB_README.md`
- **Code changes**: See `CONTRIBUTING.md`
- **Full setup**: See `README.md`

---

**That's it! You're ready to go.** 

Start by editing `/config/content.ts` with your own information, then deploy to Vercel.
