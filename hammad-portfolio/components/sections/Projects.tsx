"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CodeXml, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/data";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStyle({})}
      style={style}
      className="group relative flex flex-col justify-between rounded-3xl border border-border-soft bg-elevated/60 p-7 transition-[border-color,transform] duration-300 ease-out hover:border-amber/40"
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-amber-bright">{project.number}</span>
          <div className="flex gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => onOpen(project)}
          data-cursor="OPEN"
          className="font-mono text-[11px] uppercase tracking-widest text-champagne underline decoration-champagne/30 underline-offset-4 transition-colors hover:text-amber-bright focus-ring"
        >
          Case Study
        </button>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              aria-label="View on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-muted transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
            >
              <CodeXml size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="LIVE"
              aria-label="View live demo"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-muted transition-colors hover:border-amber-bright hover:text-amber-bright focus-ring"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE BUILDS — 03 / PROJECTS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight md:text-4xl"
      >
        Six builds, six lessons in real engineering.
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-void/85 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border-soft bg-surface p-8 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-muted hover:text-amber-bright focus-ring"
              >
                <X size={16} />
              </button>
              <span className="font-mono text-xs text-amber-bright">{active.number}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {active.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-soft px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="eyebrow">Problem</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {active.details.problem}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Solution</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {active.details.solution}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Features</p>
                  <ul className="mt-2 space-y-1.5">
                    {active.details.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-bright" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
