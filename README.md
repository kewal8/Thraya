# Thraya Homeopathy

The landing page for **Dr. Ardhra's Thraya Homeopathy**, a classical homeopathy clinic in Sompura, Bengaluru, led by Dr. Ardhra C (BHMS, MD (Hom.)).

It is a single-page site with no database or login. Visitors book a consultation through WhatsApp: the booking form writes the request out and opens a WhatsApp chat with the clinic, ready to send.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for the mobile menu animation
- [Phosphor Icons](https://phosphoricons.com)
- Fonts: Ascendant Serif (headings, self-hosted) and Hanken Grotesk (body, via `next/font/google`)

## Getting started

Requires Node.js 20 or later.

**Add the heading font first.** The Ascendant Serif files are not in the repository (see [Fonts and licensing](#fonts-and-licensing)). Copy these three files into `src/fonts/ascendant/`, or the build will fail:

- `AscendantSerif-PersonalUse-Regular.otf`
- `AscendantSerif-PersonalUse-Medium.otf`
- `AscendantSerif-PersonalUse-Bold.otf`

```bash
npm install
```

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the site for production |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint |

## Pages

| Route | Purpose |
| --- | --- |
| `/` | The live landing page |
| `/draft` | A full redesign draft (Atelier direction) kept separate for review |
| `/hero-1`, `/hero-2`, `/hero-3` | Temporary hero layout options for review |
| `/fonts` | Temporary heading-font comparison |

The draft, hero option and font comparison routes are review aids marked `noindex`. Delete them (`src/app/draft`, `src/app/hero-*`, `src/app/fonts` and `src/components/hero-options.tsx`) before launch.

## Project structure

```
src/
  app/
    layout.tsx         Root layout: fonts, metadata, scripting flag
    page.tsx           Homepage (renders HomePage with the Hero)
    globals.css        Design tokens (logo colours), shared styles, motion fallbacks
    draft/             Separate redesign draft, scoped to its own CSS
  components/
    nav.tsx            Floating pill navigation with Call us and booking
    hero.tsx           Hero and the trust band
    sections.tsx       Approach, conditions, why Thraya, doctor, visit, location, footer
    faq.tsx            Questions accordion
    booking.tsx        WhatsApp booking form
    home-page.tsx      Assembles the homepage sections
  lib/
    site.ts            All clinic details and page content
  fonts/ascendant/     Ascendant Serif files (see Fonts and licensing)
public/brand/          Logo
THRAYA-BRIEF.md        Content and brand brief (no design choices), for redesign work
```

## Editing content

Almost everything a visitor reads lives in **`src/lib/site.ts`**:

- `site`: clinic name, WhatsApp and phone numbers, address, opening hours, Google Maps link and map pin
- `conditionGroups`: the conditions shown in "What we treat"
- `triad`, `promises`, `steps`: supporting sections
- `faqs`: questions and answers
- `concernOptions`: the dropdown in the booking form
- `photos`: image URLs (currently placeholders)

Fields left as an empty string (for example `hours` or `email`) are hidden on the page rather than shown blank.

### WhatsApp and phone

`site.whatsapp` is the number in international format without `+` or spaces (`918089249962`); it powers every WhatsApp link. `site.phone` drives the "Call us" button. When both are the same number, the site lists it once as "Call or WhatsApp".

## Brand

Colours are sampled from the logo and defined as tokens in `src/app/globals.css`:

| Token | Use |
| --- | --- |
| `forest`, `forest-deep` | Primary green (logo figure and wordmark) |
| `clay` | The logo's heart |
| `gold` | The logo's mind |

Spelling: always "Homeopathy" / "Homeopathic", never "Homoeopathy".

## Fonts and licensing

**Ascendant Serif** (EF Studio, [efstudiotype.com](https://efstudiotype.com/)) is used for headings. The files in `src/fonts/ascendant/` are the **personal-use** versions, included for preview only.

Before the site goes live:

1. Buy a commercial / web licence at [efstudiotype.com/license](https://efstudiotype.com/license/).
2. Replace the three files with the licensed ones (Regular 400, Medium 500, Bold 700) and update the paths in `src/app/layout.tsx`.
3. Remove the "Heading Symbols" `@font-face` in `globals.css`. It fills punctuation (`& / ( ) + ' ? ! : -`) missing from the personal-use files.

The font files are listed in `.gitignore` and are never committed. Each machine adds them to `src/fonts/ascendant/` locally. On a hosting platform such as Vercel, add the licensed files through a private source (a private repository, or the host's file storage) rather than this repository.

## Before launch

- [ ] Ascendant Serif web licence and licensed font files
- [ ] Real photos of Dr. Ardhra and the clinic (replace the Unsplash and Wikimedia placeholders in `src/lib/site.ts` and `src/app/draft/page.tsx`)
- [ ] Opening hours in `site.hours`
- [ ] A high-resolution or SVG logo in `public/brand/`
- [ ] Dr. Ardhra's review of the draft copy (FAQ answers, condition notes, steps)
- [ ] Remove the review routes listed under [Pages](#pages)

## Deployment

The site is a standard Next.js app and deploys to [Vercel](https://vercel.com) or any Node.js host:

```bash
npm run build
```

```bash
npm run start
```

## Credits

Designed and developed by Kewal.
