# Customization Checklist

Use this checklist to systematically customize every part of the website with your own content.

## 🏢 Company Information

- [ ] Company Name (Replace "Aurelia")
- [ ] Company Logo/Symbol (Update letter "A" in logo)
- [ ] Tagline/Slogan (Replace "Award-Winning Digital Agency")
- [ ] Company Email (Replace `hello@aurelia.com`)
- [ ] Company Phone (Replace `+1 (555) 123-4567`)
- [ ] Company Address (Replace `San Francisco, CA 94105`)
- [ ] Company Mission (Update in About page)
- [ ] Company Vision (Update in About page)
- [ ] Company Values (Update 4 values in About page)

**Files to Edit:**
- `/components/navigation.tsx` - Logo and company name
- `/app/layout.tsx` - Metadata title
- `/components/site-footer.tsx` - Company info and contact
- `/app/about/page.tsx` - Mission, vision, values

---

## 📸 Images to Replace

### Hero Images
- [ ] Home page hero image (Shows team working)
- [ ] Hero section floating images (Fast Delivery, Expert Team)

**File:** `/components/home/hero-section.tsx`

### About Page
- [ ] Main team photo (Large image showing team at work)
- [ ] Team member photos (6 team members with roles)

**File:** `/app/about/page.tsx`

### Services Preview
- [ ] All service category images or icons
- [ ] Service preview images (if needed)

**File:** `/components/home/services-preview.tsx`

### Portfolio
- [ ] 6 project showcase images
- [ ] Project thumbnail images

**File:** `/app/portfolio/page.tsx`

### Blog
- [ ] Featured blog post image
- [ ] 5 additional blog post images

**File:** `/app/blog/page.tsx`

---

## 📝 Text Content to Replace

### Navigation & Headers
- [ ] All page titles in metadata
- [ ] All page descriptions
- [ ] Navigation link labels (if different)

### Home Page
- [ ] Hero headline
- [ ] Hero subheading
- [ ] Hero CTA text
- [ ] Stats labels and values (250+ Projects, 98% Satisfaction, etc.)
- [ ] Services section title and description
- [ ] All 6 service titles and descriptions

**File:** `/app/page.tsx` and `/components/home/*`

### Services Page
- [ ] Page title and description
- [ ] All 6 service titles and descriptions
- [ ] Service features (update feature lists)
- [ ] Process step titles and descriptions

**File:** `/app/services/page.tsx`

### Portfolio Page
- [ ] Page title and description
- [ ] All 6 project titles
- [ ] All project descriptions
- [ ] Project categories
- [ ] Project tags
- [ ] Project results/metrics

**File:** `/app/portfolio/page.tsx`

### Pricing Page
- [ ] Page title and description
- [ ] Pricing plan names (Starter, Professional, Enterprise)
- [ ] Plan prices and billing period
- [ ] Plan descriptions
- [ ] Feature lists for each plan
- [ ] Add-ons and their prices
- [ ] FAQ questions and answers

**File:** `/app/pricing/page.tsx`

### Blog Page
- [ ] Page title and description
- [ ] 6 blog post titles
- [ ] Blog post excerpts
- [ ] Author names
- [ ] Blog post dates
- [ ] Blog post categories

**File:** `/app/blog/page.tsx`

### About Page
- [ ] Company story text
- [ ] Team member names, roles, and bios
- [ ] Company milestones and descriptions
- [ ] Company values descriptions

**File:** `/app/about/page.tsx`

### Contact Page
- [ ] Page title and description
- [ ] Form placeholder text
- [ ] FAQ questions and answers
- [ ] Contact success message (if custom needed)

**File:** `/app/contact/page.tsx`

---

## 🎨 Design Customization

### Colors
- [ ] Review primary color (currently teal)
- [ ] Review background color
- [ ] Review accent colors
- [ ] Test dark mode appearance

**File:** `/app/globals.css` (CSS variables in :root section)

### Fonts
- [ ] Change heading font (currently Playfair Display)
- [ ] Change body font (currently DM Sans)
- [ ] Adjust font sizes if needed

**File:** `/app/layout.tsx` (Font imports)

### Animations
- [ ] Review animation speeds
- [ ] Adjust animation delays if needed
- [ ] Add custom animations

