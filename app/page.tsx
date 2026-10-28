"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

const projects = [
  {
    name: "TaskFlow",
    label: "Full-stack task management",
    description: "Developed and deployed a full-stack task management platform supporting authenticated users, PostgreSQL persistence, secure JWT authorization, and per-user ownership checks on every task. Added backend integration tests, Playwright end-to-end tests, GitHub Actions CI, Docker containerization, and Render deployment.",
    image: "/coding1.jpg",
    repository: "https://github.com/Samigu8/TaskFlow",
    demo: "https://taskflow-web-1t5q.onrender.com/",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"],
  },
  {
    name: "Our Story",
    label: "Authenticated photo sharing",
    description: "Built an authenticated photo-sharing application with secure account creation, JWT-protected APIs, PostgreSQL persistence, and responsive user flows.",
    image: "/coding2.jpg",
    repository: "https://github.com/Samigu8/Our-Story-App",
    demo: "https://our-story-app-i80c.onrender.com/",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "JWT"],
  },
  {
    name: "Portfolio Website",
    label: "Personal brand and project showcase",
    description: "Designed and deployed this responsive portfolio with TypeScript, Next.js, and Tailwind CSS to present full-stack projects and technical strengths.",
    image: "/coding3.jpg",
    repository: "https://github.com/Samigu8/PortfolioDemoCS220",
    demo: "https://portfolio-demo-cs-220.vercel.app/",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend & backend",
    icon: <Layers3 className="h-5 w-5" />,
    skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Data & security",
    icon: <Database className="h-5 w-5" />,
    skills: ["PostgreSQL", "Prisma ORM", "JWT", "bcrypt", "Database management"],
  },
  {
    title: "Testing & delivery",
    icon: <TestTube2 className="h-5 w-5" />,
    skills: ["Playwright", "Integration testing", "GitHub Actions", "CI/CD", "Docker", "Git"],
  },
  {
    title: "Cloud & systems",
    icon: <Server className="h-5 w-5" />,
    skills: ["AWS EC2", "Render", "Vercel", "Linux", "Windows", "Virtual machines"],
  },
  {
    title: "Professional strengths",
    icon: <ShieldCheck className="h-5 w-5" />,
    skills: ["Secure authentication", "Penetration testing", "GitHub pull requests", "English & Spanish"],
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="relative overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-5 font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
                Software Development Student
              </p>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                I build secure, tested full-stack applications from idea to deployment.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I&apos;m Samuel Gutierrez, a software development student with a 3.97 GPA who builds tested,
                deployed full-stack applications with React, Node.js, and PostgreSQL.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
                  Explore my work
                </a>
                <a href="/resume.pdf" download="Samuel_Gutierrez_Resume.pdf" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-700 dark:border-slate-700 dark:hover:border-blue-400 dark:hover:text-blue-400">
                  <Download className="h-5 w-5" /> Download resume
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                {["Full-stack development", "Secure authentication", "Automated testing", "Cloud deployment"].map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-24 dark:bg-slate-900">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <img src="/headshot.jpg" alt="Samuel Gutierrez" className="mx-auto h-72 w-72 rounded-3xl object-cover shadow-xl ring-8 ring-slate-100 dark:ring-slate-800" />
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">About me</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Curious by nature. Practical by design.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I enjoy turning complex requirements into clear, maintainable software. My work blends thoughtful
                user experiences with dependable APIs, strong data modeling, and security-minded engineering.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div><p className="font-semibold">Education</p><p className="mt-1 text-slate-600 dark:text-slate-400">Bachelor of Applied Science in Software Development</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-500">3.97 GPA · Expected August 2027</p></div>
                <div><p className="font-semibold">Based in</p><p className="mt-1 text-slate-600 dark:text-slate-400">Salt Lake City, Utah</p></div>
                <div><p className="font-semibold">Languages</p><p className="mt-1 text-slate-600 dark:text-slate-400">English &amp; Spanish</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Experience</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">People-focused work with measurable impact.</h2>
            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold">Student Services Representative, Graduation Agent</h3>
                    <p className="mt-1 font-medium text-blue-700 dark:text-blue-400">BYU-Pathway Worldwide</p>
                  </div>
                  <p className="font-medium text-slate-500 dark:text-slate-400">2025–2026</p>
                </div>
                <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                  <li>Used Anthology and three additional academic systems to analyze graduation requirements and maintain accurate records for 200+ students.</li>
                  <li>Compared student progress against expected degree configurations to identify gaps and guide 8–10 students per shift toward timely graduation.</li>
                  <li>Collaborated with a team of 10 to review records and confirm requirements were met accurately.</li>
                </ul>
              </article>
              <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold">Missionary</h3>
                    <p className="mt-1 font-medium text-blue-700 dark:text-blue-400">The Church of Jesus Christ of Latter-day Saints</p>
                  </div>
                  <p className="font-medium text-slate-500 dark:text-slate-400">2022–2024 · Piura, Peru</p>
                </div>
                <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                  <li>Led groups of 18–25 missionaries through weekly strategic planning, resulting in a 50% increase in retention.</li>
                  <li>Managed housing, furnishings, and financial resources for 80+ missionaries while ensuring cost-effective operations.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Selected work</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Three products that show how I build.</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">From secure APIs to polished interfaces, these are my top deployed applications.</p>
            </div>
            <div className="grid gap-7 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800 ${project.name === "TaskFlow" ? "lg:col-span-2" : ""}`}>
                  <div className="relative">
                    <img src={project.image} alt={`${project.name} project`} className={`w-full object-cover ${project.name === "TaskFlow" ? "h-64" : "h-48"}`} />
                    {project.name === "TaskFlow" && <span className="absolute left-5 top-5 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Featured project</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">{project.label}</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{technology}</span>)}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        Live demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        GitHub <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Highlights</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What I bring to a team.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "3.97 GPA",
                "3 deployed full-stack applications",
                "CI/CD pipeline experience",
                "Bilingual: English & Spanish",
                "AWS deployment experience",
              ].map((highlight) => (
                <div key={highlight} className="rounded-xl border border-slate-200 p-5 font-semibold dark:border-slate-800">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-900 px-6 py-24 text-white dark:bg-slate-950">
          <div className="mx-auto max-w-6xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">Technical toolkit</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Skills I bring to a team.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                  <h3 className="flex items-center gap-3 text-lg font-semibold">{group.icon}{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md bg-slate-700 px-3 py-1.5 text-sm text-slate-200">{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Get in touch</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s build something useful.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">I&apos;m seeking a software engineering internship and would love to connect about opportunities, projects, or technology.</p>
              <div className="mt-8 space-y-3">
                <a href="mailto:samuel.gutierrez.calle@gmail.com" className="flex items-center gap-3 font-medium hover:text-blue-700 dark:hover:text-blue-400"><Mail className="h-5 w-5" /> samuel.gutierrez.calle@gmail.com</a>
                <a href="https://github.com/Samigu8" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-medium hover:text-blue-700 dark:hover:text-blue-400"><Github className="h-5 w-5" /> github.com/Samigu8</a>
                <a href="https://linkedin.com/in/samuelgutierrezcalle" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-medium hover:text-blue-700 dark:hover:text-blue-400"><Linkedin className="h-5 w-5" /> LinkedIn</a>
                <a href="/resume.pdf" download="Samuel_Gutierrez_Resume.pdf" className="flex items-center gap-3 font-medium hover:text-blue-700 dark:hover:text-blue-400"><Download className="h-5 w-5" /> Download my resume</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
