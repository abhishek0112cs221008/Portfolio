import { motion } from "framer-motion";
import { Download, ArrowRight, Code, Terminal, Cpu } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    fadeInRight,
    hoverScale,
    tapScale
} from "../lib/motion";
import resumePdf from "../assets/abhishek.pdf";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-center lg:text-left space-y-6"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for opportunities
                            </div>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                                Digital Future
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Motivated <span className="text-foreground font-semibold">SDE</span> crafting high-performance scalable systems with <span className="text-foreground font-semibold">Java</span>, <span className="text-foreground font-semibold">Spring Boot</span>, and modern web technologies.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <motion.a
                                href="#projects"
                                whileHover={hoverScale}
                                whileTap={tapScale}
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2"
                            >
                                View Work
                                <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href={resumePdf}
                                download="Abhishek_Patel_Resume.pdf"
                                whileHover={hoverScale}
                                whileTap={tapScale}
                                className="px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur-md text-foreground font-medium text-lg hover:bg-card hover:border-primary/50 transition-all flex items-center gap-2 group"
                            >
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Tech Stack Preview - Tiny Interaction */}
                        <motion.div variants={fadeInUp} className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-muted-foreground">
                            <div className="flex flex-col items-center gap-1">
                                <Code size={20} />
                                <span className="text-xs">Clean Code</span>
                            </div>
                            <div className="w-px h-8 bg-border"></div>
                            <div className="flex flex-col items-center gap-1">
                                <Terminal size={20} />
                                <span className="text-xs">Backend</span>
                            </div>
                            <div className="w-px h-8 bg-border"></div>
                            <div className="flex flex-col items-center gap-1">
                                <Cpu size={20} />
                                <span className="text-xs">Scalable</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual Element / Profile Card */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="show"
                        className="relative block mt-12 lg:mt-0"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Floating Background Shapes */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-0 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                            />

                            {/* Main Glass Card */}
                            <motion.div
                                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                                className="relative z-10 w-full h-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

                                {/* Card Content (Code Window Mockup) */}
                                <div className="flex items-center gap-2 mb-4 opacity-50">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                <div className="space-y-4 font-mono text-sm">
                                    <div className="text-muted-foreground">
                                        <span className="text-primary">public class</span> <span className="text-secondary">Developer</span> <span className="text-foreground">{`{`}</span>
                                    </div>
                                    <div className="pl-4 space-y-2">
                                        <p>
                                            <span className="text-primary">String</span> name = <span className="text-accent">"Abhishek Patel"</span>;
                                        </p>
                                        <p>
                                            <span className="text-primary">String[]</span> skills = <span className="text-foreground">{`{`}</span>
                                        </p>
                                        <p className="pl-4 text-accent">
                                            "Java", "Spring Boot",
                                        </p>
                                        <p className="pl-4 text-accent">
                                            "React", "SQL", "AWS"
                                        </p>
                                        <p className="text-foreground">{`};`}</p>
                                        <p>
                                            <span className="text-primary">boolean</span> openToWork = <span className="text-secondary">true</span>;
                                        </p>
                                    </div>
                                    <div className="text-foreground">{`}`}</div>

                                    <div className="pt-6 flex justify-center">
                                        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-pulse">
                                            Compiling Success...
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;

