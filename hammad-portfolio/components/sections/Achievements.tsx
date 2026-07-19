"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievement, journey } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE PROOF — 06 / ACHIEVEMENTS
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4"
        >
          <motion.div
            animate={{ rotateY: [0, 12, 0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 800 }}
            className="flex aspect-square w-full max-w-[220px] items-center justify-center rounded-[32px] border border-champagne/30 bg-gradient-to-br from-amber/20 via-elevated to-coral/10 mx-auto md:mx-0"
          >
            <Trophy size={64} className="text-champagne drop-shadow-[0_0_20px_rgba(245,199,107,0.5)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-8"
        >
          <p className="font-mono text-xs text-amber-bright">01</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
            {achievement.title}
          </h2>
          <p className="mt-2 text-sm text-champagne">{achievement.institution}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            {achievement.description}
          </p>
        </motion.div>
      </div>

      {/* engineering journey roadmap */}
      <div className="mt-24">
        <p className="eyebrow mb-8">Engineering Journey</p>
        <div className="relative flex flex-col gap-0 md:flex-row md:items-center md:justify-between">
          <div className="absolute left-3 top-0 h-full w-px bg-border-soft md:left-0 md:top-3 md:h-px md:w-full" />
          {journey.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex items-center gap-4 py-4 md:flex-col md:items-start md:gap-3 md:py-0"
            >
              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-bright bg-void font-mono text-[9px] text-amber-bright">
                {i + 1}
              </span>
              <span className="max-w-[9rem] text-xs text-text-muted md:text-[11px]">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
