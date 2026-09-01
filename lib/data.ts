export interface Product {
  id: string;
  title: string;
  category: "living" | "bedroom" | "dining" | "bespoke";
  categoryLabel: string;
  badge?: string;
  priceTag?: string;
  image: string;
  tagline: string;
  description: string;
  materials: string[];
  dimensions?: string;
  leadTime?: string;
  featured?: boolean;
}

export const collectionsData: Product[] = [
  {
    id: "classic-sovereign-suite",
    title: "Classic Sovereign Living Suite",
    category: "living",
    categoryLabel: "Living Room",
    badge: "Bespoke Teak",
    priceTag: "Inquire for Custom Quote",
    image: "/images/hero.webp",
    tagline: "Handcrafted Solid Teak with Gold Leafing",
    description:
      "A statement ensemble featuring ornate hand-carved solid hardwood frameworks, crowned crown-molding aesthetics, and premium high-density velvet upholstery for regal living spaces.",
    materials: ["Seasoned Teak Wood", "Italian Cut Velvet", "High-Resilience HR Foam", "Antiqued Gold Detailing"],
    dimensions: "3-Seater: 220cm x 95cm x 110cm",
    leadTime: "3 to 4 Weeks Custom Order",
    featured: true,
  },
  {
    id: "royal-embroidery-lounge",
    title: "The Royal Indigo Embroidery Suite",
    category: "living",
    categoryLabel: "Living Room",
    badge: "Master Artisan",
    priceTag: "Bespoke Made to Order",
    image: "/images/living-blue.webp",
    tagline: "Jewel-Toned Velvet with Hand-Embroidered Crests",
    description:
      "Sculpted for connoisseurs of classical grandeur. Deep indigo upholstery with intricate thread embroidery and curved hardwood crest rails designed for conversational grandeur.",
    materials: ["Kiln-Dried Hardwood", "Embroidered Royal Blue Velvet", "Dual-Layer Cushioning", "Brass Studding"],
    dimensions: "Modular 3+2+1 Configuration",
    leadTime: "Bespoke Made to Order",
    featured: true,
  },
  {
    id: "contemporary-minimalist-suite",
    title: "The Architectural Grey Sectional",
    category: "living",
    categoryLabel: "Living Room",
    badge: "New Arrival",
    priceTag: "Ready in Showroom",
    image: "/images/living-grey.webp",
    tagline: "Clean Geometric Lines with Tailored Chenille Weave",
    description:
      "Designed for modern penthouse and urban villa living. Low-profile seating with expansive lounge depth, structural hardwood framing, and stain-resistant woven fabrics.",
    materials: ["Solid Treated Mahogany", "Textured Neutral Fabric", "Pocket Spring Core", "Brushed Metal Accents"],
    dimensions: "280cm x 180cm L-Shape Sectional",
    leadTime: "Ready in Showroom / Custom Sizing",
  },
  {
    id: "artisanal-minimalist-king",
    title: "The Zen Minimalist King Bed",
    category: "bedroom",
    categoryLabel: "Bedroom Collection",
    badge: "100% Solid Teak",
    priceTag: "Custom Dimensions Available",
    image: "/images/bedroom.webp",
    tagline: "Natural Grain Hardwood with Low-Profile Floating Base",
    description:
      "A serene master bedroom sanctuary piece crafted from hand-selected solid timber slabs with floating cantilever nightstands and integrated ambient backlight provisions.",
    materials: ["100% Solid Seasoned Wood", "Organic Matte Satin Finish", "Solid Slatted Support", "Concealed Fasteners"],
    dimensions: "King: 200cm x 210cm x 105cm Headboard",
    leadTime: "Customizable Dimensions",
    featured: true,
  },
  {
    id: "luxury-tufted-master-bed",
    title: "The Regal Architectural Bedstead",
    category: "bedroom",
    categoryLabel: "Bedroom Collection",
    badge: "Seasoned Hardwood",
    priceTag: "Inquire for Quote",
    image: "/images/bedroom-detail.webp",
    tagline: "Deep Diamond Tufting with Fluted Timber Framing",
    description:
      "Grand scale master bed with hand-pulled deep button tufting, fluted wooden pilasters, and optional matching velvet end-of-bed bench and drawer storage.",
    materials: ["Seasoned Teak Core", "Plush Upholstered Headboard", "Anti-Creak Joinery", "Satin Brass Trim"],
    dimensions: "Super King / Standard King Available",
    leadTime: "3 Weeks Handcrafting",
  },
  {
    id: "imperial-hardwood-dining",
    title: "The Imperial 8-Seater Dining Ensemble",
    category: "dining",
    categoryLabel: "Dining Collection",
    badge: "Bespoke Teak",
    priceTag: "6 & 8 Seater Variants",
    image: "/images/dining.webp",
    tagline: "Solid Sawn Timber Table with Ergonomic High-Back Chairs",
    description:
      "The centerpiece of unforgettable family dinners and formal entertaining. A massive mirror-finish solid dining table accompanied by 8 master-carved cushioned dining chairs.",
    materials: ["Solid Chittagong Teak", "Polyurethane Heat-Resistant Coat", "High-Density Foam Seating", "Reinforced Tenon Joinery"],
    dimensions: "Table: 240cm x 110cm x 76cm",
    leadTime: "6 & 8 Seater Variants",
    featured: true,
  },
  {
    id: "grand-banquet-sculptural-set",
    title: "The Contemporary Banquet Set",
    category: "dining",
    categoryLabel: "Dining Collection",
    badge: "New Arrival",
    priceTag: "Showroom Collection",
    image: "/images/dining-portrait.webp",
    tagline: "Sculptural Trestle Pedestal with Sculpted Backrests",
    description:
      "A harmonious blend of architectural modernism and timeless carpentry, designed to maximize legroom and celebrate the natural richness of timber grain.",
    materials: ["Kiln-Dried Hardwood", "Woven Jacquard Upholstery", "Hand-Rubbed Oil Polish", "Brass Glides"],
    dimensions: "Table: 210cm x 100cm x 76cm",
    leadTime: "Custom Tailored Finishes",
  },
  {
    id: "heritage-fluted-showcase",
    title: "The Grand Heritage Credenza & Showcase",
    category: "bespoke",
    categoryLabel: "Storage & Showcase",
    badge: "Architectural Showcase",
    priceTag: "Built-to-Fit Consultation",
    image: "/images/craft.webp",
    tagline: "Beveled Glass Doors with Integrated Concealed LED Illumination",
    description:
      "A bespoke storage monument built for fine china, curated collectibles, and architectural display. Precision fluted mouldings, mortise joints, and soft-close German hardware.",
    materials: ["Seasoned Hardwood Core", "Toughened Beveled Glass", "Soft-Close Hinges", "Warm Architectural LEDs"],
    dimensions: "200cm x 45cm x 215cm Height",
    leadTime: "Bespoke Built-to-Fit",
    featured: true,
  },
  {
    id: "bespoke-minimalist-cabinet",
    title: "The Architectural Shoe & Entryway Console",
    category: "bespoke",
    categoryLabel: "Storage & Showcase",
    badge: "Minimalist Entryway",
    priceTag: "Custom Quote Available",
    image: "/images/bespoke-cabinet.webp",
    tagline: "Louvered Ventilation Slats with Slim Quartz Top",
    description:
      "An essential entryway showpiece combining seamless dust-free shoe storage, ventilated wooden slats, and a drawer compartment for daily essentials.",
    materials: ["Moisture-Resistant Treated Timber", "Concealed Drawer Runners", "Louvered Solid Doors", "Matte Brass Handles"],
    dimensions: "120cm x 38cm x 105cm",
    leadTime: "Custom Widths Available",
  },
];

