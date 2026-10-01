export type Project = {
  title: string
  description: string
  tags: string[]
  demoHref?: string
  sourceHref: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type ExperienceItem = {
  period: string
  title: string
  organisation: string
  summary: string
  tags: string[]
}

export const siteConfig = {
  name: "Bagus Ade Saputra",
  role: "",
  summary: "Informatics Engineer · PHP Developer",
  email: "bagusadesaputra213@gmail.com",
  location: "Bogor, Indonesia · Fresh graduate",
  availability: "Available for work",
}

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experiences", href: "#experiences" },
  { label: "Works", href: "#work" },
  // { label: "Contact", href: "#contact" },
]

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/bagusadesaputra" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bagus-adesaputra/" },
]

export const stats = [
  { value: "3.35", label: "GPA" },
  { value: "2", label: "Experiences" },
  { value: "1", label: "Projects" },
  { value: "3", label: "Tech stacks" },
]

export const experience = {
  eyebrow: "Experiences",
  title: "The path so far",
  description:
    "A timeline of the roles, milestones, and moments that shaped how I work today.",
  items: [
    {
      period: "Aug 2025 — Mar 2026",
      title: "Freelance Full-Stack Dev",
      organisation: "Self-employed · Bogor, Indonesia",
      summary:
        "Developed a web-based inventory management system to streamline stock opname with real-time inventory visibility.",
      tags: ["HTML", "CSS", "Javascript", "Bootstrap", "PHP", "MySQL"],
    },
    {
      period: "2021 — 2026",
      title: "B.Sc. Informatics Engineering",
      organisation: "Universitas Indraprasta PGRI · GPA 3.35",
      summary:
        "Focused on software engineering, algorithms, database management system, and web programming.",
      tags: ["Software Engineering", "Web Programming", "Databases", "Algorithms"],
    },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "PHP",
      "Java",
      "Javascript",
      "Node.js",
      "Laravel",
      "MySQL",
    ],
  },
  {
    title: "Tools & Environtment",
    skills: [
      "Git",
      "Docker",
      "VS Code",
      "Netbeans",
      "Arch Linux",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "SIMPATIK",
    description:
      "A Java-based application developed in NetBeans to support managerial decision making in selecting the best performing employee using the Simple Additive Weighting (SAW) method.",
    tags: ["Java", "Netbeans", "MySQL",],
    // demoHref: "https://example.com/projects/nova-dashboard",
    sourceHref: "https://github.com/bagusadesaputra/SIMPATIK",
  },
]
