# Aurelia - Creative Digital Agency Website

A fully functional, professionally designed website for a digital creative agency. Built with Next.js 16, React, Tailwind CSS, and TypeScript.

## 🚀 What's Included

### ✅ Complete Pages
- **Home** - Hero section, services preview, portfolio showcase, testimonials, blog preview
- **About** - Company story, team members, timeline, mission & vision, values
- **Services** - 6 service offerings with detailed descriptions, process workflow
- **Portfolio** - 6 featured projects with case studies, metrics, and results
- **Pricing** - 3 pricing tiers with feature comparison, add-ons, and FAQs
- **Blog** - Blog listing with featured posts, newsletter signup, categories
- **Contact** - Contact form with validation, contact info, social links, FAQs

### 🎨 Design Features
- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Dark Mode** - Fully configured with CSS variables
- **Smooth Animations** - Scroll reveals, hover effects, floating elements
- **Professional Typography** - Playfair Display + DM Sans
- **Color System** - Teal primary with comprehensive palette
- **High Performance** - Optimized images, lazy loading, efficient CSS

### 🔧 Technical Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: shadcn/ui (50+ components available)
- **Styling**: Tailwind CSS with custom animations
- **Forms**: Built-in validation and handling
- **Analytics**: Vercel Analytics integration ready
- **SEO**: Metadata configured for all pages

### 🎯 Key Features
- ✅ Form validation and submission handling
- ✅ Scroll-triggered animations on all sections
- ✅ Social media integration ready
- ✅ Newsletter signup form ready
- ✅ Fully accessible (ARIA labels, semantic HTML)
- ✅ Performance optimized (Lighthouse ready)
- ✅ Mobile navigation with menu toggle
- ✅ Professional footer with links and CTA

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

## 🎨 Customization

### 1. Basic Information
Update your company details in these files:
- `/components/navigation.tsx` - Logo, company name
- `/components/site-footer.tsx` - Contact info, links
- `/app/layout.tsx` - Page title and description
- `/app/contact/page.tsx` - Contact methods

### 2. Replace Images
- Hero images: `/components/home/hero-section.tsx`
- Team photos: `/app/about/page.tsx`
- Project images: `/app/portfolio/page.tsx`
- Blog images: `/app/blog/page.tsx`

### 3. Update Content
Edit content arrays in each page file:
- Services: `/app/services/page.tsx` - `services` array
- Projects: `/app/portfolio/page.tsx` - `projects` array
- Team: `/app/about/page.tsx` - `team` array
- Blog posts: `/app/blog/page.tsx` - `blogPosts` array
- Pricing: `/app/pricing/page.tsx` - `plans` array

### 4. Customize Colors
Edit CSS variables in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.45 0.12 160);      /* Teal - Change this */
  --background: oklch(0.98 0.005 80);   /* Light cream */
  --foreground: oklch(0.18 0.02 260);   /* Dark slate */
  /* ... more colors */
}
```

### 5. Change Fonts
Update font imports in `/app/layout.tsx`:
```tsx
import { YourHeadingFont, YourBodyFont } from 'next/font/google'
```

## 📁 Project Structure

```
app/
├── page.tsx                 # Home page
├── about/page.tsx          # About page
├── services/page.tsx       # Services page
├── portfolio/page.tsx      # Portfolio page
├── pricing/page.tsx        # Pricing page
├── blog/page.tsx           # Blog page
├── contact/page.tsx        # Contact page (with form)
├── layout.tsx              # Root layout
└── globals.css             # Global styles & animations

components/
├── navigation.tsx          # Header with mobile menu
├── site-footer.tsx         # Footer
├── scroll-reveal.tsx       # Scroll animation component
├── home/                   # Home page sections
│   ├── hero-section.tsx
│   ├── services-preview.tsx
│   ├── portfolio-preview.tsx
│   ├── about-preview.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── blog-preview.tsx
│   └── clients-marquee.tsx
└── ui/                     # shadcn/ui components

public/                     # Static assets (favicon, icons)
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

## 🚀 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables if needed
4. Deploy!

### Environment Variables
Create `.env.local` if using third-party services:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_NEWSLETTER_API=your_endpoint
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
