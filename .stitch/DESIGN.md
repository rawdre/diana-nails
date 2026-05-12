# Design System: Diana Alves Raw — Manicure & Pedicure

**Live site:** https://rawdre.github.io/diana-nails/
**Stack:** Static HTML + CSS + vanilla JS (single `index.html`)
**Deploy:** GitHub Pages

> This document is the single source of truth for any new Stitch screen, Figma file, or extension to the site. Paste relevant sections at the top of any Stitch prompt to keep generation consistent with the existing aesthetic.

---

## 1. Visual Theme & Atmosphere

A quiet-luxury, editorial atmosphere — the feeling of a small private studio rather than a chain. Confident asymmetric layouts, generous whitespace, and a single full-bleed photographic moment in the hero. Restraint with one signature flourish per section: aurora glow in the hero, hairline animation on the services list, a slow italic marquee between sections, 3D tilt on the portfolio cards. The result reads as *intimate*, *attentive*, and *unhurried* — never aggressive, never decorative for its own sake.

**Atmosphere ratings**
- **Density:** 4 (Daily App Balanced, leaning airy)
- **Variance:** 7 (Offset Asymmetric — text-on-left hero, hairline list, dark band, horizontal portfolio)
- **Motion:** 6 (Fluid CSS — slow drifts, scroll-linked parallax, infinite micro-loops, no cinematic choreography)
- **Creativity:** 8 (the inline italic emphasis on *Raw*, the marquee, the aurora, the hairline expansions)

---

## 2. Color Palette & Roles

All values are absolute and locked. Never substitute a "close" shade — use the exact hex.

### Surfaces (warm neutrals)
- **Cream Ivory** `#faf6f1` — Primary background canvas. The site's resting color.
- **Warm Sand** `#f0e9df` — Secondary surface, booking section, soft fills.
- **Pure Surface** `#ffffff` — PIX card, form fields, lifted moments only.

### Ink (text & dark surfaces)
- **Aubergine Ink** `#221a1c` — Primary text, dark band, footer. Used instead of pure black.
- **Plum Steel** `#5a4e51` — Secondary text, descriptions, body copy variations.
- **Dusk Mauve** `#948589` — Tertiary text, eyebrow labels, hairline meta.

### Accents
- **Wine Rose** `#8e5664` — **Primary accent.** CTA hover, focus rings, hairline expansions, copy emphasis on dark surfaces. Saturation ~38% (safely below 80%).
- **Powder Rose** `#b87a8a` — Soft variant. Used for ambient aurora glow and subtle washes only — never as a CTA fill.
- **Honeyed Brass** `#b8956a` — **Textural accent (not a second primary).** Used exclusively in the package band (gold-leaf price treatment) and as the marquee sparkle (`✦`). Never a CTA color, never on form controls.
- **Champagne Sand** `#d9c4a5` — Lighter brass for the package eyebrow + the "R$ 220" price digits.

### Functional
- **Hairline** `rgba(34, 26, 28, 0.12)` — 1px section dividers, service-row underlines.
- **Hairline Soft** `rgba(34, 26, 28, 0.06)` — Quieter still, used sparingly.
- **WhatsApp Brand Green** `#25D366` — Only on the floating WhatsApp FAB. Not part of the design language; brand-licensed only.

### Rules
- Max one primary accent (Wine Rose). Honeyed Brass is a *textural detail*, not a second primary.
- No pure black. Aubergine Ink is the darkest value on site.
- No neon, no glow shadows except the WhatsApp FAB pulse (brand-required).
- Aurora gradients in hero are screen-blended at low opacity — they tint, they don't dominate.

---

## 3. Typography Rules

### Stack
- **Display / Headlines:** `Fraunces` — variable serif, weights 300 / 400 / 500 / 600 / italic 300-500. Loaded from Google Fonts. Use weight 300 for hero (visual restraint at large size) and 400 for section titles.
- **Body:** `Satoshi` — modern grotesk, weights 300 / 400 / 500 / 600 / 700. Loaded from Fontshare (`api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700`). Distinctive character, friendlier than Geist, clear at small sizes. Default body weight 400, eyebrow labels 500.

