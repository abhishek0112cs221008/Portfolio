import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'default' ? 'light' : 'default');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
            title={theme === 'default' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
        >
            {theme === 'default' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};

export default ThemeSwitcher;
