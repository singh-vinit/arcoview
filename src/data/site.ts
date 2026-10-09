const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Hospitality';
  year: string;
  hero: string;
  thumb: string;
  description: string;
  approach: string;
  materials: string[];
  area: string;
  gallery: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'villa-no-07',
    title: 'Villa No. 07',
    location: 'New Delhi',
    category: 'Residential',
    year: '2026',
    hero: img('photo-1600585154340-be6161a56a0c', 2000),
    thumb: img('photo-1600585154340-be6161a56a0c'),
    description:
      'Villa No. 07 explores the relationship between privacy, natural light and open space. The residence is organized around a central courtyard that becomes the visual and social heart of the home.',
    approach:
      'We began with the courtyard — not as leftover space, but as the organising idea. Every primary room borrows light from it, and circulation wraps around it like a quiet gallery. Deep overhangs temper the Delhi sun, while sliding screens let the family tune privacy hour by hour. The plan is deliberately simple: two bars of rooms held apart by open sky.',
    materials: ['Hand-finished lime plaster', 'Terrazzo', 'Teak', 'Brushed brass', 'Local sandstone'],
    area: '4,800 sq ft',
    gallery: [
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1600585154526-990dced4db0d'),
    ],
    featured: true,
  },
  {
    slug: 'the-courtyard',
    title: 'The Courtyard',
    location: 'Gurugram',
    category: 'Residential',
    year: '2025',
    hero: img('photo-1600596542815-ffad4c1539a9', 2000),
    thumb: img('photo-1600596542815-ffad4c1539a9'),
    description:
      'A contemporary residence shaped around light, landscape and privacy. Rooms unfold in sequence, each framing a different relationship with the garden.',
    approach:
      'The brief asked for openness without exposure. Our answer was a house that turns inward: a low-slung volume wrapped around a sequence of planted courts. Water, shade and filtered light do the work of walls. Inside, a restrained palette of stone and timber lets the landscape carry the colour.',
    materials: ['Exposed concrete', 'Kota stone', 'White oak', 'Linen', 'Blackened steel'],
    area: '6,200 sq ft',
    gallery: [
      img('photo-1600596542815-ffad4c1539a9'),
      img('photo-1600607687920-4e2a09cf159d'),
      img('photo-1615874959474-d609969a20ed'),
      img('photo-1618221195710-dd6b41faaea6'),
      img('photo-1600566753190-17f0baa2a6c3'),
    ],
    featured: true,
  },
  {
    slug: 'house-of-light',
    title: 'House of Light',
    location: 'Noida',
    category: 'Interior',
    year: '2025',
    hero: img('photo-1618221195710-dd6b41faaea6', 2000),
    thumb: img('photo-1618221195710-dd6b41faaea6'),
    description:
      'An interior renovation that treats daylight as the primary building material — carving openings, mirrors and pale surfaces to pull sun deep into the plan.',
    approach:
      'The existing apartment was dark and compartmentalised. Rather than adding fixtures, we removed: partitions came down, a borrowed-light slot opened between kitchen and living, and a palette of chalk, oak and soft brass was tuned to bounce the afternoon sun. Every design decision was tested against one question — does it bring in more light?',
    materials: ['Chalk plaster', 'White oak', 'Soft brass', 'Bouclé wool', 'Honed marble'],
    area: '2,400 sq ft',
    gallery: [
      img('photo-1618221195710-dd6b41faaea6'),
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1615873968403-89e068629265'),
      img('photo-1615529182904-14819c35db37'),
      img('photo-1616594039964-ae9021a400a0'),
    ],
  },
  {
    slug: 'the-atelier',
    title: 'The Atelier',
    location: 'New Delhi',
    category: 'Commercial',
    year: '2024',
    hero: img('photo-1497366216548-37526070297c', 2000),
    thumb: img('photo-1497366216548-37526070297c'),
    description:
      'A workplace for a craft-led design practice — part studio, part gallery — where making is always on view.',
    approach:
      'The client makes objects, so the architecture stays quiet and lets process take the stage. A central worktable runs the length of the plan like an anchor; storage, display and meeting rooms orbit around it. Raw concrete and warm plywood hold the tension between workshop and showroom.',
    materials: ['Raw concrete', 'Birch plywood', 'Cork', 'Powder-coated steel', 'Wool felt'],
    area: '3,100 sq ft',
    gallery: [
      img('photo-1497366216548-37526070297c'),
      img('photo-1497366811353-6870744d04b2'),
      img('photo-1524758631624-e2822e304c36'),
      img('photo-1556912167-f556f1f39fdf'),
    ],
  },
  {
    slug: 'meridian-house',
    title: 'Meridian House',
    location: 'Jaipur',
    category: 'Residential',
    year: '2024',
    hero: img('photo-1512917774080-9991f1c4c750', 2000),
    thumb: img('photo-1512917774080-9991f1c4c750'),
    description:
      'A desert-edge home that draws on Jaipur’s tradition of deep verandas and screened openings, reinterpreted with a contemporary hand.',
    approach:
      'Heat was the client’s first concern and our first design tool. Thick masonry walls hold the day’s warmth; perforated screens turn harsh sun into patterned shadow. The plan steps down the site so every room opens to its own slice of sky.',
    materials: ['Local sandstone', 'Jali screens', 'Lime wash', 'Terrazzo', 'Teak'],
    area: '5,600 sq ft',
    gallery: [
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1600573472592-401b489a3cdc'),
      img('photo-1600121848594-d8644e57abab'),
      img('photo-1523217582562-09d0def993a6'),
    ],
  },
  {
    slug: 'the-reading-room',
    title: 'The Reading Room',
    location: 'New Delhi',
    category: 'Commercial',
    year: '2023',
    hero: img('photo-1524758631624-e2822e304c36', 2000),
    thumb: img('photo-1524758631624-e2822e304c36'),
    description:
      'A members’ library and café designed as an essay in quiet — acoustic softness, warm timber and low, layered light.',
    approach:
      'Silence is a material here. We lined the ceiling in slatted ash, floored the room in cork, and kept every light source below eye level. The result is a room that lowers your voice without asking.',
    materials: ['Slatted ash', 'Cork', 'Brass mesh', 'Leather', 'Wool'],
    area: '1,800 sq ft',
    gallery: [
      img('photo-1524758631624-e2822e304c36'),
      img('photo-1497366216548-37526070297c'),
      img('photo-1556912167-f556f1f39fdf'),
    ],
  },
  {
    slug: 'casa-verde',
    title: 'Casa Verde',
    location: 'Goa',
    category: 'Hospitality',
    year: '2024',
    hero: img('photo-1523217582562-09d0def993a6', 2000),
    thumb: img('photo-1523217582562-09d0def993a6'),
    description:
      'A twelve-key boutique retreat where Indo-Portuguese memory meets tropical modernism — verandas, courtyards and laterite stone.',
    approach:
      'We resisted the resort cliché. Instead, Casa Verde is composed like a Goan village: small buildings, shaded lanes, a shared courtyard. Laterite walls breathe in the monsoon; rooms open on two sides so the sea air does the cooling.',
    materials: ['Laterite', 'Terracotta tile', 'Mangalore roof tile', 'Cane', 'Polished cement'],
    area: '9,400 sq ft',
    gallery: [
      img('photo-1523217582562-09d0def993a6'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600585154526-990dced4db0d'),
    ],
  },
  {
    slug: 'north-light-studio',
    title: 'North Light Studio',
    location: 'Chandigarh',
    category: 'Interior',
    year: '2023',
    hero: img('photo-1616486338812-3dadae4b4ace', 2000),
    thumb: img('photo-1616486338812-3dadae4b4ace'),
    description:
      'A painter’s studio and residence tuned to Chandigarh’s legendary north light — a single great room under a sawtooth roof.',
    approach:
      'The roof does everything. Its sawtooth profile admits steady, shadowless north light while exhausting summer heat. Below, one uninterrupted volume shifts between studio, gallery and home with nothing more than movable screens.',
    materials: ['Board-formed concrete', 'Galvanised steel', 'Pine', 'Linen', 'Clay tile'],
    area: '2,900 sq ft',
    gallery: [
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1615874959474-d609969a20ed'),
      img('photo-1616594039964-ae9021a400a0'),
    ],
  },
];

