import { Code2, Database, Server, Settings, Terminal } from "lucide-react";

export interface SkillCategory {
    title: string;
    icon: any;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming",
        icon: Code2,
        skills: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Java Servlets", "JSP", "JDBC", "Node.js"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MySQL", "SQLite", "MongoDB"],
    },
    {
        title: "Tools & DevOps",
        icon: Settings,
        skills: ["Git", "GitHub", "Eclipse", "Linux"],
    },
    {
        title: "Core Concepts",
        icon: Terminal,
        skills: ["DSA (320+ LeetCode)", "OOP", "Object-Oriented Design"],
    },
];
