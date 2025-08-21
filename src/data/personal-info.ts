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
        title: "Job Portal LG SM",
        blurb:"Back-end features for a job portal website, especially for managing tests for interviewees, authorization views to job opening(internal-side), bug fixing, etc.",
        tags: ["Java", "Springboot", "Lombok Plugin"],
        href: "#",
        repo: "#",
    },
    {
        title: "OpenAI Based Google sheet",
        blurb: "Integrated an OpenAI model with a spreadsheet linked to an internal document database to enable automated responses to queries about company security policies.",
        tags: ["Appscript", "Javascript", "AWS S3","AWS Lambda"],
        href: "#",
        repo: "#",
    },
    {
        title: "Food Image Recognition: Calorie detector",
        blurb: "Machine Learning Model that process photos of foods and give info about it's calorie",
        tags: ["Python", "Pandas", "Tensorflow","Jupyter Notebook"],
        href: "#",
        repo: "#",
    },
]
