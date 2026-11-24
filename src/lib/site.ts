import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  Baby,
  Brain,
  CalendarCheck,
  ChatCircleDots,
  ClipboardText,
  Flower,
  FlowerLotus,
  GenderFemale,
  GlobeHemisphereEast,
  HandHeart,
  Heart,
  Heartbeat,
  Leaf,
  Pill,
  Drop,
  Stethoscope,
  Thermometer,
  UsersThree,
  Wind,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Clinic details. Anything left as an empty string is hidden on the page,
 * so nothing invented is ever shown to patients. Fill these in before launch.
 */
export const site = {
  name: "Thraya Homeopathy",
  tagline: "Nurturing Body, Mind and Spirit",
  description:
    "Classical homeopathy clinic led by Dr. Ardhra C. Personalised care for women, men, children and the entire family.",
  /** Digits only with country code, e.g. "919876543210". Powers every booking button. */
  whatsapp: "918089249962",
  /** WhatsApp number as shown to visitors. */
  whatsappDisplay: "+91 80892 49962",
  /** Display format, e.g. "+91 98765 43210". Not confirmed for calls yet. */
  phone: "+91 80892 49962",
  email: "",
  clinicName: "Dr. Ardhra's Thraya Homeopathic Clinic",
  /** Address lines as listed on Google Maps. */
  address: [
    "Shop No. 09, Ground Floor, Shri & Shri Arcade",
    "Sarjapur - Marathahalli Road, Sompura",
    "Bengaluru, Karnataka 562125",
  ],
  hours: "",
  mapsUrl: "https://maps.app.goo.gl/UHhXKt7XrYkirjgc9",
  /** Map pin from the Google Maps listing. */
  geo: { lat: 12.8651792, lng: 77.7745059 },
};

export const photo = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

/** Placeholder stock photography. Swap for real clinic and doctor photos before launch. */
export const photos = {
  family: photo("1624434070018-4a74c7d91715"),
  motherDaughter: photo("1589169011402-8b2cbd1ee593"),
  grandmotherBaby: photo("1768657891765-2c5619ba1914"),
  globules: photo("1584982751601-97dcc096659c"),
  doctor: photo("1757125736482-328a3cdd9743"),
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "What We Treat", href: "#care" },
  { label: "Your Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
];

export type Tone = "clay" | "gold" | "forest";

/** Icon tile colours, matched to the three parts of the logo. */
export const toneStyles: Record<Tone, { tile: string; icon: string; bar: string }> = {
  clay: { tile: "bg-clay-soft", icon: "text-clay", bar: "bg-clay" },
  gold: { tile: "bg-gold-soft", icon: "text-gold-ink", bar: "bg-gold" },
  forest: { tile: "bg-leaf-soft", icon: "text-forest", bar: "bg-forest" },
};

/** The three parts of the Thraya mark: heart, mind and the figure that holds them. */
export const triad: { word: string; icon: Icon; tone: Tone; body: string }[] = [
  {
    word: "Body",
    icon: Heart,
    tone: "clay",
    body: "Physical symptoms are explored in detail: where they appear, when they began and what changes them.",
  },
  {
    word: "Mind",
    icon: Brain,
    tone: "gold",
    body: "How you sleep, feel and cope with stress is part of your case, not a side note.",
  },
  {
    word: "Spirit",
    icon: FlowerLotus,
    tone: "forest",
    body: "Your temperament and life as a whole guide the choice of remedy.",
  },
];

