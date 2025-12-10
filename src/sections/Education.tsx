import Section from "../components/common/Section";
import { education } from "../data/education";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <Section id="education">
            <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-purple-500">03.</span> Education
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {education.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all group hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                        <GraduationCap size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                                    <p className="text-purple-400 font-mono text-sm mt-1">{item.score}</p>
                                    <p className="text-gray-400 mt-2">{item.institution}</p>
                                </div>
                            </div>

                            <div className="md:text-right pl-[3.25rem] md:pl-0">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 font-mono">
                                    {item.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
