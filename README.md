# Palm Hills — Community App

A self-contained mobile PWA prototype for the Palm Hills community (gate passes,
units, announcements). It's a single static `index.html` that loads React and
transpiles its inline JSX in the browser via Babel standalone — no bundler or
backend required.

## Project layout

| File | Purpose |
| --- | --- |
| `index.html` | The entire app (inline JSX + styles). Entry point. |
| `manifest.webmanifest` | PWA manifest (installable / add-to-home-screen). |
| `assets/` | Brand images: logo + app icons (192/512/maskable/apple-touch). |
| `vercel.json` | Static hosting config (clean URLs + cache headers). |
| `ph-*.jsx` | Source copies of the inline app sections (reference only). |

## Deploy to Vercel

This is a static site — no build step is required.

**Dashboard:** import the repo, set **Framework Preset → Other**, leave the
Build Command empty and the Output Directory as the repo root. Deploy.

**CLI:**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Local preview

Any static file server works, e.g.:

```bash
npx serve .
# then open the printed URL
```
