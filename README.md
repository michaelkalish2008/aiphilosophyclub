# AI Philosophy Club

Modern minimalist portfolio website exploring the intersection of AI systems architecture and philosophy.

**Live Site:** [aiphilosophyclub.com](https://aiphilosophyclub.com)

## About

This website explores how architectural decisions in AI systems—from Transformer mechanisms to agentic workflows—embody philosophical principles about knowledge, reasoning, and intelligence.

## Features

- Modern dark minimalist design
- Dynamic content loading from text files
- SEO optimized with meta tags
- Responsive design for all devices
- Links to social media profiles (Substack, YouTube, LinkedIn, GitHub)

## Local Development

**Important:** Due to browser security restrictions on `file://` protocol, you must run a local web server to view the site properly.

### Start Local Server

```bash
cd /Users/michaelkalish/Documents/apc/website
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

The content will not load correctly if you open `index.html` directly from the file system.

## Content Management

All text content is stored in `/content/` directory:

- `tagline.txt` - Site tagline
- `about-me.txt` - About Me section
- `about-site.txt` - About This Site section

To update content, simply edit these text files and commit changes:

```bash
git add content/
git commit -m "Update content"
git push
```

## Deployment

This site is deployed via GitHub Pages:

- **Repository:** https://github.com/michaelkalish2008/aiphilosophyclub
- **GitHub Pages URL:** https://michaelkalish2008.github.io/aiphilosophyclub/
- **Custom Domain:** aiphilosophyclub.com

Changes pushed to the `main` branch automatically deploy within 1-2 minutes.

## Project Structure

```
website/
├── content/              # Text content files
│   ├── tagline.txt
│   ├── about-me.txt
│   └── about-site.txt
├── index.html           # Main HTML structure
├── styles.css           # Dark minimalist styling
├── script.js            # Content hydration logic
├── profile.jpg          # Profile picture
├── CNAME                # Custom domain configuration
└── README.md            # This file
```

## SEO

The site includes comprehensive SEO optimization:
- Meta description and keywords
- Open Graph tags for social media
- Twitter Card tags
- Canonical URL
- Semantic HTML structure
