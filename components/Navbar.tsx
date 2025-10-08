"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply dark class to html root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-black dark:text-white">Samuel Gutiérrez Calle</span>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-black dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-black dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">About</a>
            <a href="#projects" className="text-black dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="text-black dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="text-black dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition-all"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

