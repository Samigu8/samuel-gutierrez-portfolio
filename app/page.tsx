"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Code2,
  Database,
  GitBranch,
  Terminal,
  Calculator,
  BookOpen,
  FunctionSquare,
  Sigma,
  Layers,
  Network,
  Binary,
  BarChart3,
  FolderCode,
  Github,
  Linkedin,
  Mail,
  Loader2,
  CheckCircle,
  XCircle,
  Moon,
  Sun,
} from "lucide-react";

export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // --- Persist theme ---
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const programmingSkills = [
    { name: "Java", icon: <Code2 className="w-5 h-5" /> },
    { name: "Python", icon: <Code2 className="w-5 h-5" /> },
    { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "C++", icon: <Code2 className="w-5 h-5" /> },
    { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
    { name: "SQL", icon: <Database className="w-5 h-5" /> },
    { name: "Spring Boot", icon: <Layers className="w-5 h-5" /> },
  ];

  const mathSkills = [
    { name: "Mathematical Proofs", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Set Theory", icon: <FunctionSquare className="w-5 h-5" /> },
    { name: "Discrete Mathematics", icon: <Calculator className="w-5 h-5" /> },
    { name: "Series & Sequences", icon: <Sigma className="w-5 h-5" /> },
    { name: "Graph Theory", icon: <Network className="w-5 h-5" /> },
    { name: "Algorithm Analysis", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Logic Programming", icon: <Binary className="w-5 h-5" /> },
    { name: "Combinatorics", icon: <Sigma className="w-5 h-5" /> },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkaezko", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">


      <Navbar />

      <main className="flex-grow text-gray-900 dark:text-gray-100">
        {/* --- Hero Section --- */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 px-6 transition-colors duration-300"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-6">
            Computer Science Student & Problem Solver
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl md:max-w-3xl leading-relaxed mb-8">
            Passionate about algorithms, mathematical proofs, and building efficient solutions. Currently exploring
            the intersection of computer science theory and practical application.
          </p>
          <a
            href="#contact"
            className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </section>

        {/* --- About Section --- */}
        <section
          id="about"
          className="min-h-screen flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 text-black dark:text-gray-100 px-6 py-20 relative transition-colors duration-300"
        >
          <span className="absolute top-8 left-6 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
            About Me
          </span>

          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="/headshot.jpg"
              alt="Samuel"
              className="rounded-xl shadow-lg w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Bridging Theory and Practice in Computer Science
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate Computer Science student with a deep love for mathematical proofs, algorithmic thinking,
              and elegant code. I enjoy tackling complex problems and finding efficient solutions through both
              theoretical analysis and practical implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Major</h3>
                <p className="text-gray-700 dark:text-gray-300">Computer Science</p>
                <h3 className="font-semibold mt-4">Focus Areas</h3>
                <p className="text-gray-700 dark:text-gray-300">Algorithms & Proofs</p>
              </div>

              <div>
                <h3 className="font-semibold">Favorite Language</h3>
                <p className="text-gray-700 dark:text-gray-300">Java & Python</p>
                <h3 className="font-semibold mt-4">Current Year</h3>
                <p className="text-gray-700 dark:text-gray-300">Junior</p>
              </div>
            </div>
          </div>
        </section>

{/* --- Projects Section --- */}
<section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">Projects</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-12 text-center">
      A showcase of my work combining computer science theory with practical implementation.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Project 1 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
        <img
          src="/coding1.jpg"
          alt="Dessert Shop"
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-100">
          <FolderCode className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          Dessert Shop App
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A Java-based application to manage desserts, track customer orders, and handle admin tasks.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Code2 className="w-4 h-4" /> Java
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Binary className="w-4 h-4" /> OOP
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Database className="w-4 h-4" /> Database
          </span>
        </div>
        <a
          href="https://github.com/Ensign-College/CS115-Lab3a-8b-DessertShop-Samigu8.git"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-900 dark:hover:bg-gray-500 transition"
        >
          View Repository
        </a>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
        <img
          src="/coding3.jpg"
          alt="Portfolio Website"
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-100">
          <FolderCode className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          Portfolio Website
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A Next.js + Tailwind CSS project showcasing my work and experience, built to match a Figma design.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Code2 className="w-4 h-4" /> Next.js
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Binary className="w-4 h-4" /> Tailwind
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Database className="w-4 h-4" /> Design Integration
          </span>
        </div>
        <a
          href="https://github.com/Samigu8/PortfolioDemoCS220.git"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-900 dark:hover:bg-gray-500 transition"
        >
          View Repository
        </a>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
        <img
          src="/coding2.jpg"
          alt="Generic Coding Project"
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-100">
          <FolderCode className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          BlackJack Game
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A Prolog implementation of a simplified BlackJack game, focusing on logic programming and algorithm design.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Code2 className="w-4 h-4" /> Prolog
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Binary className="w-4 h-4" /> Logic
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
            <Database className="w-4 h-4" /> Algorithms
          </span>
        </div>
        <a
          href="https://github.com/Ensign-College/CS115-Lab9a-10b-BlackJack-Samigu8.git"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-900 dark:hover:bg-gray-500 transition"
        >
          View Repository
        </a>
      </div>
    </div>
  </div>
</section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5" /> Programming Languages & Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {programmingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" /> Mathematics & Logic
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {mathSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Feel free to reach out about projects, opportunities, or just to chat about algorithms and math!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                ></textarea>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition disabled:opacity-70"
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {formStatus === "success" && (
                <p className="flex items-center gap-2 mt-4 text-green-600 dark:text-green-400 font-medium">
                  <CheckCircle className="w-5 h-5" /> Message sent successfully!
                </p>
              )}
              {formStatus === "error" && (
                <p className="flex items-center gap-2 mt-4 text-red-600 dark:text-red-400 font-medium">
                  <XCircle className="w-5 h-5" /> Something went wrong. Please try again.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>

              <a
                href="https://github.com/Samigu8"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Check out my repositories</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/samuelgutierrezcalle"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Connect with me professionally</p>
                </div>
              </a>

              <a
                href="mailto:samuel.gutierrez.calle@gmail.com"
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">samuel.gutierrez.calle@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