export interface Article {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: 'return-of-natural-materials',
    category: 'Materials',
    date: 'Sep 2026',
    title: 'The return of natural materials',
    excerpt:
      'Lime, clay, timber and stone are displacing synthetic finishes — not from nostalgia, but because they age with dignity and breathe with the climate.',
    image: img('photo-1615529182904-14819c35db37', 1200),
  },
  {
    slug: 'designing-homes-around-light',
    category: 'Essay',
    date: 'Aug 2026',
    title: 'Designing homes around light',
    excerpt:
      'Before we draw a single wall, we map the sun. A look at how daylight studies shape every ARCO residence from the first sketch.',
    image: img('photo-1615873968403-89e068629265', 1200),
  },
  {
    slug: 'why-minimalism-isnt-about-less',
    category: 'Perspective',
    date: 'Jul 2026',
    title: 'Why minimalism isn’t about less',
    excerpt:
      'Restraint is not absence. The best minimal spaces are richer, not poorer — every remaining element carries more meaning.',
    image: img('photo-1616594039964-ae9021a400a0', 1200),
  },
  {
    slug: 'courtyard-typology-india',
    category: 'Research',
    date: 'Jun 2026',
    title: 'The courtyard, reconsidered for Indian cities',
    excerpt:
      'From havelis to high-rises: what India’s oldest housing typology still teaches us about privacy, ventilation and community.',
    image: img('photo-1600573472592-401b489a3cdc', 1200),
  },
  {
    slug: 'workplaces-that-feel-like-home',
    category: 'Workplace',
    date: 'May 2026',
    title: 'Workplaces that feel like home',
    excerpt:
      'The office is not dead, but the fluorescent cubicle is. Notes from designing studios where people actually want to stay.',
    image: img('photo-1497366811353-6870744d04b2', 1200),
  },
  {
    slug: 'hospitality-beyond-lobby',
    category: 'Hospitality',
    date: 'Apr 2026',
    title: 'Hospitality beyond the lobby',
    excerpt:
      'Great hotels are choreographed sequences, not decorated rooms. How we design arrival, threshold and retreat at Casa Verde.',
    image: img('photo-1600121848594-d8644e57abab', 1200),
  },
];

