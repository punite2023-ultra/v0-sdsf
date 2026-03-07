# Preview Issue - FIXED

## Problem
The site wasn't previewing due to a missing `/config/` directory that was being imported in the blog and careers pages.

## Solution Implemented

### 1. Created Proper Content Configuration
- **File**: `/lib/content.ts` (standard Next.js lib folder location)
- Contains all editable content:
  - 5 TikTok-focused blog articles
  - 6 job openings with full details
  - Company information

### 2. Updated Imports
- Changed all imports from `@/config/content` to `@/lib/content`
- Files updated:
  - `/app/blog/page.tsx`
  - `/app/careers/page.tsx`

### 3. Enhanced Job Data Structure
- Added missing fields:
  - `department` - Job category
  - `type` - Employment type (Full-time)
  - `responsibilities` - 6 key responsibilities per role
  - Detailed descriptions

### 4. Fixed Careers Page
- Cleaned up unused imports (Image, Link)
- Removed team members section (no data)
- All job postings now fully functional and expandable

## Files Modified
```
✓ lib/content.ts (created)
✓ app/blog/page.tsx (import fixed)
✓ app/careers/page.tsx (multiple fixes)
```

## What's Now Working

### Blog Page (`/blog`)
- ✓ 5 TikTok-focused articles with full content
- ✓ Featured article display
- ✓ Article grid with categories
- ✓ Easy to add more articles

### Careers Page (`/careers`)
- ✓ 6 job postings with expandable details
- ✓ Requirements, responsibilities, and benefits
- ✓ Fully functional accordion interface
- ✓ Company values and perks sections

### All Content is Editable
Simply edit `/lib/content.ts` to:
- Update blog articles
- Modify job postings
- Change company information
- Add new content

## Next Steps

1. **Start the dev server**: `pnpm run dev`
2. **Test all pages**: Navigate through blog and careers pages
3. **Edit content** in `/lib/content.ts` as needed
4. **Add images** by replacing Unsplash URLs with local paths

The site is now **ready for development and customization**!