export interface FinishOption {
  id: string;
  name: string;
  hex: string;
  tone: string;
  woodType: string;
  grainDescription: string;
}

export const finishOptions: FinishOption[] = [
  {
    id: "teak-natural",
    name: "Golden Chittagong Teak",
    hex: "#B38E46",
    tone: "Warm Amber & Honey",
    woodType: "100% Solid Seasoned Teak",
    grainDescription: "Lustrous wavy grain with natural silica protection against humidity.",
  },
  {
    id: "walnut-imperial",
    name: "Imperial Dark Walnut",
    hex: "#3D2B1F",
    tone: "Deep Espresso & Mocha",
    woodType: "Hand-Stained Seasoned Hardwood",
    grainDescription: "Tight, dense architectural grain offering refined modern luxury.",
  },
  {
    id: "mahogany-heritage",
    name: "Heritage Royal Mahogany",
    hex: "#5C2018",
    tone: "Rich Reddish-Brown & Bordeaux",
    woodType: "Dense Kiln-Dried Mahogany",
    grainDescription: "Silky smooth ribbon grain with deep reflective chatoyancy.",
  },
  {
    id: "charcoal-noir",
    name: "Architectural Noir Oak",
    hex: "#1F2322",
    tone: "Matte Ebonized Charcoal",
    woodType: "Textured Open-Pore Hardwood",
    grainDescription: "Bold contemporary wire-brushed finish revealing tactile organic ridges.",
  },
];

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  title: string;
  subtitle: string;
  detail: string;
}

