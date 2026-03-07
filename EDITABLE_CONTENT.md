# Editable Content Guide

All dynamic content on this website is stored in `/config/content.ts`. This file centralizes all text, images, and data that you can easily customize without touching code.

## Quick Start

1. Open `/config/content.ts`
2. Find the content section you want to edit
3. Update the values
4. Save the file
5. Changes appear immediately on next page load

---

## Content Sections

### 1. Blog Articles (`blogArticles`)

**Location:** `/config/content.ts` - Lines 1-500+

**Fields to Edit:**
- `title`: Article headline
- `excerpt`: Short summary (50-100 characters)
- `image`: URL to article image
- `category`: Article category (E-Commerce, Marketing, Sales)
- `author`: Author name
- `date`: Publication date (MMM DD, YYYY format)
- `readTime`: Estimated reading time (e.g., "12 min read")
- `slug`: URL-friendly slug (auto-generates page URL)
- `content`: Full article text with markdown formatting

**Example:**
```javascript
{
  id: 1,
  title: "Your Article Title",
  excerpt: "Short summary here",
  image: "https://images.unsplash.com/...", // or /images/your-image.jpg
  category: "E-Commerce",
  author: "Your Name",
  date: "Mar 18, 2024",
  readTime: "12 min read",
  slug: "article-url-slug",
  content: `Your full article content...`,
}
```

**Pages that use this:**
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual article pages (auto-generated)

---

### 2. Job Openings (`jobOpenings`)

**Location:** `/config/content.ts` - Lines 500+

**Fields to Edit:**
- `id`: Unique job ID
- `title`: Job title
- `department`: Department name
- `location`: Job location
- `type`: Employment type (Full-Time, Part-Time, Contract)
- `salary`: Salary range
- `description`: Job description
- `image`: Job category image
- `responsibilities`: Array of responsibility bullets
- `requirements`: Array of requirement bullets
- `benefits`: Array of benefit bullets

**Example:**
```javascript
{
  id: 1,
  title: "Job Title",
  department: "Department",
  location: "City, Country",
  type: "Full-Time",
  salary: "$X,XXX - $X,XXX/month",
  description: "Job description here",
  image: "https://images.unsplash.com/...",
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2",
  ],
  requirements: [
    "Requirement 1",
    "Requirement 2",
  ],
  benefits: [
    "Benefit 1",
    "Benefit 2",
  ],
}
```

**Pages that use this:**
- `/careers` - Careers page with job listings

---

### 3. Team Members (`teamMembers`)

**Location:** `/config/content.ts`

**Fields to Edit:**
- `id`: Unique team member ID
- `name`: Full name
- `role`: Job title/position
- `image`: Profile photo URL
- `bio`: Short biography

**Example:**
```javascript
{
  id: 1,
  name: "John Doe",
  role: "Founder & CEO",
  image: "https://images.unsplash.com/...",
  bio: "10+ years of experience in...",
}
```

**Pages that use this:**
- `/careers` - Team section

---

### 4. Services (`services`)

**Location:** `/config/content.ts`

**Fields to Edit:**
- `id`: Unique service ID
- `name`: Service name
- `description`: Service description
- `image`: Service image URL
- `features`: Array of feature bullets

**Example:**
```javascript
{
  id: 1,
  name: "Service Name",
  description: "Description of what this service does",
  image: "https://images.unsplash.com/...",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
}
```

**Pages that use this:**
- `/services` - Services listing
- `/` - Home page (services preview)

---

### 5. Company Info (`companyInfo`)

**Location:** `/config/content.ts`

**Fields to Edit:**
- `name`: Company name
- `tagline`: Company tagline/mission
- `description`: Company description
- `email`: Contact email
- `phone`: Contact phone number
- `location`: Office location
- `website`: Company website URL
- `socialLinks`: Social media links

**Example:**
```javascript
export const companyInfo = {
  name: "Your Company Name",
  tagline: "Your company tagline",
  description: "Company description",
  email: "hello@company.com",
  phone: "+XX X XXX XXXX",
  location: "City, Country",
  website: "https://website.com",
  socialLinks: {
    tiktok: "https://tiktok.com/@yourhandle",
    instagram: "https://instagram.com/yourhandle",
    youtube: "https://youtube.com/@yourhandle",
    linkedin: "https://linkedin.com/company/yourhandle",
  },
}
```

**Pages that use this:**
- Footer on all pages
- Contact page
- About page