### Hierarchy
- **Hero name:** `clamp(3.4rem, 11vw, 7.2rem)`, weight 300, letter-spacing -2px, line-height 0.95. Word-by-word reveal on load.
- **Section title:** `clamp(2.2rem, 5.6vw, 3.8rem)`, weight 300, letter-spacing -1px, line-height 1.05.
- **Eyebrow label:** `0.72-0.74rem`, letter-spacing 4-5px, `text-transform: uppercase`, Dusk Mauve.
- **Lead / italic subhead:** Fraunces italic 300, `clamp(1.05rem, 2.2vw, 1.3rem)`, color Plum Steel.
- **Body:** Inter 400, 1rem, line-height 1.5.
- **Service name:** Fraunces 400, `clamp(1.5rem, 3.6vw, 2.3rem)`.
- **Service price:** Fraunces 400, `clamp(1.3rem, 2.6vw, 1.7rem)`.

### Italics as signature
Italicize **single emphasis words** — never whole sentences. Examples in current site:
- "Diana Alves *Raw*" (hero)
- "Cuidado *profissional*, do começo ao fim" (services)
- "Quatro *visitas*, um ritual" (package)
- "Vamos *conversar*" (contact)

This italic emphasis is the brand's typographic signature. Use sparingly — at most one italicized word per section title.

### Banned
- ❌ All-caps headlines longer than a short label
- ❌ Inter for premium contexts (currently in violation — see audit)
- ❌ Generic serifs (Times, Georgia, Garamond, Palatino) — Fraunces only
- ❌ More than two typefaces on the page

---

## 4. Component Stylings

### Buttons
- **Primary CTA (light surfaces):** White fill with Aubergine Ink text, rounded full pill (`border-radius: 100px`), 18px / 36px padding, letter-spacing 1.2px. Hover → Wine Rose fill with white text, lift 2px, soft rose shadow. Tactile only — no neon, no glow.
- **Primary CTA (dark surfaces):** Wine Rose fill, white text. Same hover treatment.
- **Ghost / secondary:** Transparent with 1px Hairline border, Plum Steel text. Hover deepens to Aubergine Ink border + Aubergine Ink text.
- **Marker button (package CTA):** Outlined ghost on dark, becomes Honeyed Brass fill on hover. Only used once per page.

### Cards
- **Portfolio cards only.** Cards are reserved for content showcases (manicure work photos).
- Aspect ratio 3:4, no border-radius, subtle shadow (1px 2px rgba(0,0,0,0.04)). On hover: 3D tilt (8°/10° max), shadow blooms (30px 60px -20px Aubergine Ink @ 35%), image scales 1.06×, radial glare follows cursor.
- **No card treatment anywhere else.** Services use a hairline list. Contact uses hairline rows. Package uses a full-bleed dark band — not a card.

### Lists (replacing the usual card pattern)
The **services section** is the canonical pattern: numbered hairline rows (`auto 1fr auto` grid), thin top and bottom borders, 1px Wine Rose underline that expands left-to-right on hover/selection (`scaleX` width tween, 0.55s cubic-bezier(0.2, 0.6, 0.2, 1)). Row padding shifts +18px left on selection (motion as feedback). Replace any "3 equal feature cards" temptation with this list.

### Inputs (booking form)
- Label above input. Bare 1px hairline bottom border. No rounded box, no fill.
- Font matches body, font-size 1.1rem.
- Focus: bottom border becomes Wine Rose.
- Choice buttons (date/time): 1px hairline border, white fill, padding 14px 8px. Selected state: Aubergine Ink fill with white text. Day-of-week eyebrow in caps, day number in Fraunces.

### PIX / confirmation surfaces
- Pure Surface (white) cards for value moments only: the PIX key display, the deposit summary.
- Wine Rose for the deposit price callout (Fraunces 300, large).
- Honeyed Brass 2px left-border on policy/warning blocks.

