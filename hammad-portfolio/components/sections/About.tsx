"use client";

import { motion } from "framer-motion";
import { stats, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE ENGINEER — 01 / ABOUT
      </motion.p>

      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold leading-tight md:col-span-5 md:text-4xl"
        >
          A student who treats every project like a{" "}
          <span className="text-gradient">real engineering problem.</span>
        </motion.h2>

        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-text-muted md:text-lg"
          >
            I&rsquo;m {profile.name}, a Software Engineering student at the{" "}
            <span className="text-text-primary">{profile.university}</span> in{" "}
            {profile.location}, currently in my 4th semester. I&rsquo;m focused on
            turning technical knowledge into practical solutions &mdash; from
            Java-based software systems and database-driven applications to AI
            experiments and responsive web experiences. I enjoy solving problems,
            learning modern technologies, and continuously improving as an engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Artificial Intelligence", "Software Engineering", "Full-Stack Development", "Problem Solving"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-soft px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border-soft pt-12 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-text-muted md:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
