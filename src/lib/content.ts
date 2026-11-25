/**
 * Homepage text in English and Kannada. Icons, tones and links stay in site.ts; this file holds
 * only words, in the same order as the lists in site.ts.
 *
 * Kannada is a careful draft translation. Have a native Kannada speaker (ideally someone at the
 * clinic) review it before relying on it, especially the medical wording.
 *
 * WhatsApp messages stay in English (see `en` names used by the links) so the clinic always
 * receives requests in one language.
 */
import {
  concernOptions,
  conditionGroups,
  faqs,
  nav,
  promises,
  site,
  steps,
  triad,
} from "@/lib/site";

export type Locale = "en" | "kn";
export const locales: Locale[] = ["en", "kn"];
export const localePath: Record<Locale, string> = { en: "/", kn: "/kn" };

const en = {
  lang: "en",
  switcher: { label: "ಕನ್ನಡ", aria: "ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ (View in Kannada)", target: "kn" as Locale },
  nav: nav.map((n) => n.label),
  ui: {
    homeAria: "Thraya Homeopathy, home",
    callUs: "Call us",
    callAria: (phone: string) => `Call us on ${phone}`,
    book: "Book a consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary",
    mobileNav: "Mobile",
    whatsappFab: "Chat with Thraya Homeopathy on WhatsApp",
    askAbout: "Ask about this",
  },
  hero: {
    line1: "Gentle Healing,",
    line2: "Personalised for You",
    sub: "To Restore Balance, Relieve Symptoms and Support Lasting Health",
    pill: "for Women, Men, Children & the Entire Family",
    desc: "Individualised care for acute and chronic concerns, led by Dr. Ardhra C.",
    explore: "Explore our services",
    specialisedFor: "Specialised care for",
    specialised: ["Women's Health", "Children's Health", "PCOD / PCOS", "Allergies", "Skin & hair"],
    trustAria: "Why patients trust Thraya",
    trust: [
      { value: "10+ years", label: "of clinical experience" },
      { value: "MD (Hom.)", label: "postgraduate qualified" },
      { value: "All ages", label: "women, men and children" },
      { value: "Germany & France", label: "medicines sourced from" },
    ],
  },
  approach: {
    label: "Our approach",
    h1: "Care that sees",
    h2: "the whole person.",
    p1: "At Thraya Homeopathy, every patient is treated as an individual, with a focus on understanding the person as a whole rather than just the presenting complaint.",
    p2: "Rooted in the principles of classical homeopathy, our approach involves detailed case-taking, attentive listening and individualised prescriptions, guided by each patient’s unique symptoms and health history.",
    p3: "Every consultation is approached with patience, compassion and care.",
    triad: triad.map((t) => ({ word: t.word, body: t.body })),
  },
  conditions: {
    label: "What we treat",
    h1: "Care for every stage",
    h2: "of family life.",
    intro: "Consultations for women, men and children, for a wide range of acute and chronic health concerns.",
    groups: conditionGroups.map((g) => ({
      title: g.title,
      intro: g.intro,
      items: g.items.map((i) => ({ name: i.name, note: i.note })),
    })),
    notSure: "Not sure if your concern is covered? Ask us before booking.",
  },
  medicines: {
    label: "Why Thraya",
    h1: "Gentle medicine,",
    h2: "chosen for you.",
    alt: "Homeopathic globules spilling from an amber bottle onto a green leaf, with a wooden spoon",
    promises: promises.map((p) => ({ title: p.title, body: p.body })),
  },
  doctor: {
    label: "Know your doctor",
    name: "Dr. Ardhra C",
    degrees: "BHMS, MD (Hom.)",
    bio: "With over 10 years of clinical experience, Dr. Ardhra specialises in classical homeopathy, with a special focus on women’s and children’s health, while catering to patients of all ages with a wide range of acute and chronic health concerns.",
    stats: [
      { value: "10+ years", label: "of clinical experience" },
      { value: "Women & children", label: "special focus of practice" },
    ],
    credentials: [
      { term: "Degree", detail: "Bachelor of Homeopathic Medicine and Surgery (BHMS)" },
      { term: "Postgraduate", detail: "MD (Hom.) in Organon of Medicine and Homeopathic Philosophy" },
      {
        term: "Alma mater",
        detail: "Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore",
      },
    ],
  },
  visit: {
    label: "Your first visit",
    h1: "Four simple steps",
    h2: "to begin your care.",
    steps: steps.map((s) => ({ title: s.title, body: s.body })),
  },
  faq: {
    label: "Questions",
    h1: "Everything you",
    h2: "might be wondering.",
    stillTitle: "Still have a question?",
    stillBody: "Send us a message and we will help before you book.",
    askWhatsapp: "Ask on WhatsApp",
    items: faqs.map((f) => ({ q: f.q, a: f.a })),
  },
  booking: {
    label: "Begin your care",
    h1: "Book your",
    h2: "consultation.",
    intro: "Share a few details and your request opens in WhatsApp, ready to send. We will confirm a consultation time with you.",
    reassurances: [
      "Opens WhatsApp with your request ready to send",
      "Your details are shared only when you press send",
      "Patients of all ages are welcome",
    ],
    callOrWhatsapp: (n: string) => `Call or WhatsApp ${n}`,
    whatsappOnly: (n: string) => `WhatsApp ${n}`,
    name: "Full name",
    phone: "Phone number",
    concern: "What would you like help with?",
    concernPlaceholder: "Choose a concern (optional)",
    concernOptions: concernOptions as readonly string[],
    message: "Anything you would like us to know",
    messageHint: "Optional. Your details are only shared when you press send in WhatsApp.",
    emergency: "For a medical emergency, please go to your nearest hospital.",
    submit: "Book a consultation",
    sent: "WhatsApp has opened with your request. Press send there to reach us.",
    errName: "Please enter your full name.",
    errPhone: "Please enter a valid phone number.",
  },
  location: {
    h1: "Visit",
    h2: " the clinic.",
    directions: "Get directions",
    showMap: "Show map",
    mapTitle: (name: string) => `Map showing ${name}`,
  },
  footer: {
    blurb: "Classical homeopathy for women, men, children and the entire family.",
    explore: "Explore",
    contact: "Contact",
    callOrWhatsapp: "Call or WhatsApp",
    logoAlt: "Dr. Ardhra's Thraya Homeopathy. Nurturing Body, Mind and Spirit.",
    disclaimer: "Information on this site is general and does not replace a consultation.",
    footerNav: "Footer",
  },
};