export const conditionGroups: {
  title: string;
  intro: string;
  tone: Tone;
  items: { name: string; note: string; icon: Icon }[];
}[] = [
  {
    title: "Women's health",
    intro: "Care through every stage, with privacy and patience.",
    tone: "clay",
    items: [
      {
        name: "Menstrual & hormonal disorders",
        note: "Irregular or painful cycles and hormonal imbalance.",
        icon: GenderFemale,
      },
      { name: "PCOD / PCOS", note: "Cycles, symptoms and overall health, together.", icon: Heartbeat },
    ],
  },
  {
    title: "Acute & everyday illness",
    intro: "Timely, gentle care for children and adults.",
    tone: "gold",
    items: [
      { name: "Fever", note: "Sudden fevers in children and adults.", icon: Thermometer },
      { name: "Allergies", note: "Sneezing, itching and seasonal flare-ups.", icon: Flower },
      { name: "Respiratory complaints", note: "Coughs, colds, chest and sinus trouble.", icon: Wind },
    ],
  },
  {
    title: "Long-standing concerns",
    intro: "Chronic complaints, looked at as a whole.",
    tone: "forest",
    items: [
      { name: "Digestive disorders", note: "Acidity, indigestion and constipation.", icon: Leaf },
      { name: "Skin & hair conditions", note: "Recurring skin complaints and hair fall.", icon: Drop },
      { name: "General health concerns", note: "Anything not listed, heard individually.", icon: Stethoscope },
    ],
  },
];

export const focusAreas: { label: string; icon: Icon; tone: Tone }[] = [
  { label: "Women's Health", icon: GenderFemale, tone: "clay" },
  { label: "Children's Health", icon: Baby, tone: "gold" },
  { label: "Family Healthcare", icon: UsersThree, tone: "forest" },
];

export const promises: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Natural & gentle medicines",
    body: "Sourced from Germany, France and other reputed countries.",
    icon: GlobeHemisphereEast,
  },
  {
    title: "Personalised treatment plans",
    body: "Individualised care tailored to your health concerns and case history.",
    icon: ClipboardText,
  },
  {
    title: "Time to listen",
    body: "Detailed case-taking, so nothing about your health is rushed.",
    icon: ChatCircleDots,
  },
  {
    title: "Care for every age",
    body: "Women, men and children, for acute and chronic concerns.",
    icon: HandHeart,
  },
];

export const steps: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Book",
    body: "Send your name and concern. We will confirm a consultation time with you.",
    icon: CalendarCheck,
  },
  {
    title: "Talk",
    body: "A detailed conversation about your symptoms, history and how you have been feeling.",
    icon: ChatCircleDots,
  },
  {
    title: "Begin treatment",
    body: "An individualised prescription, tailored to your concerns and case history.",
    icon: Pill,
  },
  {
    title: "Review",
    body: "Follow-ups track your progress and adjust treatment as your health changes.",
    icon: ArrowsClockwise,
  },
];

/** Draft answers. Please have Dr. Ardhra review before launch. */
export const faqs = [
  {
    q: "What happens in a first consultation?",
    a: "The first visit is a detailed conversation. Dr. Ardhra asks about your present complaint, your health history, your routine and how you have been feeling, so the prescription can be chosen for you as an individual.",
  },
  {
    q: "Who can consult at Thraya Homeopathy?",
    a: "Patients of all ages are welcome. The clinic sees women, men and children, with a special focus on women's and children's health.",
  },
  {
    q: "Should I stop my current medicines?",
    a: "No. Please do not stop or change any prescribed medicine on your own. Bring your current prescriptions and reports to the consultation so they can be considered as part of your case.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Any recent medical reports, a list of medicines you take, and notes on your symptoms: when they started, what makes them better or worse, and anything else you have noticed.",
  },
  {
    q: "Where do the medicines come from?",
    a: "Thraya Homeopathy uses natural and gentle homeopathic medicines sourced from Germany, France and other reputed countries.",
  },
];

export const concernOptions = [
  "Women's health",
  "Children's health",
  "Fever or acute illness",
  "Allergies",
  "Respiratory complaints",
  "Digestive disorders",
  "Skin or hair conditions",
  "Menstrual or hormonal concerns",
  "PCOD / PCOS",
  "Something else",
];

/** True when the call number is the WhatsApp number, so the site lists it once. */
export const phoneIsWhatsapp =
  site.phone.replace(/\D/g, "") === site.whatsapp.replace(/\D/g, "");

export const waLink = (text?: string) => {
  const base = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "https://wa.me/";
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
