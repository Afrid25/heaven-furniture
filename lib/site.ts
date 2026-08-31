export const site = {
  name: "Heaven Furniture Mart",
  shortName: "Heaven Furniture",
  slogan: "Designed. Crafted. Customized.",
  tagline: "Crafting Bespoke Luxury for Inspired Living",
  category: "Luxury / Bespoke Furniture & Interior Styling",
  founded: 2020,
  registration: "Chamber of Commerce & BFIOA Recognized",
  md: "MD Abul Kalam Bhuiyan",
  role: "Managing Director",
  quote:
    "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
  phone: "+880 1960-481983",
  phoneRaw: "8801960481983",
  phoneHref: "tel:+8801960481983",
  whatsappHref: "https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20furniture%20and%20interior%20collections.",
  email: "heavenfurnituremart@gmail.com",
  emailConsult: "mailto:heavenfurnituremart@gmail.com?subject=Bespoke%20Furniture%20Consultation%20Inquiry",
  emailCustom: "mailto:heavenfurnituremart@gmail.com?subject=Custom%20Interior%20Project%20Inquiry",
  addressLine: "Agrabad Access Road",
  city: "Chattogram, Bangladesh",
  fullAddress: "Agrabad Access Road, Chattogram, Bangladesh",
  maps: "https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram+Bangladesh",
  hours: {
    weekdays: "Saturday – Thursday: 10:00 AM – 9:30 PM",
    friday: "Friday: 2:30 PM – 9:30 PM",
  },
  social: {
    facebook: "https://facebook.com/HeavenFurnitureMart",
    instagram: "https://instagram.com/HeavenFurnitureMart",
    youtube: "https://youtube.com/@HeavenFurnitureMart",
    whatsapp: "https://wa.me/8801960481983",
  },
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/8801960481983?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#collections", label: "Collections" },
  { href: "#signature", label: "Signature" },
  { href: "#bespoke", label: "Bespoke" },
  { href: "#craftsmanship", label: "Craft" },
  { href: "#showroom", label: "Showroom" },
  { href: "#consultation", label: "Consultation" },
] as const;

