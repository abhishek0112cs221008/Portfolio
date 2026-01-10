import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4 transition-all duration-500`}
            >
                <div
                    className={`
                        relative flex items-center justify-between p-2 rounded-full transition-all duration-500
                        ${isScrolled
                            ? "bg-card/70 backdrop-blur-2xl border border-white/10 shadow-2xl py-3 px-6 w-full max-w-4xl"
                            : "bg-transparent w-full max-w-7xl py-4 px-4"
                        }
                    `}
                >
                    {/* Logo Area */}
                    <a
                        href="#"
                        onClick={(e) => handleScrollTo(e, '#')}
                        className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
                    >
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <Code size={20} />
                        </div>
                        <span className={isScrolled ? "hidden sm:block" : "block"}>ABHISHEK</span>
                    </a>

                    {/* Desktop Navigation - Centered Island */}
                    <div className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {isScrolled && (
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Navigation - Normal State (Not Scrolled) */}
                    {!isScrolled && (
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeSwitcher />

                        <div className="h-6 w-[1px] bg-border mx-1"></div>

                        <div className="flex items-center gap-2">
                            <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/abhishek68/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://leetcode.com/u/abhishek8770/" target="_blank" rel="noopener noreferrer" className="p-2 text-[#FFA116] hover:bg-white/5 rounded-full transition-all">
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.153l2.319 2.116c.083.076.169.149.256.22 1.488 1.218 3.754 1.129 5.127-.243l.11-.11c.569-.569.569-1.494 0-2.063-.569-.571-1.493-.571-2.063-.001l-.111.11c-.563.564-1.492.607-2.107.103l-2.32-2.116c-1.879-1.713-5.12-1.503-6.736.23l-3.23 3.458c-.287.307-.287.794.003 1.101.288.307.753.307 1.041 0l3.23-3.458a2.158 2.158 0 0 1 .531 2.353c-.38.749-.071 1.666.678 2.046.749.381 1.667.072 2.047-.678.694-1.368 2.454-1.638 3.512-.58.303.154.673.111.936-.153.264-.265.309-.636.155-.94-.78-1.536-2.909-1.536-4.475-.001z" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-full"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-24 z-40 p-4 rounded-3xl bg-card/90 backdrop-blur-2xl border border-white/10 shadow-2xl md:hidden"
                    >
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-foreground transition-all"
                                    >
                                        <span className="font-medium">{link.name}</span>
                                        <ArrowRight size={16} className="text-muted-foreground" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center gap-6 pt-6 mt-6 border-t border-white/10">
                            <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/abhishek68/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={24} /></a>
                            <a href="https://leetcode.com/u/abhishek8770/" target="_blank" rel="noopener noreferrer" className="text-[#FFA116] hover:text-[#FFA116]">
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.153l2.319 2.116c.083.076.169.149.256.22 1.488 1.218 3.754 1.129 5.127-.243l.11-.11c.569-.569.569-1.494 0-2.063-.569-.571-1.493-.571-2.063-.001l-.111.11c-.563.564-1.492.607-2.107.103l-2.32-2.116c-1.879-1.713-5.12-1.503-6.736.23l-3.23 3.458c-.287.307-.287.794.003 1.101.288.307.753.307 1.041 0l3.23-3.458a2.158 2.158 0 0 1 .531 2.353c-.38.749-.071 1.666.678 2.046.749.381 1.667.072 2.047-.678.694-1.368 2.454-1.638 3.512-.58.303.154.673.111.936-.153.264-.265.309-.636.155-.94-.78-1.536-2.909-1.536-4.475-.001z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// Helper for mobile menu
const ArrowRight = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default Navbar;
