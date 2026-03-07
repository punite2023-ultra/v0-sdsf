# Contributing to SDSF

Thank you for your interest in contributing to SDSF! This document provides guidelines for getting started.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/sdsf.git
   ```
3. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Run linting
pnpm run lint
```

## Content Updates

### Adding Blog Articles

All blog content is managed in `/config/content.ts`. To add a new article:

1. Open `/config/content.ts`
2. Add a new object to the `blogArticles` array with:
   - `id`: Unique identifier
   - `title`: Article title
   - `excerpt`: Short summary
   - `image`: Image URL or local path `/images/article-name.jpg`
   - `category`: Article category
   - `author`: Author name
   - `date`: Publication date
   - `readTime`: Estimated read time
   - `slug`: URL-friendly slug
   - `content`: Full article content (markdown-like format)

### Adding Job Openings

To add a new job opening:

1. Open `/config/content.ts`
2. Add a new object to the `jobOpenings` array with all required fields
3. Update team members if adding new hires

### Updating Images

Images should be:
- Stored in `/public/images/` for local assets
- Or use external URLs from reliable sources
- Never commit large binary files directly

**Recommended approach:**
- Use placeholder URLs from Unsplash during development
- Replace with your own images before deployment
- Store images in `/public/images/` for production

## Component Guidelines

### Creating New Pages

1. Create file in appropriate directory under `/app/`
2. Use the existing layout:
   ```tsx
   import { Navigation } from "@/components/navigation"
   import { SiteFooter } from "@/components/site-footer"
   import { ScrollReveal } from "@/components/scroll-reveal"

   export const metadata = {
     title: "Page Title | SDSF",
     description: "Page description",
   }

   export default function PageName() {
     return (
       <>
         <Navigation />
         <main>
           {/* Page content */}
         </main>
         <SiteFooter />
       </>
     )
   }
   ```

3. Use `ScrollReveal` component for animations
4. Follow existing styling patterns

### Styling

- Use Tailwind CSS classes
- Follow the design tokens in `app/globals.css`
- Maintain consistency with existing components
- Use semantic colors: `text-primary`, `bg-card`, etc.

## Code Standards

### TypeScript
- Use strict typing
- Export types from components
- Avoid `any` type

### React
- Use functional components
- Follow Next.js App Router patterns
- Implement proper error handling
- Add proper loading states

### Naming Conventions
- camelCase for variables and functions
- PascalCase for React components
- kebab-case for file names (except components)

## Git Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/feature-description
   ```

2. **Make your changes** and commit regularly:
   ```bash
   git commit -m "Brief description of changes"
   ```

3. **Push to your fork:**
   ```bash
   git push origin feature/feature-description
   ```

4. **Create a Pull Request** with:
   - Clear title describing the changes
   - Description of what and why
   - Screenshots if UI changes
   - Checklist of changes made

## Pull Request Checklist

- [ ] Changes follow code standards
- [ ] No breaking changes
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No console errors
- [ ] Responsive design verified

## Reporting Issues

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos if applicable
- Browser/device information

## Questions?

- Check existing documentation in `/README.md` and `/SETUP_GUIDE.md`
- Open an issue for questions
- Contact the team at hello@sdsf.com

Thank you for contributing!
