# Thraya Homeopathy: Project Memory

Read this first. It is the single source of truth for this project, written so any AI assistant or developer can pick the work up without the original conversation.

**Rule for every assistant:** after any change to the project (code, content, design, files), update this file before finishing: the "Current state" section if it changed, any new decision or preference, and a dated line in the "Change log". Keep it accurate; delete anything that stops being true.

Last updated: 2026-11-24

---

## 1. What this is

- **Client / brand:** Dr. Ardhra's Thraya Homeopathy, a classical homeopathy clinic.
- **Doctor:** Dr. Ardhra C. BHMS; MD (Hom.) in Organon of Medicine and Homeopathic Philosophy; Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore; over 10 years of clinical experience; special focus on women's and children's health, all ages treated.
- **Deliverable:** a single landing page. Next.js, no database, no login. Booking happens on WhatsApp.
- **Audience:** families in Bengaluru, especially women and parents; most visitors are on phones.
- **Built by:** Kewal (credited in the footer: "Designed and developed by Kewal").
- **Repository:** https://github.com/kewal8/Thraya (branch `main`). Font files are not in it (git-ignored).
- **The person giving direction** is a senior UI/UX designer relaying the client's feedback.

## 2. Clinic facts (use exactly)

| Item | Value |
| --- | --- |
| Clinic name (Maps) | Dr. Ardhra's Thraya Homeopathic Clinic |
| Brand name | Thraya Homeopathy |
| Tagline | Nurturing Body, Mind and Spirit |
| Address | Shop No. 09, Ground Floor, Shri & Shri Arcade, Sarjapur - Marathahalli Road, Sompura, Bengaluru, Karnataka 562125 |
| Google Maps | https://maps.app.goo.gl/UHhXKt7XrYkirjgc9 (pin 12.8651792, 77.7745059) |
| WhatsApp | +91 80892 49962 (`918089249962`) |
| Phone (calls) | +91 80892 49962. Assumed to be the same as WhatsApp; not yet confirmed |
| Email | not provided |
| Opening hours | not provided (site says "Call or WhatsApp to arrange a time" where needed) |

All of these live in `src/lib/site.ts`. Empty fields are hidden on the page, never faked.

## 3. Brand

