import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const RightSidebar = () => {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/abhishek0112cs221008",
            icon: Github,
            color: "text-muted-foreground hover:text-foreground"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/abhishek68/",
            icon: Linkedin,
            color: "text-muted-foreground hover:text-foreground"
        },
        {
            name: "LeetCode",
            href: "https://leetcode.com/u/abhishek8770/",
            icon: null,
            color: "text-[#FFA116] hover:text-[#FFA116]/80"
        },
    ];

    const quickLinks = [
        { name: "Resume", href: "#", external: true },
        { name: "Blog", href: "#", external: true },
        { name: "GitHub Repos", href: "https://github.com/abhishek0112cs221008?tab=repositories", external: true },
    ];

    return (
        <motion.aside
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="hidden lg:flex fixed right-0 top-0 h-screen z-40 flex-col p-6 glass border-l border-white/10 w-[300px]"
        >
            {/* Theme Switcher Section */}
            <div className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Appearance
                </h3>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeSwitcher />
                </div>
            </div>

            <div className="h-[1px] bg-border mb-6" />

            {/* Quick Links Section */}
            <div className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Quick Links
                </h3>
                <div className="space-y-1">
                    {quickLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
                        >
                            <span>{link.name}</span>
                            {link.external && (
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                        </a>
                    ))}
                </div>
            </div>

            <div className="h-[1px] bg-border mb-6" />

            {/* Social Links Section */}
            <div className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Connect
                </h3>
                <div className="space-y-2">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-white/5 ${link.color}`}
                            >
                                {Icon ? (
                                    <Icon size={20} />
                                ) : (
                                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.153l2.319 2.116c.083.076.169.149.256.22 1.488 1.218 3.754 1.129 5.127-.243l.11-.11c.569-.569.569-1.494 0-2.063-.569-.571-1.493-.571-2.063-.001l-.111.11c-.563.564-1.492.607-2.107.103l-2.32-2.116c-1.879-1.713-5.12-1.503-6.736.23l-3.23 3.458c-.287.307-.287.794.003 1.101.288.307.753.307 1.041 0l3.23-3.458a2.158 2.158 0 0 1 .531 2.353c-.38.749-.071 1.666.678 2.046.749.381 1.667.072 2.047-.678.694-1.368 2.454-1.638 3.512-.58.303.154.673.111.936-.153.264-.265.309-.636.155-.94-.78-1.536-2.909-1.536-4.475-.001z" />
                                    </svg>
                                )}
                                <span className="text-sm font-medium">{link.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="h-[1px] bg-border mb-6" />

            {/* Stats Section */}
            <div className="flex-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Quick Stats
                </h3>
                <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-xs text-muted-foreground mt-1">Projects</div>
                    </div>
                    <div className="p-3 rounded-xl bg-accent/5 border border-accent/10">
                        <div className="text-2xl font-bold text-accent">2+</div>
                        <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-xs text-muted-foreground text-center">
                    © {new Date().getFullYear()} Abhishek Patel
                </p>
            </div>
        </motion.aside>
    );
};

export default RightSidebar;
