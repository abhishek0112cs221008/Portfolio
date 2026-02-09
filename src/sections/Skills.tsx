const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
        },
        {
            title: "Backend Development",
            skills: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Authentication"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Postman"]
        },
        {
            title: "Other Skills",
            skills: ["Problem Solving", "System Design", "Code Review", "Team Collaboration"]
        }
    ];

    return (
        <section className="border-b border-gray-300 pb-6 mb-6">
            <h2 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 mb-4">
                Technical Skills (Technical Expertise)
            </h2>

            <div className="text-justify leading-relaxed mb-4">
                <p>
                    Mere paas various technologies aur tools ka experience hai jo modern web development mein use hote hain. Neeche ek comprehensive list hai:
                </p>
            </div>

            <div className="space-y-6">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
                <p className="text-sm italic">
                    <strong>Note:</strong> Main continuously naye technologies seekhta rehta hoon aur apne skills ko improve karta rehta hoon. Learning kabhi rukti nahi!
                </p>
            </div>
        </section>
    );
};

export default Skills;