---

## Image Management

### Using External Images
```javascript
image: "https://images.unsplash.com/photo-1234567890?w=800&h=600&fit=crop"
```

### Using Local Images

1. **Add images to `/public/images/` folder**
2. **Reference in content:**
   ```javascript
   image: "/images/your-image.jpg"
   ```

3. **Common image locations:**
   - `/public/images/blog/` - Blog article images
   - `/public/images/team/` - Team member photos
   - `/public/images/services/` - Service images
   - `/public/images/jobs/` - Job posting images

### Image Requirements

- **Blog articles:** 800x600px (landscape)
- **Team photos:** 400x400px (square)
- **Service images:** 400x300px
- **Job images:** 400x300px

---

## Page-by-Page Content Locations

### Home Page (`/`)
Uses:
- Company info
- Services preview (first 4 items from `services`)
- About content (from About page)
- Blog preview (first 3 items from `blogArticles`)
- Team members
- Client logos (edit in component)

**File:** `/app/page.tsx`

### About Page (`/about`)
Uses:
- Company info
- Team members
- Awards/Achievements (edit in component)

**File:** `/app/about/page.tsx`

### Services Page (`/services`)
Uses:
- All items from `services`
- Pricing tiers (edit in component)

**File:** `/app/services/page.tsx`

### Portfolio Page (`/portfolio`)
Uses:
- Portfolio projects (edit in component)

**File:** `/app/portfolio/page.tsx`

### Blog Page (`/blog`)
Uses:
- All items from `blogArticles`

**File:** `/app/blog/page.tsx`

### Pricing Page (`/pricing`)
Uses:
- Pricing plans (edit in component)

**File:** `/app/pricing/page.tsx`

### Contact Page (`/contact`)
Uses:
- Company info (email, phone, location)

**File:** `/app/contact/page.tsx`

### Careers Page (`/careers`)
Uses:
- All items from `jobOpenings`
- All items from `teamMembers`
- Core values (edit in component)
- Perks (edit in component)

**File:** `/app/careers/page.tsx`

---

## Editing Images in Components

Some pages have content defined in the component itself (not in `content.ts`). To edit:

1. Open the file listed
2. Search for the content you want to change
3. Update the values
4. Save

**Examples:**

**Portfolio projects** → `/app/portfolio/page.tsx`
```tsx
const portfolioProjects = [
  {
    title: "Project Name",
    image: "url-here",
    // ... other fields
  },
]
```

**Pricing plans** → `/app/pricing/page.tsx`
```tsx
const pricingPlans = [
  {
    name: "Plan Name",
    price: "$X,XXX",
    // ... other fields
  },
]
```

---

## Adding New Blog Articles

1. Open `/config/content.ts`
2. Find the `blogArticles` array
3. Add new object at the end:
   ```javascript
   {
     id: 6,
     title: "Your New Article Title",
     excerpt: "Short summary",
     image: "https://... or /images/...",
     category: "E-Commerce",
     author: "Author Name",
     date: "Mar 25, 2024",
     readTime: "10 min read",
     slug: "your-article-slug",
     content: `Your full article content here...`,
   }
   ```
4. Save the file
5. Article appears on blog page automatically

---

## Adding New Job Openings

1. Open `/config/content.ts`
2. Find the `jobOpenings` array
3. Add new object:
   ```javascript
   {
     id: 7,
     title: "New Position",
     department: "Department",
     location: "Location",
     type: "Full-Time",
     salary: "$X - $Y",
     description: "Description",
     image: "url",
     responsibilities: ["..."],
     requirements: ["..."],
     benefits: ["..."],
   }
   ```
4. Save and it appears on careers page

---

## Best Practices

### Content Writing
- Keep titles concise and descriptive
- Write excerpts in 1-2 sentences
- Use bullet points for lists
- Keep read times accurate (roughly 200 words = 1 min)

### Images
- Always provide alt text in filenames
- Use consistent style/quality
- Optimize for web (compress before upload)
- Test on mobile devices

### URLs/Slugs
- Use lowercase
- Use hyphens instead of spaces
- Make them descriptive
- Keep them short

### Dates
- Use consistent format: "Mar 25, 2024"
- Keep dates current

---

## Need Help?

- **Adding images:** See "Image Management" section
- **Creating new pages:** See CONTRIBUTING.md
- **Styling content:** Check component files and app/globals.css
- **Questions?** Email hello@sdsf.com or check README.md
