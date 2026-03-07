# SDSF - Social Digital Selling Force

A modern, production-ready website for a TikTok Shop and social commerce agency. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Overview

SDSF is a fully functional digital agency website showcasing services for TikTok Shop optimization, live selling events, content creation, and e-commerce scaling. All content is easily editable through a centralized configuration file.

## Features

- **7 Complete Pages**: Home, About, Services, Portfolio, Blog, Pricing, Contact, Careers
- **TikTok & E-Commerce Focused**: Content tailored for social commerce industry
- **Fully Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode Support**: Built-in theme switching
- **Editable Content**: All text, images, and data in `/config/content.ts`
- **SEO Optimized**: Metadata, structured data, and best practices
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: WCAG 2.1 compliant, semantic HTML
- **Animations**: Smooth scroll reveals and transitions
- **Blog System**: Dynamic blog with articles and categories
- **Job Listings**: Career page with expandable job postings
- **Contact Form**: Working contact form with validation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with CSS Variables
- **Components**: shadcn/ui + custom components
- **Icons**: Lucide React
- **Animations**: CSS + Scroll Reveal
- **Forms**: React Hook Form + Zod Validation
- **UI Library**: Radix UI (primitives)
- **Font**: Playfair (display) + DM Sans (body)

## Quick Start

### Prerequisites
- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sdsf.git
cd sdsf

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Build
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint
```

## Project Structure

```
sdsf/
├── app/                           # Next.js app directory
│   ├── page.tsx                   # Home page
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles & tokens
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/                      # Blog listing
│   ├── pricing/
│   ├── contact/
│   └── careers/                   # Careers page with job listings
│
├── components/                    # React components
│   ├── ui/                        # shadcn/ui components
│   ├── home/                      # Homepage sections
│   ├── navigation.tsx             # Header navigation
│   ├── site-footer.tsx            # Footer
│   ├── scroll-reveal.tsx          # Animation wrapper
│   └── ...
│
├── config/
│   └── content.ts                 # All editable content (EDIT THIS!)
│
├── public/
│   └── images/                    # Local images go here
│
├── styles/                        # Additional styles
├── hooks/                         # Custom React hooks
├── lib/                           # Utilities
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment
│
├── .gitignore                     # Git ignore rules
├── EDITABLE_CONTENT.md            # Content editing guide
├── CONTRIBUTING.md                # Contribution guidelines
├── SETUP_GUIDE.md                 # Setup and customization
├── PROJECT_STATUS.md              # Project status
├── README.md                      # This file
│
└── package.json                   # Dependencies
```

## Editing Content

All website content is stored in `/config/content.ts`. No need to touch code to update:

- Blog articles
- Job openings
- Team members
- Services
- Company information
- Links and contact details

### Quick Edit Examples

```typescript
// config/content.ts

export const blogArticles = [
  {
    id: 1,
    title: "Your Article Title",          // ← Edit this
    excerpt: "Short summary",              // ← Edit this
    image: "/images/article.jpg",          // ← Change image
    category: "E-Commerce",
    author: "Your Name",                   // ← Edit this
    // ... more fields
  },
]

export const jobOpenings = [
  {
    id: 1,
    title: "Marketing Manager",            // ← Edit this
    department: "Marketing",               // ← Edit this
    location: "Bangkok, Thailand",         // ← Edit this
    // ... more fields
  },
]

