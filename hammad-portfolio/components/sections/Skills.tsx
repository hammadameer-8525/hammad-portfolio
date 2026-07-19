"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";

export default function Skills() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE SYSTEM — 02 / SKILLS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight md:text-4xl"
      >
        The engineering toolkit powering every build.
      </motion.h2>

      <div className="mt-10 flex flex-wrap gap-2">
        {["All", ...skillCategories.map((c) => c.key)].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            data-cursor="FILTER"
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors focus-ring ${
              filter === cat
                ? "border-amber-bright bg-amber-bright text-void"
                : "border-border-soft text-text-muted hover:border-amber-bright/60 hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((skill, i) => {
            const catColor =
              skillCategories.find((c) => c.key === skill.category)?.color ?? "#ff8a00";
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 16, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                style={{ perspective: 800 }}
                className="group relative overflow-hidden rounded-2xl border border-border-soft bg-elevated/60 p-5 transition-colors hover:border-transparent"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-40"
                  style={{ background: catColor }}
                />
                <p
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: catColor }}
                >
                  {skill.category}
                </p>
                <p className="mt-3 font-display text-lg font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