export interface Service {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Architecture',
    description:
      'From first sketch to handover, we design buildings that belong to their place — residences, workplaces and retreats shaped by climate, context and craft.',
    capabilities: ['Concept & schematic design', 'Design development', 'Construction documentation', 'Site supervision', 'Regulatory approvals'],
    image: img('photo-1487958449943-2429e8be8625', 1400),
  },
  {
    index: '02',
    title: 'Interior Design',
    description:
      'Interiors composed like landscapes — light, material and proportion working together so rooms feel inevitable rather than decorated.',
    capabilities: ['Spatial planning', 'Material & finish palettes', 'Custom furniture design', 'Lighting design', 'Styling & art curation'],
    image: img('photo-1618221195710-dd6b41faaea6', 1400),
  },
  {
    index: '03',
    title: 'Urban Design',
    description:
      'We work at the scale of streets and neighbourhoods, shaping public space that invites pause, encounter and shade.',
    capabilities: ['Master planning', 'Public realm strategy', 'Mixed-use developments', 'Community consultation', 'Urban guidelines'],
    image: img('photo-1631679706909-1844bbd07221', 1400),
  },
  {
    index: '04',
    title: 'Landscape',
    description:
      'Gardens, courtyards and thresholds that soften architecture and root it in place — designed for monsoon, drought and everything between.',
    capabilities: ['Courtyard & terrace gardens', 'Native planting palettes', 'Water features', 'Outdoor rooms', 'Irrigation & maintenance plans'],
    image: img('photo-1616137466211-f939a420be84', 1400),
  },
  {
    index: '05',
    title: 'Consulting',
    description:
      'Independent design counsel for homeowners, developers and institutions — feasibility, design review and second opinions before you build.',
    capabilities: ['Site feasibility studies', 'Design audits', 'Material advisory', 'Budget & phasing strategy', 'Heritage assessments'],
    image: img('photo-1518005020951-eccb494ad742', 1400),
  },
];

export const stats = [
  { value: '24+', label: 'Projects' },
  { value: '12', label: 'Years of Practice' },
  { value: '8', label: 'Cities' },
  { value: '17', label: 'Awards' },
];

export const team = [
  { name: 'Aarav Rao', role: 'Founding Principal', image: img('photo-1600585154526-990dced4db0d', 800) },
  { name: 'Meera Kapoor', role: 'Design Director, Interiors', image: img('photo-1615874959474-d609969a20ed', 800) },
  { name: 'Kabir Shah', role: 'Principal Architect', image: img('photo-1600607687920-4e2a09cf159d', 800) },
  { name: 'Ishita Verma', role: 'Head of Landscape', image: img('photo-1616137466211-f939a420be84', 800) },
];

export const timeline = [
  { year: '2014', event: 'ARCO founded in a two-room studio in Shahpur Jat, New Delhi.' },
  { year: '2017', event: 'First built residence, a courtyard house in Gurugram, completed.' },
  { year: '2019', event: 'Studio expands to interiors; Gurugram atelier opens.' },
  { year: '2022', event: 'First hospitality commission — Casa Verde breaks ground in Goa.' },
  { year: '2024', event: 'ARCO named among India’s emerging practices; team grows to fourteen.' },
  { year: '2026', event: 'Villa No. 07 completes; the studio begins its first urban design work.' },
];

export const heroImages = {
  home: img('photo-1600585154340-be6161a56a0c', 2200),
  about: img('photo-1518005020951-eccb494ad742', 2000),
  contact: img('photo-1600566753190-17f0baa2a6c3', 1600),
};