export type Content = typeof en;

const kn: Content = {
  lang: "kn",
  switcher: { label: "English", aria: "View in English", target: "en" },
  nav: ["ನಮ್ಮ ವಿಧಾನ", "ಚಿಕಿತ್ಸೆಗಳು", "ನಿಮ್ಮ ವೈದ್ಯರು", "ಪ್ರಶ್ನೆಗಳು", "ವಿಳಾಸ"],
  ui: {
    homeAria: "ತ್ರಯ ಹೋಮಿಯೋಪತಿ, ಮುಖಪುಟ",
    callUs: "ಕರೆ ಮಾಡಿ",
    callAria: (phone: string) => `${phone} ಗೆ ಕರೆ ಮಾಡಿ`,
    book: "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
    openMenu: "ಮೆನು ತೆರೆಯಿರಿ",
    closeMenu: "ಮೆನು ಮುಚ್ಚಿ",
    primaryNav: "ಮುಖ್ಯ ಮೆನು",
    mobileNav: "ಮೆನು",
    whatsappFab: "ತ್ರಯ ಹೋಮಿಯೋಪತಿಯೊಂದಿಗೆ WhatsApp ನಲ್ಲಿ ಮಾತನಾಡಿ",
    askAbout: "ಇದರ ಬಗ್ಗೆ ಕೇಳಿ",
  },
  hero: {
    line1: "ಸೌಮ್ಯವಾದ ಚಿಕಿತ್ಸೆ,",
    line2: "ನಿಮಗಾಗಿಯೇ ರೂಪಿಸಿದ್ದು",
    sub: "ಸಮತೋಲನವನ್ನು ಮರಳಿ ತರಲು, ರೋಗಲಕ್ಷಣಗಳನ್ನು ನಿವಾರಿಸಲು ಮತ್ತು ದೀರ್ಘಕಾಲದ ಆರೋಗ್ಯಕ್ಕೆ ಬೆಂಬಲ ನೀಡಲು",
    pill: "ಮಹಿಳೆಯರು, ಪುರುಷರು, ಮಕ್ಕಳು ಮತ್ತು ಇಡೀ ಕುಟುಂಬಕ್ಕಾಗಿ",
    desc: "ಡಾ. ಆರ್ದ್ರಾ ಸಿ. ಅವರ ನೇತೃತ್ವದಲ್ಲಿ, ತೀವ್ರ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಆರೈಕೆ.",
    explore: "ನಮ್ಮ ಸೇವೆಗಳನ್ನು ನೋಡಿ",
    specialisedFor: "ವಿಶೇಷ ಆರೈಕೆ",
    specialised: ["ಮಹಿಳೆಯರ ಆರೋಗ್ಯ", "ಮಕ್ಕಳ ಆರೋಗ್ಯ", "PCOD / PCOS", "ಅಲರ್ಜಿಗಳು", "ಚರ್ಮ ಮತ್ತು ಕೂದಲು"],
    trustAria: "ರೋಗಿಗಳು ತ್ರಯವನ್ನು ನಂಬಲು ಕಾರಣಗಳು",
    trust: [
      { value: "10+ ವರ್ಷ", label: "ಕ್ಲಿನಿಕಲ್ ಅನುಭವ" },
      { value: "MD (Hom.)", label: "ಸ್ನಾತಕೋತ್ತರ ಪದವೀಧರರು" },
      { value: "ಎಲ್ಲಾ ವಯಸ್ಸಿನವರು", label: "ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳು" },
      { value: "ಜರ್ಮನಿ ಮತ್ತು ಫ್ರಾನ್ಸ್", label: "ಔಷಧಿಗಳ ಮೂಲ" },
    ],
  },
  approach: {
    label: "ನಮ್ಮ ವಿಧಾನ",
    h1: "ಇಡೀ ವ್ಯಕ್ತಿಯನ್ನು",
    h2: "ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಆರೈಕೆ.",
    p1: "ತ್ರಯ ಹೋಮಿಯೋಪತಿಯಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ರೋಗಿಯನ್ನೂ ಒಬ್ಬ ವಿಶಿಷ್ಟ ವ್ಯಕ್ತಿಯಾಗಿ ನೋಡಲಾಗುತ್ತದೆ. ಕೇವಲ ಕಾಣಿಸಿಕೊಂಡ ಸಮಸ್ಯೆಯನ್ನಲ್ಲ, ಇಡೀ ವ್ಯಕ್ತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೇ ನಮ್ಮ ಗಮನ.",
    p2: "ಶಾಸ್ತ್ರೀಯ ಹೋಮಿಯೋಪತಿಯ ತತ್ವಗಳ ಮೇಲೆ ಆಧಾರಿತವಾದ ನಮ್ಮ ವಿಧಾನದಲ್ಲಿ ವಿವರವಾದ ಕೇಸ್ ಟೇಕಿಂಗ್, ಗಮನವಿಟ್ಟು ಆಲಿಸುವುದು ಮತ್ತು ಪ್ರತಿ ರೋಗಿಯ ವಿಶಿಷ್ಟ ಲಕ್ಷಣಗಳು ಹಾಗೂ ಆರೋಗ್ಯ ಇತಿಹಾಸವನ್ನು ಆಧರಿಸಿದ ವೈಯಕ್ತಿಕ ಔಷಧ ಸೇರಿವೆ.",
    p3: "ಪ್ರತಿಯೊಂದು ಸಮಾಲೋಚನೆಯನ್ನೂ ತಾಳ್ಮೆ, ಸಹಾನುಭೂತಿ ಮತ್ತು ಕಾಳಜಿಯಿಂದ ನಡೆಸಲಾಗುತ್ತದೆ.",
    triad: [
      {
        word: "ದೇಹ",
        body: "ದೈಹಿಕ ಲಕ್ಷಣಗಳನ್ನು ವಿವರವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ: ಅವು ಎಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ, ಯಾವಾಗ ಆರಂಭವಾದವು ಮತ್ತು ಯಾವುದರಿಂದ ಬದಲಾಗುತ್ತವೆ.",
      },
      {
        word: "ಮನಸ್ಸು",
        body: "ನೀವು ಹೇಗೆ ನಿದ್ರಿಸುತ್ತೀರಿ, ಹೇಗೆ ಭಾವಿಸುತ್ತೀರಿ ಮತ್ತು ಒತ್ತಡವನ್ನು ಹೇಗೆ ನಿಭಾಯಿಸುತ್ತೀರಿ ಎಂಬುದು ನಿಮ್ಮ ಕೇಸ್‌ನ ಮುಖ್ಯ ಭಾಗ, ಕೇವಲ ಪಕ್ಕದ ಟಿಪ್ಪಣಿಯಲ್ಲ.",
      },
      { word: "ಆತ್ಮ", body: "ನಿಮ್ಮ ಸ್ವಭಾವ ಮತ್ತು ಒಟ್ಟಾರೆ ಜೀವನವೇ ಔಷಧದ ಆಯ್ಕೆಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ." },
    ],
  },
  conditions: {
    label: "ನಾವು ನೀಡುವ ಚಿಕಿತ್ಸೆ",
    h1: "ಕುಟುಂಬ ಜೀವನದ",
    h2: "ಪ್ರತಿ ಹಂತಕ್ಕೂ ಆರೈಕೆ.",
    intro: "ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳಿಗೆ, ವಿವಿಧ ತೀವ್ರ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಸಮಾಲೋಚನೆ.",
    groups: [
      {
        title: "ಮಹಿಳೆಯರ ಆರೋಗ್ಯ",
        intro: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಗೌಪ್ಯತೆ ಮತ್ತು ತಾಳ್ಮೆಯೊಂದಿಗೆ ಆರೈಕೆ.",
        items: [
          { name: "ಮುಟ್ಟಿನ ಮತ್ತು ಹಾರ್ಮೋನ್ ಸಮಸ್ಯೆಗಳು", note: "ಅನಿಯಮಿತ ಅಥವಾ ನೋವಿನ ಮುಟ್ಟು ಮತ್ತು ಹಾರ್ಮೋನ್ ಅಸಮತೋಲನ." },
          { name: "PCOD / PCOS", note: "ಮುಟ್ಟಿನ ಚಕ್ರ, ಲಕ್ಷಣಗಳು ಮತ್ತು ಒಟ್ಟಾರೆ ಆರೋಗ್ಯ, ಎಲ್ಲವೂ ಒಟ್ಟಿಗೆ." },
        ],
      },
      {
        title: "ತೀವ್ರ ಮತ್ತು ದಿನನಿತ್ಯದ ಕಾಯಿಲೆಗಳು",
        intro: "ಮಕ್ಕಳು ಮತ್ತು ವಯಸ್ಕರಿಗೆ ಸಕಾಲಿಕ, ಸೌಮ್ಯ ಆರೈಕೆ.",
        items: [
          { name: "ಜ್ವರ", note: "ಮಕ್ಕಳು ಮತ್ತು ವಯಸ್ಕರಲ್ಲಿ ಹಠಾತ್ ಜ್ವರ." },
          { name: "ಅಲರ್ಜಿಗಳು", note: "ಸೀನು, ತುರಿಕೆ ಮತ್ತು ಋತುಮಾನದ ಉಲ್ಬಣಗಳು." },
          { name: "ಉಸಿರಾಟದ ತೊಂದರೆಗಳು", note: "ಕೆಮ್ಮು, ನೆಗಡಿ, ಎದೆ ಮತ್ತು ಸೈನಸ್ ತೊಂದರೆ." },
        ],
      },
      {
        title: "ದೀರ್ಘಕಾಲದ ಸಮಸ್ಯೆಗಳು",
        intro: "ದೀರ್ಘಕಾಲೀನ ತೊಂದರೆಗಳನ್ನು ಸಮಗ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
        items: [
          { name: "ಜೀರ್ಣಕ್ರಿಯೆಯ ತೊಂದರೆಗಳು", note: "ಆಮ್ಲೀಯತೆ, ಅಜೀರ್ಣ ಮತ್ತು ಮಲಬದ್ಧತೆ." },
          { name: "ಚರ್ಮ ಮತ್ತು ಕೂದಲಿನ ಸಮಸ್ಯೆಗಳು", note: "ಮರುಕಳಿಸುವ ಚರ್ಮದ ತೊಂದರೆಗಳು ಮತ್ತು ಕೂದಲು ಉದುರುವಿಕೆ." },
          { name: "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು", note: "ಪಟ್ಟಿಯಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಸಮಸ್ಯೆಯನ್ನೂ ವೈಯಕ್ತಿಕವಾಗಿ ಆಲಿಸಲಾಗುತ್ತದೆ." },
        ],
      },
    ],
    notSure: "ನಿಮ್ಮ ಸಮಸ್ಯೆಗೆ ಇಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಇದೆಯೇ ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ಬುಕ್ ಮಾಡುವ ಮೊದಲು ನಮ್ಮನ್ನು ಕೇಳಿ.",
  },
  medicines: {
    label: "ತ್ರಯವನ್ನೇ ಏಕೆ",
    h1: "ಸೌಮ್ಯ ಔಷಧ,",
    h2: "ನಿಮಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಿದ್ದು.",
    alt: "ಅಂಬರ್ ಬಾಟಲಿಯಿಂದ ಹಸಿರು ಎಲೆಯ ಮೇಲೆ ಚೆಲ್ಲಿದ ಹೋಮಿಯೋಪತಿ ಗುಳಿಗೆಗಳು ಮತ್ತು ಮರದ ಚಮಚ",
    promises: [
      { title: "ನೈಸರ್ಗಿಕ ಮತ್ತು ಸೌಮ್ಯ ಔಷಧಿಗಳು", body: "ಜರ್ಮನಿ, ಫ್ರಾನ್ಸ್ ಮತ್ತು ಇತರ ಪ್ರತಿಷ್ಠಿತ ದೇಶಗಳಿಂದ ತರಿಸಲಾಗುತ್ತದೆ." },
      { title: "ವೈಯಕ್ತಿಕ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಗಳು", body: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಕೇಸ್ ಇತಿಹಾಸಕ್ಕೆ ತಕ್ಕಂತೆ ರೂಪಿಸಿದ ಆರೈಕೆ." },
      { title: "ಆಲಿಸಲು ಸಮಯ", body: "ವಿವರವಾದ ಕೇಸ್ ಟೇಕಿಂಗ್, ಹೀಗಾಗಿ ನಿಮ್ಮ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಯಾವುದೂ ಆತುರದಲ್ಲಿ ಆಗುವುದಿಲ್ಲ." },
      { title: "ಎಲ್ಲಾ ವಯಸ್ಸಿನವರಿಗೆ ಆರೈಕೆ", body: "ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳಿಗೆ, ತೀವ್ರ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಸಮಸ್ಯೆಗಳಿಗೆ." },
    ],
  },
  doctor: {
    label: "ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ",
    name: "ಡಾ. ಆರ್ದ್ರಾ ಸಿ",
    degrees: "BHMS, MD (Hom.)",
    bio: "10 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ಕ್ಲಿನಿಕಲ್ ಅನುಭವ ಹೊಂದಿರುವ ಡಾ. ಆರ್ದ್ರಾ ಅವರು ಶಾಸ್ತ್ರೀಯ ಹೋಮಿಯೋಪತಿಯಲ್ಲಿ ಪರಿಣತರು. ಮಹಿಳೆಯರ ಮತ್ತು ಮಕ್ಕಳ ಆರೋಗ್ಯದ ಮೇಲೆ ವಿಶೇಷ ಗಮನ ನೀಡುವುದರ ಜೊತೆಗೆ, ಎಲ್ಲಾ ವಯಸ್ಸಿನ ರೋಗಿಗಳಿಗೆ ವಿವಿಧ ತೀವ್ರ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತಾರೆ.",
    stats: [
      { value: "10+ ವರ್ಷ", label: "ಕ್ಲಿನಿಕಲ್ ಅನುಭವ" },
      { value: "ಮಹಿಳೆಯರು ಮತ್ತು ಮಕ್ಕಳು", label: "ವಿಶೇಷ ಗಮನದ ಕ್ಷೇತ್ರ" },
    ],
    credentials: [
      { term: "ಪದವಿ", detail: "ಬ್ಯಾಚುಲರ್ ಆಫ್ ಹೋಮಿಯೋಪತಿಕ್ ಮೆಡಿಸಿನ್ ಅಂಡ್ ಸರ್ಜರಿ (BHMS)" },
      { term: "ಸ್ನಾತಕೋತ್ತರ", detail: "ಆರ್ಗನಾನ್ ಆಫ್ ಮೆಡಿಸಿನ್ ಮತ್ತು ಹೋಮಿಯೋಪತಿಕ್ ಫಿಲಾಸಫಿಯಲ್ಲಿ MD (Hom.)" },
      {
        term: "ಅಧ್ಯಯನ ಸಂಸ್ಥೆ",
        detail: "ಫಾದರ್ ಮುಲ್ಲರ್ ಹೋಮಿಯೋಪತಿಕ್ ಮೆಡಿಕಲ್ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ, ದೇರಳಕಟ್ಟೆ, ಮಂಗಳೂರು",
      },
    ],
  },
  visit: {
    label: "ನಿಮ್ಮ ಮೊದಲ ಭೇಟಿ",
    h1: "ಆರೈಕೆ ಆರಂಭಿಸಲು",
    h2: "ನಾಲ್ಕು ಸರಳ ಹಂತಗಳು.",
    steps: [
      { title: "ಬುಕ್ ಮಾಡಿ", body: "ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಸಮಸ್ಯೆಯನ್ನು ಕಳುಹಿಸಿ. ಸಮಾಲೋಚನೆಯ ಸಮಯವನ್ನು ನಾವು ನಿಮ್ಮೊಂದಿಗೆ ಖಚಿತಪಡಿಸುತ್ತೇವೆ." },
      { title: "ಮಾತುಕತೆ", body: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳು, ಇತಿಹಾಸ ಮತ್ತು ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದರ ಬಗ್ಗೆ ವಿವರವಾದ ಸಂಭಾಷಣೆ." },
      { title: "ಚಿಕಿತ್ಸೆ ಆರಂಭ", body: "ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಕೇಸ್ ಇತಿಹಾಸಕ್ಕೆ ತಕ್ಕಂತೆ ವೈಯಕ್ತಿಕ ಔಷಧ." },
      { title: "ಪರಿಶೀಲನೆ", body: "ಫಾಲೋ-ಅಪ್ ಭೇಟಿಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಗಮನಿಸಿ, ಆರೋಗ್ಯ ಬದಲಾದಂತೆ ಚಿಕಿತ್ಸೆಯನ್ನು ಹೊಂದಿಸಲಾಗುತ್ತದೆ." },
    ],
  },
  faq: {
    label: "ಪ್ರಶ್ನೆಗಳು",
    h1: "ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿರುವ",
    h2: "ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ.",
    stillTitle: "ಇನ್ನೂ ಪ್ರಶ್ನೆ ಇದೆಯೇ?",
    stillBody: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ, ಬುಕ್ ಮಾಡುವ ಮೊದಲೇ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    askWhatsapp: "WhatsApp ನಲ್ಲಿ ಕೇಳಿ",
    items: [
      {
        q: "ಮೊದಲ ಸಮಾಲೋಚನೆಯಲ್ಲಿ ಏನಾಗುತ್ತದೆ?",
        a: "ಮೊದಲ ಭೇಟಿ ಒಂದು ವಿವರವಾದ ಸಂಭಾಷಣೆ. ನಿಮ್ಮ ಈಗಿನ ಸಮಸ್ಯೆ, ಆರೋಗ್ಯ ಇತಿಹಾಸ, ದಿನಚರಿ ಮತ್ತು ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದರ ಬಗ್ಗೆ ಡಾ. ಆರ್ದ್ರಾ ಅವರು ಕೇಳುತ್ತಾರೆ. ಹೀಗಾಗಿ ಔಷಧವನ್ನು ನಿಮಗೆಂದೇ ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ.",
      },
      {
        q: "ತ್ರಯ ಹೋಮಿಯೋಪತಿಯಲ್ಲಿ ಯಾರು ಸಮಾಲೋಚನೆ ಪಡೆಯಬಹುದು?",
        a: "ಎಲ್ಲಾ ವಯಸ್ಸಿನ ರೋಗಿಗಳಿಗೂ ಸ್ವಾಗತ. ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲಾಗುತ್ತದೆ, ಮಹಿಳೆಯರ ಮತ್ತು ಮಕ್ಕಳ ಆರೋಗ್ಯದ ಮೇಲೆ ವಿಶೇಷ ಗಮನದೊಂದಿಗೆ.",
      },
      {
        q: "ನಾನು ಈಗ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಔಷಧಿಗಳನ್ನು ನಿಲ್ಲಿಸಬೇಕೇ?",
        a: "ಇಲ್ಲ. ವೈದ್ಯರು ಸೂಚಿಸಿದ ಯಾವುದೇ ಔಷಧಿಯನ್ನು ನೀವಾಗಿಯೇ ನಿಲ್ಲಿಸಬೇಡಿ ಅಥವಾ ಬದಲಾಯಿಸಬೇಡಿ. ನಿಮ್ಮ ಈಗಿನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ಗಳು ಮತ್ತು ವರದಿಗಳನ್ನು ಸಮಾಲೋಚನೆಗೆ ತನ್ನಿ, ಅವುಗಳನ್ನು ನಿಮ್ಮ ಕೇಸ್‌ನ ಭಾಗವಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.",
      },
      {
        q: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗೆ ನಾನು ಏನನ್ನು ತರಬೇಕು?",
        a: "ಇತ್ತೀಚಿನ ವೈದ್ಯಕೀಯ ವರದಿಗಳು, ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ಔಷಧಿಗಳ ಪಟ್ಟಿ ಮತ್ತು ನಿಮ್ಮ ಲಕ್ಷಣಗಳ ಬಗ್ಗೆ ಟಿಪ್ಪಣಿಗಳು: ಅವು ಯಾವಾಗ ಆರಂಭವಾದವು, ಯಾವುದರಿಂದ ಕಡಿಮೆ ಅಥವಾ ಹೆಚ್ಚಾಗುತ್ತವೆ ಮತ್ತು ನೀವು ಗಮನಿಸಿದ ಇತರ ವಿಷಯಗಳು.",
      },
      {
        q: "ಔಷಧಿಗಳು ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?",
        a: "ತ್ರಯ ಹೋಮಿಯೋಪತಿಯು ಜರ್ಮನಿ, ಫ್ರಾನ್ಸ್ ಮತ್ತು ಇತರ ಪ್ರತಿಷ್ಠಿತ ದೇಶಗಳಿಂದ ತರಿಸಿದ ನೈಸರ್ಗಿಕ ಮತ್ತು ಸೌಮ್ಯ ಹೋಮಿಯೋಪತಿ ಔಷಧಿಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
      },
    ],
  },
  booking: {
    label: "ನಿಮ್ಮ ಆರೈಕೆ ಆರಂಭಿಸಿ",
    h1: "ನಿಮ್ಮ ಸಮಾಲೋಚನೆಯನ್ನು",
    h2: "ಬುಕ್ ಮಾಡಿ.",
    intro: "ಕೆಲವು ವಿವರಗಳನ್ನು ನೀಡಿ; ನಿಮ್ಮ ವಿನಂತಿ WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಲು ಸಿದ್ಧವಾಗಿ ತೆರೆಯುತ್ತದೆ. ಸಮಾಲೋಚನೆಯ ಸಮಯವನ್ನು ನಾವು ನಿಮ್ಮೊಂದಿಗೆ ಖಚಿತಪಡಿಸುತ್ತೇವೆ.",
    reassurances: [
      "ನಿಮ್ಮ ವಿನಂತಿಯೊಂದಿಗೆ WhatsApp ಕಳುಹಿಸಲು ಸಿದ್ಧವಾಗಿ ತೆರೆಯುತ್ತದೆ",
      "ನೀವು ಕಳುಹಿಸು ಒತ್ತಿದಾಗ ಮಾತ್ರ ನಿಮ್ಮ ವಿವರಗಳು ಹಂಚಿಕೆಯಾಗುತ್ತವೆ",
      "ಎಲ್ಲಾ ವಯಸ್ಸಿನ ರೋಗಿಗಳಿಗೂ ಸ್ವಾಗತ",
    ],
    callOrWhatsapp: (n: string) => `ಕರೆ ಅಥವಾ WhatsApp ${n}`,
    whatsappOnly: (n: string) => `WhatsApp ${n}`,
    name: "ಪೂರ್ಣ ಹೆಸರು",
    phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
    concern: "ಯಾವುದಕ್ಕೆ ಸಹಾಯ ಬೇಕು?",
    concernPlaceholder: "ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ (ಐಚ್ಛಿಕ)",
    concernOptions: [
      "ಮಹಿಳೆಯರ ಆರೋಗ್ಯ",
      "ಮಕ್ಕಳ ಆರೋಗ್ಯ",
      "ಜ್ವರ ಅಥವಾ ತೀವ್ರ ಕಾಯಿಲೆ",
      "ಅಲರ್ಜಿಗಳು",
      "ಉಸಿರಾಟದ ತೊಂದರೆಗಳು",
      "ಜೀರ್ಣಕ್ರಿಯೆಯ ತೊಂದರೆಗಳು",
      "ಚರ್ಮ ಅಥವಾ ಕೂದಲಿನ ಸಮಸ್ಯೆಗಳು",
      "ಮುಟ್ಟಿನ ಅಥವಾ ಹಾರ್ಮೋನ್ ಸಮಸ್ಯೆಗಳು",
      "PCOD / PCOS",
      "ಬೇರೆ ಏನಾದರೂ",
    ],
    message: "ನಾವು ತಿಳಿಯಬೇಕಾದ ಇನ್ನೇನಾದರೂ",
    messageHint: "ಐಚ್ಛಿಕ. WhatsApp ನಲ್ಲಿ ನೀವು ಕಳುಹಿಸು ಒತ್ತಿದಾಗ ಮಾತ್ರ ನಿಮ್ಮ ವಿವರಗಳು ಹಂಚಿಕೆಯಾಗುತ್ತವೆ.",
    emergency: "ವೈದ್ಯಕೀಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ದಯವಿಟ್ಟು ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಿ.",
    submit: "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",
    sent: "ನಿಮ್ಮ ವಿನಂತಿಯೊಂದಿಗೆ WhatsApp ತೆರೆದಿದೆ. ನಮ್ಮನ್ನು ತಲುಪಲು ಅಲ್ಲಿ ಕಳುಹಿಸು ಒತ್ತಿ.",
    errName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    errPhone: "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
  },
  location: {
    h1: "ಕ್ಲಿನಿಕ್‌ಗೆ",
    h2: " ಭೇಟಿ ನೀಡಿ.",
    directions: "ದಾರಿ ತೋರಿಸಿ",
    showMap: "ನಕ್ಷೆ ತೋರಿಸಿ",
    mapTitle: (name: string) => `${name} ಇರುವ ನಕ್ಷೆ`,
  },
  footer: {
    blurb: "ಮಹಿಳೆಯರು, ಪುರುಷರು, ಮಕ್ಕಳು ಮತ್ತು ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ಶಾಸ್ತ್ರೀಯ ಹೋಮಿಯೋಪತಿ.",
    explore: "ಪುಟದಲ್ಲಿ",
    contact: "ಸಂಪರ್ಕ",
    callOrWhatsapp: "ಕರೆ ಅಥವಾ WhatsApp",
    logoAlt: "ಡಾ. ಆರ್ದ್ರಾ ಅವರ ತ್ರಯ ಹೋಮಿಯೋಪತಿ. ದೇಹ, ಮನಸ್ಸು ಮತ್ತು ಆತ್ಮದ ಪೋಷಣೆ.",
    disclaimer: "ಈ ಜಾಲತಾಣದಲ್ಲಿನ ಮಾಹಿತಿ ಸಾಮಾನ್ಯವಾದದ್ದು; ಇದು ವೈದ್ಯಕೀಯ ಸಮಾಲೋಚನೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
    footerNav: "ಅಡಿಟಿಪ್ಪಣಿ",
  },
};

const dict: Record<Locale, Content> = { en, kn };

export const getContent = (locale: Locale = "en"): Content => dict[locale];

/** English names, so WhatsApp messages reach the clinic in one language whatever the page language. */
export const englishConditionName = (group: number, item: number) =>
  conditionGroups[group].items[item].name;

export { site };
