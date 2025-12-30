
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-600" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