**File:** `/app/globals.css` (Animation keyframes)

---

## 🔗 Links & URLs

### Navigation Links
- [ ] Update "/about" link
- [ ] Update "/services" link
- [ ] Update "/portfolio" link
- [ ] Update "/pricing" link
- [ ] Update "/blog" link
- [ ] Update "/contact" link

**File:** `/components/navigation.tsx`

### Social Media Links
- [ ] Facebook URL
- [ ] Twitter URL
- [ ] Instagram URL
- [ ] LinkedIn URL

**File:** `/components/site-footer.tsx`

### Footer Links
- [ ] About Us link
- [ ] Services links
- [ ] Portfolio link
- [ ] Pricing link
- [ ] Blog link
- [ ] Contact link
- [ ] Privacy Policy link (create if needed)
- [ ] Terms of Service link (create if needed)

**File:** `/components/site-footer.tsx`

---

## 🛠️ Functional Setup

### Contact Form
- [ ] Connect to email service (Emailjs, SendGrid, etc.)
- [ ] Test form submission
- [ ] Update success message
- [ ] Setup email notifications

**File:** `/app/contact/page.tsx`

### Newsletter Signup
- [ ] Connect to newsletter service (Mailchimp, Substack, etc.)
- [ ] Update form action
- [ ] Test subscription

**File:** `/app/blog/page.tsx`

### Analytics
- [ ] Setup Google Analytics (or your preferred tool)
- [ ] Setup Vercel Analytics (already imported in layout)
- [ ] Track key pages and events

**Files:** `/app/layout.tsx`

### SEO
- [ ] Update metadata titles for all pages
- [ ] Update metadata descriptions for all pages
- [ ] Add og:image tags (open graph)
- [ ] Add canonical URLs
- [ ] Setup sitemap.xml
- [ ] Setup robots.txt

**Files:** All `page.tsx` files

---

## 📋 Content Arrays to Update

### Services Array
**File:** `/app/services/page.tsx`
```
- Title
- Description
- Features (4 items)
- Color gradient
- Icon (optional)
```

### Projects Array
**File:** `/app/portfolio/page.tsx`
```
- Title
- Category
- Description
- Image URL
- Tags
- Year
- Results (3 items)
```

### Blog Posts Array
**File:** `/app/blog/page.tsx`
```
- Title
- Excerpt
- Image URL
- Category
- Author
- Date
- Read time
- Slug
```

### Team Members Array
**File:** `/app/about/page.tsx`
```
- Name
- Role
- Image URL
- Bio
```

### Pricing Plans Array
**File:** `/app/pricing/page.tsx`
```
- Name
- Description
- Price
- Features list
- Not included list
```

---

## ✅ Final Checks

- [ ] All placeholder images replaced
- [ ] All placeholder text replaced
- [ ] Company branding applied
- [ ] All links working
- [ ] Contact form functional
- [ ] Mobile responsive (test on multiple devices)
- [ ] Dark mode tested
- [ ] Forms submitted successfully
- [ ] No console errors
- [ ] Page load times acceptable
- [ ] SEO metadata complete
- [ ] Analytics tracking setup
- [ ] Ready for launch!

---

## 📞 Common Customizations

### Adding a New Service
1. Go to `/app/services/page.tsx`
2. Add new service object to `services` array
3. Add icon import from `lucide-react`
4. Update the mapping section if needed

### Adding a Portfolio Project
1. Go to `/app/portfolio/page.tsx`
2. Add new project object to `projects` array
3. Add image URL
4. Add project details and results

### Adding a Blog Post
1. Go to `/app/blog/page.tsx`
2. Add new post object to `blogPosts` array
3. Create `/app/blog/[slug]/page.tsx` for individual post view
4. Add featured image

### Adding a Team Member
1. Go to `/app/about/page.tsx`
2. Add new member object to `team` array
3. Update image URL
4. Add bio and role

### Changing Colors
1. Go to `/app/globals.css`
2. Find `:root` section
3. Update CSS variable values (use oklch format)
4. Dark mode colors are in `.dark` section

---

Good luck customizing your site! Refer back to `SETUP_GUIDE.md` for more detailed information about any section.
