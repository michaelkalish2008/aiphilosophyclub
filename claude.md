# AI Philosophy Club - Development Guide

This document provides technical context for working on the AI Philosophy Club website.

## Project Overview

**Purpose:** Portfolio website exploring the intersection of AI systems architecture and philosophy
**Tech Stack:** HTML, CSS, JavaScript (vanilla)
**Hosting:** GitHub Pages with custom domain (aiphilosophyclub.com)
**Repository:** https://github.com/michaelkalish2008/aiphilosophyclub

## Architecture Decisions

### Content Separation Pattern

The site uses a **content hydration pattern** to separate content from structure:

- **Content Files:** Plain text files in `/content/` directory
- **Hydration Script:** `script.js` fetches and injects content via `fetch()` API
- **Benefits:** Non-technical content updates, cleaner HTML, modular architecture

### Why This Matters for Local Development

⚠️ **Critical:** The `fetch()` API is restricted under the `file://` protocol for security reasons.

**This means:**
- Opening `index.html` directly → Content shows "Loading..." (fetch fails)
- Running via HTTP server → Content loads properly (fetch succeeds)

**Always use:**
```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

## File Structure

```
website/
├── content/
│   ├── tagline.txt       # Header tagline
│   ├── about-me.txt      # Bio paragraph
│   └── about-site.txt    # Site description
├── index.html            # Structure with SEO meta tags
├── styles.css            # Dark minimalist design
├── script.js             # Content hydration
├── profile.jpg           # Profile image
├── CNAME                 # GitHub Pages custom domain
├── README.md             # User-facing documentation
└── claude.md             # This file (dev documentation)
```

## Design System

### Color Variables (CSS)
```css
--primary-dark: #0a0a0a    /* Main background */
--secondary-dark: #1a1a1a  /* Card backgrounds */
--accent: #3b82f6          /* Blue accent */
--text-primary: #f5f5f5    /* Headings */
--text-secondary: #a3a3a3  /* Body text */
--border: #2a2a2a          /* Subtle borders */
```

### Typography
- Font: Inter (with system font fallbacks)
- Antialiased rendering
- Tight letter-spacing on headings
- Generous line-height (1.8) for readability

### Spacing
- Sections: 64px margins
- Header: 80px bottom margin
- Responsive: Reduced to 48-60px on mobile

## Content Management

### Updating Content

1. Edit files in `/content/` directory
2. Commit and push to GitHub
3. GitHub Pages auto-deploys within 1-2 minutes

**Example:**
```bash
vim content/about-me.txt
git add content/about-me.txt
git commit -m "Update bio"
git push
```

### Content Format

- **Single paragraphs:** Just write the text
- **Multiple paragraphs:** Separate with double newlines (`\n\n`)
- Script auto-wraps paragraphs in `<p>` tags

## SEO Optimization

The site includes comprehensive SEO:

- **Title:** "AI Philosophy Club - Michael Kalish | AI Systems Architecture & Philosophy"
- **Meta Description:** Focus keywords (Transformer, RAG, agentic AI)
- **Open Graph:** Social media preview cards
- **Twitter Cards:** Optimized for Twitter shares
- **Canonical URL:** https://aiphilosophyclub.com/
- **Semantic HTML:** Proper heading hierarchy, alt text

## Deployment

### GitHub Pages Configuration

- Source: `main` branch, root directory
- Custom domain: aiphilosophyclub.com (via CNAME file)
- HTTPS: Enforced automatically
- Build: Static site, no build process

### DNS Configuration (Squarespace)

**A Records (apex domain):**
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

**CNAME Record (www):**
```
www → michaelkalish2008.github.io
```

## Common Tasks

### Adding New Content Section

1. Create new content file: `content/new-section.txt`
2. Update `script.js`:
   ```javascript
   loadContent('new-section.txt', 'new-section-content')
   ```
3. Update `index.html`:
   ```html
   <section>
     <h2>New Section</h2>
     <div id="new-section-content"><p>Loading...</p></div>
   </section>
   ```

### Updating Profile Photo

1. Replace `profile.jpg` (optimized for 120x120px display)
2. Current styling: `object-fit: cover`, `object-position: center top`
3. Commit and push

### Styling Changes

Edit `styles.css` directly. Key principles:
- Use CSS variables for colors
- Mobile-first responsive design
- Subtle transitions (0.2s cubic-bezier)
- Maintain dark minimalist aesthetic

## Troubleshooting

**Problem:** Content shows "Loading..."
**Solution:** Run via HTTP server, not `file://` protocol

**Problem:** Photo crops incorrectly
**Solution:** Adjust `object-position` in `.profile-pic` CSS

**Problem:** Changes not showing on live site
**Solution:** Wait 1-2 minutes for GitHub Pages deploy, hard refresh browser

## Philosophy & Focus

This site explores:
- Transformer architecture and attention mechanisms
- RAG (Retrieval-Augmented Generation) systems
- Agentic AI workflows
- How architectural decisions embody epistemological principles
- The philosophy of intelligence in ML systems

Keep content focused on the **technical-philosophical intersection**, not generic AI ethics or futurism.
