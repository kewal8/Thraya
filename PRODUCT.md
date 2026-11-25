# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Families in Bengaluru (Sompura, Sarjapur Road, Marathahalli area), above all women and parents looking for gentle, long-term care for themselves and their children; men and older relatives too. Most arrive on a phone, often from Google Maps, a WhatsApp forward or a word-of-mouth recommendation, and decide within a minute whether to message or call the clinic.

## Product Purpose

The landing page for Dr. Ardhra's Thraya Homeopathy, a classical homeopathy clinic. It exists to make a worried parent or a woman with a long-running concern feel that this doctor will listen, treat the whole person, and is easy to reach, then to get them to book a consultation. Success is a WhatsApp message or a phone call to the clinic.

## Positioning

A single, highly qualified doctor (BHMS; MD (Hom.) in Organon of Medicine and Homeopathic Philosophy, Father Muller Homeopathic Medical College, Mangalore; 10+ years in practice) offering individualised classical homeopathy, with a special focus on women's and children's health, using medicines sourced from Germany, France and other reputed countries. The brand idea is the logo's triad: body, mind and spirit ("Nurturing Body, Mind and Spirit").

## Operating Context

Booking happens on WhatsApp (+91 80892 49962): the site's form writes the request and opens a chat; nothing is stored. Visitors also call the same number (assumed to take calls; not yet confirmed). The clinic is a ground-floor shop in Shri & Shri Arcade, Sarjapur - Marathahalli Road, Sompura, Bengaluru 562125; visitors use Google Maps to find it.

## Capabilities and Constraints

- Next.js 16 single page, no database, no login. All content in `src/lib/site.ts`.
- Must be fully usable on phones; the "Call us" action matters in India as much as WhatsApp.
- Spelling is always "Homeopathy" / "Homeopathic", never "Homoeo-".
- Open: opening hours, email, whether the number takes calls.
- The copy is approved by the person directing the work and must not be changed in redesigns.

## Brand Commitments

- Name: Dr. Ardhra's Thraya Homeopathy. Tagline: Nurturing Body, Mind and Spirit.
- Logo: green figure holding a clay heart and a gold brain, wordmark "THRAYA HOMEOPATHY" (`public/brand/thraya-logo.png`, low resolution). Logo colours: greens #2C623E / #146836, clay #B2604B, gold #C79744.
- Voice: warm, calm, reassuring, medical but caring; never hype, never miracle claims.
- Client dislikes: drawn illustrations, an image to the right of the hero, the "sparkle" icon. Client responds to visual warmth and icons; the reference site they like is alomcare.in.

## Evidence on Hand

- Doctor's credentials and approach copy (in `src/lib/site.ts`).
- One user-supplied photo: amber remedy bottles with flowers (`public/images/remedy-bottles.webp`).
- Stock placeholders for the family and doctor photos (Unsplash); a real portrait is still to come.
- No patient reviews, testimonials, patient counts or ratings exist. Never invent any.
