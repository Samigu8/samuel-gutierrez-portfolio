"use client";

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
} from "lucide-react";


export default function HomePage() {
  const projects = [
    {
      title: "DessertShop",
      img: "/coding1.jpg",
      summary:
        "A Java application with a customer database, order tracking, and an admin module. Demonstrates practical implementation of computer science principles.",
      skills: [
        { icon: "/java.svg", name: "Java" },
        { icon: "/database.svg", name: "Database Management" },
        { icon: "/logic.svg", name: "Logic Programming" },
      ],
      repo: "https://github.com/",
    },
    {
      title: "Portfolio Website",
      img: "/coding2.jpg",
      summary:
        "A responsive Next.js + Tailwind CSS project showcasing my work and experience, designed following Figma mockups.",
      skills: [
        { icon: "/tailwind.svg", name: "Next.js & Tailwind CSS" },
        { icon: "/responsive.svg", name: "Responsive Design" },
      ],
      repo: "https://github.com/",
    },
    {
      title: "Algorithm Visualizer",
      img: "/coding3.jpg",
      summary:
        "A Python application that visually demonstrates algorithms and data structures, emphasizing both theory and practical coding skills.",
      skills: [
        { icon: "/python.svg", name: "Python" },
        { icon: "/data.svg", name: "Data Structures" },
        { icon: "/problem.svg", name: "Problem Solving" },
      ],
      repo: "https://github.com/",
    },
  ];

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-6">
            Computer Science Student & Problem Solver
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-2xl md:max-w-3xl leading-relaxed mb-8">
            Passionate about algorithms, mathematical proofs, and building efficient solutions. Currently exploring the intersection of computer science theory and practical application.
          </p>
          <a
            href="#contact"
            className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col md:flex-row items-center bg-white text-black px-6 py-20 relative"
        >
          <span className="absolute top-8 left-6 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300">
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
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              I'm a passionate Computer Science student with a deep love for mathematical proofs, algorithmic thinking, and elegant code. I enjoy tackling complex problems and finding efficient solutions through both theoretical analysis and practical implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Major</h3>
                <p className="text-gray-700">Computer Science</p>

                <h3 className="font-semibold mt-4">Focus Areas</h3>
                <p className="text-gray-700">Algorithms & Proofs</p>
              </div>

              <div>
                <h3 className="font-semibold">Favorite Language</h3>
                <p className="text-gray-700">Java & Python</p>

                <h3 className="font-semibold mt-4">Current Year</h3>
                <p className="text-gray-700">Junior</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <p className="text-gray-600 mb-12 text-center">
              A showcase of my work combining computer science theory with practical implementation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <img
                  src="/coding1.jpg"
                  alt="Dessert Shop"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <FolderCode className="w-5 h-5 text-gray-700" />
                  Dessert Shop App
                </h3>
                <p className="text-gray-600 mb-4">
                  A Java-based application to manage desserts, track customer orders, and handle admin tasks.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Code2 className="w-4 h-4 text-gray-700" /> Java
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Binary className="w-4 h-4 text-gray-700" /> OOP
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Database className="w-4 h-4 text-gray-700" /> Database
                  </span>
                </div>
                <a
                  href="https://github.com/Ensign-College/CS115-Lab3a-8b-DessertShop-Samigu8.git"
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition"
                >
                  View Repository
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <img
                  src="/coding3.jpg"
                  alt="Portfolio Website"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <FolderCode className="w-5 h-5 text-gray-700" />
                  Portfolio Website
                </h3>
                <p className="text-gray-600 mb-4">
                  A Next.js + Tailwind CSS project showcasing my work and experience, built to match a Figma design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Code2 className="w-4 h-4 text-gray-700" /> Next.js
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Binary className="w-4 h-4 text-gray-700" /> Tailwind
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Database className="w-4 h-4 text-gray-700" /> Design Integration
                  </span>
                </div>
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition"
                >
                  View Repository
                </a>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <img
                  src="/coding2.jpg"
                  alt="Generic Coding Project"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <FolderCode className="w-5 h-5 text-gray-700" />
                  BlackJack Game
                </h3>
                <p className="text-gray-600 mb-4">
                    A Prolog implementation of a simplified BlackJack game, focusing on logic programming and algorithm design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Code2 className="w-4 h-4 text-gray-700" /> Prolog
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Binary className="w-4 h-4 text-gray-700" /> Logic
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm">
                    <Database className="w-4 h-4 text-gray-700" /> Algorithms
                  </span>
                </div>
                <a
                  href="https://github.com/Ensign-College/CS115-Lab9a-10b-BlackJack-Samigu8.git"
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section id="skills" className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Programming Languages & Tools */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5" /> Programming Languages & Tools
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {programmingSkills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg text-gray-700"
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mathematics & Logic */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5" /> Mathematics & Logic
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                        {mathSkills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg text-gray-700"
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
        <section id="contact" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out about projects, opportunities, or just to chat about algorithms and math!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <textarea
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={4}
                ></textarea>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <a
                href="https://github.com/your-username"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
              >
                <Github className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-gray-600 text-sm">Check out my repositories</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-gray-600 text-sm">Connect with me professionally</p>
                </div>
              </a>
              <a
                href="mailto:samuel.gutierrez@university.edu"
                className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
              >
                <Mail className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 text-sm">samuel.gutierrez@university.edu</p>
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
