import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MinimalNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Add background when scrolled
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
                            : "bg-transparent"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection("#hero")}
                            className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
                        >
                            AP
                        </button>

                        {/* Navigation Links */}
                        <div className="flex gap-6 md:gap-10 text-sm md:text-base">
                            <button
                                onClick={() => scrollToSection("#work")}
                                className="hover:opacity-70 transition-opacity font-medium"
                            >
                                Work
                            </button>
                            <button
                                onClick={() => scrollToSection("#about")}
                                className="hover:opacity-70 transition-opacity font-medium"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="hover:opacity-70 transition-opacity font-medium"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default MinimalNav;
