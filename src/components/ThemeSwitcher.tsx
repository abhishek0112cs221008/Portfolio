import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon, Sun, Cloud, Trees } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const themes = [
    { id: 'default', name: 'Deep Space', icon: Moon, color: 'bg-[#0a0a0a]' },
    { id: 'light', name: 'Light Mode', icon: Sun, color: 'bg-white' },
    { id: 'midnight', name: 'Midnight', icon: Cloud, color: 'bg-[#020617]' },
    { id: 'forest', name: 'Forest', icon: Trees, color: 'bg-[#052e16]' },
];

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
                            className="absolute right-0 mt-2 w-48 py-2 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-xl z-50 overflow-hidden"
                        >
                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                Select Theme
                            </div>
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id as any);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${theme === t.id
                                            ? 'bg-purple-500/10 text-purple-400'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
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