### Floating WhatsApp button
- 60×60 circle, brand green `#25D366`, white WhatsApp glyph. Bottom-right fixed.
- Soft drop shadow (10px 28px green @ 38%, 2px 6px black @ 12%).
- Pulse ring `::after` (1px green @ 50%, 2.4s ease-out infinite).
- Entrance fade-in + scale-up at 1.2s after load. Hover scales to 1.08.
- This is the **only** "always visible" CTA. No sticky bar duplicates it.

---

## 5. Layout Principles

### Page container
- Each `<section>` uses `padding: clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)`. Never invent new vertical rhythm.
- Inner content uses `max-width: 1200px; margin: 0 auto` for grid sections, `max-width: 720px` for forms and copy-heavy moments.

### Asymmetry as rule
- **Hero is left-aligned, full-bleed.** Centered hero is banned at this variance level.
- **Package is a 2-column split** (image + text), reverses to stacked on mobile with image first.
- **Services is a single-column hairline list** — not a 3-card grid.
- **Portfolio is horizontal snap-scroll**, not a 2-row grid. Drag-to-scroll on desktop.
- **Contact is a 1.1fr / 1fr split** with the lead text on the left, structured rows on the right.

### Grid > flexbox
- All multi-column layouts use CSS Grid. Never `calc(50% - 12px)` math.
- Mobile collapse is unconditional at 760px (or 820px for the package and 560px for fine layouts).

### Spacing scale
- Section vertical rhythm uses the section padding clamp above.
- Inside sections: `gap: clamp(12px, 1.6vw, 20px)` for tight grids, `gap: clamp(40px, 8vw, 100px)` for major splits.
- Service-row vertical padding: 36px on desktop, 28px on mobile.

### Full-height sections
- Hero uses `min-height: 100svh` — never `100vh`.
- All other sections size to content; no forced fold lines.

---

## 6. Motion & Interaction

### Easing
- **Primary:** `cubic-bezier(0.2, 0.6, 0.2, 1)` — fluid, restrained, no overshoot. Used for fades, lifts, hairline expansions.
- **Slow entrance:** `cubic-bezier(0.16, 0.6, 0.2, 1)` for the hero image zoom.
- **Word reveal:** `cubic-bezier(0.22, 0.7, 0.18, 1)` for the hero name word-by-word lift.

### Durations
- Micro-interactions (hover, focus): 250-400ms.
- Section reveals (IntersectionObserver `.reveal.in`): 900ms.
- Hero entrance: 1.1-1.8s.
- Infinite ambient loops: aurora drift 22-28s, marquee 38s, FAB pulse 2.4s.

### The four signature motions
1. **Hero image zoom** — scales `1.06 → 1` over 1.8s on load.
2. **Word-by-word name lift** — each word `translateY(115% → 0)`, staggered 160ms.
3. **Aurora drift** — two screen-blended radial blobs (Powder Rose + Honeyed Brass) drift in opposite directions on infinite alternation.
4. **Marquee ticker** — Fraunces italic service names + brand name scroll continuously left, with `::before` / `::after` ink fades at the edges so items dissolve in and out cleanly.

### Performance rules
- Animate only `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`.
- Grain noise sits on a `position: fixed` overlay at 5% opacity, `mix-blend-mode: overlay`. Never animated.
- Aurora gradients use `filter: blur(90px)` once on layout — animation only transforms position/scale.

### `prefers-reduced-motion`
Honored. A `@media (prefers-reduced-motion: reduce)` block at the end of `index.html`'s `<style>` disables: hero image zoom, aurora drift, the eyebrow/tagline/CTA entrance fades, the word-by-word name rise, the marquee scroll, the FAB pulse and entrance, and the IntersectionObserver reveals. Hover transitions on buttons and service rows are preserved so the UI doesn't feel dead.

---

## 7. Imagery

