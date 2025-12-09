import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground tracking-wider">
                        <Code className="text-primary" />
                        <span>ABHISHEK</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 py-2 text-sm font-medium transition-colors group"
                                >
                                    <span className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
                            <ThemeSwitcher />
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/abhishek0112cs221008"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/abhishek68/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://leetcode.com/u/abhishek8770/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFA116] hover:text-[#FFA116] transition-colors"
                            >
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.153l2.319 2.116c.083.076.169.149.256.22 1.488 1.218 3.754 1.129 5.127-.243l.11-.11c.569-.569.569-1.494 0-2.063-.569-.571-1.493-.571-2.063-.001l-.111.11c-.563.564-1.492.607-2.107.103l-2.32-2.116c-1.879-1.713-5.12-1.503-6.736.23l-3.23 3.458c-.287.307-.287.794.003 1.101.288.307.753.307 1.041 0l3.23-3.458a2.158 2.158 0 0 1 .531 2.353c-.38.749-.071 1.666.678 2.046.749.381 1.667.072 2.047-.678.694-1.368 2.454-1.638 3.512-.58.303.154.673.111.936-.153.264-.265.309-.636.155-.94-.78-1.536-2.909-1.536-4.475-.001z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-foreground p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/5 rounded-lg text-center"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex justify-center gap-6 pt-4 mt-4 border-t border-border">
                                <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/abhishek68/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={24} /></a>
                                <a href="https://leetcode.com/u/abhishek8770/" target="_blank" rel="noopener noreferrer" className="text-[#FFA116] hover:text-[#FFA116]">
                                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.153l2.319 2.116c.083.076.169.149.256.22 1.488 1.218 3.754 1.129 5.127-.243l.11-.11c.569-.569.569-1.494 0-2.063-.569-.571-1.493-.571-2.063-.001l-.111.11c-.563.564-1.492.607-2.107.103l-2.32-2.116c-1.879-1.713-5.12-1.503-6.736.23l-3.23 3.458c-.287.307-.287.794.003 1.101.288.307.753.307 1.041 0l3.23-3.458a2.158 2.158 0 0 1 .531 2.353c-.38.749-.071 1.666.678 2.046.749.381 1.667.072 2.047-.678.694-1.368 2.454-1.638 3.512-.58.303.154.673.111.936-.153.264-.265.309-.636.155-.94-.78-1.536-2.909-1.536-4.475-.001z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
