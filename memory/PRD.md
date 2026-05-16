# SunoDistro AI — Cinematic Music-Tech Marketing Site

## Original Problem Statement
Build a world-class cinematic futuristic music-tech platform website for SunoDistro AI (sunodistro.ai). Apple-level polish, Spotify-level immersion, ElevenLabs-level AI sophistication. Pure black (#050505) with electric blue / deep purple / cyan accents. Sections: Hero, AI Music Generator, AI Lyrics Generator, AI Studio (vocals/stems/mastering), Distribution, Features grid (12 cards), Creator Dashboard, Pricing (Ultimate highlighted), Testimonials, Final CTA, Footer.

## Architecture
- **Frontend only** — React 19 + Tailwind + Framer Motion + Recharts + react-icons + lucide-react
- **No backend changes** — visual-only marketing showcase
- **All CTAs link externally** to:
  - https://release.sunodistro.com/ (plan selection, distribute)
  - https://release.sunodistro.com/auth/register (Start Creating, Start Free)
  - https://release.sunodistro.com/auth/login (Log in)

## User Personas
- **Independent artist** — needs distribution + AI music tools
- **Bedroom producer** — needs mastering + stem extraction
- **Lyricist / songwriter** — needs AI lyrics co-writing
- **Pro creator** — needs analytics + royalty tracking + Ultimate plan

## Core Requirements
- Pure black cinematic dark theme (no neon cyberpunk, no random gradients)
- Outfit (headings) + Manrope (body) typography
- 60fps Canvas waveforms + Framer Motion entrances
- Mobile responsive
- All CTAs route to release.sunodistro.com auth/plan URLs

## What's Been Implemented (2026-02)
- [x] Cinematic Hero — animated canvas waveforms, rotating music orb, gradient ring, floating chips
- [x] Logos marquee — Spotify, Apple Music, YouTube Music, TikTok, Instagram, Amazon, SoundCloud, Tidal, Deezer
- [x] AI Music Generator mock — prompt, genre chips (Pop/Rap/Bollywood/Punjabi/EDM/Lo-fi/Rock/R&B), mood, tempo slider, live waveform
- [x] AI Lyrics Generator — split editor with live typewriter for verse/hook, structure panel
- [x] AI Studio — hero image with animated EQ bars, mixer/mastering chips, stem extraction & mastering split cards
- [x] Distribution — global map BG, release pipeline (Upload → Live), 10 platform tiles
- [x] Features grid — 12 cards (Music Gen, Lyrics, Studio, Artwork, Stems, Mastering, Distribution, Artist Channel, Royalty, Analytics, UPC/ISRC, Instagram)
- [x] Creator Dashboard mock — KPIs, platform split bars, streams Area chart, earnings Bar chart, releases list (Recharts)
- [x] Pricing — Starter / Artist / Ultimate (highlighted with cyan glow)
- [x] Testimonials — 3 creator quotes with avatars + growth stats
- [x] Final CTA — waveform background, dual CTAs
- [x] Footer — logo, 3 link columns, social icons, copyright
- [x] All `data-testid` attributes added
- [x] External CTAs wired to release.sunodistro.com URLs

## Prioritized Backlog
### P1
- Add subtle audio preview on Generator (mute-by-default ambient loop)
- Lightbox modal that explains "How distribution works" with timeline
- Hindi/regional language toggle in hero (Bollywood/Punjabi audience)

### P2
- Real auth integration with release.sunodistro.com SSO
- Live API for streaming stats on dashboard mock
- Cookie consent + GDPR banner
- SEO meta tags + OpenGraph image
- Sitemap.xml & robots.txt

## Next Tasks
- Optionally hook into real `release.sunodistro.com` auth via SSO
- Add SEO meta tags and OpenGraph for social sharing
- Lighthouse audit and performance pass
