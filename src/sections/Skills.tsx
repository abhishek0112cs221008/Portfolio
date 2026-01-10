import Section from "../components/common/Section";
import { skillCategories } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <Section id="skills" className="pt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Tech Stack</h2>
                    <p className="text-lg text-muted-foreground">My digital toolbox.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="group relative overflow-hidden rounded-[2rem] bg-card/60 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            {/* Widget Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg text-white group-hover:scale-110 transition-transform duration-500">
                                    <category.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>

                                <div className="ml-auto w-8 h-4 rounded-full bg-white/10 p-0.5">
                                    <div className="w-3 h-3 rounded-full bg-white shadow-sm translate-x-4 transition-transform" />
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 text-sm font-medium rounded-xl bg-background/50 border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Background Gloss */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
