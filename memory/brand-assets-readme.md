# Brand Assets - Important Note

## Images to Replace

### 1. Founder Photo (`/app/frontend/public/founder.jpg`)
**Current Status:** Placeholder image
**Required:** Professional photograph of Vivekanand Garje
**Location in Design:** 
- Hero section (right side)
- About section
- Contact section

**Instructions:**
1. Replace `/app/frontend/public/founder.jpg` with the actual founder photograph
2. Recommended dimensions: 1200x1200px (square) for best display
3. Format: JPG or PNG
4. File size: Under 500KB for optimal loading

### 2. Logo (`/app/frontend/public/logo.svg`)
**Current Status:** SVG text-based temporary logo
**Required:** Design World official logo (provided by client)
**Instructions:**
1. Can use SVG, PNG, or JPG format
2. For PNG/JPG: Transparent background preferred
3. Recommended width: 400-600px
4. Replace `/app/frontend/public/logo.svg` with actual logo file
5. If using PNG/JPG instead of SVG, update references in:
   - `/app/frontend/src/components/Navbar.jsx`
   - `/app/frontend/src/components/Footer.jsx`

## How to Replace

### Option 1: Direct File Upload
```bash
# Upload your files to the public directory
cp your-founder-photo.jpg /app/frontend/public/founder.jpg
cp your-logo.svg /app/frontend/public/logo.svg
```

### Option 2: Via Development Environment
1. Navigate to `/app/frontend/public/`
2. Delete existing placeholder files
3. Upload your actual brand assets with the same filenames

## Color Palette from Logo
- Navy Blue: #001F54
- Red: #ED1C24  
- Cyan/Light Blue: #00A8E8
- White: #FFFFFF

These colors are already integrated throughout the website design.
