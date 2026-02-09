const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Ek full-featured online shopping platform jisme product catalog, cart, checkout, aur payment integration hai.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            features: [
                "User authentication aur authorization",
                "Product search aur filtering",
                "Shopping cart functionality",
                "Secure payment processing"
            ]
        },
        {
            title: "Task Management App",
            description: "Ek productivity tool jo teams ko unke tasks organize karne mein help karta hai.",
            tech: ["React", "TypeScript", "Express", "PostgreSQL"],
            features: [
                "Drag-and-drop task boards",
                "Real-time collaboration",
                "Priority aur deadline management",
                "Team member assignment"
            ]
        },
        {
            title: "Portfolio Website",
            description: "Ek modern portfolio website jo 3D graphics aur smooth animations use karta hai.",
            tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
            features: [
                "3D interactive elements",
                "Smooth scroll animations",
                "Responsive design",
                "Performance optimized"
            ]
        }
    ];

    return (
        <section className="border-b border-gray-300 pb-6 mb-6">
            <h2 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 mb-4">
                Projects (Mere Projects)
            </h2>

            <div className="text-justify leading-relaxed mb-6">
                <p>
                    Maine kai projects banaye hain jo different technologies aur concepts demonstrate karte hain. Har project mein mujhe kuch naya seekhne ko mila.
                </p>
            </div>

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-300 p-5 rounded bg-gray-50">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                        <p className="text-justify mb-4">{project.description}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Key Features:</h4>
                            <ul className="list-disc ml-6 space-y-1">
                                {project.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
