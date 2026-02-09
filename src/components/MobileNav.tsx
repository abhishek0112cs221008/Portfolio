import { useState } from "react";
import { Home, User, Code2, Briefcase, FolderGit2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#hero", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Code2 },
        { name: "Projects", href: "#projects", icon: FolderGit2 },
        { name: "Experience", href: "#experience", icon: Briefcase },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
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
            {/* Bottom Navigation Bar */}
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 px-2 py-3 safe-area-inset-bottom"
            >
                <div className="flex items-center justify-around max-w-lg mx-auto">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-muted-foreground hover:text-primary transition-all"
                            >
                                <Icon size={20} />
                                <span className="text-[10px] font-medium">{link.name}</span>
                            </a>
                        );
                    })}

                    {/* More Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-muted-foreground transition-all"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        <span className="text-[10px] font-medium">More</span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile More Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed bottom-20 left-4 right-4 z-40 p-4 rounded-2xl glass border border-white/10 shadow-2xl"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, '#contact')}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-foreground"
                        >
                            <span className="font-medium">Contact Me</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNav;
