export type MediaItem = {
  type: "image" | "video";
  src: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  dates: string;
  duration: string;
  bullets: string[];
  links: SocialLink[];
  media: MediaItem[];
};

const mediaModules = import.meta.glob(
  "../assets/work/**/*.{jpg,jpeg,png,webp,gif,mp4,webm,mov}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

function getMedia(slug: string): MediaItem[] {
  const items: { path: string; src: string }[] = [];
  for (const [path, src] of Object.entries(mediaModules)) {
    const match = path.match(/\/work\/([^/]+)\/([^/]+)$/);
    if (match && match[1] === slug) {
      items.push({ path, src });
    }
  }
  items.sort((a, b) => a.path.localeCompare(b.path));
  return items.map(({ path, src }) => ({
    type: /\.(mp4|webm|mov)$/i.test(path) ? "video" : "image",
    src,
  }));
}

type RawEntry = Omit<ExperienceEntry, "media" | "links"> & { links?: SocialLink[] };

const data: RawEntry[] = [
  {
    slug: "bao-ai-daily",
    company: "Bao AI Daily",
    role: "Founder",
    dates: "April 2023 – Present",
    duration: "~3 yrs",
    bullets: [
      "Engineered and scaled a multi-platform media ecosystem (Facebook, Instagram, TikTok) focused on Generative AI news and practical implementation.",
      "Orchestrated a growth strategy that achieved over 2.1 million total reach by March 2026.",
      "Catalyzed community engagement with 20,000 profile visits and 13,000 content interactions through 700+ high-impact copywriting and visual design pieces.",
      "Monetized digital presence through affiliate programs and AI consultancy.",
    ],
    links: [{ label: "Bao AI Daily on Facebook", url: "https://www.facebook.com/baoaidailynews" }],
  },
  {
    slug: "speak",
    company: "Speak",
    role: "Marketing Executive",
    dates: "July 2024 – Present",
    duration: "~1 yr 9 mo",
    bullets: [
      "Spearheaded influencer outreach and established 100+ strategic partnerships to expand brand authority in the Vietnamese market.",
      "Edited 1,000+ video assets for paid advertising campaigns on Facebook, Instagram, and TikTok.",
      "Led market research and trend analysis to develop creative content strategies that reached 50M+ unique users.",
    ],
    links: [{ label: "Visit Speak", url: "https://www.speak.com" }],
  },
  {
    slug: "starmaker",
    company: "StarMaker",
    role: "UGC Creator & Actor",
    dates: "July 2025 – Present",
    duration: "~9 mo",
    bullets: [
      "Localized global scripts into natural, culturally-resonant Vietnamese content to drive local user acquisition.",
      "Produced 20+ authentic, self-filmed short-form videos with a focus on high retention and engagement.",
    ],
    links: [{ label: "Visit StarMaker Studios", url: "https://www.starmakerstudios.com/" }],
  },
  {
    slug: "lbank",
    company: "LBank",
    role: "KOL & Lead Trader",
    dates: "Nov 2024 – Jan 2025",
    duration: "3 mo",
    bullets: [
      "Catalyzed over $1,000,000 in trading volume within 90 days through strategic content placement on Facebook and Threads.",
      "Delivered a 2,400% ROI as a Lead Trader, consistently outperforming market benchmarks.",
      "Operated and managed a copy-trading group of 100 active members with a total Assets Under Management (AUM) exceeding $30,000.",
    ],
    links: [{ label: "Visit LBank", url: "https://www.lbank.com" }],
  },
  {
    slug: "boostenx",
    company: "BoostenX",
    role: "Regional Marketing Manager (Vietnam)",
    dates: "May 2024 – Oct 2024",
    duration: "6 mo",
    bullets: [
      "Formulated SEO content strategies that increased organic website traffic and improved keyword rankings.",
      "Managed end-to-end influencer collaborations and brand partnerships to execute nationwide marketing campaigns.",
    ],
    links: [{ label: "Visit BoostenX", url: "https://boostenx.com/" }],
  },
  {
    slug: "omnigpt",
    company: "OmniGPT",
    role: "Business Growth Assistant",
    dates: "Dec 2023 – June 2024",
    duration: "7 mo",
    bullets: [
      "Executed an aggressive multi-channel growth plan across Reddit, X, and LinkedIn, delivering 100+ creative posts.",
      "Authored 20+ educational SEO blog posts to drive inbound leads and establish thought leadership in the AI space.",
      "Directed the sourcing and onboarding of KOLs and UGC creators, resulting in a 300% increase in paid users.",
    ],
    links: [{ label: "Visit OmniGPT", url: "https://omnigpt.co/" }],
  },
  {
    slug: "superstack",
    company: "SuperStack",
    role: "Business Growth Assistant & IT Recruiter",
    dates: "Sep 2021 – June 2024",
    duration: "2 yrs 10 mo",
    bullets: [
      "Spearheaded recruitment for a remote IT Outsourcing team by researching candidate insights and sourcing talent across 15+ platforms.",
      "Localized technical job descriptions into natural Vietnamese and produced 20+ creative social media assets, including posters and banners, to attract top-tier talent.",
      "Optimized the recruitment funnel by managing candidate communications and testing, successfully minimizing the cost per hire by 300%.",
      "Contributed to business growth and sales strategy over a 2-year 10-month tenure, supporting the expansion of the regional client base.",
    ],
    links: [{ label: "SuperStack on LinkedIn", url: "https://linkedin.com/company/superstackdigital" }],
  },
  {
    slug: "kts-capital",
    company: "KTS Capital",
    role: "Content Creator & Community Manager",
    dates: "Oct 2021 – Mar 2022",
    duration: "6 mo",
    bullets: [
      "Moderated an ecosystem of 5 social channels (Telegram/Facebook), providing support to a community of 100,000+ members.",
      "Engineered technical setups and scripts for livestream events, attracting 1K+ peak concurrent viewers.",
    ],
    links: [
      { label: "KTS Capital community", url: "https://www.facebook.com/groups/1398763806849013" },
      { label: "KTS Onchain on Facebook", url: "https://www.facebook.com/KTSOnchain" },
    ],
  },
  {
    slug: "galaxy-dance-center",
    company: "Galaxy Dance Center",
    role: "Content Creator",
    dates: "Apr 2022 – Dec 2022",
    duration: "9 mo",
    bullets: [
      "Engineered a lifestyle-driven content strategy by conducting deep-dive research into customer insights and trending dance culture.",
      "Produced and planned 100+ engaging social media posts, resulting in a 400% increase in community interaction.",
      "Orchestrated creative workflows with graphic designers and photographers to deliver high-fidelity visual assets for the studio's digital presence.",
    ],
  },
  {
    slug: "whatsup",
    company: "What'SUP – Chill with SUP",
    role: "Content Writer",
    dates: "July 2020 – Nov 2021",
    duration: "1 yr 5 mo",
    bullets: [
      "Developed an end-to-end content roadmap that boosted category awareness for the stand-up paddleboarding rental market.",
      "Cultivated a niche community by managing Facebook groups, successfully converting 200+ potential leads into customers.",
      "Executed social media schedules that grew organic reach to 200,000+ users.",
      "Collaborated with design teams to produce 125 informative and visually-driven content pieces tailored to high-potential demographics.",
    ],
  },
  {
    slug: "cleanhub",
    company: "Clean Hub",
    role: "Content Writer",
    dates: "July 2021 – Nov 2021",
    duration: "5 mo",
    bullets: [
      "Crafted high-conversion social media content for luxury shoe and item restoration services based on targeted customer behavioral research.",
      "Published 100+ inspiring and educational posts that drove a 1,000% increase in brand recognition and service inquiries.",
      "Managed the full content lifecycle, from ideation and social media scheduling to coordinating with photographers for professional product showcases.",
    ],
  },
  {
    slug: "upwork",
    company: "Upwork",
    role: "Top-Rated Freelancer",
    dates: "Aug 2021 – Present",
    duration: "~4 yrs 8 mo",
    bullets: [
      "Maintained a 100% Job Success Score while successfully completing 20+ diverse marketing and content projects.",
    ],
    links: [{ label: "View Upwork profile", url: "https://www.upwork.com/freelancers/~017509fd4eefaa8910" }],
  },
  {
    slug: "badaboom",
    company: "Badaboom",
    role: "Content Writer & Promoter",
    dates: "March 2021 – April 2021",
    duration: "2 mo",
    bullets: [
      'Produced creative content for the "Bloom | Bung Lụa" beach party, attracting over 400 attendees in one day.',
      "Provided English-to-Vietnamese translation for sponsor meetings with Pioneer DJ Vietnam.",
    ],
  },
  {
    slug: "da-dreamer",
    company: "Da Dreamer Coffee & Hostel",
    role: "Event Manager",
    dates: "June 2019 – Sep 2019",
    duration: "4 mo",
    bullets: [
      "Drove a 50% monthly revenue growth over a 3-month period through targeted event marketing and acoustic programming.",
      "Negotiated contracts with 10+ local artists.",
    ],
    links: [{ label: "Da Dreamer on Facebook", url: "https://www.facebook.com/dadreamervn" }],
  },
];

export const experiences: ExperienceEntry[] = data.map((entry) => ({
  ...entry,
  links: entry.links ?? [],
  media: getMedia(entry.slug),
}));
