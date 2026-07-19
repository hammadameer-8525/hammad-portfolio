"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE EVOLUTION — 05 / CERTIFICATES
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl"
      >
        Professional training that strengthened my technical foundation.
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 28, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              rotateX: 3,
              rotateY: index % 2 === 0 ? 2 : -2,
              scale: 1.015,
            }}
            style={{
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }}
            className="group relative overflow-hidden rounded-3xl border border-champagne/20 bg-gradient-to-br from-elevated to-surface p-7 md:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-bright/10 blur-3xl transition-all duration-500 group-hover:bg-coral/10" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-bright/15 text-amber-bright">
                  {index === 0 ? <Award size={22} /> : <BadgeCheck size={22} />}
                </div>

                <span className="rounded-full border border-emerald/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
                  Certified Training
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                {certificate.issuer}
              </p>

              <p className="mt-1 text-sm text-text-muted">
                {certificate.provider}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {certificate.focus.map((focus) => (
                  <motion.span
                    key={focus}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="rounded-full border border-border-soft bg-void/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-text-muted transition-colors duration-300 hover:border-amber-bright/40 hover:text-text-primary"
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}