### Placement
- **Hero:** full-bleed background image, gradient overlay 115° (Aubergine Ink 85% → 50% → 18%) so left side stays dark enough for white text contrast.
- **Package:** rectangular image in the right column of the split, no border-radius, slight darkening overlay.
- **Portfolio cards:** 3:4 aspect, single image per card, caption overlay at bottom with vertical gradient.

### Source & quality
- **Current:** Unsplash placeholders pending real photos from `@biaalmeidadf`.
- **Target:** Real photos from the salon — natural light, close-up hands, no embedded text or branding in the image, calm tonal areas for any overlay text.
- **Banned:** stock with embedded UI, fake before/after composites, blurred backgrounds with no subject.

### Aspect ratios used
- Hero: window-sized (`100svh × 100vw`)
- Package image: `~16:11` (height clamped to `clamp(340px, 56vh, 520px)`)
- Portfolio cards: `3:4`
- Contact/footer: no images currently

---

## 8. Anti-Patterns (Banned)

Hard rules — generation should never produce these for diana-nails.

- ❌ **No emojis in copy.** Decorative `✦` in the marquee is the only typographic mark permitted, and it's not an emoji (it's the Unicode sparkle).
- ❌ **No Inter for new copy or imported screens.** Site uses Satoshi (Fontshare).
- ❌ **No generic serifs** (Times, Georgia, Garamond, Palatino). Fraunces only.
- ❌ **No pure black `#000`.** Use Aubergine Ink `#221a1c`.
- ❌ **No purple/blue neon, no AI-gradient buttons, no outer glow shadows** (except WhatsApp FAB pulse, brand-required).
- ❌ **No oversaturated accents.** Wine Rose at ~38% saturation is the ceiling.
- ❌ **No gradient text on headlines.** Italics carry emphasis instead.
- ❌ **No custom mouse cursors.**
- ❌ **No 3-equal-card feature grids.** Hairline list or asymmetric split only.
- ❌ **No centered hero composition.** Left-aligned on a calm side of the image is the standing rule.
- ❌ **No "Scroll to explore", no bouncing chevrons, no scroll arrows.**
- ❌ **No `LABEL // 2026` formatting**, no AI tells.
- ❌ **No generic copy clichés** ("Eleve sua experiência", "Soluções perfeitas", "Atendimento de excelência"). Diana's voice is plain and warm.
- ❌ **No fabricated stats** ("98% satisfação", "+500 clientes" if untrue). Only real numbers — better to omit.
- ❌ **No fake testimonial names** (no "Maria S." stand-ins). Real testimonials or none.
- ❌ **No `100vh`** — always `100svh`.
- ❌ **No card treatment on text-heavy sections** (services, contact, package). Cards are for content showcases only.

---

## 9. Audit of current site vs. these rules

| Rule | Status | Notes |
|---|---|---|
| Pure black banned | ✅ Pass | Uses `#221a1c` throughout |
| Single primary accent | ⚠️ Watch | Wine Rose is primary; Honeyed Brass is a textural detail. Acceptable per the documented exception, but never let brass fill a CTA. |
| Inter banned for premium | ✅ Pass | Swapped to Satoshi via Fontshare. |
| Asymmetric hero | ✅ Pass | Text on left, image full-bleed. |
| 3-equal-cards banned | ✅ Pass | Services is a hairline list; portfolio is horizontal scroll. |
| Single hero CTA | ✅ Pass | "Agendar" only. |
| No emojis in copy | ✅ Pass | Only `✦` sparkle in marquee. |
| `100svh` not `100vh` | ✅ Pass | Hero uses `100svh`. |
| `prefers-reduced-motion` honored | ✅ Pass | Media query disables aurora drift, marquee, FAB pulse, word-rise and reveal entrances; hover transitions remain. |
| Real photography | ⚠️ Pending | Unsplash placeholders. Awaiting `@biaalmeidadf` photos. |
| Centered hero banned | ✅ Pass | Left-aligned. |
| No neon glows | ✅ Pass | WhatsApp FAB pulse is brand-licensed exception. |

