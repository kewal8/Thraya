# Thraya Homeopathy: Website Content & Brand Brief

Everything needed to design the Thraya Homeopathy landing page: clinic facts, brand assets, logo colours, all copy, contact details, audience and references.

This brief deliberately contains **no design decisions** (no fonts, layouts, components or styling). Those are open for the new design.

---

## 1. Project

| | |
|---|---|
| Deliverable | A single-page landing website |
| Platform | Next.js, no database, no login |
| Booking | Via WhatsApp (a form pre-fills a WhatsApp message to the clinic) |
| Must have | 100% mobile responsive. Most visitors will be on phones |
| Language | English, British spelling (personalised, specialises, individualised) |

---

## 2. Clinic identity

| | |
|---|---|
| Brand name | Thraya Homeopathy |
| Full name (as on logo) | Dr. Ardhra's Thraya Homeopathy |
| Name on Google Maps | Dr. Ardhra's Thraya Homeopathic Clinic |
| Tagline | Nurturing Body, Mind and Spirit |
| Type | Classical homeopathy clinic (descriptor used: "Classical Homeopathic Clinic") |
| Doctor | Dr. Ardhra C |

**Spelling rule (client):** always "Homeopathy" / "Homeopathic", never "Homoeopathy" / "Homoeopathic", including in the degree and college names.

---

## 3. Logo

**File:** `public/brand/thraya-logo.png` (414 × 189 px, PNG with transparent background).
This file is small and low resolution. Ask the logo designer for an SVG or a large PNG (at least 1600 px wide) before final design.

**What the logo contains**
- **Mark (left):** a stylised green human figure (a round head above a curved, embracing arm) holding a heart and a brain side by side.
  - Heart: clay / terracotta red
  - Brain: gold / mustard
  - Figure: green
  - The three parts map to the tagline: **body** (heart), **mind** (brain) and **spirit** (the figure holding them).
- **Wordmark (right):**
  - "Dr. Ardhra's" in small text above
  - "THRAYA" in large serif capitals
  - "HOMEOPATHY" in serif capitals below
  - "Nurturing Body, Mind and Spirit." in a handwritten script underneath

**Logo colours** (sampled from the logo file; median values):

| Element | Hex | Notes |
|---|---|---|
| Wordmark text (THRAYA, HOMEOPATHY, tagline) | `#2C623E` | Deep forest green |
| Figure | `#146836` | Brighter, more saturated green |
| Heart | `#B2604B` | Clay / terracotta |
| Brain | `#C79744` | Gold / mustard |

The logo works on light backgrounds. A light or white version would be needed for dark backgrounds.

---

## 4. Brand feeling (from the client)

- Clean, neat and modern
- Medical, but with affection: it should feel safe and caring
- Positive and hopeful: visitors should feel they **can be helped**
- Welcoming to all ages and groups: women, men, children, families
- Must **not** look generic or AI-generated
- The client wants **icons** and visual warmth. A text-only, minimal look was rejected as lacking "feel"

---

## 5. Audience

- Families in Bengaluru (the clinic is on Sarjapur - Marathahalli Road)
- Special focus on **women's health** and **children's health**, but all ages are welcome
- Patients with **acute** concerns (fever, allergies, coughs) and **chronic / long-standing** concerns (PCOS, skin, digestion)
- Many will arrive from phones, WhatsApp or Google Maps

---

## 6. References

1. **alomcare.in** — the client's strongest reference for overall feel and visual hierarchy. It is also a homeopathic clinic site. Notable traits: warm, calm, trustworthy, icon tiles for key points, clear booking calls to action, doctor profiles, FAQ, reviews and locations.
2. **Client's own mock-up** (mobile hero), showing the intended hero content:
   - Badge: "Classical Homeopathic Clinic"
   - Headline: "Personalised Homeopathic Care for Women, Men, Children & the Entire Family."
   - The intro paragraph (section 7.1 below)
   - Buttons: "Book a Consultation" and "Explore Our Services"
   - Soft line illustrations: a woman, a mother with a child, and a family
   - Focus area pills: Women's Health, Children's Health, Family Healthcare
   - Note: the mock-up uses a lotus-style placeholder mark. The **official logo is the figure-with-heart-and-brain** described in section 3.
