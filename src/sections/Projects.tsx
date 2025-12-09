import { useState } from 'react';
import Section from "../components/common/Section";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/ui/Modal";
import { projects, type Project } from "../data/projects";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Section id="projects">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-pink-500">03.</span> Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </Section>
    );
};

export default Projects;
