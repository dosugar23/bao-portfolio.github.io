export type MediaItem = {
  type: "image" | "video";
  src: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type PersonalProject = {
  slug: string;
  title: string;
  role: string;
  dates: string;
  bullets: string[];
  links: SocialLink[];
  media: MediaItem[];
};

const mediaModules = import.meta.glob(
  "../assets/personal/**/*.{jpg,jpeg,png,webp,gif,mp4,webm,mov}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

function getMedia(slug: string): MediaItem[] {
  const items: { path: string; src: string }[] = [];
  for (const [path, src] of Object.entries(mediaModules)) {
    const match = path.match(/\/personal\/([^/]+)\/([^/]+)$/);
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

const data: Omit<PersonalProject, "media">[] = [
  {
    slug: "nghien-ai",
    title: "Nghiên AI",
    role: "Moderator",
    dates: "May 2024 – Present",
    bullets: [
      "Coordinate and moderate content for Vietnam's leading Artificial Intelligence community with over 611,000 members.",
      "Directly manage the post-approval workflow and uphold high content standards, ensuring a civil, on-topic discussion space for hundreds of posts every day.",
      "Boost user retention through proactive engagement, answering technical questions about AI tools, and onboarding new community members.",
      "Contribute to building trending discussion topics that help maintain the group's leading position.",
    ],
    links: [
      { label: "Visit the community", url: "https://facebook.com/groups/aiartworksvn" },
    ],
  },
  {
    slug: "repo-vietnam",
    title: "REPO Vietnam Community",
    role: "Founder",
    dates: "March 2025 – Present",
    bullets: [
      "Founded and operate a multi-platform game community ecosystem on both Facebook (750 members) and Discord (200 members).",
      "Built a professional Discord server architecture with role-based permissions, automation bots, and dedicated channels to optimize the player experience.",
      "Established community guidelines and personally manage connection activities and in-game events to foster a tight-knit environment from day one.",
      "Direct the content strategy that attracts the target player base and sustains stable activity across multiple social platforms.",
    ],
    links: [
      { label: "Visit the community", url: "https://facebook.com/groups/repovietnam" },
    ],
  },
  {
    slug: "short-film",
    title: '"A Flower Is Not a Flower" – Short Film',
    role: "Cast & Collaborator",
    dates: "Personal Project",
    bullets: [
      'Featured in the short film "A Flower Is Not a Flower" directed by Thong Dao.',
      "An exploration of acting and on-camera presence outside of marketing campaigns.",
    ],
    links: [],
  },
];

export const personalProjects: PersonalProject[] = data.map((entry) => ({
  ...entry,
  media: getMedia(entry.slug),
}));