3. **Client's poster designs** with two statements, which should appear on the site:
   - "Natural & Gentle Homeopathic Medicines. Sourced from Germany, France and other reputed countries."
   - "Personalised Homeopathic Treatment Plans. Individualised homeopathic care tailored to your health concerns and case history."
4. **sahajhomeopathyclinic.com** (screenshots) — a list of conditions, each with a photo, a short description and a "Learn more" link, plus a floating WhatsApp "Chat Now" button. Shows that patients respond to visual, condition-by-condition presentation.

---

## 7. Content

Copy marked **(client)** was supplied by the client and should be used as written. Copy marked **(draft)** was written during development and needs Dr. Ardhra's review.

### 7.1 Hero (client)

- **Badge:** Classical Homeopathic Clinic
- **Headline:** Personalised Homeopathic Care for Women, Men, Children & the Entire Family.
- **Intro:** We provide consultations for women, men and children, addressing a wide range of acute and chronic health concerns, including fever, allergies, respiratory complaints, digestive disorders, skin and hair conditions, menstrual and hormonal disorders, PCOD/PCOS, and other general health concerns.
- **Primary action:** Book a Consultation
- **Secondary action:** Explore Our Services
- **Focus areas:** Women's Health · Children's Health · Family Healthcare

### 7.2 Our Approach (client)

> At Thraya Homeopathy, every patient is treated as an individual, with a focus on understanding the person as a whole rather than just the presenting complaint.
>
> Rooted in the principles of classical homeopathy, our approach involves detailed case-taking, attentive listening and individualised prescriptions, guided by each patient's unique symptoms and health history.
>
> Every consultation is approached with patience, compassion and care.

### 7.3 Body, Mind and Spirit (draft)

Built on the logo's three parts and the tagline.

- **Body:** Physical symptoms are explored in detail: where they appear, when they began and what changes them.
- **Mind:** How you sleep, feel and cope with stress is part of your case, not a side note.
- **Spirit:** Your temperament and life as a whole guide the choice of remedy.

### 7.4 What we treat

The list is from the client's hero copy. The short descriptions are **(draft)**.

| Condition | Short description (draft) | Group |
|---|---|---|
| Menstrual & hormonal disorders | Irregular or painful cycles and hormonal imbalance. | Women's health |
| PCOD / PCOS | Cycles, symptoms and overall health, looked at together. | Women's health |
| Fever | Timely care for sudden fevers in children and adults. | Acute |
| Allergies | Sneezing, itching and seasonal flare-ups. | Acute |
| Respiratory complaints | Coughs, colds and recurring chest or sinus trouble. | Acute |
| Digestive disorders | Acidity, indigestion and constipation. | Long-standing |
| Skin & hair conditions | Recurring skin complaints and hair fall. | Long-standing |
| General health concerns | Anything not listed here, heard individually. | Any |

Supporting line (draft): "Not sure if your concern is covered? Ask us before booking."

### 7.5 Medicines & care (client)

- **Natural & Gentle Homeopathic Medicines:** Sourced from Germany, France and other reputed countries.
- **Personalised Homeopathic Treatment Plans:** Individualised homeopathic care tailored to your health concerns and case history.

Extra points used on the current site (draft):
- **Time to listen:** Detailed case-taking, so nothing about your health is rushed.
- **Care for every age:** Women, men and children, for acute and chronic concerns.

### 7.6 Know Your Doctor (client)

**Dr. Ardhra C**

**Qualifications**
- Bachelor of Homeopathic Medicine and Surgery (BHMS)
- Postgraduate Degree (MD Hom.) in Organon of Medicine and Homeopathic Philosophy

**Alma mater**
Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore

**Bio**
> With over 10 years of clinical experience, Dr. Ardhra specialises in classical homeopathy, with a special focus on women's and children's health, while catering to patients of all ages with a wide range of acute and chronic health concerns.
>
> The approach emphasises treating the individual as a whole through detailed case-taking, attentive listening and understanding each patient's unique health concerns. Every consultation is guided by patience, compassion and individualised care.

**Key facts for highlights**
- 10+ years of clinical experience
- MD (Hom.) postgraduate
- Treats all ages: women, men and children

