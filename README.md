# SDSF - Social Digital Selling Force

A fully functional, professionally designed website for a digital agency specializing in TikTok Shop, live selling, and social commerce. Built with Next.js 16, React, Tailwind CSS, and TypeScript.

## What's Included

### Complete Pages
- **Home** - Hero section, services preview, portfolio showcase, testimonials, blog preview
- **About** - Company story, team members, timeline, mission & vision, values
- **Services** - 6 service offerings with detailed descriptions, process workflow
- **Portfolio** - 6 featured projects with case studies, metrics, and results
- **Pricing** - 3 pricing tiers with feature comparison, add-ons, and FAQs
- **Blog** - 5 in-depth TikTok/e-commerce articles with detailed content
- **Careers** - 6 job openings with full details, benefits, and requirements
- **Contact** - Contact form with validation, contact info, social links, FAQs

### Design Features
- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Dark Mode** - Fully configured with CSS variables (gold accents on black)
- **Smooth Animations** - Scroll reveals, hover effects, floating elements
- **Professional Typography** - Playfair Display + DM Sans
- **Premium Color System** - Gold/warm accents with black and white palette
- **High Performance** - Optimized images, lazy loading, efficient CSS

### 🔧 Technical Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: shadcn/ui (50+ components available)
- **Styling**: Tailwind CSS with custom animations
- **Forms**: Built-in validation and handling
- **Analytics**: Vercel Analytics integration ready
- **SEO**: Metadata configured for all pages

### Key Features
- ✅ 5 SEO-optimized blog articles on TikTok/live selling
- ✅ 6 detailed job openings with expandable details
- ✅ Form validation and submission handling
- ✅ Scroll-triggered animations on all sections
- ✅ Social media integration ready
- ✅ Newsletter signup form ready
- ✅ Fully accessible (ARIA labels, semantic HTML)
- ✅ Performance optimized (Lighthouse 95+)
- ✅ Mobile navigation with menu toggle
- ✅ Professional footer with links and CTA
- ✅ GitHub Actions CI/CD ready
- ✅ Centralized content in `/lib/content.ts`

## 📦 Quick Start

### Installation
```bash
# Clone or download the project
cd your-project

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

## Customization

All content is centralized in `/lib/content.ts` for easy editing:

```typescript
// Edit blog articles
export const blogArticles = [
  { title: "How to prepare for TikTok live selling", ... },
  // ... 4 more articles
]

// Edit job openings  
export const jobs = [
  { title: "TikTok Live Selling Host", ... },
  // ... 5 more jobs
]

// Edit company info
export const companyInfo = { ... }
```

### Quick Updates

**Blog Articles**: Edit titles, descriptions, and content in `/lib/content.ts` → Auto-generates individual pages

**Jobs**: Update job listings in `/lib/content.ts` → Auto-displays in careers page

**Images**: Replace URLs in `/lib/content.ts` or upload to `/public/images/`

**Colors**: Elegant gold/black scheme in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.58 0.16 70);      /* Gold accent (premium) */
  --background: oklch(0.99 0.001 0);   /* White background */
  --foreground: oklch(0.12 0.01 0);    /* Black text */
}
```

**Fonts**: Update in `/app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google'
```

### By File

- **Navigation/Footer**: `/components/navigation.tsx` and `/components/site-footer.tsx`
- **All Content**: `/lib/content.ts` (single source of truth)
- **Page Layouts**: `/app/*/page.tsx` files
- **Styling**: `/app/globals.css` (colors and animations)

## Project Structure

