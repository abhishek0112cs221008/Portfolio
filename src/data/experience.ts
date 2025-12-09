export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
}

export const experience: ExperienceItem[] = [
    {
        id: 1,
        role: "Java Programming Intern",
        company: "Algonive Technologies",
        period: "Oct 2025 – Nov 2025",
        description: "Worked with Core Java concepts including OOP, exception handling, collections, and file handling. Built small backend modules and improved debugging and problem-solving skills.",
    },
];
