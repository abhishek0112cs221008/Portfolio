import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { ArrowUpRight, Play } from 'lucide-react';
import { fadeInUp } from '../lib/motion';

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`project-${project.id}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative rounded-2xl bg-card border border-white/5 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            onClick={() => onClick(project)}
        >
            {/* Gradient Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-75 blur transition duration-500 will-change-transform" />

            {/* Content Container (Background adjustment to hide gradient center) */}
            <div className="relative h-full bg-card rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-secondary/5">
                    {project.tweetId ? (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-card to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                            <div className="relative flex flex-col items-center gap-3">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                                <div className="relative p-4 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 text-primary shadow-xl">
                                    <Play size={32} fill="currentColor" className="ml-1" />
                                </div>
                                <span className="text-sm font-bold tracking-wider text-primary uppercase">Watch Demo</span>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    )}

                    {!project.tweetId && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />}

                    {/* Overlay Action Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="text-white" size={18} />
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