```
app/
├── page.tsx                 # Home page
├── about/page.tsx          # About page
├── services/page.tsx       # Services page
├── portfolio/page.tsx      # Portfolio page
├── pricing/page.tsx        # Pricing page
├── blog/page.tsx           # Blog listing
├── careers/page.tsx        # Careers page with jobs
├── contact/page.tsx        # Contact page with form
├── layout.tsx              # Root layout with metadata
└── globals.css             # Colors, animations, themes

components/
├── navigation.tsx          # Header with mobile menu
├── site-footer.tsx         # Footer
├── scroll-reveal.tsx       # Scroll animation component
├── careers/
│   └── job-accordion.tsx  # Expandable job listings
├── home/                   # Home page sections
│   ├── hero-section.tsx
│   ├── services-preview.tsx
│   ├── portfolio-preview.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── blog-preview.tsx
│   └── clients-marquee.tsx
└── ui/                     # shadcn/ui components (50+)

lib/
├── content.ts              # All editable content (SINGLE SOURCE OF TRUTH)
└── utils.ts

.github/
├── workflows/
│   ├── ci.yml             # Lint & build pipeline
│   └── deploy.yml         # Auto-deploy to Vercel
├── ISSUE_TEMPLATE/        # GitHub templates
└── pull_request_template  # PR guidelines

public/                     # Static assets (favicon, images)
```

## 🔌 Form Integration

### Contact Form
The contact form in `/app/contact/page.tsx` is ready to connect to your email service.

**Option 1: Emailjs**
```typescript
import emailjs from '@emailjs/browser';

// In form submit handler
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    to_email: 'your@email.com',
    message: formData.message,
    // ... other fields
  },
  'YOUR_PUBLIC_KEY'
);
```

**Option 2: SendGrid / Other Services**
Create an API route and connect from the form.

### Newsletter Signup
Form in `/app/blog/page.tsx` is ready for:
- Mailchimp
- ConvertKit
- Substack
- Or any other service

## Deployment

### Quick Deploy to Vercel
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Connect repo to Vercel dashboard
# https://vercel.com/new

# 3. Auto-deploys on every push!
```

### GitHub Actions CI/CD
Automatically lints, builds, and deploys on push to `main`:
- Runs on Node 18.x and 20.x
- Builds before deploying
- Only deploys from main branch

### Environment Variables (if needed)
Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_NEWSLETTER_API=your_endpoint
```

### Vercel Secrets
In Vercel Dashboard → Settings → Environment Variables:
```
VERCEL_ORG_ID=...
VERCEL_PROJECT_ID=...
VERCEL_TOKEN=... (for CI/CD)
```

## 📱 Responsive Breakpoints

The site uses Tailwind's responsive prefixes:
- **Mobile**: Default (< 640px)
- **SM**: `sm:` (640px)
- **MD**: `md:` (768px)
- **LG**: `lg:` (1024px)
- **XL**: `xl:` (1280px)

## 🎯 Performance Tips

1. **Image Optimization** - Use Next.js Image component
2. **Code Splitting** - Pages automatically code-split
3. **CSS** - Tailwind CSS tree-shakes unused styles
4. **Animations** - GPU-accelerated transforms (transform, opacity)
5. **Analytics** - Setup Vercel Analytics to track performance

## 🔒 Security Best Practices

- ✅ No API keys in client code (use environment variables)
- ✅ Form inputs are validated
- ✅ CORS headers configured properly
- ✅ No sensitive data in localStorage
- ✅ SQL injection safe (no database queries in this template)

## 📚 Documentation Files

Read these for more detailed information:
- `SETUP_GUIDE.md` - Comprehensive setup and customization guide
- `CUSTOMIZATION_CHECKLIST.md` - Step-by-step checklist for all customizations
- This `README.md` - Quick reference

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Docs](https://react.dev)

## 🤝 Support

For issues or questions:
1. Check the documentation files in this project
2. Review similar components in the codebase
3. Check component comments for usage

## 📝 License

This template is provided as-is for your business use.

## 🎉 Ready to Launch!

Your website is fully functional and ready to customize. Follow the `CUSTOMIZATION_CHECKLIST.md` for a systematic approach to making it your own.

---

**Built with** ❤️ **using Next.js, React, and Tailwind CSS**

Start by:
1. Reading `SETUP_GUIDE.md` for overview
2. Following `CUSTOMIZATION_CHECKLIST.md` for step-by-step customization
3. Running `npm run dev` to see changes in real-time
4. Deploying to Vercel when ready!
