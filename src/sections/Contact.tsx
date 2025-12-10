import Section from "../components/common/Section";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const Contact = () => {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "0112cs221008@gmail.com",
            href: "mailto:0112cs221008@gmail.com",
            color: "text-red-500",
            bg: "bg-red-500/10"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "abhishek68",
            href: "https://www.linkedin.com/in/abhishek68/",
            color: "text-blue-600",
            bg: "bg-blue-600/10"
        },
        {
            icon: Twitter,
            title: "X (Twitter)",
            value: "@abhi20patel",
            href: "https://x.com/abhi20patel",
            color: "text-sky-400",
            bg: "bg-sky-400/10"
        },
        // {
        //     icon: Github,
        //     title: "GitHub",
        //     value: "abhishek0112cs221008",
        //     href: "https://github.com/abhishek0112cs221008",
        //     color: "text-foreground",
        //     bg: "bg-foreground/10"
        // },
        // {
        //     icon: Phone,
        //     title: "Phone",
        //     value: "+91 8770321224",
        //     href: "tel:+918770321224",
        //     color: "text-green-500",
        //     bg: "bg-green-500/10"
        // },
        // {
        //     icon: MapPin,
        //     title: "Location",
        //     value: "India",
        //     href: null,
        //     color: "text-purple-500",
        //     bg: "bg-purple-500/10"
        // }
    ];

    return (
        <Section id="contact" className="mb-20">
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                        <span className="text-primary">06.</span> Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactMethods.map((method) => (
                        <motion.a
                            key={method.title}
                            href={method.href || undefined}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className={`group flex flex-col items-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all ${!method.href ? 'cursor-default' : ''}`}
                        >
                            <div className={`p-4 rounded-full mb-4 group-hover:scale-110 transition-transform ${method.bg} ${method.color}`}>
                                <method.icon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                            <p className="text-muted-foreground text-sm font-medium">{method.value}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    className="mt-16 p-8 rounded-2xl bg-secondary/5 border border-border text-center"
                >
                    <p className="text-xl text-muted-foreground italic mb-4">
                        "The only way to do great work is to love what you do."
                    </p>
                    <div className="text-foreground font-bold">- Steve Jobs</div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Contact;
