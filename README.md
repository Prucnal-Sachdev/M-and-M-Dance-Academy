# M & M Dance Academy — homepage preview

A speculative rebuild of the homepage for M & M Dance Academy (Monroeville, PA), built by
Prucnal & Sachdev. Not commissioned; built to show what the site could be.

- **Preview:** https://prucnalj.github.io/M-and-M-Dance-Academy/ (built `noindex`, so it
  never competes with their live site in search)
- **Their current site:** https://www.mmdanceacademy.com
- **Open questions:** [CONTENT-NEEDED.md](CONTENT-NEEDED.md)

## What this fixes

Verified on their live site on 2026-09-05:

1. Their homepage carousel shows **"Slide title / Write your caption here / Button"
   sixteen times**, as visible page text.
2. **No copyright year anywhere** on the site. Here it is computed at build time.
3. **Eight deprecated `<font>` tags**.

Their `<title>` is good and was left conceptually alone — this is not an SEO rescue.

## The real gap

No class schedule and no prices are published anywhere on their current site, and
registration is not an online form. The preview is honest about that rather than
inventing a schedule: it tells a parent to email or call for placement. A published
schedule and an online registration form are the two things that would actually change
how the studio runs.

## Brand

Their logo is a red plate with white artwork, so the header bar is set to exactly that
red (`#d44848`) and the logo's own rectangle disappears into it. The pink (`#ffb4c8`) is
the circle behind the dancer in the logo.

## Stack

Astro, static output, no client framework, no webfonts, no JavaScript on the page. One
HTML document plus one stylesheet.

## Local development

```bash
npm install
npm run dev
```

Building the way the preview builds — note `MSYS_NO_PATHCONV=1`, without which Git Bash
rewrites `BASE_PATH` into a Windows path and every URL in the output is silently wrong:

```bash
MSYS_NO_PATHCONV=1 SITE_URL=https://prucnalj.github.io BASE_PATH=/M-and-M-Dance-Academy \
  PUBLIC_NOINDEX=1 npm run build
```
