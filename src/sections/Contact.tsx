import Section from "../components/common/Section";
import { Mail, Linkedin, Twitter, ArrowUpRight, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("0112cs221008@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section id="contact" className="mb-20 pt-20">
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-5xl mx-auto px-4"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Let's work together.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email Card - Large */}
                    <motion.div
                        variants={fadeInUp}
                        className="md:col-span-2 relative group overflow-hidden bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-card/80 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500" />

                        <div className="relative z-10 flex flex-col justify-between h-full min-h-[200px]">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit">
                                    <Mail size={32} className="text-primary" />
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                    title="Copy Email"
                                >
                                    {copied ? <span className="text-xs text-green-400 font-mono">Copied!</span> : <Copy size={20} />}
                                </button>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Email Me</h3>
                                <a
                                    href="mailto:0112cs221008@gmail.com"
                                    className="text-lg text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                                >
                                    0112cs221008@gmail.com
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://www.linkedin.com/in/abhishek68/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        className="md:col-span-1 relative group overflow-hidden bg-[#0077b5]/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-[#0077b5]/20 transition-all duration-500 flex flex-col justify-between min-h-[200px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit">
                                <Linkedin size={32} className="text-[#0077b5]" />
                            </div>
                            <ArrowUpRight size={20} className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">LinkedIn</h3>
                            <p className="text-sm text-muted-foreground">Connect personally</p>
                        </div>
                    </motion.a>

                    {/* Twitter Card */}
                    <motion.a
                        href="https://x.com/abhi20patel"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        className="md:col-span-1 relative group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between min-h-[200px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit">
                                <Twitter size={32} className="text-foreground" />
                            </div>
                            <ArrowUpRight size={20} className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">X (Twitter)</h3>
                            <p className="text-sm text-muted-foreground">Follow updates</p>
                        </div>
                    </motion.a>

                    {/* Location Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="md:col-span-2 relative group overflow-hidden bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-2xl font-serif italic text-muted-foreground">
                            "Simplicity is the ultimate sophistication."
                        </p>
                        <p className="mt-4 text-sm font-bold text-foreground uppercase tracking-widest opacity-50"> Leonardo da Vinci</p>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Abhishek Patel. Built with <span className="text-primary">React</span> & <span className="text-primary">Vite</span>.
                    </p>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;