export const signatureHotspots: Hotspot[] = [
  {
    id: "crest-carving",
    top: "22%",
    left: "48%",
    title: "Master Hand-Carved Crest",
    subtitle: "Artisanal Wood Sculpting",
    detail: "Carved from a single continuous block of seasoned hardwood by master artisans with over 20 years of craftsmanship heritage in Chattogram.",
  },
  {
    id: "upholstery-comfort",
    top: "54%",
    left: "32%",
    title: "Ergonomic Triple-Layer Core",
    subtitle: "Italian Cut Velvet & HR Foam",
    detail: "40-density high-resilience foam wrapped in hypoallergenic microfiber and upholstered in heavy-weight stain-resistant velvet.",
  },
  {
    id: "joinery-foundation",
    top: "78%",
    left: "72%",
    title: "Mortise & Tenon Joinery",
    subtitle: "10-Year Structural Integrity",
    detail: "Traditional interlocking wood joinery reinforced with corner blocks and kiln-dried timber for zero creaking and lifetime endurance.",
  },
];

export const bespokeSteps = [
  {
    step: "01",
    title: "Discovery & Space Analysis",
    subtitle: "Complimentary Consultation",
    description:
      "We discuss your lifestyle, aesthetic vision, spatial layout, and functional needs. Our interior designers evaluate your floor plan and lighting conditions.",
    icon: "Compass",
  },
  {
    step: "02",
    title: "3D CAD & Material Curation",
    subtitle: "Architectural Tailoring",
    description:
      "We craft detailed 3D mockups and present authentic wood samples, imported velvet swatches, leather grades, and hardware finishes for your approval.",
    icon: "Ruler",
  },
  {
    step: "03",
    title: "Artisanal Hand-Crafting",
    subtitle: "Seasoning & Precision Carpentry",
    description:
      "Your pieces are individually shaped in our workshop using chemically seasoned, kiln-dried hardwood, hand-carved accents, and multi-stage lacquer finishes.",
    icon: "Hammer",
  },
  {
    step: "04",
    title: "White-Glove Installation",
    subtitle: "Turnkey Showroom Quality",
    description:
      "Our specialized setup team delivers, positions, and installs each bespoke piece with meticulous care across Chattogram and nationwide.",
    icon: "Truck",
  },
];

export const craftsmanshipPillars = [
  {
    title: "100% Kiln-Dried Hardwood",
    description: "Every timber beam is scientifically dried to 8-12% moisture content, preventing warping, shrinkage, and climate-induced cracks.",
    highlight: "Termite & Borer Immune",
  },
  {
    title: "Generational Joinery",
    description: "Interlocking mortise-and-tenon joints engineered to bear structural loads without relying on temporary surface adhesives.",
    highlight: "10-Year Structural Warranty",
  },
  {
    title: "Artisanal Hand Finishing",
    description: "Seven-layer hand-rubbed Italian polyurethane and natural wax coats that accentuate authentic wood grain while resisting heat and spills.",
    highlight: "Satin Silk Touch",
  },
  {
    title: "Tailored to the Millimeter",
    description: "Every wardrobe, dining table, sofa suite, and console is customized to fit your architectural alcoves and living proportions flawlessly.",
    highlight: "100% Bespoke Sizing",
  },
];

export const brandMilestones = [
  { year: "2020", event: "Heaven Furniture Mart founded in Chattogram with a vision for bespoke luxury." },
  { year: "2021", event: "Inauguration of the expansive flagship showroom on Agrabad Access Road." },
  { year: "2024", event: "Showcased bespoke collections at the International Furniture Fair Chattogram." },
  { year: "2025", event: "Inducted as member of Chamber of Commerce & recognized nationwide by BFIOA." },
];
