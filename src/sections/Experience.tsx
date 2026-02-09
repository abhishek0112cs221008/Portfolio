const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Tech Company",
            period: "2023 - Present",
            description: "Modern web applications develop karta hoon using React aur Node.js. Team ke saath collaborate karke scalable solutions deliver karta hoon.",
            responsibilities: [
                "Frontend aur backend features develop karna",
                "Code reviews conduct karna",
                "Technical documentation likhna",
                "Junior developers ko mentor karna"
            ]
        },
        {
            role: "Frontend Developer Intern",
            company: "Startup XYZ",
            period: "2022 - 2023",
            description: "React-based applications par kaam kiya aur modern web development practices seekhe.",
            responsibilities: [
                "UI components banana",
                "API integration karna",
                "Bug fixes aur testing",
                "Team meetings mein participate karna"
            ]
        }
    ];

    return (
        <section className="border-b border-gray-300 pb-6 mb-6">
            <h2 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 mb-4">
                Work Experience (Kaam Ka Experience)
            </h2>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-gray-600 mb-2">
                            <strong>{exp.company}</strong> • {exp.period}
                        </p>
                        <p className="text-justify mb-3">{exp.description}</p>

                        <h4 className="font-semibold mb-2">Responsibilities:</h4>
                        <ul className="list-disc ml-6 space-y-1">
                            {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
