export const site = {
  brandName: "LabReach",
  phone: "0726049872",
  whatsapp: "0726049872",
  email: "",
  location: "Nairobi, Kenya",
  /** Production deployment URL. */
  siteUrl: "https://labreach-tau.vercel.app",
  /** Lead phlebotomist portrait. */
  leadPhoto: "/images/lead-phlebotomist.jpg",
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
  const local = digitsOnly(site.whatsapp);
  const international = local.startsWith("0") ? `254${local.slice(1)}` : local;
  return `https://wa.me/${international}?text=${text}`;
}

/** WhatsApp prefill used across the site. */
export const WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about home laboratory sample collection.";