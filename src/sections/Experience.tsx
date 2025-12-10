import Section from "../components/common/Section";
import { experience } from "../data/experience";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <Section id="experience">
            <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="text-green-500">05.</span> Experience & Journey
            </h2>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[11px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-purple-500 md:-translate-x-[5px] shadow-[0_0_10px_#a855f7] z-10" />

                            <div className="flex-1 md:text-right hidden md:block" style={{ textAlign: index % 2 === 0 ? 'left' : 'right' } as any}>
                                {/* Spacer for alignment on desktop */}
                            </div>

                            <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <span className="text-sm font-mono text-purple-400 mb-2 block">{item.period}</span>
                                <h3 className="text-xl font-bold text-white content-start">{item.role}</h3>
                                <p className="text-lg text-gray-400 mb-4">{item.company}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