export const companyInfo = {
  name: "Your Company Name",               // ← Edit this
  email: "your-email@company.com",         // ← Edit this
  phone: "+66 2 XXX XXXX",                 // ← Edit this
  // ... more fields
}
```

**See `EDITABLE_CONTENT.md` for complete content editing guide.**

## Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Main landing page |
| `/about` | About | Company story and team |
| `/services` | Services | Service offerings |
| `/portfolio` | Portfolio | Project showcase |
| `/blog` | Blog | Article listing |
| `/blog/[slug]` | Blog Post | Individual article (auto-generated) |
| `/pricing` | Pricing | Pricing plans |
| `/contact` | Contact | Contact form |
| `/careers` | Careers | Job listings and team |

## Customization

### Update Company Info
```typescript
// config/content.ts
export const companyInfo = {
  name: "Your Company",
  email: "hello@company.com",
  phone: "+XX X XXX XXXX",
  location: "Your City",
  website: "https://yoursite.com",
  socialLinks: {
    tiktok: "https://tiktok.com/@yourhandle",
    instagram: "https://instagram.com/yourhandle",
    // ...
  },
}
```

### Add New Blog Article
```typescript
// config/content.ts
export const blogArticles = [
  // ... existing articles
  {
    id: 6,
    title: "New Article Title",
    excerpt: "Short summary",
    image: "https://...",
    category: "E-Commerce",
    author: "Author Name",
    date: "Mar 25, 2024",
    readTime: "10 min read",
    slug: "new-article-url",
    content: `Full article content here...`,
  },
]
```

### Add New Job Opening
```typescript
// config/content.ts
export const jobOpenings = [
  // ... existing jobs
  {
    id: 7,
    title: "Position Title",
    department: "Department",
    location: "City, Country",
    type: "Full-Time",
    salary: "$X,XXX - $Y,YYY",
    description: "Job description",
    image: "https://...",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    requirements: ["Requirement 1", "Requirement 2"],
    benefits: ["Benefit 1", "Benefit 2"],
  },
]
```

### Custom Colors & Theme

Edit `/app/globals.css` for color changes:

```css
@theme inline {
  --color-primary: #00d4ff;
  --color-primary-foreground: #000;
  --color-secondary: #9333ea;
  --color-background: #fff;
  --color-foreground: #000;
  /* ... other tokens */
}
```

### Fonts

Fonts are configured in `/app/layout.tsx` and `/app/globals.css`:

```tsx
// app/layout.tsx
import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Auto-deployments**
   - Every push to `main` branch deploys automatically
   - GitHub Actions workflow in `.github/workflows/deploy.yml`

### Deploy Elsewhere

```bash
# Build
pnpm run build

# Output in .next/
# Deploy .next/ to your hosting
```

Supports: Netlify, Railway, AWS, Azure, DigitalOcean, etc.

## GitHub Setup Guide

### 1. Initial Setup

```bash
# Create new repository on GitHub
# Clone locally
git clone https://github.com/your-username/sdsf.git
cd sdsf

# Install dependencies
pnpm install

# Create a branch for your changes
git checkout -b feature/customization
```

### 2. Customize Content

```bash
# Edit /config/content.ts with your content
# Update /app/globals.css for colors
# Add images to /public/images/
```

### 3. Commit Changes

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update company info and blog articles"

# Push to GitHub
git push origin feature/customization
```

### 4. Create Pull Request

1. Go to your GitHub repository
2. Click "Compare & pull request"
3. Add description of changes
4. Click "Create pull request"
5. Review and merge to main

### 5. Deploy

Once merged to main:
- GitHub Actions automatically runs tests
- Vercel automatically deploys to production
- Your site updates in real-time

## Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO, Best Practices)
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Proper cache headers and revalidation

## SEO

- ✅ Meta titles and descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Structured data (schema.org)
- ✅ Sitemap auto-generation ready
- ✅ Mobile responsive
- ✅ Fast loading (90+ Lighthouse)
- ✅ Proper heading hierarchy

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

See `CONTRIBUTING.md` for detailed guidelines.

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Clean build
rm -rf .next
pnpm run build
```

### Content Not Updating
1. Check `/config/content.ts` is saved
2. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Restart dev server

## License

This project is open source. Feel free to use for your own projects.

## Support

- **Documentation**: See `README.md`, `EDITABLE_CONTENT.md`, `SETUP_GUIDE.md`
- **Issues**: Open a GitHub issue for bugs or features
- **Contact**: Email hello@sdsf.com
- **Discord**: [Join community](https://discord.gg/sdsf) (if applicable)

## Roadmap

- [ ] Blog comment system
- [ ] Newsletter integration
- [ ] CRM integration
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] User authentication
- [ ] Client portal

## Changelog

### v1.0.0 (Initial Release)
- Complete website with 8 pages
- Editable content system
- Full responsiveness
- Dark mode support
- Blog system
- Career page with job listings

---

**Built with ❤️ by SDSF Team**

For the latest updates and features, visit the [GitHub repository](https://github.com/your-username/sdsf).
