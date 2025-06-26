// src/components/ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-6 h-6 ml-6 flex items-center justify-center rounded cursor-pointer transition-all"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-full w-full text-yellow-400" />
      ) : (
        <MoonIcon className="h-full w-full text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
