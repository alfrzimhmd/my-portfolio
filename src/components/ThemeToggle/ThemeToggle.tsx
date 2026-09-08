import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 transition-transform duration-300 group-hover:-rotate-12" />
      )}
      <span className="font-mono text-[11px] uppercase tracking-wider select-none font-medium">
        {theme === 'dark' ? 'DARK' : 'LIGHT'}
      </span>
    </button>
  );
}
