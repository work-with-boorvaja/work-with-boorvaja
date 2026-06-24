'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const roles = ['Designer', 'AI/ML Creator'];
const skills = [
  { title: 'AI / ML', items: ['Python', 'TensorFlow', 'scikit-learn', 'Data Pipelines'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Next.js', 'Framer Motion'] },
  { title: 'Core Stack', items: ['HTML', 'CSS', 'JavaScript', 'Node.js'] },
];

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume scoring and optimization suggestions with a human-centered workflow.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Visual Chatbot Studio',
    description: 'A polished conversational interface for AI assistants with reusable UI and workflow controls.',
    tech: ['React', 'Node.js', 'OpenAI'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Builder',
    description: 'A responsive creator tool for launching beautiful personal brands faster than ever.',
    tech: ['JavaScript', 'Tailwind', 'Figma'],
    live: '#',
    repo: '#',
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (typingText.length < currentRole.length) {
      timeout = setTimeout(() => setTypingText(currentRole.slice(0, typingText.length + 1)), 120);
    } else {
      timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingText('');
      }, 1800);
    }

    return () => clearTimeout(timeout);
  }, [typingText, roleIndex]);

  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const roleLabel = useMemo(() => `${typingText}${cursorVisible ? '▌' : ''}`, [typingText, cursorVisible]);

  return (
    <main className="relative overflow-hidden bg-[#05070f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--pointer-x)_var(--pointer-y),rgba(99,102,241,0.16),transparent_30%)] transition-[background] duration-500" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-24 pt-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between gap-6 border-b border-white/10 pb-6 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-violet-500/20 bg-white/5 shadow-glow" />
            <span className="font-medium tracking-[0.18em] uppercase text-slate-300">Boorvaja</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-soft backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Advanced AI Product Design • Modern Web Systems
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl">
                Hi, I’m <span className="text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text">Boorvaja</span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg text-slate-300 sm:text-xl">
                <span className="font-medium text-white">I build</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-100 shadow-soft">{roleLabel}</span>
              </div>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I create polished digital experiences at the intersection of design, AI, and product strategy. My work focuses on beautiful interfaces, intelligent systems, and thoughtful brand storytelling for ambitious startups and recruiters.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card border-violet-400/10 p-5 shadow-soft">
                <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Location</span>
                <p className="mt-3 text-xl font-semibold text-white">Thoothukudi, India</p>
              </div>
              <div className="glass-card border-cyan-400/10 p-5 shadow-soft">
                <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Education</span>
                <p className="mt-3 text-xl font-semibold text-white">AIML 2025–2029</p>
              </div>
              <div className="glass-card border-fuchsia-400/10 p-5 shadow-soft">
                <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Core Stack</span>
                <p className="mt-3 text-xl font-semibold text-white">React, Node.js, Python</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-20 w-20 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="hero-frame relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-glow backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0f172a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.28),transparent_32%)]" />
                <Image
                  src="/hero.jpg"
                  alt="Boorvaja portfolio hero"
                  width={640}
                  height={720}
                  className="relative h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-20 space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Modern stack, AI-first systems.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Grouped by domain with interactive motion and clean clarity — the skills that power today’s AI-enabled digital products.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.title} className="glass-card border-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-glow">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <div className="mt-5 grid gap-3">
                  {skill.items.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 shadow-soft">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24 space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Featured builds & AI experiences.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Glassmorphic showcase cards with subtle hover depth, glowing states, and clean interaction flows.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group glass-card border-white/10 p-6 transition duration-500 hover:-translate-y-2 hover:border-fuchsia-300/20 hover:shadow-glow">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">Project</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300/70" />
                    Live
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={project.live} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/15" aria-label={`View live project ${project.title}`}>
                    Live
                  </a>
                  <a href={project.repo} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-fuchsia-300/30 hover:bg-white/10" aria-label={`View GitHub repository for ${project.title}`}>
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="glass-card border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Let’s build the next AI experience together.</h2>
            <form className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-4 pb-3 pt-5 transition focus-within:border-cyan-300/40">
                  <input type="text" placeholder=" " aria-label="Name" className="w-full bg-transparent text-white outline-none" />
                  <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-cyan-200">Name</span>
                </label>
                <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-4 pb-3 pt-5 transition focus-within:border-cyan-300/40">
                  <input type="email" placeholder=" " aria-label="Email" className="w-full bg-transparent text-white outline-none" />
                  <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-cyan-200">Email</span>
                </label>
              </div>
              <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-4 pb-3 pt-5 transition focus-within:border-cyan-300/40">
                <textarea placeholder=" " rows={6} aria-label="Message" className="w-full bg-transparent text-white outline-none resize-none" />
                <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:top-2 group-focus-within:text-xs group-focus-within:text-cyan-200">Message</span>
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]">
                Send Hello
              </button>
            </form>
          </div>

          <aside className="glass-card border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
            <div className="mt-6 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:boorvaja22@gmail.com" className="mt-2 block text-xl font-semibold text-white">boorvaja22@gmail.com</a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-2 text-xl font-semibold text-white">Thoothukudi, India</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/boorvaja" target="_blank" rel="noreferrer" className="glass-chip">
                LinkedIn
              </a>
              <a href="https://github.com/work-with-boorvaja" target="_blank" rel="noreferrer" className="glass-chip">
                GitHub
              </a>
              <a href="#" className="glass-chip">
                Instagram
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
