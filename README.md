# High Signal Coaching — Website

Landing page for [High Signal Coaching](https://highsignalcoaching.com).

## Stack
Plain HTML/CSS — no build step required. GitHub Pages serves directly.

## Local preview
Open `index.html` in any browser, or run:
```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment
Push to `main` branch. GitHub Pages is configured to serve from root (`/`).

## Key files
| File | Purpose |
|---|---|
| `index.html` | Full single-page site |
| `thank-you.html` | Post-contact confirmation |
| `favicon.svg` | SVG favicon (signal-bar monogram) |
| `sitemap.xml` | XML sitemap for SEO |
| `robots.txt` | Crawler instructions |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |

## Before launching — update these placeholders
- [ ] CTA links: replace `#cta` / `mailto:` with your Calendly URL
- [ ] Email: replace `hello@highsignalcoaching.com` with real address
- [ ] Headshot: replace `[Headshot coming soon]` block with `<img>` tag
- [ ] Analytics: uncomment and configure GA4 or Plausible in `<head>`
- [ ] OG image: add `og-image.png` (1200×630px) to root
- [ ] Credentials: update credential tags in the About section
- [ ] `sitemap.xml` + `robots.txt`: update domain once custom domain is live
- [ ] `canonical` URLs: update to final domain
