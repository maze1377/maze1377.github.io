# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Deployment Commands
- To serve locally: Use a simple HTTP server like `python -m http.server` or `npx serve`
- To deploy: Push changes to the main branch (site is hosted on GitHub Pages)
- No build/lint/test commands as this is a static website

## Code Style Guidelines
- HTML: Use 2-space indentation, semantic tags, and proper nesting
- CSS: Follow the spacing system (2/4/8/12/16/24/32/48/64/80/96/128px)
- CSS: Follow the font size system (10/12/14/16/18/20/24/30/36/44/52/62/74/86/98px)
- CSS: Main color #12b886, Grey color #343a40
- File Structure: Keep assets in appropriate directories (css/, js/, img/, assert/)
- Responsive Design: Ensure site remains responsive on all devices
- Keep external dependencies minimal (only using Google Fonts and Analytics)
- Maintain clean and semantic HTML structure

## SEO Guidelines
- Use proper semantic HTML5 elements (header, main, footer, section, etc.)
- Add JSON-LD structured data for rich snippets
- Include canonical URL tags
- Use OpenGraph and Twitter Card meta tags with "property" not "name" attribute
- Provide descriptive alt text for images
- Optimize image loading with width, height, and loading="lazy" attributes
- Use proper heading hierarchy (h1-h6)
- Update sitemap.xml when adding new content
- Ensure mobile responsiveness with proper viewport settings
- Use preconnect for external resources
- Defer non-critical JavaScript
- Update robots.txt with proper directives