- **Logo:** `public/brand/thraya-logo.png` (414 x 189, transparent, low resolution: ask for SVG or 1600px+). Mark: a green figure holding a clay heart and a gold brain (body, mind, spirit); wordmark "Dr. Ardhra's / THRAYA / HOMEOPATHY" with a script tagline.
- **Logo colours (sampled):** wordmark green `#2C623E`, figure green `#146836`, heart clay `#B2604B`, brain gold `#C79744`.
- **Site tokens** (`src/app/globals.css`): `forest #1f5a33`, `forest-deep #133822`, `clay #b4553d`, `gold #c9962c`, plus soft tints (`clay-soft`, `gold-soft`, `leaf-soft`, `tint`, `paper`, `surface`).
- **Spelling:** always "Homeopathy" / "Homeopathic", never "Homoeo-", including the degree and college names (client's rule).
- **Fonts:** headings in **Ascendant Serif** (EF Studio), body in **Hanken Grotesk**.

## 4. Client taste and feedback (most important)

- **The reference the client loves is alomcare.in.** Match its warmth and structure in Thraya's colours: a centred warm hero with a soft glow and floating botanical icons, a coloured second line in headings, care pills, a dark green trust band, small section labels, and white cards with dark green icon tiles.
- The client rated an austere "anti-AI" cleanup (left-aligned text-only hero, no labels, no icon tiles) **4/10**. Do not strip warmth to satisfy generic "anti-template" rules over the client's taste.
- **Wants:** icons, visual warmth, a medical but caring and safe feeling, 100% mobile responsive.
- **Does not want:** image illustrations (line drawings were rejected), an image on the right of the hero, the "sparkle" icon (reads as an AI symbol).
- **Fonts rejected:** Newsreader, Young Serif, Prata (too thin), DM Serif Display, Marcellus, Eczar, Gloock, Cormorant, Bodoni Moda and other Google serifs, plus a serif-like sans shortlist (Ysabeau, Commissioner, etc.). The user chose **Ascendant Serif** themselves.
- **India context:** a "Call us" button matters more than a WhatsApp link in the nav.
- The user later asked for a separate Hallmark-style redesign draft (`/draft`) to compare against; the homepage stays as the client-approved direction until told otherwise.

## 5. Current state

### Routes
| Route | Status |
| --- | --- |
| `/` | Live homepage (client direction, alomcare-style) |
| `/v1` | Copy 1: the current warm direction refined (no labels above headings, two-tone only in the hero, grouped ruled condition lists, Body/Mind/Spirit as words in the logo colours, ruled rows instead of icon-card grids, numbered step timeline, Gambetta headings). Review only, `noindex` |
| `/v2` | Copy 2: new visual world "The Clinic Card": the page as the family's OP card; coloured card stocks on a sage ground, forest ink, violet rubber stamps (only for stamps and chosen states), index tabs, forest-ink duotone photos, a stamp that lands when booking. Erode headings. Review only, `noindex` |
| `/draft` | Alternative full redesign (Hallmark "Atelier" direction, brand kept). Review only, `noindex` |
| `/hero-1`, `/hero-2`, `/hero-3` | Hero options (centred, dark green banner, soft card). Review only; delete before launch |
| `/fonts` | Heading-font comparison. Review only; delete before launch |

### Homepage sections (in order)
1. **Nav:** floating white pill; logo, links (Approach, What We Treat, Your Doctor, FAQ, Location), "Call us" (phone icon only on mobile), "Book a consultation"; mobile menu adds a WhatsApp button.
2. **Hero:** centred on a warm glowing background (radial washes in gold, green and clay) with concentric rings and floating leaf, sprout, flower, tulip and heart icons (desktop only). Text matches the client's mock exactly: headline "Gentle Healing, / Personalised for You" (second line green), serif subline "To Restore Balance, Relieve Symptoms and Support Lasting Health", a soft green pill "for Women, Men, Children & the Entire Family" between two thin lines, then "Individualised care for acute and chronic concerns, led by Dr. Ardhra C."; buttons "Book a consultation" and "Explore our services"; "Specialised care for" pills (Women's Health, Children's Health, PCOD / PCOS, Allergies, Skin & hair). Extra top space under the nav (118px desktop, 74px mobile).
3. **Trust band:** dark green strip with four facts and gold icons: 10+ years, MD (Hom.), All ages, Germany & France.
4. **Our approach:** label, two-tone heading "Care that sees / the whole person.", the client's approach copy, then three white cards (Body, Mind, Spirit) with dark green icon tiles.
5. **What we treat:** centred two-tone heading; eight condition cards (two columns on phones) with icon tiles, group label and an "Ask about this" WhatsApp link; a dark green "Not sure if your concern is covered?" band.
6. **Know your doctor:** empty portrait frame (tinted, until the real photo arrives), name, bio, two figures ("10+ years", "Women & children"), and credential cards with icon tiles.
7. **Why Thraya:** dark green section, two-tone heading "Gentle medicine, / chosen for you.", a photo of homeopathic globules spilling from an amber bottle onto a leaf with a wooden spoon (`public/images/globules-spoon.webp`, supplied by the user; 4:5 crop on desktop, 4:3 on phones), and a 2x2 grid of cards with gold icon tiles (medicines from Germany & France, personalised plans, time to listen, care for every age).
8. **Your first visit:** four step cards (Book, Talk, Begin treatment, Review) with numbered icon circles on a gold wash.
9. **FAQ:** two-tone heading, card-style accordion, and a dark "Still have a question?" card with an "Ask on WhatsApp" button.
10. **Booking:** two-panel card; dark green left panel (reassurances, "Call or WhatsApp" number), and a form (name, phone, concern, message) that opens WhatsApp with the request filled in.
11. **Location:** "Visit the clinic." with the address, "Get directions" and an embedded Google map.
12. **Footer:** dark green; logo, links, contact ("Call or WhatsApp"), copyright, disclaimer, photo note, "Designed and developed by Kewal" (right).
13. A floating WhatsApp button (bottom right) opens a chat directly.

### Placeholders still in use
- The doctor portrait frame is empty on every route (stock photo removed before going live). The footer's "Placeholder photos from Unsplash" note was removed. The Why Thraya globules photo was supplied by the user (source and licence not confirmed). One Wikimedia still life remains on `/draft`.
- FAQ answers, condition notes, the steps and the body/mind/spirit lines are drafts awaiting Dr. Ardhra's review.

## 6. Code map

```
src/app/layout.tsx        Hanken via next/font/google, metadata, "js" class script (Ascendant is a CSS @font-face in globals.css)
src/app/page.tsx          Homepage: <HomePage hero={<Hero />} />
src/app/globals.css       Hallmark stamp, tokens, hero wash/rings/floaters, section labels, buttons, reveal, reduced motion
src/components/home-page.tsx  Nav + sections + footer + floating WhatsApp button
src/components/nav.tsx    Floating pill nav (client component, Motion for the mobile menu)
src/components/hero.tsx   Hero + trust band (server component, CSS-only entrance)
src/components/sections.tsx   Approach, Conditions, Medicines (Why Thraya), Doctor, Visit, Location, Footer
src/components/faq.tsx    Accordion (client)
src/components/booking.tsx    WhatsApp booking form (client)
src/components/reveal.tsx Scroll fade-in; content stays visible without JavaScript
src/components/hero-options.tsx  The three hero options for /hero-1..3
src/lib/site.ts           ALL content and clinic details (edit here first)
src/app/v1/               Copy 1 (own sections, FAQ, booking; CSS scoped to [data-theme="thraya-v1"]; Gambetta from Fontshare CDN)
src/app/v2/               Copy 2, The Clinic Card (scoped CSS; Erode from Fontshare CDN)
PRODUCT.md                Product truth for Impeccable (audience, purpose, constraints, evidence)
.impeccable/              Impeccable surface briefs (v2 direction contract) and review captures
src/app/draft/            Self-contained redesign draft (own CSS scoped to [data-theme="thraya-draft"])
public/images/            Local photos (globules-spoon.webp)
public/fonts/ascendant/   Ascendant Serif PERSONAL-USE files (git-ignored, local only) + README
THRAYA-BRIEF.md           Content and brand brief with no design choices (for Claude Design or a redesign)
README.md                 Developer README
.hallmark/                Hallmark audit records and build log
```

## 7. Technical gotchas

- **Next.js 16 differs from older versions.** Read `node_modules/next/dist/docs/` before using an API (see `AGENTS.md`). `next/image` uses `preload` (not `priority`).
- **Tailwind v4 `@theme inline` does not emit CSS variables** for direct `var()` use. The `.display` class points straight at `var(--font-heading)`, not `var(--font-display)`.
- Don't name a font variable `--font-serif`: it clashes with Tailwind's own.
- **The dev server sometimes serves stale CSS** after edits to `globals.css` (new tokens or `@font-face`). Fix: stop the server, `rm -rf .next`, start again.
- **Ascendant Serif is loaded with a CSS `@font-face`** (in `globals.css`, files in `public/fonts/ascendant/`), not `next/font/local`, so a missing file can't break `next build` (it did on Vercel once). `--font-heading` is set on `:root` to "Ascendant Serif".
- **Ascendant Serif personal-use files have blank glyphs** for `& / ( ) + ' ? ! : -`. A `"Heading Symbols"` `@font-face` in `globals.css` (local Georgia, Times or Noto Serif, limited by `unicode-range`) fills them. Remove it once licensed files are in.
- **Reveal animations** hide content only under the `.js` class set by a `beforeInteractive` script, so the page works with scripts off. A dev-only React warning about the script tag is expected.
- In the `/draft` CSS, base element rules use `:where(.draft)` so component classes win. (A specificity bug once made the green button's text dark.)
- When screenshotting in a browser, set `document.documentElement.style.scrollBehavior = 'auto'`, or `scrollTo` lands mid-animation.

## 8. Open items before launch

- [ ] Ascendant Serif commercial / web licence and licensed files. The font files are git-ignored (`public/fonts/ascendant/*.otf`), so Vercel builds currently show a fallback serif for headings; once licensed, commit them or serve them from storage
- [ ] Confirm +91 80892 49962 takes calls
- [ ] Opening hours, email (optional)
- [ ] Real photos: Dr. Ardhra's portrait, the clinic room, the exterior
- [ ] A high-resolution or SVG logo
- [ ] Real patient reviews (Google), if available; never invent any
- [ ] Dr. Ardhra's review of draft copy
- [ ] Delete review routes: `/draft` (or promote it), `/hero-1..3`, `/fonts`, `src/components/hero-options.tsx`
- [ ] Copy 2: decide whether the index-tab section labels stay (client likes labels; design review flags them as eyebrows)
- [ ] Write DESIGN.md once a direction is chosen (not written yet, so an unchosen world is not recorded as the system)
- [ ] Decide which of the homepage, Copy 1 (`/v1`), Copy 2 (`/v2`) and `/draft` becomes the site; then delete the rest
- [ ] Heading font: Copy 1 uses Gambetta and Copy 2 uses Erode (both Fontshare, free for commercial use, loaded from api.fontshare.com). Self-host the chosen one before launch

## 9. Change log

- **2026-11-21** Project scaffolded (Next.js 16, Tailwind v4, Motion, Phosphor). First build: Newsreader + Hanken, logo palette, client copy for the doctor and approach.
- **2026-11-21** Redesign after "looks AI-generated": Indian family photos, editorial layout. Heading font trials: Young Serif, a comparison page, then Prata. Google Maps location section added.
- **2026-11-21** Icons and warmth added (client wanted "feel"); THRAYA-BRIEF.md written. Illustrations tried and removed at the user's request; hero image removed.
- **2026-11-22** Hallmark audit and fixes (eyebrows, tokens, reduced motion, no-JS visibility). The client then rated the result 4/10.
- **2026-11-22** Three hero options built at `/hero-1..3`.
- **2026-11-23** WhatsApp +91 80892 49962 wired everywhere; "Homoeo-" spelling replaced with "Homeo-".
- **2026-11-24** First three sections rebuilt in alomcare style (centred warm hero, trust band, two-tone headings, icon cards). Nav became a floating pill; conditions became two columns on phones. Ascendant Serif (user-supplied, personal use) became the heading font with a punctuation fallback. Doctor figures changed to "10+ years" and "Women & children". The lower half was polished to match (labels, two-tone headings, card FAQ, step cards). "Call us" replaced the nav WhatsApp link (phone assumed to equal WhatsApp). Footer credit "Designed and developed by Kewal". The sparkle icon was replaced with a tulip and a water drop. More gap under the nav in the hero.
- **2026-11-24** Hallmark audit of the homepage; full redesign draft built at `/draft` (Atelier direction, brand kept). Homepage untouched.
- **2026-11-24** README rewritten for GitHub; this CLAUDE.md created as the portable project memory.
- **2026-11-24** Ascendant Serif font files git-ignored so the personal-use licence isn't breached on GitHub; setup step added to README.md and the font folder README.
- **2026-11-24** Project committed and pushed to https://github.com/kewal8/Thraya (`main`).
- **2026-11-24** Vercel build failed (font file not found, since the fonts are git-ignored). Switched Ascendant from `next/font/local` to a CSS `@font-face` from `public/fonts/ascendant/`; builds now pass without the files (headings fall back to a serif on Vercel until licensed files are added).
- **2026-11-24** Hero text replaced with the client's mock copy ("Gentle Healing, Personalised for You", the "To Restore Balance…" subline, the family pill and the shorter description). Layout and buttons unchanged; mobile sizes tuned so each headline line fits on one row from 360px.
- **2026-11-25** Why Thraya photo replaced: the Unsplash stethoscope-and-globules image became the user-supplied remedy-bottles photo (`public/images/remedy-bottles.webp`, `photos.remedies` in site.ts); its frame is 4:5 on desktop and anchored to the bottom so the bottle and dropper are never cropped.
- **2026-11-25** Impeccable pass: PRODUCT.md written. Two full redesigns built with the same copy, homepage untouched: Copy 1 at `/v1` (refined warm direction, Gambetta) and Copy 2 at `/v2` ("The Clinic Card", Erode, chosen by the user from an Impeccable direction round). Both went through two independent finish-review rounds; fixes applied. Open: self-hosting the fonts, Copy 2 tab labels, DESIGN.md, picking a direction.
- **2026-11-25** Doctor stock photo removed ahead of going live: the portrait frame is now empty on `/`, `/v1`, `/v2` and `/draft`; Unsplash placeholder notes removed from the footers.
- **2026-11-25** Why Thraya photo replaced again with the user-supplied globules-and-spoon photo (`public/images/globules-spoon.webp`, `photos.remedies`) on `/`, `/v1` and `/v2`; the remedy-bottles photo was deleted.
