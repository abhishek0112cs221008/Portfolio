import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Search } from "lucide-react";

const TopBar = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionNames: Record<string, string> = {
        "hero": "Home",
        "about": "About",
        "skills": "Skills",
        "education": "Education",
        "projects": "Projects",
        "experience": "Experience",
        "contact": "Contact"
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = Object.keys(sectionNames).map(id => ({
                id,
                element: document.querySelector(`#${id}`)
            }));

            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const offsetTop = (section.element as HTMLElement).offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sectionNames[section.id]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={`
                fixed top-0 left-0 md:left-20 right-0 lg:right-[300px] z-40 h-16 
                flex items-center justify-between px-6 transition-all duration-300
                ${isScrolled
                    ? "glass border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                }
            `}
        >
            {/* Logo & Breadcrumb */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Code2 size={20} />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="font-bold text-sm tracking-tight">ABHISHEK PATEL</h1>
                        <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                    </div>
                </div>

                {isScrolled && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-2 text-sm"
                    >
                        <span className="text-muted-foreground">/</span>
                        <span className="font-medium text-primary">{activeSection}</span>
                    </motion.div>
                )}
            </div>

            {/* Search Bar (Decorative) */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors max-w-xs">
                <Search size={16} className="text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search portfolio..."
                    className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-full"
                    disabled
                />
            </div>
        </motion.header>
    );
};

export default TopBar;
