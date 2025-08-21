export const ME = {
    name: "Ammardito Shafaat",
    role: "Back End Developer",
    tagline: "I enjoy solving problems and building backend systems, with a mild interest in front-end and a curiosity for data and machine learning.",
    location: "Jakarta, Indonesia",
    email: "ammarditoshafaat2001@gmail.com",
    phone: "+62 812‑3012‑6439",
    headshot: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=500&auto=format&fit=crop",
    socials: {
        github: "https://github.com/webdev-testa",
        linkedin: "https://www.linkedin.com/in/ammardito-shafaat-65a255216/",
        email: "ammarditoshafaat2001@gmail.com",
    },
    resumeUrl: import.meta.env.BASE_URL + "resume.pdf",
    skills: ["TypeScript", "React", "Tailwind", "Shadcn", "Node.js", "Java", "Springboot", "Python", "Tensorflow"],
}

export const EXPERIENCE: Array<{
    company: string
    role: string
    period: string
    location?: string
    bullets: string[]
    link?: string
}> = [
    {
        company: "LG Sinar Mas",
        role: "C#/.NET Java Developer",
        period: "June 2025 — Present",
        location: "Jakarta, ID (Onsite)",
        bullets: [],
    },
    {
        company: "Bangkit Academy",
        role: "Mentor Bangkit Machine Learning",
        period: "Feb 2024 — July 2024",
        location: "Bandung, ID (Online)",
        bullets: [],
    },
    {
        company: "Mekari",
        role: "Information Security & Compliance Officer",
        period: "June 2023 — June 2024",
        location: "Jakarta, ID (Hybrid)",
        bullets: [],
    },
]

export const PROJECTS: Array<{
    title: string
    blurb: string
    tags: string[]
    href?: string
    repo?: string
}> = [
    {
        title: "Threat Modeling Toolkit",
        blurb:"A lightweight, opinionated toolkit that generates attack trees from system diagrams and exports mitigations to Jira.",
        tags: ["TypeScript", "React", "D3", "Security"],
        href: "#",
        repo: "#",
    },
    {
        title: "Privacy Impact Wizard",
        blurb: "Guided PIA flow with risk scoring, evidence attachments, and export to ISO/IEC 27701 Annex mapping.",
        tags: ["Next.js", "Tailwind", "PWW 27701"],
        href: "#",
        repo: "#",
    },
    {
        title: "Audit Log Analyzer",
        blurb: "Parses cloud provider logs to highlight anomalous access patterns and policy drift.",
        tags: ["Python", "Pandas", "Cloud"],
        href: "#",
        repo: "#",
    },
]
