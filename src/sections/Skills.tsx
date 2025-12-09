import Section from "../components/common/Section";
import { skillCategories } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-blue-500">02.</span> Skills & Tech
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm rounded-full bg-black/40 border border-white/5 text-gray-300 hover:text-white hover:border-blue-500/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
