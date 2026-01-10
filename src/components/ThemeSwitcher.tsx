import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const themes = [
    { id: 'default', name: 'Pro Dark', icon: Moon, color: 'bg-[#000000]' },
    { id: 'light', name: 'Pro Light', icon: Sun, color: 'bg-white' },
];

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                aria-label="Change theme"
            >
                <Palette size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute right-0 mt-2 w-48 py-2 rounded-xl bg-card border border-border shadow-xl z-50 overflow-hidden backdrop-blur-3xl"
                        >
                            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                                Interface Style
                            </div>
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id as any);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${theme === t.id
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                                        }`}
                                >
                                    <div className={`w-4 h-4 rounded-full border border-white/20 ${t.color}`} />
                                    <span className="flex-1 text-left">{t.name}</span>
                                    {theme === t.id && <Check size={14} />}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
