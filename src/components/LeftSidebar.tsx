import { useState, useEffect } from "react";
import { Home, User, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const LeftSidebar = () => {
    const [activeSection, setActiveSection] = useState("hero");

    const navLinks = [
        { name: "Home", href: "#hero", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Code2 },
        { name: "Projects", href: "#projects", icon: FolderGit2 },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => ({
                id: link.href.substring(1),
                element: document.querySelector(link.href)
            }));

            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const offsetTop = (section.element as HTMLElement).offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
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
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex fixed left-0 top-0 h-screen z-50 flex-col items-center py-6 glass border-r border-white/10 w-20"
        >
            {/* Logo */}
            <a
                href="#"
                onClick={(e) => handleScrollTo(e, '#hero')}
                className="mb-8 p-2.5 bg-primary/10 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300 group"
            >
                <Code2 size={24} />
            </a>

            {/* Navigation Icons */}
            <nav className="flex-1 flex flex-col gap-2 w-full px-2">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.substring(1);

                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`
                                relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 group
                                ${isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                }
                            `}
                        >
                            {/* Active Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="leftSidebarActiveIndicator"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <Icon size={24} className={isActive ? "text-primary" : ""} />

                            {/* Tooltip */}
                            <span className="absolute left-full ml-4 px-3 py-2 bg-card/90 backdrop-blur-xl border border-white/10 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                                {link.name}
                            </span>
                        </a>
                    );
                })}
            </nav>
        </motion.aside>
    );
};

export default LeftSidebar;
