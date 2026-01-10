import Section from "../components/common/Section";
import { experience } from "../data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    return (
        <Section id="experience" className="pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Journey</h2>
                    <p className="text-lg text-muted-foreground">My professional timeline.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-border/50" />

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-24 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[23px] top-1 w-5 h-5 rounded-full border-4 border-background bg-muted-foreground group-hover:bg-primary group-hover:scale-125 transition-all z-10" />

                                {/* Card Content */}
                                <div className="relative bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-card/60 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                                            <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                                <Briefcase size={16} />
                                                <span>{item.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit">
                                            <Calendar size={14} />
                                            <span className="font-mono">{item.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
