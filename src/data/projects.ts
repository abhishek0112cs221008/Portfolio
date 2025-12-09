export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    image: string; // Placeholder or path
    tweetId?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "VOYA – E-commerce Platform",
        description: "A full-stack e-commerce website with authentication, product catalog, cart system, and admin panel with CRUD operations.",
        tech: ["Java", "JSP", "Servlets", "MySQL"],
        link: "#",
        github: "#",
        image: "https://via.placeholder.com/600x400", // Assuming a placeholder image for now
        tweetId: "1960590660676849690",
    },
    {
        id: 2,
        title: "URL Shortener",
        description: "URL generation, redirection logic, and analytics tracking with real-time stats.",
        tech: ["Java", "Servlets", "JSP", "MySQL"],
        link: "#",
        github: "#",
        image: "https://via.placeholder.com/600x400",
        tweetId: "1971603719352721678",
    },
    {
        id: 3,
        title: "Expense Tracker App",
        description: "Personal finance tracker with offline storage, category-wise insights, and responsive UI.",
        tech: ["Flutter", "SQLite"],
        link: "#",
        github: "#",
        image: "https://via.placeholder.com/600x400",
        tweetId: "1962038730803601534",
    },
];
