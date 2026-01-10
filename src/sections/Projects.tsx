import { useState } from 'react';
import Section from "../components/common/Section";
import Modal from "../components/ui/Modal";
import { projects, type Project } from "../data/projects";
import { motion } from "framer-motion";
import { LayoutGrid, List } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <Section id="projects" className="pt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold tracking-tight mb-2">Projects</h2>
                        <p className="text-muted-foreground">Selected works from my local drive.</p>
                    </div>

                    {/* Finder View Toggles */}
                    <div className="flex items-center gap-1 bg-secondary/10 p-1 rounded-lg border border-border">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>

                <motion.div
                    layout
                    className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectPreview cardMode={viewMode} project={project} onClick={setSelectedProject} />
                        </motion.div>
                    ))}
                </motion.div>

                <Modal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            </div>
        </Section>
    );
};

// Internal component for the Finder-style card
const ProjectPreview = ({ project, onClick, cardMode }: { project: Project, onClick: (p: Project) => void, cardMode: 'grid' | 'list' }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className={`
                group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-card/40 backdrop-blur-md transition-all hover:bg-card/60 hover:shadow-xl hover:border-primary/20
                ${cardMode === 'list' ? 'flex items-center gap-6 p-4 h-32' : 'flex flex-col h-full'}
            `}
        >
            {/* Image Thumbnail */}
            <div className={`
                relative overflow-hidden bg-black/50
                ${cardMode === 'list' ? 'w-40 h-24 rounded-lg flex-shrink-0' : 'w-full aspect-video'}
            `}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Overlay on Grid Hover */}
                {cardMode === 'grid' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-medium text-sm bg-primary/20 px-3 py-1 rounded-full backdrop-blur-md border border-primary/30">View Details</span>
                    </div>
                )}
            </div>

            {/* Content Info */}
            <div className={`
                flex flex-col justify-between
                ${cardMode === 'list' ? 'flex-1 py-1' : 'p-5 flex-1'}
            `}>
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        {cardMode === 'grid' && (
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            </div>
                        )}
                    </div>
                    <p className={`text-muted-foreground text-sm line-clamp-2 ${cardMode === 'list' ? 'mb-1' : 'mb-4'}`}>
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