**Both audit fixes are applied.** Remaining watch-items: secondary accent restraint (never let Honeyed Brass fill a CTA), and replacing the Unsplash placeholder photos with real shots from `@biaalmeidadf` when available.

---

## 10. Stitch generation prompt template

Use this skeleton whenever you generate a new screen at https://labs.google.com/stitch. Paste **§1, §2, §3, §6, and §8 of this file at the top of the prompt**, then add the page-specific block below.

```
<DESIGN.md sections 1-3, 6, 8 pasted here verbatim>

**PAGE BRIEF**
Page: [e.g. "Galeria — full portfolio page"]
Goal: [single conversion goal, e.g. "browse work → tap to book"]
Audience: women 25-55 in Brasília / Sobradinho, Portuguese-speaking
Platform: Web, mobile-first

**STRUCTURE**
1. Header: minimal sticky nav, "Diana Alves Raw" wordmark left, no nav links
2. Hero: [page-specific hero direction]
3. Main: [content]
4. CTA: link back to /#servicos (booking flow lives on home)
5. Footer: minimal — "Diana Alves Raw · Manicure & Pedicure · © 2026"

**REQUIREMENTS**
- Two viewports: desktop 1440 + mobile 390
- Honor every anti-pattern in §8 of the design system above
- Use Fraunces for all display type, Satoshi for body — never Inter or generic system sans
- Hero must be left-aligned, asymmetric
- Single primary CTA — no secondary "Learn more" links
- Real-content placeholders only — never fabricate stats or testimonials
```

### Ready-to-paste briefs for likely future screens

**A — Dedicated booking page (`/agendar`)**
```
Goal: convert the booking flow currently embedded on home into a focused single-page funnel.
Structure: minimal header, 2-step booking (date+time → PIX), confirmation state. No hero image — a Fraunces italic page title "Agendar" left-aligned with a Wine Rose hairline beneath, then the form. Sticky right-rail summary on desktop showing selected service + deposit running total.
```

**B — Gallery page (`/portfolio`)**
```
Goal: showcase 24+ recent works. Magazine-style asymmetric grid (CSS columns), 3:4 cards on desktop, single column on mobile. Filter chips at top (Manicure / Pedicure / Gel / Mani+Pedi) with hairline-underline active state — never fill the chip. Click → lightbox with caption + "Agendar este estilo" CTA.
```

**C — About page (`/sobre`)**
```
Goal: build trust with prospective clients. Editorial split — left column is a single Fraunces italic paragraph (max 4 sentences) about Diana's approach. Right column is one large 4:5 portrait. Below: a hairline-list of "O que esperar da visita" with 4 numbered items (00 / 01 / 02 / 03), matching the services list pattern. Single bottom CTA to /#servicos.
```

---

## 11. Translating Stitch output to this codebase

This site is single-file plain HTML/CSS. When bringing back a Stitch design:

1. **Open `index.html` and the Stitch export side by side.** Never paste Stitch HTML wholesale.
2. **Lift visual decisions only** — exact spacing, the line lengths, the image positions. Rewrite markup using the existing class system in `index.html` (`.section`, `.section-eyebrow`, `.section-title`, `.section-lead`, `.service-row`, etc.).
3. **All new colors must be drawn from §2** — if Stitch produced a new tone, re-map to the nearest token here.
4. **Replace any `<input>` styling with the booking-form pattern** (label above, hairline-bottom border).
5. **Wire WhatsApp CTAs through the existing `wa.me/5561981527431` URL** with the right pre-filled message.
6. **Run a real-device check at 360 × 667** before committing.

---

## 12. Where this file lives

`.stitch/DESIGN.md` is read by:
- Stitch MCP (when invoked via the `stitch-design` skill) — auto-injects relevant sections into prompts.
- Any agent (Claude, Cursor, Codex) working on this repo — treat as the highest-priority styling source.
- Future contributors — start here, not in `index.html`.

When the site evolves, this file evolves first. The site is the implementation; this is the contract.