The bio and the Approach copy repeat some phrases ("detailed case-taking", "attentive listening", "patience, compassion"). If both appear on one page, consider trimming one.

### 7.7 Your first visit (draft)

1. **Book:** Send your name and concern. We will confirm a consultation time with you.
2. **Talk:** A detailed conversation about your symptoms, history and how you have been feeling.
3. **Begin treatment:** An individualised prescription, tailored to your concerns and case history.
4. **Review:** Follow-ups track your progress and adjust treatment as your health changes.

### 7.8 FAQ (draft)

**What happens in a first consultation?**
The first visit is a detailed conversation. Dr. Ardhra asks about your present complaint, your health history, your routine and how you have been feeling, so the prescription can be chosen for you as an individual.

**Who can consult at Thraya Homeopathy?**
Patients of all ages are welcome. The clinic sees women, men and children, with a special focus on women's and children's health.

**Should I stop my current medicines?**
No. Please do not stop or change any prescribed medicine on your own. Bring your current prescriptions and reports to the consultation so they can be considered as part of your case.

**What should I bring to my appointment?**
Any recent medical reports, a list of medicines you take, and notes on your symptoms: when they started, what makes them better or worse, and anything else you have noticed.

**Where do the medicines come from?**
Thraya Homeopathy uses natural and gentle homeopathic medicines sourced from Germany, France and other reputed countries.

### 7.9 Booking form

- **Fields:** Full name (required), Phone number (required), Concern (optional dropdown), Message (optional)
- **Concern options:** Women's health, Children's health, Fever or acute illness, Allergies, Respiratory complaints, Digestive disorders, Skin or hair conditions, Menstrual or hormonal concerns, PCOD / PCOS, Something else
- **Behaviour:** on submit, WhatsApp opens with a pre-filled message to the clinic number:
  > Hello Thraya Homeopathy, I would like to book a consultation.
  > Name: …
  > Phone: …
  > Concern: …
  > Message: …
- **Safety note shown near the form:** For a medical emergency, please go to your nearest hospital.
- **Privacy line:** Your details are only shared when you press send in WhatsApp.
- A floating WhatsApp button should be visible on every screen.

### 7.10 Footer

- Logo and tagline
- Short line: Classical homeopathy for women, men, children and the entire family.
- Contact details and address (section 8)
- © 2026 Thraya Homeopathy
- Disclaimer: Information on this site is general and does not replace a consultation.

---

## 8. Contact & location

| | |
|---|---|
| Clinic name | Dr. Ardhra's Thraya Homeopathic Clinic |
| Address | Shop No. 09, Ground Floor, Shri & Shri Arcade, Sarjapur - Marathahalli Road, Sompura, Bengaluru, Karnataka 562125 |
| Google Maps link | https://maps.app.goo.gl/UHhXKt7XrYkirjgc9 |
| Map coordinates | 12.8651792, 77.7745059 |
| WhatsApp number | +91 80892 49962 (wa.me/918089249962) |
| Phone | +91 80892 49962 (same as WhatsApp; confirm calls are answered on it) |
| Email | **Not provided yet** |
| Opening hours | **Not provided yet** |

A location section should show the address, an embedded map and a "Get directions" link.

---

## 9. Content rules

- **No cure claims or guaranteed outcomes.** Describe care, not results.
- **No invented numbers.** There are no patient counts, ratings or review figures yet. Use only the facts in this brief.
- **No fake testimonials.** Add reviews only when real ones are available, ideally from Google.
- **Don't refer to Dr. Ardhra with pronouns** in copy. Use "Dr. Ardhra" (pronouns were not provided).
- **Keep the emergency disclaimer** near the booking form.

---

## 10. Still needed from the client

- [x] WhatsApp number: +91 80892 49962
- [ ] Phone number and email
- [ ] Opening hours
- [ ] Logo as SVG or high-resolution PNG, plus a version for dark backgrounds
- [ ] Portrait of Dr. Ardhra
- [ ] Clinic photos (exterior, reception, consultation room)
- [ ] Google reviews link, if available
- [ ] Dr. Ardhra's review of all **(draft)** copy
- [ ] Social media links, if any
