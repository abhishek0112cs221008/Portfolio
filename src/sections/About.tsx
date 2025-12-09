import { motion } from "framer-motion";
import Section from "../components/common/Section";
import profileImg from "../assets/profile.jpg";
import { fadeInUp } from "../lib/motion";

const About = () => {
    return (
        <Section id="about" className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="relative group"
                >
                    {/* Image Frame Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
                        <img
                            src={profileImg}
                            alt="Abhishek Patel"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-foreground">
                        <span className="text-primary">01.</span> About Me
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            Hello! I'm Abhishek, a passionate developer based in India. I love bridging the gap between <span className="text-foreground font-medium">design</span> and <span className="text-foreground font-medium">engineering</span> to build robust and beautiful applications.
                        </p>
                        <p>
                            Currently, I'm focused on mastering <strong className="text-primary">Data Structures & Algorithms</strong> and deepening my knowledge in the <strong className="text-primary">Spring Boot</strong> ecosystem. I enjoy solving complex problems and optimizing code for better performance.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new tech trends, participating in hackathons, or gaming.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-foreground mb-1">5+</h4>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-foreground mb-1">200+</h4>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">LeetCode Problems</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
