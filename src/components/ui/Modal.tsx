import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Tweet } from 'react-tweet';
import type { Project } from '../../data/projects';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 md:p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[85vh] mx-4"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    {project.tweetId ? (
                        <div className="w-full flex justify-center mb-6 light" data-theme="dark">
                            <Tweet id={project.tweetId} />
                        </div>
                    ) : (
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                {t}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-white">
                            <Github size={18} /> Source Code
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all font-medium text-white shadow-lg shadow-blue-500/20">
                            <ExternalLink size={18} /> Live Demo
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Modal;
