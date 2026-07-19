"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        THE FOUNDATION — 04 / EDUCATION
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl"
      >
        The academic journey that built my engineering foundation.
      </motion.h2>

      <div className="mt-16 space-y-10">
        {education.map((item, index) => (
          <motion.div
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 28, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              rotateX: 2,
              rotateY: index % 2 === 0 ? 1.5 : -1.5,
              scale: 1.01,
            }}
            style={{
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }}
            className="group relative overflow-hidden rounded-3xl border border-border-soft bg-elevated/50 p-6 backdrop-blur-md md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-bright/5 via-transparent to-coral/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="relative md:col-span-5">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-amber-bright via-coral to-transparent" />

                <div className="pl-7">
                  <div className="absolute left-[-7px] top-1 h-4 w-4 rounded-full border-2 border-amber-bright bg-void shadow-[0_0_20px_rgba(255,176,0,0.35)]" />

                  <p className="font-mono text-xs uppercase tracking-wider text-amber-bright">
                    {item.period}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sm text-text-muted">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-text-muted">
                    {item.location}
                  </p>

                  <span className="mt-5 inline-flex rounded-full border border-emerald/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="eyebrow mb-4">
                  {index === 0 ? "Relevant Coursework" : "Academic Subjects"}
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {item.coursework.map((course) => (
                    <motion.div
                      key={course}
                      whileHover={{ x: 4, z: 20 }}
                      className="rounded-xl border border-border-soft bg-void/40 px-4 py-3 text-sm text-text-primary transition-colors duration-300 hover:border-amber-bright/40"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            y: -5,
            rotateX: 2,
            scale: 1.01,
          }}
          style={{
            transformPerspective: 1000,
          }}
          className="relative overflow-hidden rounded-3xl border border-amber-bright/20 bg-elevated/40 p-6 md:p-8"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-bright/10 blur-3xl" />

          <p className="eyebrow">Professional Training</p>

          <h3 className="mt-3 font-display text-2xl font-semibold">
            Microsoft Office — 6 Month Course
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
            Completed a six-month practical training course covering Microsoft
            Office productivity tools and essential computer-based professional
            skills.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Microsoft Word", "Microsoft Excel", "PowerPoint", "Office Tools"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border-soft bg-void/40 px-3 py-1 text-xs text-text-primary"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}