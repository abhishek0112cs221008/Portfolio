import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
