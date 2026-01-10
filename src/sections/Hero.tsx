import { motion } from "framer-motion";
import { Download, ArrowRight, ChevronRight } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    fadeInRight
} from "../lib/motion";
import resumePdf from "../assets/abhishek.pdf";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-center lg:text-left space-y-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for opportunities
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]"
                        >
                            Pro. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-500">
                                Beyond.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Crafting high-performance, scalable systems with <span className="text-foreground">Java</span>, <span className="text-foreground">Spring Boot</span>, and modern web technologies.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:shadow-lg hover:shadow-white/10 transition-all flex items-center gap-2"
                            >
                                View Work
                                <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href={resumePdf}
                                download="Abhishek_Patel_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2 group"
                            >
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Tech Stack Pills */}
                        <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                            {['Java', 'Spring Boot', 'React', 'AWS', 'Docker'].map((tech) => (
                                <div key={tech} className="px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-sm text-muted-foreground font-medium flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    {tech}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: macOS Window */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="show"
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="relative w-full max-w-lg mx-auto bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                                </div>
                                <div className="ml-4 text-xs text-muted-foreground font-mono">Developer.java</div>
                            </div>

                            {/* Window Content */}
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                                <div className="flex">
                                    <div className="text-muted-foreground/30 select-none text-right pr-4 border-r border-white/5 mr-4 space-y-1">
                                        {Array.from({ length: 12 }).map((_, i) => (
                                            <div key={i}>{i + 1}</div>
                                        ))}
                                    </div>
                                    <div className="space-y-1">
                                        <div><span className="text-purple-400">package</span> com.abhishek.portfolio;</div>
                                        <div className="h-4" />
                                        <div><span className="text-purple-400">public class</span> <span className="text-yellow-400">Profile</span> <span className="text-foreground">{`{`}</span></div>
                                        <div className="pl-4">
                                            <span className="text-purple-400">private final</span> <span className="text-yellow-400">String</span> name = <span className="text-green-400">"Abhishek"</span>;
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-purple-400">private final</span> <span className="text-yellow-400">String</span> role = <span className="text-green-400">"SDE"</span>;
                                        </div>
                                        <div className="h-4" />
                                        <div className="pl-4">
                                            <span className="text-purple-400">public</span> <span className="text-blue-400">void</span> <span className="text-yellow-400">buildFuture</span>() <span className="text-foreground">{`{`}</span>
                                        </div>
                                        <div className="pl-8 text-muted-foreground">// Building scalable systems</div>
                                        <div className="pl-8"><span className="text-yellow-400">System</span>.out.println(<span className="text-green-400">"Hello World!"</span>);</div>
                                        <div className="pl-4 text-foreground">{`}`}</div>
                                        <div className="text-foreground">{`}`}</div>

                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="text-green-400">➜</span>
                                            <span className="text-blue-400">~</span>
                                            <span className="animate-pulse">_</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Glass Element behind */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Chevron */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <ChevronRight size={24} className="rotate-90" />
            </motion.div>
        </section>
    );
};

export default Hero;
