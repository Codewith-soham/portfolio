export interface NavItem {
  label: string;
  href: string;
  number: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface CurrentlyBuildingItem {
  name: string;
  status: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Soham Ghadge",
    title: "Backend Developer",
    status: "Available for Opportunities",
    location: "India",
    summary:
      "Specializing in building robust server-side systems, API ecosystems, database architecture, and scalable developer infrastructure.",
  },
  hero: {
    eyebrow: "BACKEND DEVELOPER · SYSTEMS ENTHUSIAST",
    headingLines: ["I BUILD THE", "SYSTEMS BEHIND", "THE SOFTWARE."],
    supportingCopy:
      "Backend-focused developer building APIs, data-driven systems, authentication flows, and developer infrastructure with Node.js, JavaScript, TypeScript and MongoDB.",
    techStrip: [
      "NODE.JS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "EXPRESS",
      "MONGODB",
      "REST APIs",
      "GIT",
    ],
    // Primary placeholder GitHub URL - replace with your actual profile when ready
    githubUrl: "https://github.com",
    terminalBio: {
      prompt: "$ whoami",
      user: "soham@developer",
      outputs: [
        "backend systems",
        "APIs",
        "databases",
        "architecture",
        "always learning",
      ],
    },
    currentlyBuilding: [
      { name: "GitEase", status: "Active" },
      { name: "ShardFlow", status: "Active" },
    ] satisfies CurrentlyBuildingItem[],
  },
  navigation: [
    { label: "Selected Work", href: "#work", number: "01" },
    { label: "About", href: "#about", number: "02" },
    { label: "Engineering", href: "#engineering", number: "03" },
    { label: "Experience", href: "#experience", number: "04" },
    { label: "Contact", href: "#contact", number: "05" },
  ] satisfies NavItem[],
  socials: [
    { name: "GitHub", url: "https://github.com", handle: "github.com" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com" },
    { name: "Email", url: "mailto:contact@sohamghadge.dev", handle: "contact@sohamghadge.dev" },
  ] satisfies SocialLink[],
  coreTech: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "REST APIs",
    "JWT / OAuth",
    "Git / GitHub",
  ],
  learningTech: [
    "PostgreSQL",
    "Redis",
    "Docker",
    "System Design",
    "DSA",
    "AI/ML",
  ],
};
