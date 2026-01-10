import Section from "../components/common/Section";
import { education } from "../data/education";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <Section id="education" className="pt-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Education</h2>
                </div>

                <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                group p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:bg-white/5 transition-colors
                                ${index !== education.length - 1 ? 'border-b border-white/5' : ''}
                            `}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                                    <p className="text-muted-foreground">{item.institution}</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:items-end gap-1 pl-[3.25rem] md:pl-0">
                                <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                                    {item.score}
                                </span>
                                <span className="text-sm text-muted-foreground font-mono">
                                    {item.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;
