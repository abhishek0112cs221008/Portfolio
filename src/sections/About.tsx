import { motion } from "framer-motion";
import Section from "../components/common/Section";
import profileImg from "../assets/profile.jpg";
import { fadeInUp } from "../lib/motion";

const About = () => {
    return (
        <Section id="about" className="pt-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center p-8 md:p-12 rounded-[2.5rem] bg-card/50 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 w-full h-full max-w-lg bg-gradient-to-b from-primary/10 to-transparent blur-3xl -z-10" />

                    {/* Profile Image */}
                    <div className="relative mb-8 group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl relative z-10 p-1 bg-card">
                            <img
                                src={profileImg}
                                alt="Abhishek Patel"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all opacity-50 z-0" />
                    </div>

                    {/* Content */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Abhishek Patel</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Bridging the gap between <span className="text-foreground font-semibold">design</span> and <span className="text-foreground font-semibold">engineering</span> to build robust applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl text-left">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                Focus
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Mastering Data Structures & Algorithms and deepening knowledge in the Spring Boot ecosystem.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                Passion
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Exploring new tech trends, participating in hackathons, gaming, and solving complex problems.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-12 mt-12 pt-8 border-t border-white/5 w-full justify-center">
                        <div className="text-center">
                            <div className="text-3xl font-bold tracking-tight">5+</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold tracking-tight">200+</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">LeetCode</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
