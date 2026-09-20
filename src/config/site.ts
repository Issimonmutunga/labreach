export const site = {
  brandName: "LabReach",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  whatsapp: "[WHATSAPP NUMBER]",
  location: "Nairobi, Kenya",
  /** Replace with the production URL before launch. */
  siteUrl: "https://labreach.example",
  /** Replace with Jeff's real portrait file when available (keep the path constant or update here). */
  leadPhoto: "/images/lead-phlebotomist.svg",
  /** Replace with a real editorial photograph when available. */
  heroImage: "/images/hero-photograph.svg",
  /** Optional real form endpoint (e.g. a form service URL). When empty, the
   * booking form completes client-side with a confirmation + WhatsApp handoff. */
  formEndpoint: "",
};

const DIGITS = /\d/;

export function hasRealPhone(value: string): boolean {
  return DIGITS.test(value) && !value.includes("[") && !value.includes("]");
}

export function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, "");
}

export function telLink(): string | null {
  if (!hasRealPhone(site.phone)) return null;
  return `tel:${digitsOnly(site.phone)}`;
}

export function mailLink(): string | null {
  if (!hasRealPhone(site.email)) return null;
  return `mailto:${site.email}`;
}

export function whatsappLink(message: string): string | null {
  if (!hasRealPhone(site.whatsapp)) return null;
  const text = encodeURIComponent(message);
  return `https://wa.me/${digitsOnly(site.whatsapp)}?text=${text}`;
}

/** WhatsApp prefill used across the site. */
export const WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about home laboratory sample collection.";