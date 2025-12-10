export interface Education {
    id: number;
    degree: string;
    score: string;
    institution: string;
    period: string;
}

export const education: Education[] = [
    {
        id: 1,
        degree: "B-Tech in Computer Science & Engineering",
        score: "CGPA: 8.45",
        institution: "Bansal Institute of Science & Technology, Bhopal",
        period: "2022 – 2026"
    },
    {
        id: 2,
        degree: "Class XII (MP Board)",
        score: "91.00%",
        institution: "Adarsh Narmada Higher Secondary School, Gangeo",
        period: "2021 – 2022"
    },
    {
        id: 3,
        degree: "Class X (MP Board)",
        score: "94.75%",
        institution: "Adarsh Narmada Higher Secondary School, Gangeo",
        period: "2019 – 2020"
    }
];
